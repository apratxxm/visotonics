import type { CSSProperties } from "react";

/* ---------------------------------------------------------------------------
   /company/offices
   Ported from Claude Design: Hero-DraftingTable.dc.html, Section 10 ·
   Offices · list by region, dark, gridline system · 1440×900.
--------------------------------------------------------------------------- */

const CANVAS_DARK = "#0A0B0E";
const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const BORDER_D = "rgba(244,245,247,0.10)";
const SIGNAL = "#ED510C";

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

const eyebrow: CSSProperties = {
  fontFamily: mono,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: TXT_D2,
};

const OFFICES = [
  { region: "INDIA · UTTAR PRADESH", city: "Lucknow", note: "(Headquarters)" },
  { region: "UNITED STATES · D.C.", city: "Washington", note: "" },
];

export default function OfficesPage() {
  return (
    <section style={{ background: CANVAS_DARK }}>
      {/* DESKTOP */}
      <div className="hidden md:flex" style={{ position: "relative", maxWidth: 1440, margin: "0 auto", minHeight: 900, boxSizing: "border-box", padding: "80px 96px", flexDirection: "column" }}>
        <span style={eyebrow}>Where we operate</span>
        <h1 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 64, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>Our Offices</h1>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {OFFICES.map((o, i) => (
            <div
              key={o.city}
              style={{
                borderTop: `1px solid ${BORDER_D}`,
                borderBottom: i === OFFICES.length - 1 ? `1px solid ${BORDER_D}` : "none",
                padding: "56px 0",
                display: "flex",
                alignItems: "baseline",
                gap: 64,
              }}
            >
              <span style={{ fontFamily: mono, fontSize: 18, fontWeight: 500, letterSpacing: "0.08em", color: SIGNAL, width: 260, flexShrink: 0 }}>{o.region}</span>
              <span style={{ fontFamily: sans, fontSize: 96, fontWeight: 600, letterSpacing: "-0.03em", color: TXT_D1 }}>
                {o.city}
                {o.note ? <span style={{ fontSize: 32, fontWeight: 500, color: TXT_D2, letterSpacing: "-0.01em", marginLeft: 200 }}>{o.note}</span> : null}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ padding: "48px 24px 64px" }}>
        <span style={{ ...eyebrow, fontSize: 11 }}>Where we operate</span>
        <h1 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>Our Offices</h1>

        <div style={{ marginTop: 48 }}>
          {OFFICES.map((o, i) => (
            <div
              key={o.city}
              style={{
                borderTop: `1px solid ${BORDER_D}`,
                borderBottom: i === OFFICES.length - 1 ? `1px solid ${BORDER_D}` : "none",
                padding: "32px 0",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", color: SIGNAL }}>{o.region}</span>
              <span style={{ fontFamily: sans, fontSize: 44, fontWeight: 600, letterSpacing: "-0.03em", color: TXT_D1 }}>{o.city}</span>
              {o.note ? <span style={{ fontFamily: sans, fontSize: 18, fontWeight: 500, color: TXT_D2 }}>{o.note}</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
