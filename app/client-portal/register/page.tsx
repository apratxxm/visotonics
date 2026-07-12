import Link from "next/link";
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

/* ---------------------------------------------------------------------------
   /client-portal/register — Register
   Ported from Claude Design: Hero-DraftingTable.dc.html, Section 8 ·
   Register · matches Login Variant B · centered card, dark blueprint canvas.
--------------------------------------------------------------------------- */

export default function RegisterPage() {
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
          <h1 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>Create account</h1>

          <form style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
            <input type="text" name="company" placeholder="Company name" autoComplete="organization" style={inputStyle} />
            <input type="email" name="email" placeholder="Work email" autoComplete="email" style={inputStyle} />
            <input type="password" name="password" placeholder="Password" autoComplete="new-password" style={inputStyle} />
            <a
              href="#dashboard"
              className="dt-signal-fill"
              style={{ marginTop: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, background: SIGNAL, color: CANVAS_DARK, borderRadius: 6, fontFamily: sans, fontSize: 16, fontWeight: 600, textDecoration: "none" }}
            >
              Create account
            </a>
          </form>

          <div style={{ marginTop: 28, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${BORDER_D}`, paddingTop: 20 }}>
            <span style={{ fontSize: 14, color: TXT_D2 }}>
              Already have an account?{" "}
              <Link href="/client-portal" className="dt-underline" style={{ color: TXT_D1, textDecoration: "underline", textUnderlineOffset: 3 }}>
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
