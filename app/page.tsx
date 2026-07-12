import Image from "next/image";
import type { CSSProperties } from "react";

/* ---------------------------------------------------------------------------
   Visotonics home page — Drafting Table
   Ported from Claude Design: Hero-DraftingTable.dc.html (frames 1a desktop / 1b mobile).
   Scroll order (per request): hero → statement → how-it-works → metrics
   → proof+partners → testimonials → convert.
   Nav + footer are supplied by app/layout.tsx (SiteNav / SiteFooter).
   Signal #ED510C is used only for registration dots. Reduced-motion is handled
   globally in globals.css (all durations → 0).
--------------------------------------------------------------------------- */

const DARK = "#0A0B0E";
const DARK_SURFACE = "#101216";
const LIGHT = "#ECEDEF";
const LIGHT_SURFACE = "#F6F7F8";
const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const TXT_L1 = "#13151A";
const TXT_L2 = "#6B7078";
const GRID_D = "rgba(244,245,247,0.08)";
const GRID_L = "rgba(19,21,26,0.06)";
const CROSS_D = "rgba(244,245,247,0.4)";
const CROSS_L = "rgba(19,21,26,0.30)";
const BORDER_D = "rgba(244,245,247,0.10)";
const RULE_L = "#D4D6DB";
const SIGNAL = "#ED510C";

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

/* ---- drafting-sheet primitives -------------------------------------------- */

// 9px registration cross, anchored to a corner / rule endpoint.
function Cross({ color, style }: { color: string; style: CSSProperties }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", width: 9, height: 9, ...style }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 4, height: 1, background: color }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 4, width: 1, background: color }} />
    </div>
  );
}

// 3px signal-orange registration dot.
function Dot({ style }: { style: CSSProperties }) {
  return <div aria-hidden="true" style={{ position: "absolute", width: 3, height: 3, background: SIGNAL, ...style }} />;
}

// The 5 page-wide verticals: margins at 64 / (100%-64), interiors dividing the
// inset content into 4 equal columns. Same coordinates in every section so the
// sheet reads continuous.
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

// full-width horizontal rule + a registration cross at each endpoint (on the margins)
function HRule({ top, color, cross }: { top: number | string; color: string; cross: string }) {
  return (
    <>
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top, height: 1, background: color }} />
      <Cross color={cross} style={{ left: 60, top: `calc(${typeof top === "number" ? `${top}px` : top} - 4px)` }} />
      <Cross color={cross} style={{ left: "calc(100% - 68px)", top: `calc(${typeof top === "number" ? `${top}px` : top} - 4px)` }} />
    </>
  );
}

const SHEET: CSSProperties = { position: "relative", width: "100%", maxWidth: 1440, margin: "0 auto" };

/* shared text styles */
const eyebrow = (color: string): CSSProperties => ({
  fontFamily: mono,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color,
});

/* =========================================================================
   1 · HERO  (dark)
   ========================================================================= */

const HERO_CARDS = [
  { num: "01", name: "Viso Yard", desc: "Container, gate, crane, yard & cargo inspection", href: "/platform/viso-yard", img: "/assets/hero-card-01-yard.svg" },
  { num: "02", name: "Viso Warehouse", desc: "Counting, audit & dimensioning", href: "/platform/viso-warehouse", img: "/assets/hero-card-02-warehouse.svg" },
  { num: "03", name: "Viso Factory", desc: "Production & process monitoring", href: "/platform/viso-factory", img: "/assets/hero-card-03-factory.svg" },
  { num: "04", name: "Viso Data", desc: "Compression, trace & detection AI", href: "/platform/viso-data", img: "/assets/hero-card-04-data.svg" },
];

function Hero() {
  return (
    <section style={{ background: DARK, borderTop: `1px solid ${GRID_D}` }}>
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ ...SHEET, minHeight: 828 }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Verticals color={GRID_D} />
          <HRule top={336} color={GRID_D} cross={CROSS_D} />
          <HRule top={384} color={GRID_D} cross={CROSS_D} />
          <Cross color={CROSS_D} style={{ left: 60, top: 4 }} />
          <Cross color={CROSS_D} style={{ left: "calc(100% - 68px)", top: 4 }} />
          <Cross color={CROSS_D} style={{ left: 60, top: "calc(100% - 13px)" }} />
          <Cross color={CROSS_D} style={{ left: "calc(100% - 68px)", top: "calc(100% - 13px)" }} />
          {/* signal-orange registration dots at gridline intersections */}
          <Dot style={{ left: "calc(64px + (100% - 128px) * 0.75)", top: 1 }} />
          <Dot style={{ left: "calc(64px + (100% - 128px) * 0.25)", top: 383 }} />
          <Dot style={{ left: "50%", top: "calc(100% - 1px)" }} />
        </div>

        {/* top band — slab headline */}
        <div style={{ position: "relative", zIndex: 1, padding: "72px 64px 0", height: 336, boxSizing: "border-box" }}>
          <h1
            style={{
              margin: 0,
              fontFamily: sans,
              fontSize: 85,
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: "0.01em",
              color: TXT_D1,
              maxWidth: 1257,
            }}
          >
            AI vision for yards, warehouses and factories — from the CCTV you already own.
          </h1>
        </div>

        {/* log row */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: 48,
            padding: "0 88px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ ...eyebrow("rgba(244,245,247,0.3)"), whiteSpace: "nowrap" }}>OUR PLATFORM&nbsp;— YOUR CAMERAS</span>
          <span style={{ ...eyebrow("rgba(244,245,247,0.3)"), whiteSpace: "nowrap" }}>PATENTED DAMAGE DETECTION</span>
        </div>

        {/* card band */}
        <div style={{ position: "relative", zIndex: 1, padding: "0 64px 44px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {HERO_CARDS.map((c, i) => (
              <a
                key={c.num}
                href={c.href}
                className="dt-card"
                style={{
                  position: "relative",
                  boxSizing: "border-box",
                  background: DARK_SURFACE,
                  border: `1px solid ${GRID_D}`,
                  marginLeft: i === 0 ? 0 : -1,
                  padding: 24,
                  minHeight: 397,
                  display: "flex",
                  flexDirection: "column",
                  color: TXT_D1,
                  textDecoration: "none",
                }}
              >
                <span style={{ ...eyebrow(TXT_D2), fontSize: 13 }}>{c.num}</span>
                <div style={{ flex: 1, margin: "16px 0", borderRadius: 6, overflow: "hidden", minHeight: 0, display: "flex" }}>
                  <Image
                    src={c.img}
                    alt={`${c.name} schematic`}
                    width={640}
                    height={480}
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6, alignSelf: "flex-end" }}
                  />
                </div>
                <span style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>{c.name}</span>
                  <span style={{ fontSize: 18, lineHeight: 1.5, color: TXT_D2 }}>{c.desc}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, background: GRID_D }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, padding: "40px 20px", borderBottom: `1px solid ${GRID_D}` }}>
          <h1 style={{ margin: 0, fontFamily: sans, fontSize: 44, lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1 }}>
            AI vision for yards, warehouses and factories — from the CCTV you already own.
          </h1>
        </div>
        <div style={{ position: "relative", zIndex: 1, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 6, borderBottom: `1px solid ${GRID_D}` }}>
          <span style={{ ...eyebrow("rgba(244,245,247,0.3)"), fontSize: 11, letterSpacing: "0.06em" }}>OUR PLATFORM&nbsp;— YOUR CAMERAS</span>
          <span style={{ ...eyebrow("rgba(244,245,247,0.3)"), fontSize: 11, letterSpacing: "0.06em" }}>PATENTED DAMAGE DETECTION</span>
        </div>
        <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {HERO_CARDS.map((c, i) => (
            <a
              key={c.num}
              href={c.href}
              style={{
                position: "relative",
                boxSizing: "border-box",
                borderRight: i % 2 === 0 ? `1px solid ${GRID_D}` : undefined,
                borderBottom: i < 2 ? `1px solid ${GRID_D}` : undefined,
                background: DARK_SURFACE,
                padding: 18,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minHeight: 320,
                color: TXT_D1,
                textDecoration: "none",
              }}
            >
              <span style={{ display: "flex", justifyContent: "flex-end" }}>
                <span style={{ ...eyebrow(TXT_D2), fontSize: 13 }}>{c.num}</span>
              </span>
              <div style={{ flex: 1, minHeight: 160, borderRadius: 6, overflow: "hidden", background: "#101216", display: "flex" }}>
                <Image src={c.img} alt={`${c.name} schematic`} width={640} height={480} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>{c.name}</span>
                <span style={{ fontSize: 14, lineHeight: 1.5, color: TXT_D2 }}>{c.desc}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   2 · STATEMENT  (light)
   ========================================================================= */

function Statement() {
  return (
    <section className="on-light" style={{ background: LIGHT }}>
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ ...SHEET, height: 900 }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Verticals color={GRID_L} />
          {/* L-corner registration brackets, four section corners only */}
          <div style={{ position: "absolute", left: 16, top: 16, width: 16, height: 16, borderLeft: `1px solid ${CROSS_L}`, borderTop: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", right: 16, top: 16, width: 16, height: 16, borderRight: `1px solid ${CROSS_L}`, borderTop: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", left: 16, bottom: 16, width: 16, height: 16, borderLeft: `1px solid ${CROSS_L}`, borderBottom: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", right: 16, bottom: 16, width: 16, height: 16, borderRight: `1px solid ${CROSS_L}`, borderBottom: `1px solid ${CROSS_L}` }} />
          {/* single signal dot on a gridline */}
          <Dot style={{ left: "calc(64px + (100% - 128px) * 0.25)", bottom: 148 }} />
          {/* mono-label callouts in the margins */}
          <div style={{ position: "absolute", left: 76, top: 653, fontFamily: mono, fontSize: 13, letterSpacing: "0.06em", color: TXT_D2 }}>ISO 6346</div>
          <div style={{ position: "absolute", right: 340, top: 806, fontFamily: mono, fontSize: 13, letterSpacing: "0.06em", color: TXT_D2 }}>DET_CONF 0.99</div>
          <div style={{ position: "absolute", left: 848, top: 150, fontFamily: mono, fontSize: 13, letterSpacing: "0.06em", color: TXT_D2 }}>SCAN 04</div>
          {/* blueprint dimension line, left margin */}
          <div style={{ position: "absolute", left: 32, top: 300, bottom: 300, width: 1, background: "rgba(19,21,26,0.20)" }} />
          <div style={{ position: "absolute", left: 28, top: 300, width: 9, height: 1, background: "rgba(19,21,26,0.20)" }} />
          <div style={{ position: "absolute", left: 28, bottom: 300, width: 9, height: 1, background: "rgba(19,21,26,0.20)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 64px", boxSizing: "border-box" }}>
          <h2 style={{ margin: 0, fontFamily: sans, fontSize: "clamp(56px, 10vw, 144px)", lineHeight: 1.0, fontWeight: 600, letterSpacing: "-0.03em", color: TXT_L1, textAlign: "center", maxWidth: 1312, textWrap: "balance" }}>
            Every dent, rust &amp; crack. Documented automatically.
          </h2>
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
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px", boxSizing: "border-box" }}>
          <h2 style={{ margin: 0, fontFamily: sans, fontSize: 44, lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.03em", color: TXT_L1, textAlign: "center", textWrap: "balance" }}>
            Every dent, rust &amp; crack. Documented automatically.
          </h2>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3 · HOW IT WORKS  (dark)
   ========================================================================= */

const HIW_CARDS = [
  { num: "01", col: 3, row: 1, title: "Detect and segment", body: "Every defect classified — type, dimension, location, area to the mm²." },
  { num: "02", col: 4, row: 1, title: "Checkpoint diff", body: "Gate in, crane on, crane off, gate out — any two moments compared for auditable damage attribution." },
  { num: "03", col: 3, row: 2, title: "Tamper-evident logbook", body: "A time-stamped record per container movement, from vessel to gate." },
  { num: "04", col: 4, row: 2, title: "Report in under a minute", body: "Survey PDF and structured data to your system via API, in real time." },
];
const HIW_CARD_BG = "linear-gradient(180deg, rgba(244,245,247,0.06), rgba(244,245,247,0) 40%), #101216";

function HowItWorks() {
  return (
    <section style={{ background: DARK }}>
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ ...SHEET, minHeight: 1040 }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Verticals color={GRID_D} />
          <HRule top={72} color={GRID_D} cross={CROSS_D} />
          <Cross color={CROSS_D} style={{ left: 60, top: 4 }} />
          <Cross color={CROSS_D} style={{ left: "calc(100% - 68px)", top: 4 }} />
          <Cross color={CROSS_D} style={{ left: 60, top: "calc(100% - 13px)" }} />
          <Cross color={CROSS_D} style={{ left: "calc(100% - 68px)", top: "calc(100% - 13px)" }} />
          <Dot style={{ left: "calc(64px + (100% - 128px) * 0.75)", top: 71 }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: "128px 64px 40px" }}>
          <span style={{ ...eyebrow(TXT_D2), display: "block", paddingLeft: 18 }}>OUR PLATFORM&nbsp;— YOUR CAMERAS</span>
          <h2 style={{ margin: "37px 0 0", marginLeft: 12, fontFamily: sans, fontSize: 62, lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1, maxWidth: "20ch" }}>
            One vision layer across the operation.
          </h2>

          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gridAutoFlow: "row" }}>
            {/* lead light card, cols 1-2 rows 1-2 */}
            <div style={{ gridColumn: "1 / span 2", gridRow: "1 / span 2", boxSizing: "border-box", background: LIGHT_SURFACE, borderRadius: 8, padding: 40, display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
              <div style={{ flex: 1, minHeight: 0, marginBottom: 24, borderRadius: 6, overflow: "hidden", display: "flex" }}>
                <Image
                  src="/assets/home-leadcard-schematic.svg"
                  alt="Existing CCTV covering yard, warehouse and factory — one vision layer, no new hardware"
                  width={800}
                  height={560}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", borderRadius: 6 }}
                />
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <span style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_L1 }}>From the CCTV you already own.</span>
                <span style={{ fontSize: 22, lineHeight: 1.5, color: TXT_L2, maxWidth: "34ch" }}>
                  No new hardware. The platform runs on the cameras already watching your yard, warehouse and factory.
                </span>
              </span>
            </div>
            {HIW_CARDS.map((c) => (
              <div
                key={c.num}
                style={{
                  gridColumn: c.col,
                  gridRow: c.row,
                  marginLeft: c.col === 4 ? -1 : 0,
                  marginTop: c.row === 2 ? -1 : 0,
                  boxSizing: "border-box",
                  background: HIW_CARD_BG,
                  border: `1px solid ${BORDER_D}`,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ display: "flex", justifyContent: "flex-end" }}>
                  <span style={{ ...eyebrow(TXT_D2), fontSize: 13 }}>{c.num}</span>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 20 }}>
                  <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>{c.title}</span>
                  <span style={{ fontSize: 18, lineHeight: 1.5, color: TXT_D2 }}>{c.body}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", padding: "48px 20px 40px" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, background: GRID_D }} />
          <div style={{ position: "absolute", left: "50%", top: 36, width: 3, height: 3, background: SIGNAL }} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={{ ...eyebrow(TXT_D2), display: "block", fontSize: 12 }}>OUR PLATFORM&nbsp;— YOUR CAMERAS</span>
          <h2 style={{ margin: "16px 0 28px", fontFamily: sans, fontSize: 30, lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>
            One vision layer across the operation.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ boxSizing: "border-box", background: LIGHT_SURFACE, borderRadius: 8, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ borderRadius: 6, overflow: "hidden", display: "flex" }}>
                <Image
                  src="/assets/home-leadcard-schematic.svg"
                  alt="Existing CCTV covering yard, warehouse and factory — one vision layer, no new hardware"
                  width={800}
                  height={560}
                  style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: 6 }}
                />
              </div>
              <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_L1 }}>From the CCTV you already own.</span>
              <span style={{ fontSize: 15, lineHeight: 1.5, color: TXT_L2 }}>No new hardware. The platform runs on the cameras already watching your yard, warehouse and factory.</span>
            </div>
            {HIW_CARDS.map((c) => (
              <div key={c.num} style={{ boxSizing: "border-box", background: HIW_CARD_BG, border: `1px solid ${BORDER_D}`, borderRadius: 8, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>{c.title}</span>
                  <span style={{ ...eyebrow(TXT_D2), fontSize: 12 }}>{c.num}</span>
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.5, color: TXT_D2 }}>{c.body}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4 · METRICS  (light)
   ========================================================================= */

const METRICS = [
  { n: "90%", label: "lower inspection cost" },
  { n: "99%", label: "reporting-time reduction" },
  { n: "70%", label: "faster gate turnaround" },
  { n: "60%", label: "less inventory shrinkage" },
];

function Metrics() {
  return (
    <section className="on-light" style={{ background: LIGHT }}>
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ ...SHEET, minHeight: 1040 }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{ position: "absolute", left: 16, top: 16, width: 16, height: 16, borderLeft: `1px solid ${CROSS_L}`, borderTop: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", right: 16, top: 16, width: 16, height: 16, borderRight: `1px solid ${CROSS_L}`, borderTop: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", left: 16, bottom: 16, width: 16, height: 16, borderLeft: `1px solid ${CROSS_L}`, borderBottom: `1px solid ${CROSS_L}` }} />
          <div style={{ position: "absolute", right: 16, bottom: 16, width: 16, height: 16, borderRight: `1px solid ${CROSS_L}`, borderBottom: `1px solid ${CROSS_L}` }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: "96px 64px 64px" }}>
          <span style={{ ...eyebrow(TXT_L2), display: "block", padding: "0 4px" }}>MEASURED ACROSS 25+ SITES</span>
          <h2 style={{ margin: "24px 0 0", fontFamily: sans, fontSize: 54, lineHeight: 1.08, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_L1, maxWidth: "18.68ch" }}>
            Same cameras. Different economics.
          </h2>

          <div style={{ marginTop: 48 }}>
            {METRICS.map((m, i) => (
              <div
                key={m.n}
                style={{
                  position: "relative",
                  borderTop: `1px solid ${RULE_L}`,
                  borderBottom: i === METRICS.length - 1 ? `1px solid ${RULE_L}` : undefined,
                  padding: "32px 0",
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontFamily: sans, fontSize: 102, lineHeight: 0.9, fontWeight: 500, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", color: TXT_L1 }}>{m.n}</span>
                <span style={{ fontSize: 24, lineHeight: 1.4, color: TXT_L2 }}>{m.label}</span>
                {i === METRICS.length - 1 ? <Dot style={{ left: 0, bottom: -2 }} /> : null}
              </div>
            ))}
            <div style={{ marginTop: 24, fontFamily: mono, fontSize: 15, letterSpacing: "0.02em", color: TXT_L2 }}>
              Aggregate across container, gate, yard &amp; cargo deployments.
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", padding: "48px 20px 40px" }}>
        <span style={{ ...eyebrow(TXT_L2), display: "block", fontSize: 12 }}>MEASURED ACROSS 25+ SITES</span>
        <h2 style={{ margin: "16px 0 32px", fontFamily: sans, fontSize: 30, lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_L1 }}>
          Same cameras. Different economics.
        </h2>
        {METRICS.map((m, i) => (
          <div
            key={m.n}
            style={{
              position: "relative",
              borderTop: `1px solid ${RULE_L}`,
              borderBottom: i === METRICS.length - 1 ? `1px solid ${RULE_L}` : undefined,
              padding: "20px 0",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <span style={{ fontFamily: sans, fontSize: 52, lineHeight: 0.9, fontWeight: 500, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", color: TXT_L1 }}>{m.n}</span>
            <span style={{ fontSize: 15, lineHeight: 1.4, color: TXT_L2, textAlign: "right" }}>{m.label}</span>
            {i === METRICS.length - 1 ? <Dot style={{ left: 0, bottom: -2 }} /> : null}
          </div>
        ))}
        <div style={{ marginTop: 16, fontFamily: mono, fontSize: 12, lineHeight: 1.5, letterSpacing: "0.02em", color: TXT_L2 }}>
          Aggregate across container, gate, yard &amp; cargo deployments.
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   5 · PROOF + PARTNERS  (light)
   ========================================================================= */

const DEPLOYED = [
  { src: "adani", alt: "Adani", h: 44 },
  { src: "dp_world", alt: "DP World", h: 70 },
  { src: "hind_terminals", alt: "Hind Terminals", h: 26 },
  { src: "jnpa", alt: "JNPA", h: 72 },
  { src: "cochin_shipyard", alt: "Cochin Shipyard", h: 72 },
];
const RECOGNISED = [
  { src: "iit_kharagpur", alt: "IIT Kharagpur", h: 46 },
  { src: "iit_kanpur", alt: "IIT Kanpur", h: 46 },
  { src: "iim_kozhikode", alt: "IIM Kozhikode", h: 46 },
  { src: "nasscom", alt: "NASSCOM", h: 22 },
  { src: "meity_startup_hub", alt: "MeitY Startup Hub", h: 44 },
  { src: "nvidia", alt: "NVIDIA", h: 44 },
  { src: "microsoft_for_startups", alt: "Microsoft for Startups", h: 20 },
  { src: "startupindia", alt: "Startup India", h: 26 },
];

function Logo({ src, alt, h }: { src: string; alt: string; h: number }) {
  // Plain <img> (as in the design): logos have varying intrinsic aspect ratios,
  // so we let the browser scale width from the natural aspect at a fixed height.
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={`/assets/logos-light/${src}.png`}
      alt={alt}
      style={{ display: "block", height: h, width: "auto", objectFit: "contain" }}
    />
  );
}

function ProofPartners() {
  return (
    <section className="on-light" style={{ background: LIGHT }}>
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ ...SHEET }}>
        <div style={{ position: "relative", zIndex: 1, padding: "96px 64px", display: "flex", flexDirection: "column" }}>
          {/* header band */}
          <div style={{ position: "relative", borderTop: `1px solid ${RULE_L}`, padding: "48px 0" }}>
            <Dot style={{ left: -2, top: -2 }} />
            <Cross color={CROSS_L} style={{ right: -4, top: -5 }} />
            <span style={{ ...eyebrow(TXT_L2), fontSize: 16, display: "block" }}>PROVEN WHERE IT&apos;S HARDEST</span>
            <h2 style={{ margin: "24px 0 0", fontFamily: sans, fontSize: 54, lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_L1, maxWidth: "22ch" }}>
              Trusted at the busiest yards, in the country.
            </h2>
            <div style={{ marginTop: 48, display: "flex", alignItems: "flex-start", gap: 80 }}>
              <div>
                <span style={{ display: "block", fontFamily: sans, fontSize: "clamp(120px, 16.1vw, 232px)", lineHeight: 0.82, fontWeight: 500, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums", color: TXT_L1 }}>400,000</span>
                <span style={{ display: "block", marginTop: 56, ...eyebrow(TXT_L2), fontSize: 26, fontStyle: "italic" }}>IMAGE READS A DAY&nbsp;·&nbsp;ACROSS 25+ SITES</span>
              </div>
              <span style={{ flex: 1, alignSelf: "center", fontFamily: sans, fontSize: 34, lineHeight: 1.35, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_L1, maxWidth: "16.11ch", paddingBottom: 84, paddingLeft: 65 }}>
                Reading moving containers in night, rain, fog and dust.
              </span>
            </div>
          </div>

          {/* deployed band */}
          <div style={{ position: "relative", borderTop: `1px solid ${RULE_L}`, padding: "48px 0" }}>
            <Cross color={CROSS_L} style={{ left: -4, top: -5 }} />
            <Cross color={CROSS_L} style={{ right: -4, top: -5 }} />
            <span style={{ ...eyebrow(TXT_L2), fontSize: 15, display: "block" }}>DEPLOYED AT</span>
            <div style={{ marginTop: 44, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 56 }}>
              {DEPLOYED.map((l) => <Logo key={l.src} {...l} />)}
            </div>
          </div>

          {/* recognition band */}
          <div style={{ position: "relative", borderTop: `1px solid ${RULE_L}`, padding: "48px 0" }}>
            <Cross color={CROSS_L} style={{ left: -4, top: -5 }} />
            <Cross color={CROSS_L} style={{ right: -4, top: -5 }} />
            <span style={{ ...eyebrow(TXT_L2), fontSize: 15, display: "block" }}>BACKED &amp; RECOGNISED BY</span>
            <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", rowGap: 28, columnGap: 48 }}>
              {RECOGNISED.map((l) => <Logo key={l.src} {...l} />)}
            </div>
          </div>

          {/* footnote band */}
          <div style={{ position: "relative", borderTop: `1px solid ${RULE_L}`, padding: "28px 0 0" }}>
            <Cross color={CROSS_L} style={{ left: -4, top: -5 }} />
            <Dot style={{ right: -2, top: -2 }} />
            <span style={{ display: "block", fontSize: 16, lineHeight: 1.6, color: TXT_L2 }}>CII Best Industry AI Application 2025&nbsp;·&nbsp;Patented damage detection 2026*</span>
            <span style={{ display: "block", marginTop: 8, fontSize: 16, lineHeight: 1.6, color: TXT_L2 }}>*Patent number and jurisdiction to follow.</span>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", padding: "48px 20px 32px" }}>
        <div style={{ position: "relative", borderTop: `1px solid ${RULE_L}`, padding: "24px 0 32px" }}>
          <Dot style={{ left: -2, top: -2 }} />
          <span style={{ ...eyebrow(TXT_L2), display: "block", fontSize: 12 }}>PROVEN WHERE IT&apos;S HARDEST</span>
          <h2 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 30, lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_L1 }}>Trusted at the busiest yards, in the country.</h2>
          <span style={{ display: "block", marginTop: 28, fontFamily: sans, fontSize: 72, lineHeight: 0.9, fontWeight: 500, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums", color: TXT_L1 }}>400,000</span>
          <span style={{ display: "block", marginTop: 16, ...eyebrow(TXT_L2), fontSize: 13, fontStyle: "italic" }}>IMAGE READS A DAY&nbsp;·&nbsp;ACROSS 25+ SITES</span>
          <span style={{ display: "block", marginTop: 24, fontFamily: sans, fontSize: 20, lineHeight: 1.4, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_L1, maxWidth: "24ch" }}>Reading moving containers in night, rain, fog and dust.</span>
        </div>
        <div style={{ position: "relative", borderTop: `1px solid ${RULE_L}`, padding: "24px 0 32px" }}>
          <span style={{ ...eyebrow(TXT_L2), display: "block", fontSize: 12 }}>DEPLOYED AT</span>
          <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", rowGap: 24, columnGap: 32 }}>
            {DEPLOYED.map((l) => <Logo key={l.src} src={l.src} alt={l.alt} h={Math.round(l.h * 0.68)} />)}
          </div>
        </div>
        <div style={{ position: "relative", borderTop: `1px solid ${RULE_L}`, padding: "24px 0 32px" }}>
          <span style={{ ...eyebrow(TXT_L2), display: "block", fontSize: 12 }}>BACKED &amp; RECOGNISED BY</span>
          <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", rowGap: 20, columnGap: 28 }}>
            {RECOGNISED.map((l) => <Logo key={l.src} src={l.src} alt={l.alt} h={Math.round(l.h * 0.68)} />)}
          </div>
        </div>
        <div style={{ position: "relative", borderTop: `1px solid ${RULE_L}`, padding: "20px 0 0" }}>
          <Dot style={{ right: -2, top: -2 }} />
          <span style={{ display: "block", fontSize: 13, lineHeight: 1.6, color: TXT_L2 }}>CII Best Industry AI Application 2025&nbsp;·&nbsp;Patented damage detection 2026*</span>
          <span style={{ display: "block", marginTop: 6, fontSize: 13, lineHeight: 1.6, color: TXT_L2 }}>*Patent number and jurisdiction to follow.</span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   6 · TESTIMONIALS  (dark) — PLACEHOLDER
   The design's quote/attribution are unverified draft copy; per the standing
   rule the testimonial content ships as an obvious bracketed, mono-log
   placeholder. Section framing (eyebrow, headline, CTA, pager) is kept.
   ========================================================================= */

const PH_MONO: CSSProperties = {
  fontFamily: mono,
  fontSize: 14,
  lineHeight: 1.6,
  letterSpacing: "0.02em",
  color: TXT_D2,
};

function TestimonialPlaceholderCard() {
  return (
    <div style={{ boxSizing: "border-box", background: DARK_SURFACE, border: `1px solid ${BORDER_D}`, borderRadius: 8, padding: 50, display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ fontFamily: sans, fontSize: 22, lineHeight: 1.5, fontWeight: 400, letterSpacing: "-0.01em", color: TXT_D1, maxWidth: "30em" }}>
        “Rollout was faster than we expected — <span style={{ color: TXT_D2 }}>no changes to our existing crane workflow. The dashboard gives our team visibility we never had before.”</span>
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontFamily: sans, fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1 }}>Yard Supervisor</span>
        <span style={{ fontFamily: sans, fontSize: 15, color: TXT_L2 }}>Port Logistics</span>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section style={{ background: DARK }}>
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ ...SHEET, minHeight: 740 }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Verticals color={GRID_D} />
          <HRule top={72} color={GRID_D} cross={CROSS_D} />
          <Cross color={CROSS_D} style={{ left: 60, top: 4 }} />
          <Cross color={CROSS_D} style={{ left: "calc(100% - 68px)", top: 4 }} />
          <Cross color={CROSS_D} style={{ left: 60, top: "calc(100% - 13px)" }} />
          <Cross color={CROSS_D} style={{ left: "calc(100% - 68px)", top: "calc(100% - 13px)" }} />
          <Dot style={{ left: "calc(64px + (100% - 128px) * 0.75)", top: 71 }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: "98px 64px 64px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 32 }}>
            <div style={{ maxWidth: 940 }}>
              <span style={{ ...eyebrow(TXT_D2), display: "block" }}>CUSTOMER PROOF</span>
              <h2 style={{ margin: "24px 0 0", fontFamily: sans, fontSize: 56, lineHeight: 1.1, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1, maxWidth: "24ch" }}>
                See how ports and terminals run inspection <span style={{ color: TXT_D2 }}>— without stopping a single container.</span>
              </h2>
            </div>
            <a href="#case-studies" className="dt-outline" style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", height: 47, padding: "0 24px", background: "transparent", color: TXT_D1, border: `1px solid rgba(244,245,247,0.28)`, borderRadius: 8, fontSize: 18, fontWeight: 500, textDecoration: "none" }}>
              See case studies
            </a>
          </div>

          <div style={{ marginTop: 40, borderTop: `1px solid ${BORDER_D}`, paddingTop: 40, display: "grid", gridTemplateColumns: "3fr 1fr", gap: 0 }}>
            <TestimonialPlaceholderCard />
            <div style={{ boxSizing: "border-box", borderLeft: `1px solid ${BORDER_D}`, display: "flex", flexDirection: "column", padding: "0 0 0 24px" }}>
              <span style={{ fontFamily: mono, fontSize: 32, letterSpacing: "0.02em", color: TXT_L2, textAlign: "right" }}>—/—&nbsp;</span>
              <div style={{ marginTop: "auto", display: "flex", borderTop: `1px solid ${BORDER_D}`, borderBottom: `1px solid ${BORDER_D}` }}>
                <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, padding: "18px 17px", fontSize: 16, fontWeight: 500, color: TXT_D2 }}>
                  <span style={{ fontFamily: mono, fontSize: 20 }}>←</span> Previous
                </span>
                <span style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10, padding: "18px 17px", borderLeft: `1px solid ${BORDER_D}`, fontSize: 16, fontWeight: 500, color: TXT_D1 }}>
                  Next <span style={{ fontFamily: mono, fontSize: 20 }}>→</span>
                </span>
              </div>
              <a href="#share-experience" className="dt-underline" style={{ padding: "20px 26px", fontSize: 16, fontWeight: 500, color: TXT_D1, textDecoration: "underline", textUnderlineOffset: 4 }}>
                Share your experience with Visotonics
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", padding: "48px 20px 40px" }}>
        <span style={{ ...eyebrow(TXT_D2), display: "block", fontSize: 12 }}>CUSTOMER PROOF</span>
        <h2 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 28, lineHeight: 1.2, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1 }}>
          See how ports and terminals run inspection <span style={{ color: TXT_D2 }}>— without stopping a single container.</span>
        </h2>
        <div style={{ margin: "24px 0 0", borderTop: `1px solid ${BORDER_D}`, paddingTop: 24 }}>
          <TestimonialPlaceholderCard />
          <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${BORDER_D}`, borderBottom: `1px solid ${BORDER_D}`, padding: "14px 0" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 500, color: TXT_D2 }}><span style={{ fontFamily: mono }}>←</span> Previous</span>
            <span style={{ fontFamily: mono, fontSize: 15, color: TXT_L2 }}>—/—</span>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 500, color: TXT_D1 }}>Next <span style={{ fontFamily: mono }}>→</span></span>
          </div>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16 }}>
            <a href="#case-studies" className="dt-outline" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 48, background: "transparent", color: TXT_D1, border: `1px solid rgba(244,245,247,0.28)`, borderRadius: 8, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>See case studies</a>
            <a href="#share-experience" className="dt-underline" style={{ alignSelf: "center", fontSize: 15, fontWeight: 500, color: TXT_D1, textDecoration: "underline", textUnderlineOffset: 4 }}>Share your experience with Visotonics</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   7 · CONVERT  (dark, checkered) — closing bookend
   ========================================================================= */

function Convert() {
  return (
    <section style={{ background: DARK }}>
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ ...SHEET, height: 720 }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Verticals color={GRID_D} />
          <div style={{ position: "absolute", left: 0, right: 0, top: 64, height: 1, background: GRID_D }} />
          <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: GRID_D }} />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 64, height: 1, background: GRID_D }} />
          {/* corner crosses */}
          <Cross color={CROSS_D} style={{ left: 60, top: 60 }} />
          <Cross color={CROSS_D} style={{ left: "calc(100% - 68px)", top: 60 }} />
          <Cross color={CROSS_D} style={{ left: 60, bottom: 60 }} />
          <Cross color={CROSS_D} style={{ left: "calc(100% - 68px)", bottom: 60 }} />
          {/* internal gridline-intersection crosses (checkered) */}
          <Cross color={CROSS_D} style={{ left: "calc(64px + (100% - 128px) * 0.25 - 4px)", top: "calc(50% - 4px)" }} />
          <Cross color={CROSS_D} style={{ left: "calc(64px + (100% - 128px) * 0.75 - 4px)", top: "calc(50% - 4px)" }} />
          <Cross color={CROSS_D} style={{ left: "calc(64px + (100% - 128px) * 0.25 - 4px)", top: 60 }} />
          <Cross color={CROSS_D} style={{ left: "calc(64px + (100% - 128px) * 0.75 - 4px)", bottom: 60 }} />
          <Dot style={{ left: "50%", top: "calc(50% - 1px)" }} />
        </div>
        {/* neutral vignette */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(ellipse 640px 340px at 50% 50%, rgba(0,0,0,0.15), rgba(0,0,0,0) 70%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 64px", boxSizing: "border-box" }}>
          <h2 style={{ margin: 0, fontFamily: sans, fontSize: 84, lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1, maxWidth: "20ch" }}>
            Join 25+ sites running 400,000 reads a day.
          </h2>
          <span style={{ display: "block", marginTop: 24, fontSize: 29, lineHeight: 1.5, color: TXT_D2 }}>Bring a gate feed. We&apos;ll read it live.</span>
          <div style={{ marginTop: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <a href="/contact" className="dt-fill" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 77, padding: "0 32px", background: TXT_D1, color: TXT_L1, borderRadius: 999, fontFamily: sans, fontSize: 24, fontWeight: 500, textDecoration: "none" }}>Talk to us</a>
            <a href="/platform/viso-yard" className="dt-outline" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 76, padding: "0 32px", background: "transparent", color: TXT_D1, border: `1px solid rgba(244,245,247,0.28)`, borderRadius: 999, fontFamily: sans, fontSize: 24, fontWeight: 500, textDecoration: "none" }}>Explore the platform</a>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", height: 520 }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, background: GRID_D }} />
          <div style={{ position: "absolute", left: 0, right: 0, top: 130, height: 1, background: GRID_D }} />
          <div style={{ position: "absolute", left: 0, right: 0, top: 390, height: 1, background: GRID_D }} />
          <Cross color={CROSS_D} style={{ left: 16, top: 16 }} />
          <Cross color={CROSS_D} style={{ left: "calc(100% - 25px)", top: 16 }} />
          <Cross color={CROSS_D} style={{ left: 16, bottom: 16 }} />
          <Cross color={CROSS_D} style={{ left: "calc(100% - 25px)", bottom: 16 }} />
          <div style={{ position: "absolute", left: "50%", top: 389, width: 3, height: 3, background: SIGNAL }} />
        </div>
        <div style={{ position: "absolute", inset: 0, zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px", boxSizing: "border-box" }}>
          <h2 style={{ margin: 0, fontFamily: sans, fontSize: 34, lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1, textWrap: "balance" }}>Join 25+ sites running 400,000 reads a day.</h2>
          <span style={{ display: "block", marginTop: 16, fontSize: 17, lineHeight: 1.5, color: TXT_D2 }}>Bring a gate feed. We&apos;ll read it live.</span>
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 12, width: "100%", maxWidth: 280 }}>
            <a href="/contact" className="dt-fill" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, background: TXT_D1, color: TXT_L1, borderRadius: 999, fontFamily: sans, fontSize: 17, fontWeight: 500, textDecoration: "none" }}>Talk to us</a>
            <a href="/platform/viso-yard" className="dt-outline" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, background: "transparent", color: TXT_D1, border: `1px solid rgba(244,245,247,0.28)`, borderRadius: 999, fontFamily: sans, fontSize: 17, fontWeight: 500, textDecoration: "none" }}>Explore the platform</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================= */

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <HowItWorks />
      <Metrics />
      <ProofPartners />
      <Testimonials />
      <Convert />
    </>
  );
}
