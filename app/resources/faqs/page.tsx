"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

/* ---------------------------------------------------------------------------
   /resources/faqs
   Ported from Claude Design: Hero-DraftingTable.dc.html, Section 9 ·
   FAQ · Variant B · sidebar + accordion, light gridline · 1440×900.
--------------------------------------------------------------------------- */

const LIGHT = "#ECEDEF";
const TXT_L1 = "#13151A";
const TXT_L2 = "#6B7078";
const GRID_L = "rgba(19,21,26,0.06)";
const CROSS_L = "rgba(19,21,26,0.30)";
const RULE_L = "#D4D6DB";
const SIGNAL = "#ED510C";

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

const CATEGORIES = ["General", "Build", "Promote", "Manage", "Integrations", "Legal"] as const;

const FAQS = [
  {
    q: "What is Visotonics?",
    a: "Visotonics is a computer-vision platform that reads container, gate, warehouse and factory footage from cameras you already have — no new hardware required.",
  },
  {
    q: "How does it read damage automatically?",
    a: "Every checkpoint — gate in, crane on, crane off, gate out — is compared frame to frame. The platform detects, segments and classifies dents, rust and cracks down to the mm², then logs a tamper-evident record automatically.",
  },
  {
    q: "Is Visotonics right for my terminal?",
    a: "If cameras are already watching your gate, yard, warehouse or factory floor, Visotonics can run on that footage — no new hardware. It's built for ports, ICDs, CFS yards, block-stacking warehouses, manufacturing lines and tank storage.",
  },
  {
    q: "What does deployment cost?",
    a: "Pricing depends on camera count and site footprint. Reach out via Contact and we'll scope it against your existing CCTV within a day.",
  },
];

const eyebrow = (color: string): CSSProperties => ({
  fontFamily: mono,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color,
});

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

function CornerBrackets({ color }: { color: string }) {
  return (
    <>
      <div style={{ position: "absolute", left: 16, top: 16, width: 16, height: 16, borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}` }} />
      <div style={{ position: "absolute", right: 16, top: 16, width: 16, height: 16, borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}` }} />
      <div style={{ position: "absolute", left: 16, bottom: 16, width: 16, height: 16, borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}` }} />
      <div style={{ position: "absolute", right: 16, bottom: 16, width: 16, height: 16, borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}` }} />
    </>
  );
}

function Dot({ style }: { style: CSSProperties }) {
  return <div aria-hidden="true" style={{ position: "absolute", width: 3, height: 3, background: SIGNAL, ...style }} />;
}

function AccordionItem({ item, open, onToggle, first }: { item: (typeof FAQS)[number]; open: boolean; onToggle: () => void; first: boolean }) {
  return (
    <div style={{ marginTop: first ? 0 : 24, borderTop: `1px solid ${RULE_L}`, paddingTop: 24 }}>
      <button
        type="button"
        onClick={onToggle}
        className="cursor-pointer bg-transparent p-0"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "left", gap: 16 }}
      >
        <span style={{ fontFamily: sans, fontSize: 19, fontWeight: 600, color: TXT_L1 }}>{item.q}</span>
        <span
          aria-hidden="true"
          style={{
            flex: "0 0 auto",
            width: 34,
            height: 34,
            borderRadius: 999,
            background: open ? SIGNAL : "transparent",
            border: open ? "none" : "1px solid rgba(19,21,26,0.16)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 17,
            color: open ? "#FFFFFF" : TXT_L2,
          }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? (
        <p style={{ margin: "14px 0 0", fontSize: 16, lineHeight: 1.6, color: TXT_L2, maxWidth: "72ch" }}>{item.a}</p>
      ) : null}
    </div>
  );
}

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ position: "relative", background: LIGHT, minHeight: 900 }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div className="hidden md:block" style={{ position: "absolute", inset: 0 }}>
          <Verticals color={GRID_L} />
        </div>
        <CornerBrackets color={CROSS_L} />
        <Dot style={{ left: "calc(64px + (100% - 128px) * 0.25)", bottom: 148 }} />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid" style={{ position: "relative", zIndex: 1, boxSizing: "border-box", padding: "80px 64px", gridTemplateColumns: "264px 1fr", gap: 64, minHeight: 900 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ ...eyebrow(TXT_L2), marginBottom: 16 }}>Categories</span>
          {CATEGORIES.map((c) => (
            <a
              key={c}
              href={`#${c.toLowerCase()}`}
              className={c === "General" ? "" : "hover:opacity-70"}
              style={{
                padding: "10px 14px",
                borderRadius: 6,
                background: c === "General" ? TXT_L1 : "transparent",
                fontFamily: sans,
                fontSize: 16,
                fontWeight: c === "General" ? 600 : 500,
                color: c === "General" ? "#F4F5F7" : TXT_L2,
                textDecoration: "none",
              }}
            >
              {c}
            </a>
          ))}
        </div>

        <div id="general">
          <span style={{ display: "block", ...eyebrow(TXT_L2) }}>General Questions</span>
          <h1 style={{ margin: "12px 0 0", fontFamily: sans, fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_L1 }}>
            Everything about the platform.
          </h1>

          <div style={{ marginTop: 36 }}>
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} item={item} first={i === 0} open={openIndex === i} onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))} />
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", zIndex: 1, padding: "40px 20px 56px" }}>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 8 }}>
          {CATEGORIES.map((c) => (
            <a
              key={c}
              href={`#${c.toLowerCase()}`}
              style={{
                flex: "0 0 auto",
                padding: "8px 14px",
                borderRadius: 999,
                background: c === "General" ? TXT_L1 : "transparent",
                border: c === "General" ? "none" : `1px solid ${RULE_L}`,
                fontFamily: sans,
                fontSize: 14,
                fontWeight: c === "General" ? 600 : 500,
                color: c === "General" ? "#F4F5F7" : TXT_L2,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {c}
            </a>
          ))}
        </div>

        <div id="general-mobile" style={{ marginTop: 28 }}>
          <span style={{ display: "block", ...eyebrow(TXT_L2), fontSize: 11 }}>General Questions</span>
          <h1 style={{ margin: "12px 0 0", fontFamily: sans, fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_L1 }}>
            Everything about the platform.
          </h1>

          <div style={{ marginTop: 28 }}>
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} item={item} first={i === 0} open={openIndex === i} onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
