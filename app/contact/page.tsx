"use client";

import type { CSSProperties, FormEvent } from "react";

/* ---------------------------------------------------------------------------
   /contact
   Ported from Claude Design: Hero-DraftingTable.dc.html, Section 11 ·
   Contact · Variant D · minimal, no frame · 1440×900.
--------------------------------------------------------------------------- */

const CANVAS_DARK = "#0A0B0E";
const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const TXT_D3 = "#6B7078";
const SIGNAL = "#ED510C";

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

const fieldLabel: CSSProperties = {
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: TXT_D3,
};

const underlineInput: CSSProperties = {
  height: 56,
  boxSizing: "border-box",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(244,245,247,0.2)",
  padding: 0,
  color: TXT_D1,
  fontFamily: sans,
  fontSize: 24,
  width: "100%",
  outline: "none",
};

const sendButton: CSSProperties = {
  marginTop: 8,
  display: "inline-flex",
  alignItems: "center",
  gap: 12,
  alignSelf: "flex-start",
  fontFamily: sans,
  fontWeight: 600,
  color: TXT_D1,
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
};

// Builds a mailto: link from the form fields and navigates to it — there's no
// backend here, so this is the whole "submission": the visitor's own mail
// client opens with contact@excl.ai pre-filled and the message already composed.
function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const subjectField = String(data.get("subject") ?? "").trim();
  const message = String(data.get("message") ?? "");
  const subject = encodeURIComponent(subjectField || `Enquiry from ${name || "website contact form"}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
  window.location.href = `mailto:contact@excl.ai?subject=${subject}&body=${body}`;
}

export default function ContactPage() {
  return (
    <section style={{ background: CANVAS_DARK }}>
      {/* DESKTOP */}
      <div className="hidden md:flex" style={{ maxWidth: 1440, margin: "0 auto", minHeight: 900, boxSizing: "border-box", padding: 96, flexDirection: "column", justifyContent: "center" }}>
        <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_D2 }}>Let&apos;s talk</span>
        <h1 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 56, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>Tell us about your yard.</h1>

        <form onSubmit={handleSubmit} style={{ marginTop: 64, maxWidth: 720, display: "flex", flexDirection: "column", gap: 40 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={fieldLabel}>Name</span>
            <input type="text" name="name" autoComplete="name" required style={underlineInput} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={fieldLabel}>Work email</span>
            <input type="email" name="email" autoComplete="email" required style={underlineInput} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={fieldLabel}>Subject</span>
            <input type="text" name="subject" style={underlineInput} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={fieldLabel}>What do you want to solve?</span>
            <input type="text" name="message" style={underlineInput} />
          </label>
          <button type="submit" className="dt-underline" style={{ ...sendButton, fontSize: 20 }}>
            Send message <span style={{ fontFamily: mono, color: SIGNAL }}>→</span>
          </button>
        </form>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ padding: "56px 24px 64px" }}>
        <span style={{ fontFamily: mono, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_D2 }}>Let&apos;s talk</span>
        <h1 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>Tell us about your yard.</h1>

        <form onSubmit={handleSubmit} style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 32 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={fieldLabel}>Name</span>
            <input type="text" name="name" autoComplete="name" required style={{ ...underlineInput, height: 48, fontSize: 18 }} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={fieldLabel}>Work email</span>
            <input type="email" name="email" autoComplete="email" required style={{ ...underlineInput, height: 48, fontSize: 18 }} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={fieldLabel}>Subject</span>
            <input type="text" name="subject" style={{ ...underlineInput, height: 48, fontSize: 18 }} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={fieldLabel}>What do you want to solve?</span>
            <input type="text" name="message" style={{ ...underlineInput, height: 48, fontSize: 18 }} />
          </label>
          <button type="submit" className="dt-underline" style={{ ...sendButton, fontSize: 18 }}>
            Send message <span style={{ fontFamily: mono, color: SIGNAL }}>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
