import {
  BORDER_D,
  CANVAS_DARK,
  CornerBrackets,
  CROSS_D,
  Dot,
  eyebrow,
  GRID_D,
  inputStyle,
  sans,
  SIGNAL,
  SURFACE_DARK,
  TXT_D1,
  TXT_D2,
  Verticals,
} from "../_shared";
import { pageMeta } from "@/lib/seo";

// Auth surface — never index.
export const metadata = pageMeta({
  title: "Reset password",
  description: "Reset your Visotonics client portal password.",
  path: "/client-portal/reset-password",
  noindex: true,
});

/* ---------------------------------------------------------------------------
   /client-portal/reset-password
   Ported from Claude Design: Hero-DraftingTable.dc.html, Section 8 ·
   Forgot password · centered card, dark blueprint canvas. Same chrome as
   the Login page (Variant B) it links from.
--------------------------------------------------------------------------- */

export default function ResetPasswordPage() {
  return (
    <section style={{ position: "relative", background: CANVAS_DARK, minHeight: 720 }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div className="hidden md:block" style={{ position: "absolute", inset: 0 }}>
          <Verticals color={GRID_D} />
        </div>
        <CornerBrackets color={CROSS_D} />
        <Dot style={{ left: "50%", bottom: 148 }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, minHeight: 720, display: "flex", alignItems: "center", justifyContent: "center", padding: "64px 20px", boxSizing: "border-box" }}>
        <div style={{ width: "100%", maxWidth: 440, boxSizing: "border-box", background: SURFACE_DARK, border: `1px solid ${BORDER_D}`, borderRadius: 8, padding: 48 }}>
          <span style={eyebrow(TXT_D2)}>Access</span>
          <h1 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>Reset password</h1>
          <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.6, color: TXT_D2 }}>Enter your work email and we&apos;ll send a link to reset your password.</p>

          <form style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
            <input type="email" name="email" placeholder="Work email" autoComplete="email" style={inputStyle} />
            <a
              href="#sent"
              className="dt-signal-fill"
              style={{ marginTop: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, background: SIGNAL, color: CANVAS_DARK, borderRadius: 6, fontFamily: sans, fontSize: 16, fontWeight: 600, textDecoration: "none" }}
            >
              Send reset link
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
