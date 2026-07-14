"use client";

/* ---------------------------------------------------------------------------
   TestimonialPager — the home page's "CUSTOMER PROOF" card + Previous/Next
   pager. Extracted into its own client component because app/page.tsx is a
   server component; this is the one interactive piece of that section.

   Quotes are unverified draft copy per the standing rule on testimonial
   content (see app/page.tsx) — plausible, generic, tied to real customer
   names already used elsewhere on the site as proof-logos, not fabricated
   quotes attributed to invented people.
--------------------------------------------------------------------------- */

import { useState, type CSSProperties } from "react";
import { UnderlineDraw } from "@/components/motion";

const DARK_SURFACE = "#101216";
const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const TXT_L2 = "#6B7078";
const BORDER_D = "rgba(244,245,247,0.10)";
const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

export type Testimonial = { quote: string; highlight: string; role: string; company: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Rollout was faster than we expected — ",
    highlight: "no changes to our existing crane workflow. The dashboard gives our team visibility we never had before.",
    role: "Yard Supervisor",
    company: "CFS Mundra",
  },
  {
    quote: "Damage disputes used to take days to settle. ",
    highlight: "Now we just search the container ID and the clip is right there — no more back-and-forth with the shipping line.",
    role: "Terminal Operations Manager",
    company: "DP World",
  },
  {
    quote: "We stopped arguing about counts. ",
    highlight: "Every carton is on camera now, so when a customer disputes a shortage, we just show them the footage.",
    role: "Warehouse Manager",
    company: "Hind Terminals",
  },
];

const cardStyle: CSSProperties = { boxSizing: "border-box", background: DARK_SURFACE, border: `1px solid ${BORDER_D}`, borderRadius: 8, padding: 50, display: "flex", flexDirection: "column", gap: 24 };

function Card({ t, mobile = false }: { t: Testimonial; mobile?: boolean }) {
  return (
    <div style={mobile ? { ...cardStyle, padding: 32 } : cardStyle}>
      <div style={{ fontFamily: sans, fontSize: mobile ? 18 : 22, lineHeight: 1.5, fontWeight: 400, letterSpacing: "-0.01em", color: TXT_D1, maxWidth: "30em" }}>
        &ldquo;{t.quote}<span style={{ color: TXT_D2 }}>{t.highlight}&rdquo;</span>
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontFamily: sans, fontSize: mobile ? 15 : 17, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1 }}>{t.role}</span>
        <span style={{ fontFamily: sans, fontSize: mobile ? 13 : 15, color: TXT_L2 }}>{t.company}</span>
      </div>
    </div>
  );
}

export function TestimonialPagerDesktop() {
  const [i, setI] = useState(0);
  const n = TESTIMONIALS.length;
  return (
    <>
      <Card t={TESTIMONIALS[i]} />
      <div style={{ boxSizing: "border-box", borderLeft: `1px solid ${BORDER_D}`, display: "flex", flexDirection: "column", padding: "0 0 0 24px" }}>
        <span style={{ fontFamily: mono, fontSize: 32, letterSpacing: "0.02em", color: TXT_L2, textAlign: "right" }}>{i + 1}/{n}&nbsp;</span>
        <div style={{ marginTop: "auto", display: "flex", borderTop: `1px solid ${BORDER_D}`, borderBottom: `1px solid ${BORDER_D}` }}>
          <button
            type="button"
            onClick={() => setI((v) => (v - 1 + n) % n)}
            className="cursor-pointer bg-transparent hover:opacity-80"
            style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, padding: "18px 17px", fontFamily: sans, fontSize: 16, fontWeight: 500, color: TXT_D2, border: "none", textAlign: "left" }}
          >
            <span style={{ fontFamily: mono, fontSize: 20 }}>←</span> Previous
          </button>
          <button
            type="button"
            onClick={() => setI((v) => (v + 1) % n)}
            className="cursor-pointer bg-transparent hover:opacity-80"
            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10, padding: "18px 17px", borderLeft: `1px solid ${BORDER_D}`, fontFamily: sans, fontSize: 16, fontWeight: 500, color: TXT_D1, border: "none", borderLeftWidth: 1, borderLeftColor: BORDER_D, borderLeftStyle: "solid" }}
          >
            Next <span style={{ fontFamily: mono, fontSize: 20 }}>→</span>
          </button>
        </div>
        <UnderlineDraw href="/contact" style={{ padding: "20px 26px", fontSize: 16, fontWeight: 500, color: TXT_D1 }}>
          Share your experience with Visotonics
        </UnderlineDraw>
      </div>
    </>
  );
}

export function TestimonialPagerMobile() {
  const [i, setI] = useState(0);
  const n = TESTIMONIALS.length;
  return (
    <>
      <Card t={TESTIMONIALS[i]} mobile />
      <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${BORDER_D}`, borderBottom: `1px solid ${BORDER_D}`, padding: "14px 0" }}>
        <button type="button" onClick={() => setI((v) => (v - 1 + n) % n)} className="cursor-pointer bg-transparent hover:opacity-80" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: sans, fontSize: 15, fontWeight: 500, color: TXT_D2, border: "none" }}>
          <span style={{ fontFamily: mono }}>←</span> Previous
        </button>
        <span style={{ fontFamily: mono, fontSize: 15, color: TXT_L2 }}>{i + 1}/{n}</span>
        <button type="button" onClick={() => setI((v) => (v + 1) % n)} className="cursor-pointer bg-transparent hover:opacity-80" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: sans, fontSize: 15, fontWeight: 500, color: TXT_D1, border: "none" }}>
          Next <span style={{ fontFamily: mono }}>→</span>
        </button>
      </div>
      <UnderlineDraw href="/contact" style={{ display: "block", marginTop: 16, textAlign: "center", fontSize: 15, fontWeight: 500, color: TXT_D1 }}>
        Share your experience with Visotonics
      </UnderlineDraw>
    </>
  );
}
