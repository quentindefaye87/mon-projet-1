import "server-only";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export function toHtmlTable(title: string, data: Record<string, unknown>) {
  const rows = Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#565f66">${escapeHtml(k)}</td><td style="padding:6px 12px">${escapeHtml(String(v)).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");
  return `<h2 style="font-family:sans-serif">${escapeHtml(title)}</h2><table style="font-family:sans-serif;font-size:14px">${rows}</table>`;
}

export async function sendNotification({ subject, html, replyTo }: { subject: string; html: string; replyTo?: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  if (!apiKey || !to) {
    console.info(`[notify] ${subject} — e-mail non envoyé (RESEND_API_KEY / NOTIFY_EMAIL_TO absents)`);
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.NOTIFY_EMAIL_FROM ?? "SCAL <site@scal87.fr>",
      to: [to],
      subject,
      html,
      reply_to: replyTo,
    }),
  });
  if (!res.ok) throw new Error(`Resend a répondu ${res.status}`);
}

export async function storeSubmission(table: string, row: Record<string, unknown>) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;
  const res = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) throw new Error(`Supabase a répondu ${res.status}`);
}

const hits = new Map<string, { count: number; reset: number }>();

export function rateLimited(ip: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + windowMs });
    return false;
  }
  entry.count += 1;
  return entry.count > limit;
}
