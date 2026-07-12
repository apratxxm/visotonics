import Link from "next/link";
import {
  BORDER_D,
  BORDER_D_OUTLINE,
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
} from "./_shared";

/* ---------------------------------------------------------------------------
   /client-portal — Login
   Ported from Claude Design: Hero-DraftingTable.dc.html, Section 8 ·
   Login · Variant B · centered card, dark blueprint canvas.
--------------------------------------------------------------------------- */

export default function ClientPortalPage() {
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
          <h1 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>Sign in</h1>

          <form style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
            <input type="email" name="email" placeholder="Work email" autoComplete="email" style={inputStyle} />
            <input type="password" name="password" placeholder="Password" autoComplete="current-password" style={inputStyle} />
            <a
              href="#dashboard"
              className="dt-signal-fill"
              style={{ marginTop: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, background: SIGNAL, color: CANVAS_DARK, borderRadius: 6, fontFamily: sans, fontSize: 16, fontWeight: 600, textDecoration: "none" }}
            >
              Continue
            </a>
            <Link
              href="/client-portal/register"
              className="dt-outline"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, background: "transparent", color: TXT_D1, border: `1px solid ${BORDER_D_OUTLINE}`, borderRadius: 6, fontFamily: sans, fontSize: 16, fontWeight: 600, textDecoration: "none" }}
            >
              Register
            </Link>
          </form>

          <div style={{ marginTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${BORDER_D}`, paddingTop: 20 }}>
            <a href="#reset" className="dt-underline" style={{ fontSize: 14, color: TXT_D2, textDecoration: "none" }}>
              Forgot password?
            </a>
            <a href="#request-access" className="dt-underline" style={{ fontSize: 14, color: TXT_D1, textDecoration: "underline", textUnderlineOffset: 3 }}>
              Request access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
