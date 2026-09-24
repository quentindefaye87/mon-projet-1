import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote";
import { rateLimited, sendNotification, storeSubmission, toHtmlTable } from "@/lib/notify";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Trop de demandes. Merci de réessayer dans quelques minutes." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Données invalides", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const { website, consent, ...data } = parsed.data;
  if (website) return NextResponse.json({ ok: true });

  try {
    await Promise.all([
      storeSubmission("quote_requests", { ...data, consent, created_at: new Date().toISOString() }),
      sendNotification({
        subject: `Nouvelle demande de devis — ${data.firstName} ${data.lastName} (${data.postalCode})`,
        html: toHtmlTable("Demande de devis", {
          Profil: data.profile,
          Nom: `${data.firstName} ${data.lastName}`,
          Société: data.company,
          "E-mail": data.email,
          Téléphone: data.phone,
          "Code postal": data.postalCode,
          Projet: data.projectType,
          Menuiserie: data.category,
          Quantité: data.quantity,
          Échéance: data.timeline,
          Configurations: data.configuration,
          Message: data.message,
        }),
        replyTo: data.email,
      }),
    ]);
  } catch (err) {
    console.error("[api/quote]", err);
    return NextResponse.json({ error: "Envoi impossible pour le moment." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
