import { WarehouseRailDesktop, WarehouseRulerMobile } from "./rail";
import { Convert } from "./convert";
import {
  SectionAudit,
  SectionCargo,
  SectionDimension,
  SectionDocument,
  SectionSecure,
  SectionWork,
} from "./sections";
import {
  BORDER_D_STRONG,
  CANVAS_DARK,
  CROSS_D,
  Cross,
  GRID_D,
  SHEET,
  TXT_D1,
  TXT_D2,
  Verticals,
  eyebrow,
  mono,
  sans,
} from "../viso-yard/_shared";

/* ---------------------------------------------------------------------------
   /platform/viso-warehouse — page assembly (hero manifest + rail + 6 sections).
   Ported from VisoWarehouse-Overview.dc.html.

   Scroll order (hero manifest):
     hero → 01 CARGO → 02 AUDIT → 03 DIMENSION[light] → 04 DOCUMENT
     → 05 WORK → 06 SECURE → Convert (closing bookend).
   Cargo + Document are the Viso Yard components, reused verbatim.
--------------------------------------------------------------------------- */

const MANIFEST = [
  { n: "01", name: "Cargo Vision", tag: "[CNT]", garnish: "CNT :: COUNT + PROOF · EDGE · OFFLINE-CAPABLE", id: "cargo-vision" },
  { n: "02", name: "Audit Vision", tag: "[AUD]", garnish: "AUD :: EVENT-LINKED PROOF · TRIGGER=DETECT · RETRIEVE=ID", id: "audit-vision" },
  { n: "03", name: "Dimension Vision", tag: "[DIM]", garnish: "DIM :: L×W×H IN MOTION · EVIDENCE=ANNOTATED FRAME", id: "dimension-vision" },
  { n: "04", name: "Document Vision", tag: "[DOC]", garnish: "DOC :: MANIFEST IN · STRUCTURED DATA OUT · → WMS", id: "document-vision" },
  { n: "05", name: "Work Vision", tag: "[WRK]", garnish: "WRK :: ACTIVITY IN FRAME · SAME PLATFORM", id: "work-vision" },
  { n: "06", name: "Secure Vision", tag: "[SEC]", garnish: "SEC :: ALL FEEDS HELD · ALERT+CLIP ON EVENT", id: "secure-vision" },
];

function Hero() {
  return (
    <div style={{ position: "relative" }}>
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 0, height: 1, background: BORDER_D_STRONG, zIndex: 2 }} />
      <Cross color={CROSS_D} style={{ left: 60, top: -4 }} />
      <Cross color={CROSS_D} style={{ left: "calc(100% - 68px)", top: -4 }} />

      {/* DESKTOP */}
      <div className="hidden md:block" style={{ position: "relative", zIndex: 1, minHeight: 900, padding: "104px 64px 0", boxSizing: "border-box" }}>
        <span style={{ ...eyebrow(TXT_D2), display: "block", paddingLeft: 24 }}>OUR PLATFORM — YOUR CAMERAS · INBOUND TO OUTBOUND</span>
        <h1 style={{ margin: "72px 0 0", paddingLeft: 6, fontFamily: sans, fontSize: 136, lineHeight: 1, fontWeight: 600, letterSpacing: "-0.035em", textTransform: "uppercase", color: TXT_D1 }}>
          Viso Warehouse
        </h1>
        <p style={{ margin: "40px 0 0", paddingLeft: 24, maxWidth: 592, fontFamily: sans, fontSize: 20, lineHeight: 1.5, color: TXT_D1 }}>
          Every case counted, every pallet dimensioned, every order proven — on the cameras already covering your floor.
        </p>

        <div style={{ marginTop: 56, paddingLeft: 6, borderTop: `1px solid ${BORDER_D_STRONG}`, borderBottom: `1px solid ${BORDER_D_STRONG}` }}>
          {MANIFEST.map((m, i) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              style={{ display: "flex", alignItems: "baseline", gap: 24, height: 58, padding: "0 4px", boxSizing: "border-box", textDecoration: "none", borderBottom: i < MANIFEST.length - 1 ? `1px solid rgba(244,245,247,0.10)` : undefined }}
            >
              <span style={{ ...eyebrow(TXT_D2), width: 26, flex: "0 0 26px" }}>{m.n}</span>
              <span style={{ fontFamily: sans, fontSize: 30, lineHeight: 1.2, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1, width: 300, flex: "0 0 300px" }}>{m.name}</span>
              <span style={{ ...eyebrow(TXT_D2), width: 64, flex: "0 0 64px" }}>{m.tag}</span>
              <span style={{ fontFamily: mono, fontSize: 14, lineHeight: 1.6, color: TXT_D2 }}>{m.garnish}</span>
            </a>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", zIndex: 1, padding: "40px 24px 0" }}>
        <span style={{ ...eyebrow(TXT_D2), fontSize: 11 }}>OUR PLATFORM — YOUR CAMERAS · INBOUND TO OUTBOUND</span>
        <h1 style={{ margin: "24px 0 0", fontFamily: sans, fontSize: 54, lineHeight: 0.98, fontWeight: 600, letterSpacing: "-0.035em", textTransform: "uppercase", color: TXT_D1 }}>
          Viso<br />Warehouse
        </h1>
        <p style={{ margin: "32px 0 0", fontFamily: sans, fontSize: 18, lineHeight: 1.5, color: TXT_D1 }}>
          Every case counted, every pallet dimensioned, every order proven — on the cameras already covering your floor.
        </p>
        <div style={{ margin: "40px 0 0", borderTop: `1px solid ${BORDER_D_STRONG}`, borderBottom: `1px solid ${BORDER_D_STRONG}` }}>
          {MANIFEST.map((m, i) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              style={{ display: "flex", flexDirection: "column", gap: 4, padding: "16px 0", textDecoration: "none", borderBottom: i < MANIFEST.length - 1 ? `1px solid rgba(244,245,247,0.10)` : undefined }}
            >
              <span style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ ...eyebrow(TXT_D2) }}>{m.n}</span>
                <span style={{ fontFamily: sans, fontSize: 24, lineHeight: 1.2, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1 }}>{m.name}</span>
                <span style={{ ...eyebrow(TXT_D2) }}>{m.tag}</span>
              </span>
              <span style={{ fontFamily: mono, fontSize: 13, lineHeight: 1.6, color: TXT_D2 }}>{m.garnish}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */

export default function VisoWarehousePage() {
  return (
    <>
      <WarehouseRulerMobile />

      <div style={{ position: "relative", background: CANVAS_DARK }}>
        <div style={{ maxWidth: 1620, margin: "0 auto", display: "flex", alignItems: "flex-start" }}>
          <WarehouseRailDesktop />

          <div style={{ ...SHEET, overflowX: "clip" }}>
            <div aria-hidden="true" className="hidden md:block" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
              <Verticals color={GRID_D} />
            </div>
            <div aria-hidden="true" className="md:hidden" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
              <div style={{ position: "absolute", top: 0, bottom: 0, left: 24, width: 1, background: GRID_D }} />
              <div style={{ position: "absolute", top: 0, bottom: 0, right: 24, width: 1, background: GRID_D }} />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <Hero />
              <SectionCargo />
              <SectionAudit />
              <SectionDimension />
              <SectionDocument />
              <SectionWork />
              <SectionSecure />
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1620, margin: "0 auto", display: "flex", alignItems: "flex-start" }}>
          <div aria-hidden="true" className="hidden md:block" style={{ flex: "0 0 180px" }} />
          <div style={{ flex: "1 1 auto", minWidth: 0, maxWidth: 1440 }}>
            <Convert />
          </div>
        </div>
      </div>
    </>
  );
}
