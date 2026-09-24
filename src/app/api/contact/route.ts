import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/quote";
import { rateLimited, sendNotification, storeSubmission, toHtmlTable } from "@/lib/notify";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Trop de demandes. Merci de réessayer dans quelques minutes." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Données invalides", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const { website, consent, ...data } = parsed.data;
  if (website) return NextResponse.json({ ok: true });

  try {
    await Promise.all([
      storeSubmission("contact_messages", { ...data, consent, created_at: new Date().toISOString() }),
      sendNotification({
        subject: `Nouveau message (${data.subject}) — ${data.name}`,
        html: toHtmlTable("Message de contact", {
          Nom: data.name,
          "E-mail": data.email,
          Téléphone: data.phone,
          Sujet: data.subject,
          Message: data.message,
        }),
        replyTo: data.email,
      }),
    ]);
  } catch (err) {
    console.error("[api/contact]", err);
    return NextResponse.json({ error: "Envoi impossible pour le moment." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
