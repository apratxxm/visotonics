import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/seo";

/* ---------------------------------------------------------------------------
   POST /api/lead — shared lead/enquiry capture for the whole site.

   Two sources share this one route, both requiring name + email + phone —
   every form on the site collects both an email and a phone number:
     - "campaign"  — the /campaigns/[slug] lead form
     - "contact"   — the general /contact page enquiry form (also carries an
                      optional subject/message)

   Validates the submission and emails it to the team inbox via Resend. If the
   Resend credentials aren't configured yet (RESEND_API_KEY /
   LEAD_NOTIFICATION_EMAIL), it logs a warning and still returns success, so
   the front-end flow is fully testable before the account exists. Wire the
   env vars in and real emails start sending — no code change needed.

   If a campaign lead has a brochureUrl configured, a direct link to it is
   included in the notification email — this works the moment a real PDF path
   is set in app/campaigns/data.ts, no further code change needed.
--------------------------------------------------------------------------- */

export const runtime = "nodejs";

type LeadPayload = {
  source?: "campaign" | "contact";
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
  campaign?: string;
  module?: string;
  brochureUrl?: string;
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

  const source = body.source === "contact" ? "contact" : "campaign";
  const name = clean(body.name);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const company = clean(body.company);
  const subject = clean(body.subject);
  const message = clean(body.message);
  const campaign = clean(body.campaign) || "unknown";
  const module = clean(body.module) || "unknown";
  const brochureUrl = clean(body.brochureUrl);

  // Every form on the site collects name, email and phone now — no source-
  // specific exceptions. Keeping the `source` branch below purely for the
  // different email body/subject shape, not for validation.
  if (!name || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name, email and phone are required." },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  const lines =
    source === "campaign"
      ? [
          `New campaign lead`,
          `Campaign: ${campaign}`,
          `Module: ${module}`,
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email || "—"}`,
          `Company: ${company || "—"}`,
          ...(brochureUrl ? [`Brochure requested: ${new URL(brochureUrl, SITE_URL).toString()}`] : []),
        ]
      : [
          `New contact-page enquiry`,
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Subject: ${subject || "—"}`,
          `Message: ${message || "—"}`,
        ];

  const emailSubject =
    source === "campaign" ? `New lead — ${module} (${campaign})` : `New enquiry — ${subject || name}`;

  if (!apiKey || !to) {
    // Not configured yet — don't fail the visitor's flow.
    console.warn(
      `[api/lead] RESEND_API_KEY / LEAD_NOTIFICATION_EMAIL not set; ${source} lead not emailed:\n` +
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
      subject: emailSubject,
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
