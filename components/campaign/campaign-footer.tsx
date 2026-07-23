import Link from "next/link";

/* Slim legal footer for campaign landing pages — copyright + minimal legal
   links, no giant wordmark, no nav columns. Keeps the drafting language
   (dark canvas, mono, hairline top rule) without the exit-zone. */

const CANVAS = "#0A0B0E";
const TXT_D2 = "#A6ADB8";
const GRID_D = "rgba(244,245,247,0.08)";
const mono = "var(--font-plex-mono)";

const linkStyle = { fontFamily: mono, fontSize: 12, letterSpacing: "0.04em", color: TXT_D2, textDecoration: "none" } as const;

export function CampaignFooter() {
  return (
    <footer style={{ background: CANVAS, borderTop: `1px solid ${GRID_D}` }}>
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "20px 88px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.04em", color: TXT_D2 }}>
          © 2026 Visotonics
        </span>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href="/legal/privacy-policy" className="dt-underline" style={linkStyle}>Privacy</Link>
          <Link href="/legal/terms-and-conditions" className="dt-underline" style={linkStyle}>Terms</Link>
        </div>
      </div>
    </footer>
  );
}
