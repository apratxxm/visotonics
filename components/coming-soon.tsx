import type { CSSProperties } from "react";

/* ---------------------------------------------------------------------------
   ComingSoon — Section 2b, ported from Claude Design: Hero-DraftingTable.dc.html.
   Same light canvas / gridline / registration system as the Statement
   section (app/page.tsx). Used by resource routes with no content yet.
--------------------------------------------------------------------------- */

const LIGHT = "#ECEDEF";
const LIGHT_BAND = "rgba(236,237,239,0.5)";
const TXT_L1 = "#13151A";
const TXT_L2 = "#6B7078";
const GRID_L = "rgba(19,21,26,0.06)";
const CROSS_L = "rgba(19,21,26,0.30)";
const TICK_L = "#D4D6DB";
const SIGNAL = "#ED510C";

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

const SHEET: CSSProperties = { position: "relative", width: "100%", maxWidth: 1440, margin: "0 auto" };

const V_X = ["64px", "calc(64px + (100% - 128px) * 0.25)", "50%", "calc(64px + (100% - 128px) * 0.75)", "calc(100% - 64px)"];
function Verticals({ color }: { color: string }) {
  return (
    <>
      {V_X.map((x, i) => (
        <div key={i} aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, left: x, width: 1, background: color }} />
      ))}
    </>
  );
}

// small L-shaped tick, anchored at one corner of its 22x22 box.
function CornerTick({ left, top, corner }: { left: number; top: number; corner: "tl" | "br" }) {
  const edge: CSSProperties = corner === "tl" ? { left: 0, top: 0 } : { right: 0, bottom: 0 };
  return (
    <div aria-hidden="true" style={{ position: "absolute", left, top, width: 22, height: 22 }}>
      <div style={{ position: "absolute", width: 8, height: 1, background: TICK_L, ...edge }} />
      <div style={{ position: "absolute", width: 1, height: 8, background: TICK_L, ...edge }} />
    </div>
  );
}

export function ComingSoon() {
  return (
    <section className="on-light" style={{ background: LIGHT }}>
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ ...SHEET, height: 900 }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Verticals color={GRID_L} />
          <div style={{ position: "absolute", left: 0, right: 0, top: 190, bottom: 190, background: LIGHT_BAND }} />
          <div style={{ position: "absolute", left: 16, top: 16, width: 16, height: 16, borderLeft: `1px solid ${CROSS_L}`, borderTop: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", right: 16, top: 16, width: 16, height: 16, borderRight: `1px solid ${CROSS_L}`, borderTop: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", left: 16, bottom: 16, width: 16, height: 16, borderLeft: `1px solid ${CROSS_L}`, borderBottom: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", right: 16, bottom: 16, width: 16, height: 16, borderRight: `1px solid ${CROSS_L}`, borderBottom: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", left: "calc(64px + (100% - 128px) * 0.25)", bottom: 148, width: 3, height: 3, background: SIGNAL }} />

          <CornerTick left={392} top={88} corner="tl" />
          <CornerTick left={1048} top={810} corner="br" />
          <CornerTick left={720} top={802} corner="tl" />

          <div style={{ position: "absolute", left: 76, top: 653, fontFamily: mono, fontSize: 13, letterSpacing: "0.06em", color: TXT_L2 }}>STATUS: BUILDING</div>
          <div style={{ position: "absolute", left: 1060, top: 806, fontFamily: mono, fontSize: 13, letterSpacing: "0.06em", color: TXT_L2 }}>ETA TBD</div>
          <div style={{ position: "absolute", left: 848, top: 150, fontFamily: mono, fontSize: 13, letterSpacing: "0.06em", color: TXT_L2 }}>SCAN 00</div>

          <div style={{ position: "absolute", left: 32, top: 300, bottom: 300, width: 1, background: "rgba(19,21,26,0.20)" }} />
          <div style={{ position: "absolute", left: 28, top: 300, width: 9, height: 1, background: "rgba(19,21,26,0.20)" }} />
          <div style={{ position: "absolute", left: 28, bottom: 300, width: 9, height: 1, background: "rgba(19,21,26,0.20)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32, padding: "0 64px", boxSizing: "border-box" }}>
          <span style={{ fontFamily: mono, fontSize: 15, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: SIGNAL }}>Coming soon</span>
          <h2 style={{ margin: 0, fontFamily: sans, fontSize: "clamp(48px, 8vw, 120px)", lineHeight: 1.0, fontWeight: 600, letterSpacing: "-0.03em", color: TXT_L1, textAlign: "center", maxWidth: 1312, textWrap: "balance" }}>
            Something is being documented.
          </h2>
          <span style={{ fontFamily: mono, fontSize: 18, fontWeight: 400, letterSpacing: "0.02em", color: TXT_L2 }}>This page is under construction.</span>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", height: 480 }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{ position: "absolute", left: 12, top: 12, width: 12, height: 12, borderLeft: `1px solid ${CROSS_L}`, borderTop: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", right: 12, top: 12, width: 12, height: 12, borderRight: `1px solid ${CROSS_L}`, borderTop: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", left: 12, bottom: 12, width: 12, height: 12, borderLeft: `1px solid ${CROSS_L}`, borderBottom: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", right: 12, bottom: 12, width: 12, height: 12, borderRight: `1px solid ${CROSS_L}`, borderBottom: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", left: "50%", bottom: 64, width: 3, height: 3, background: SIGNAL }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, padding: "0 24px", boxSizing: "border-box" }}>
          <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: SIGNAL }}>Coming soon</span>
          <h2 style={{ margin: 0, fontFamily: sans, fontSize: 36, lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.03em", color: TXT_L1, textAlign: "center", textWrap: "balance" }}>
            Something is being documented.
          </h2>
          <span style={{ fontFamily: mono, fontSize: 14, fontWeight: 400, letterSpacing: "0.02em", color: TXT_L2, textAlign: "center" }}>This page is under construction.</span>
        </div>
      </div>
    </section>
  );
}
