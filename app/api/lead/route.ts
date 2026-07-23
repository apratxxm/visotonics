import { NextResponse } from "next/server";

/* ---------------------------------------------------------------------------
   POST /api/lead — campaign lead capture.

   Validates the submission and emails it to the team inbox via Resend. If the
   Resend credentials aren't configured yet (RESEND_API_KEY /
   LEAD_NOTIFICATION_EMAIL), it logs a warning and still returns success, so
   the front-end flow is fully testable before the account exists. Wire the
   env vars in and real emails start sending — no code change needed.
--------------------------------------------------------------------------- */

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  campaign?: string;
  module?: string;
};

function clean(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const name = clean(body.name);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const company = clean(body.company);
  const campaign = clean(body.campaign) || "unknown";
  const module = clean(body.module) || "unknown";

  // Name + phone are the two required fields (the whole point is contact no.).
  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required." },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  const lines = [
    `New campaign lead`,
    `Campaign: ${campaign}`,
    `Module: ${module}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "—"}`,
    `Company: ${company || "—"}`,
  ];

  if (!apiKey || !to) {
    // Not configured yet — don't fail the visitor's flow.
    console.warn(
      "[api/lead] RESEND_API_KEY / LEAD_NOTIFICATION_EMAIL not set; lead not emailed:\n" +
        lines.join("\n")
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    // The Resend SDK does NOT throw on API-level rejections (e.g. sandbox
    // restrictions on unverified domains) — it returns { data, error }. Must
    // check `error` explicitly or a rejected send silently reports success.
    const { data, error } = await resend.emails.send({
      // Uses Resend's shared onboarding sender until a verified domain is set.
      from: process.env.LEAD_FROM_EMAIL || "Visotonics Leads <onboarding@resend.dev>",
      to: [to],
      replyTo: email || undefined,
      subject: `New lead — ${module} (${campaign})`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("[api/lead] Resend rejected the send:", error);
      return NextResponse.json({ ok: true, delivered: false, error: error.message });
    }

    console.log("[api/lead] Resend accepted, id:", data?.id);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[api/lead] Resend send threw:", err);
    // Still acknowledge to the visitor; the warning is logged for us.
    return NextResponse.json({ ok: true, delivered: false });
  }
}
