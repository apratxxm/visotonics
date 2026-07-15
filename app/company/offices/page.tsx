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
  { region: "INDIA · MAHARASHTRA", city: "Mumbai", note: "" },
  { region: "INDIA · GUJARAT", city: "Ahmedabad", note: "" },
  { region: "INDIA · ODISHA", city: "Bhubaneshwar", note: "" },
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

      <OfficesGlobe />
    </section>
  );
}

/* ---------------------------------------------------------------------------
   Section 10 · Offices · globe · graticule world map with two labeled nodes.
--------------------------------------------------------------------------- */
function OfficesGlobe() {
  return (
    <div style={{ borderTop: `1px solid ${BORDER_D}` }}>
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ position: "relative", maxWidth: 1440, margin: "0 auto", minHeight: 900, boxSizing: "border-box", padding: "64px 96px 96px" }}>
        <span style={eyebrow}>Where we operate</span>
        <h1 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>
          Five sites, one vision layer.
        </h1>

        <div style={{ position: "relative", marginTop: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: 1100 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/world-map-line-art.png"
              alt="World map line art"
              style={{ display: "block", width: "100%", height: "auto", filter: "invert(1)", mixBlendMode: "screen", opacity: 0.85 }}
            />
            <svg viewBox="0 0 1094 700" style={{ position: "absolute", inset: 0, width: "109.4%", height: "105.4%", left: "-7.4%", top: "-6.6%" }} fontFamily={mono}>
              <path d="M 295 275 Q 515 165 797 330" stroke={SIGNAL} strokeWidth={1.25} strokeDasharray="3 5" fill="none" opacity={0.55} />
              <circle cx={295} cy={275} r={6} fill={TXT_D1} />
              <text x={295} y={254} textAnchor="middle" fill={TXT_D1} fontSize={12} letterSpacing={1}>WASHINGTON</text>
              <text x={295} y={294} textAnchor="middle" fill={TXT_D2} fontSize={9} letterSpacing={0.5} opacity={0.65}>U.S.A.</text>

              {/* India markers — placed via the derived PNG→viewBox mapping
                  (s = 0.9488·p + (56.05, 43.83), from the 109.4%/105.4% overlay
                  stretch + preserveAspectRatio letterboxing), against coastline
                  pixels traced from the source image. Lucknow: north-central
                  inland; Ahmedabad: Gujarat, SE of the Kathiawar loop; Mumbai:
                  west coast (same longitude column as Ahmedabad, as in reality);
                  Bhubaneshwar: east coast. Lucknow (HQ) is the only labeled dot. */}
              <circle cx={797} cy={330} r={6} fill={SIGNAL} />
              <text x={797} y={306} textAnchor="middle" fill={TXT_D1} fontSize={12} letterSpacing={1}>LUCKNOW</text>
              <text x={797} y={318} textAnchor="middle" fill={TXT_D2} fontSize={9} letterSpacing={0.5} opacity={0.65}>HQ · INDIA</text>

              <circle cx={771} cy={336} r={3} fill={TXT_D1} opacity={0.85} />
              <circle cx={773} cy={363} r={3} fill={TXT_D1} opacity={0.85} />
              <circle cx={807} cy={346} r={3} fill={TXT_D1} opacity={0.85} />
            </svg>
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            borderTop: `1px solid ${BORDER_D}`,
            paddingTop: 24,
          }}
        >
          <span style={{ fontFamily: mono, fontSize: 13, letterSpacing: "0.06em", color: "#6B7078" }}>5 SITES · 2 COUNTRIES</span>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ padding: "48px 24px 64px" }}>
        <span style={{ ...eyebrow, fontSize: 11 }}>Where we operate</span>
        <h1 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>
          Five sites, one vision layer.
        </h1>

        <div style={{ position: "relative", marginTop: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/world-map-line-art.png"
            alt="World map line art"
            style={{ display: "block", width: "100%", height: "auto", filter: "invert(1)", mixBlendMode: "screen", opacity: 0.85 }}
          />
          <svg viewBox="0 0 1094 700" style={{ position: "absolute", inset: 0, width: "109.4%", height: "105.4%", left: "-7.4%", top: "-6.6%" }} fontFamily={mono}>
            <path d="M 295 275 Q 515 165 797 330" stroke={SIGNAL} strokeWidth={1.25} strokeDasharray="3 5" fill="none" opacity={0.55} />
            <circle cx={295} cy={275} r={6} fill={TXT_D1} />
            <text x={295} y={254} textAnchor="middle" fill={TXT_D1} fontSize={12} letterSpacing={1}>WASHINGTON</text>
            <text x={295} y={294} textAnchor="middle" fill={TXT_D2} fontSize={9} letterSpacing={0.5} opacity={0.65}>U.S.A.</text>

            {/* India markers — placed via the derived PNG→viewBox mapping
                (s = 0.9488·p + (56.05, 43.83), from the 109.4%/105.4% overlay
                stretch + preserveAspectRatio letterboxing), against coastline
                pixels traced from the source image. Lucknow: north-central
                inland; Ahmedabad: Gujarat, SE of the Kathiawar loop; Mumbai:
                west coast (same longitude column as Ahmedabad, as in reality);
                Bhubaneshwar: east coast. Lucknow (HQ) is the only labeled dot. */}
            <circle cx={797} cy={330} r={6} fill={SIGNAL} />
            <text x={797} y={306} textAnchor="middle" fill={TXT_D1} fontSize={12} letterSpacing={1}>LUCKNOW</text>
            <text x={797} y={318} textAnchor="middle" fill={TXT_D2} fontSize={9} letterSpacing={0.5} opacity={0.65}>HQ · INDIA</text>

            <circle cx={771} cy={336} r={3} fill={TXT_D1} opacity={0.85} />
            <circle cx={773} cy={363} r={3} fill={TXT_D1} opacity={0.85} />
            <circle cx={807} cy={346} r={3} fill={TXT_D1} opacity={0.85} />
          </svg>
        </div>

        <div
          style={{
            marginTop: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${BORDER_D}`,
            paddingTop: 20,
          }}
        >
          <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.06em", color: "#6B7078" }}>5 SITES · 2 COUNTRIES</span>
        </div>
      </div>
    </div>
  );
}
