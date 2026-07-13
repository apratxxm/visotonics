import type { CSSProperties } from "react";

/* ---------------------------------------------------------------------------
   /platform/viso-data — three product sections, stacked.
   Ported from Claude Design: VisoWarehouse-Overview.dc.html canvas
   (frames Compression AI · Iteration D, Trace AI · Hybrid 1, Detect AI ·
   Iteration B — desktop 1232 + their Mobile 390 counterparts).

   No rail / ruler / tracker (per request): the nav deep-links land on a
   section (#compression-ai / #trace-ai / #detect-ai) via scroll-margin;
   a bare /platform/viso-data lands at the top.
   Nav + footer come from app/layout.tsx.
--------------------------------------------------------------------------- */

/* ---- tokens (literal design hex, self-contained) -------------------------- */
const CANVAS_DARK = "#0A0B0E";
const CANVAS_LIGHT = "#ECEDEF";
const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const TXT_L1 = "#13151A";
const TXT_L2 = "#5A5F6A";
const INK_L = "#13151A"; // strong rule on light
const RULE_L = "#D4D6DB"; // hairline on light
const BORDER_D = "rgba(244,245,247,0.18)";
const HAIR_D = "rgba(244,245,247,0.32)";
const SIGNAL = "#ED510C";
const CROSS_L = "rgba(90,95,106,0.6)";
const HATCH = "repeating-linear-gradient(135deg, #101216, #101216 14px, #0d0f13 14px, #0d0f13 28px)";
const HATCH_M = "repeating-linear-gradient(135deg, #101216, #101216 12px, #0d0f13 12px, #0d0f13 24px)";

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

// anchors clear the 72px desktop nav / 64px mobile nav (no ruler here)
const ANCHOR_OFFSET = "scroll-mt-[64px] md:scroll-mt-[72px]";

const SHEET: CSSProperties = { position: "relative", width: "100%", maxWidth: 1232, margin: "0 auto", boxSizing: "border-box" };

// 9px registration cross, anchored to a corner.
function Cross({ color, style }: { color: string; style: CSSProperties }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", width: 9, height: 9, ...style }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 4, height: 1, background: color }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 4, width: 1, background: color }} />
    </div>
  );
}

function LightCorners() {
  return (
    <>
      <Cross color={CROSS_L} style={{ left: 0, top: 0 }} />
      <Cross color={CROSS_L} style={{ right: 0, top: 0 }} />
      <Cross color={CROSS_L} style={{ left: 0, bottom: 0 }} />
      <Cross color={CROSS_L} style={{ right: 0, bottom: 0 }} />
    </>
  );
}

/* =========================================================================
   01 · COMPRESSION AI  (light) — claim + spec register ("the monument")
   ========================================================================= */

const COMPRESSION_SPECS: [string, string][] = [
  ["INGEST", "RTSP · ONVIF"],
  ["CODEC", "preserved — H.264 · H.265 · MJPEG"],
  ["DEPLOYMENT", "on-premise, in front of storage"],
  ["ANALYTICS", "unaffected — runs on the compressed stream"],
];

function CompressionAI() {
  return (
    <section
      id="compression-ai"
      className={`${ANCHOR_OFFSET} on-light`}
      style={{ position: "relative", background: CANVAS_LIGHT, boxSizing: "border-box", overflow: "hidden" }}
    >
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ ...SHEET, minHeight: 900, padding: "60px 64px 64px" }}>
        <LightCorners />
        {/* header lockup, centred */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <span style={{ fontFamily: mono, fontSize: 16, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_L2 }}>
            COMPRESSION AI
          </span>
          <h2 style={{ margin: "24px auto 0", maxWidth: 640, fontFamily: sans, fontSize: 34, lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.015em", color: TXT_L1 }}>
            The footage you need is the footage you deleted.
          </h2>
          <p style={{ margin: "28px auto 0", maxWidth: 820, fontFamily: sans, fontSize: 22, lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.01em", color: CANVAS_DARK }}>
            Same footage. Fewer bytes. Analytics unaffected.
          </p>
        </div>

        {/* spec register — bottom-anchored monument */}
        <div style={{ position: "relative", zIndex: 1, marginTop: 96, borderTop: `1px solid ${INK_L}`, borderBottom: `1px solid ${INK_L}` }}>
          {COMPRESSION_SPECS.map(([label, value], i) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 40,
                padding: "36px 0",
                borderTop: i === 0 ? undefined : `1px solid ${RULE_L}`,
              }}
            >
              <span style={{ fontFamily: mono, fontSize: 15, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_L1 }}>{label}</span>
              <span style={{ fontFamily: mono, fontSize: 15, fontWeight: 400, letterSpacing: "0.06em", color: TXT_L2, textAlign: "right" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", padding: "48px 24px 56px" }}>
        <span style={{ display: "block", textAlign: "center", fontFamily: mono, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_L2 }}>
          COMPRESSION AI
        </span>
        <h2 style={{ margin: "16px 0 0", textAlign: "center", fontFamily: sans, fontSize: 28, lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_L1 }}>
          The footage you need is the footage you deleted.
        </h2>
        <p style={{ margin: "20px 0 0", textAlign: "center", fontFamily: sans, fontSize: 15, lineHeight: 1.4, fontWeight: 500, color: CANVAS_DARK }}>
          Same footage. Fewer bytes. Analytics unaffected.
        </p>
        <div style={{ marginTop: 32, borderTop: `1px solid ${INK_L}` }}>
          {COMPRESSION_SPECS.map(([label, value], i) => (
            <div key={label} style={{ padding: "20px 0", borderBottom: `1px solid ${i === COMPRESSION_SPECS.length - 1 ? INK_L : RULE_L}` }}>
              <span style={{ display: "block", fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_L1 }}>{label}</span>
              <span style={{ display: "block", marginTop: 4, fontFamily: mono, fontSize: 14, fontWeight: 400, letterSpacing: "0.06em", color: TXT_L2 }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   02 · TRACE AI  (light) — claim-led, example-query register band
   ========================================================================= */

const TRACE_QUERIES = [
  "Which trucks were at Bay 4 when the seal broke?",
  "Show me every time a container was handled between gate-in and crane-off.",
  "How long did Dock 2 sit idle last Tuesday?",
];

function TraceAI() {
  return (
    <section
      id="trace-ai"
      className={`${ANCHOR_OFFSET} on-light`}
      style={{ position: "relative", background: CANVAS_LIGHT, boxSizing: "border-box", overflow: "hidden", borderTop: `1px solid ${RULE_L}` }}
    >
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ ...SHEET, minHeight: 900, padding: "88px 64px 80px" }}>
        <LightCorners />
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 40 }}>
          <div style={{ maxWidth: 700 }}>
            <h2 style={{ margin: 0, fontFamily: sans, fontSize: 56, lineHeight: 1.12, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_L1 }}>
              Ask a question. Get the timeline that answers it.
            </h2>
            <p style={{ margin: "28px 0 0", maxWidth: 600, fontFamily: sans, fontSize: 17, lineHeight: 1.5, fontWeight: 400, color: TXT_L2 }}>
              Natural-language query across every camera and every hour — it reconstructs the timeline and hands you the clips that prove it.
            </p>
          </div>
          <span style={{ flex: "0 0 auto", fontFamily: mono, fontSize: 20, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_L2 }}>
            TRACE AI
          </span>
        </div>

        {/* register statement */}
        <div style={{ position: "relative", zIndex: 1, marginTop: 72, textAlign: "right" }}>
          <span style={{ display: "block", fontFamily: mono, fontSize: 24, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_L2 }}>ASK THE ARCHIVE</span>
          <h3 style={{ margin: "12px 0 0", marginLeft: "auto", maxWidth: 835, fontFamily: sans, fontSize: 44, lineHeight: 1.14, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_L1 }}>
            The footage exists.<br />Finding the exact seconds is the whole job.
          </h3>
        </div>

        {/* example-query band */}
        <div style={{ position: "relative", zIndex: 1, marginTop: 80 }}>
          <span style={{ display: "block", fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_L1 }}>EXAMPLE QUERIES</span>
          <div style={{ marginTop: 20, borderTop: `1px solid ${INK_L}`, borderBottom: `1px solid ${INK_L}`, display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            {TRACE_QUERIES.map((q, i) => (
              <p
                key={q}
                style={{
                  margin: 0,
                  padding: "28px 32px 40px 0",
                  borderLeft: i === 0 ? undefined : `1px solid ${RULE_L}`,
                  paddingLeft: i === 0 ? 0 : 32,
                  fontFamily: mono,
                  fontSize: 14,
                  lineHeight: 1.5,
                  fontWeight: 400,
                  color: TXT_L1,
                }}
              >
                {q}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", padding: "48px 24px 56px" }}>
        <span style={{ display: "block", textAlign: "center", fontFamily: mono, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_L2 }}>TRACE AI</span>
        <h2 style={{ margin: "16px 0 0", textAlign: "center", fontFamily: sans, fontSize: 28, lineHeight: 1.18, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_L1 }}>
          Ask a question. Get the timeline that answers it.
        </h2>
        <p style={{ margin: "16px 0 0", textAlign: "center", fontFamily: sans, fontSize: 14, lineHeight: 1.5, fontWeight: 400, color: TXT_L2 }}>
          Natural-language query across every camera and every hour — it reconstructs the timeline and hands you the clips that prove it.
        </p>
        <div aria-hidden="true" style={{ margin: "32px 0 0", width: "100%", height: 1, background: RULE_L }} />
        <span style={{ display: "block", marginTop: 24, textAlign: "center", fontFamily: mono, fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_L2 }}>ASK THE ARCHIVE</span>
        <p style={{ margin: "12px 0 0", textAlign: "center", fontFamily: sans, fontSize: 20, lineHeight: 1.3, fontWeight: 600, color: TXT_L1 }}>
          The footage exists. Finding the exact seconds is the whole job.
        </p>
        <div aria-hidden="true" style={{ margin: "32px 0 0", width: "100%", height: 1, background: INK_L }} />
        <span style={{ display: "block", marginTop: 20, fontFamily: mono, fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_L1 }}>EXAMPLE QUERIES</span>
        {TRACE_QUERIES.map((q, i) => (
          <div key={q}>
            <p style={{ margin: "16px 0 0", fontFamily: mono, fontSize: 15, lineHeight: 1.5, fontWeight: 400, color: TXT_L1 }}>{q}</p>
            <div aria-hidden="true" style={{ margin: "16px 0 0", width: "100%", height: 1, background: i === TRACE_QUERIES.length - 1 ? INK_L : RULE_L }} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================================
   03 · DETECT AI  (dark) — the detection chain + feed-wall
   ========================================================================= */

const DETECT_CHAIN: { title: string; caption: string; signal?: boolean }[] = [
  { title: "DETECTED", caption: "continuous, on every feed" },
  { title: "TRIAGED", caption: "real event vs. nuisance" },
  { title: "ALERTED", caption: "to your systems, over webhook" },
  { title: "CLIP", caption: "attached — the moment, not the timeline" },
  { title: "CASE", caption: "logged — tamper-evident", signal: true },
];

// 6×2 feed-wall; the lit cell is index 9 (row 2, col 4), per the export.
const DETECT_LIT = 9;

function DetectAI() {
  return (
    <section
      id="detect-ai"
      className={ANCHOR_OFFSET}
      style={{ position: "relative", background: CANVAS_DARK, boxSizing: "border-box", overflow: "hidden" }}
    >
      {/* DESKTOP */}
      <div className="hidden md:block" style={{ ...SHEET, minHeight: 900, padding: "64px 64px 72px" }}>
        <LightCorners />
        {/* copy lockup */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 40 }}>
          <div style={{ maxWidth: 690 }}>
            <span style={{ display: "block", fontFamily: mono, fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_D2 }}>
              CONTINUOUS TRIAGE ON EVERY FEED
            </span>
            <p style={{ margin: "24px 0 0", fontFamily: sans, fontSize: 40, lineHeight: 1.3, fontWeight: 600, color: TXT_D1 }}>
              A guard cannot watch forty feeds. The platform watches all of them.
            </p>
            <p style={{ margin: "24px 0 0", maxWidth: 666, fontFamily: sans, fontSize: 22, lineHeight: 1.5, fontWeight: 400, color: TXT_D2 }}>
              It already knows the difference between a real event and a flapping tarp — because it reads through night, rain, fog, dust and motion blur.
            </p>
          </div>
          <span style={{ flex: "0 0 auto", fontFamily: mono, fontSize: 20, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_D2 }}>DETECT AI</span>
        </div>

        {/* the detection chain — left-to-right pipeline */}
        <div style={{ position: "relative", zIndex: 1, marginTop: 96 }}>
          <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 40, height: 1, background: HAIR_D }} />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
            {DETECT_CHAIN.map((s) => (
              <div key={s.title} style={{ position: "relative", paddingTop: 60 }}>
                <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 36, width: 8, height: 8, borderRadius: 999, background: s.signal ? SIGNAL : TXT_D2 }} />
                <span style={{ display: "block", fontFamily: mono, fontSize: 15, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: TXT_D1 }}>{s.title}</span>
                <span style={{ display: "block", marginTop: 8, paddingRight: 24, fontFamily: mono, fontSize: 13, fontWeight: 400, letterSpacing: "0.04em", color: TXT_D2 }}>{s.caption}</span>
              </div>
            ))}
          </div>
        </div>

        {/* feed-wall reference grid — one lit cell */}
        <div style={{ position: "relative", zIndex: 1, marginTop: 56, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
          {Array.from({ length: 12 }).map((_, i) =>
            i === DETECT_LIT ? (
              <div key={i} style={{ position: "relative", height: 96, border: `1.5px solid ${SIGNAL}`, background: "rgba(237,81,12,0.14)", boxSizing: "border-box" }}>
                <span style={{ position: "absolute", inset: 12, display: "flex", alignItems: "flex-start", justifyContent: "center", textAlign: "center", fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL, lineHeight: 1.3 }}>
                  THE EVENT THAT ACTUALLY MATTERS
                </span>
              </div>
            ) : (
              <div key={i} style={{ height: 96, opacity: 0.45, border: `1px solid ${BORDER_D}`, boxSizing: "border-box", background: HATCH }} />
            )
          )}
        </div>

        {/* honesty line */}
        <div style={{ position: "relative", zIndex: 1, marginTop: 48, borderTop: `1px solid ${BORDER_D}`, paddingTop: 20 }}>
          <p style={{ margin: 0, fontFamily: mono, fontSize: 14, lineHeight: 1.6, fontWeight: 400, color: TXT_D2 }}>
            It alerts and logs. It does not deter — it fires your alarm, your lights, your PA. We don&apos;t sell you a strobe.
          </p>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", padding: "48px 24px 56px" }}>
        <span style={{ display: "block", textAlign: "center", fontFamily: mono, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_D2, paddingBottom: 18 }}>DETECT AI</span>
        <h2 style={{ margin: 0, fontFamily: sans, fontSize: 26, lineHeight: 1.25, fontWeight: 600, color: TXT_D1 }}>
          A guard cannot watch forty feeds. The platform watches all of them.
        </h2>
        <span style={{ display: "block", marginTop: 16, fontFamily: mono, fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TXT_D2 }}>TRIAGE ON EVERY FEED</span>
        <p style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 15, lineHeight: 1.5, fontWeight: 400, color: TXT_D2 }}>
          It already knows the difference between a real event and a flapping tarp — because it reads through night, rain, fog, dust and motion blur.
        </p>

        {/* chain, stacked vertically */}
        <div style={{ position: "relative", marginTop: 40, paddingLeft: 20 }}>
          <div aria-hidden="true" style={{ position: "absolute", left: 3, top: 4, bottom: 4, width: 1, background: HAIR_D }} />
          {DETECT_CHAIN.map((s, i) => (
            <div key={s.title} style={{ position: "relative", marginBottom: i === DETECT_CHAIN.length - 1 ? 0 : 32 }}>
              <div aria-hidden="true" style={{ position: "absolute", left: -20, top: 4, width: 8, height: 8, borderRadius: 999, background: s.signal ? SIGNAL : TXT_D2 }} />
              <span style={{ display: "block", fontFamily: mono, fontSize: 15, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: TXT_D1 }}>{s.title}</span>
              <span style={{ display: "block", marginTop: 4, fontFamily: mono, fontSize: 13, fontWeight: 400, letterSpacing: "0.04em", color: TXT_D2 }}>{s.caption}</span>
            </div>
          ))}
        </div>

        {/* small feed-wall, 3 cols, one lit */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 40 }}>
          {Array.from({ length: 12 }).map((_, i) =>
            i === 4 ? (
              <div key={i} style={{ height: 70, border: `1.5px solid ${SIGNAL}`, background: "rgba(237,81,12,0.14)", boxSizing: "border-box" }} />
            ) : (
              <div key={i} style={{ height: 70, opacity: 0.45, border: `1px solid ${BORDER_D}`, boxSizing: "border-box", background: HATCH_M }} />
            )
          )}
        </div>

        <div aria-hidden="true" style={{ margin: "32px 0 0", width: "100%", height: 1, background: BORDER_D }} />
        <p style={{ margin: "16px 0 0", fontFamily: mono, fontSize: 13, lineHeight: 1.6, fontWeight: 400, color: TXT_D2 }}>
          It alerts and logs. It does not deter — it fires your alarm, your lights, your PA. We don&apos;t sell you a strobe.
        </p>
      </div>
    </section>
  );
}

/* ========================================================================= */

export default function VisoDataPage() {
  return (
    <>
      <CompressionAI />
      <TraceAI />
      <DetectAI />
    </>
  );
}
