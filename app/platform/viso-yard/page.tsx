import { YardRailDesktop, YardRulerMobile } from "./rail";
import { Convert } from "./convert";
import {
  PlatformBand,
  RegisterClose,
  SectionCargo,
  SectionContainer,
  SectionCrane,
  SectionDocument,
  SectionGate,
  SectionTank,
  SectionYard,
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
} from "./_shared";

/* ---------------------------------------------------------------------------
   /platform/viso-yard — page assembly (all sections mounted).

   Scroll order (handoff PAGE ASSEMBLY):
     hero → 01 CONTAINER → 02 TANK[light] → 03 GATE → 04 YARD → 05 CRANE
     → PLATFORM BAND[light] → 06 CARGO → 07 DOCUMENT → 08/09 REGISTER CLOSE
   Convert (home clone) is the remaining step 4.
--------------------------------------------------------------------------- */

/* ---- hero manifest -------------------------------------------------------- */
const MANIFEST = [
  { n: "01", name: "CONTAINER VISION", tag: "[DMG]", desc: "damage survey", id: "container-vision" },
  { n: "02", name: "TANK VISION", tag: "[TNK]", desc: "tank health", id: "tank-vision" },
  { n: "03", name: "GATE VISION", tag: "[OCR]", desc: "identity at the gate", id: "gate-vision" },
  { n: "04", name: "YARD VISION", tag: "[TWN]", desc: "live location", id: "yard-vision" },
  { n: "05", name: "CRANE VISION", tag: "[LFT]", desc: "chain of custody", id: "crane-vision" },
  { n: "06", name: "CARGO VISION", tag: "[CNT]", desc: "count with proof", id: "cargo-vision" },
  { n: "07", name: "DOCUMENT VISION", tag: "[DOC]", desc: "key-value extraction", id: "document-vision" },
  { n: "08", name: "WORK VISION", tag: "[WRK]", desc: "", id: "work-vision" },
  { n: "09", name: "SECURE VISION", tag: "[SEC]", desc: "", id: "secure-vision" },
];

function ManifestLine({ item }: { item: (typeof MANIFEST)[number] }) {
  return (
    <a href={`#${item.id}`} className="flex items-baseline" style={{ height: 40, textDecoration: "none", color: TXT_D2 }}>
      <span style={{ fontFamily: mono, fontSize: 15, letterSpacing: "0.04em", width: 34, flex: "0 0 34px" }}>{item.n}</span>
      <span style={{ fontFamily: mono, fontSize: 15, letterSpacing: "0.04em", textTransform: "uppercase", color: TXT_D1 }}>{item.name}</span>
      <span style={{ fontFamily: mono, fontSize: 15, letterSpacing: "0.04em", marginLeft: 10 }}>{item.tag}</span>
      {item.desc ? <span style={{ fontFamily: mono, fontSize: 15, letterSpacing: "0.04em", marginLeft: 14 }}>— {item.desc}</span> : null}
    </a>
  );
}

function Hero() {
  return (
    <div style={{ position: "relative" }}>
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 0, height: 1, background: BORDER_D_STRONG, zIndex: 2 }} />
      <Cross color={CROSS_D} style={{ left: 60, top: -4 }} />
      <Cross color={CROSS_D} style={{ left: "calc(100% - 68px)", top: -4 }} />

      {/* DESKTOP */}
      <div className="hidden md:block" style={{ position: "relative", zIndex: 1, minHeight: 900, padding: "104px 64px 0", boxSizing: "border-box" }}>
        <span style={{ ...eyebrow(TXT_D2), display: "block", paddingLeft: 24 }}>VISO YARD — NINE SYSTEMS, YOUR CAMERAS</span>
        <h1 style={{ margin: "72px 0 0", paddingLeft: 6, fontFamily: sans, fontSize: 136, lineHeight: 1, fontWeight: 600, letterSpacing: "-0.035em", textTransform: "uppercase", color: TXT_D1 }}>
          Viso Yard
        </h1>

        <div style={{ marginTop: 64, paddingLeft: 6, display: "flex", gap: 96 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>{MANIFEST.slice(0, 5).map((m) => <ManifestLine key={m.id} item={m} />)}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>{MANIFEST.slice(5).map((m) => <ManifestLine key={m.id} item={m} />)}</div>
        </div>

        <span style={{ display: "block", marginTop: 56, paddingLeft: 6, fontFamily: mono, fontSize: 14, letterSpacing: "0.06em", color: TXT_D2, opacity: 0.6 }}>
          GATE_04 :: VSTU 907032 1 :: READ 0.99 :: 14:02:11
        </span>

        <div aria-hidden="true" style={{ position: "absolute", left: 64, right: 64, bottom: 40, height: 1, background: BORDER_D_STRONG }} />
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", zIndex: 1, padding: "40px 24px 0" }}>
        <span style={{ ...eyebrow(TXT_D2), fontSize: 11 }}>VISO YARD — NINE SYSTEMS, YOUR CAMERAS</span>
        <h1 style={{ margin: "24px 0 0", fontFamily: sans, fontSize: 64, lineHeight: 0.98, fontWeight: 600, letterSpacing: "-0.035em", textTransform: "uppercase", color: TXT_D1 }}>
          Viso Yard
        </h1>
        <div style={{ margin: "40px 0 0", display: "flex", flexDirection: "column" }}>
          {MANIFEST.map((m) => (
            <a key={m.id} href={`#${m.id}`} style={{ display: "flex", alignItems: "baseline", height: 34, textDecoration: "none", color: TXT_D2 }}>
              <span style={{ fontFamily: mono, fontSize: 13, width: 28, flex: "0 0 28px" }}>{m.n}</span>
              <span style={{ fontFamily: mono, fontSize: 13, textTransform: "uppercase", color: TXT_D1 }}>{m.name}</span>
              <span style={{ fontFamily: mono, fontSize: 13, marginLeft: 8 }}>{m.tag}</span>
            </a>
          ))}
        </div>
        <span style={{ display: "block", margin: "40px 0", fontFamily: mono, fontSize: 10, letterSpacing: "0.06em", color: TXT_D2, opacity: 0.6 }}>
          GATE_04 :: VSTU 907032 1 :: READ 0.99 :: 14:02:11
        </span>
      </div>
    </div>
  );
}

/* ========================================================================= */

export default function VisoYardPage() {
  return (
    <>
      <YardRulerMobile />

      <div style={{ position: "relative", background: CANVAS_DARK }}>
        <div style={{ maxWidth: 1620, margin: "0 auto", display: "flex", alignItems: "flex-start" }}>
          <YardRailDesktop />

          <div style={{ ...SHEET, overflowX: "clip" }}>
            {/* page-level continuous grid layer — desktop: the five sheet
                verticals; mobile: the exports' two margin verticals at 24px */}
            <div aria-hidden="true" className="hidden md:block" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
              <Verticals color={GRID_D} />
            </div>
            <div aria-hidden="true" className="md:hidden" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
              <div style={{ position: "absolute", top: 0, bottom: 0, left: 24, width: 1, background: GRID_D }} />
              <div style={{ position: "absolute", top: 0, bottom: 0, right: 24, width: 1, background: GRID_D }} />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <Hero />
              <SectionContainer />
              <SectionTank />
              <SectionGate />
              <SectionYard />
              <SectionCrane />
              <PlatformBand />
              <SectionCargo />
              <SectionDocument />
              <RegisterClose />
            </div>
          </div>
        </div>

        {/* closing bookend — home Convert clone. Wrapped in the same 1620 row
            with a rail-width spacer so its gridlines stay continuous with the
            yard sheet above. */}
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
