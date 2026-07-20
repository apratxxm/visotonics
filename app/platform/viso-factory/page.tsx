import DecryptedText from "@/components/decrypted-text";
import { JsonLd, productSchema } from "@/components/json-ld";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/motion";
import { FactoryRailDesktop, FactoryRulerMobile } from "./rail";
import { Convert } from "./convert";
import {
  SectionAudit,
  SectionDimension,
  SectionProduction,
  SectionProductsOverview,
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
   /platform/viso-factory — page assembly (hero manifest + rail + 5 sections).
   Ported from the VisoWarehouse-Overview canvas (the VISO FACTORY hero frame).

   Scroll order (hero manifest):
     hero → 01 PRODUCTION → 02 AUDIT → 03 DIMENSION[light] → 04 WORK → 05 SECURE
     → Convert (closing bookend).

   Notes:
   - Production Vision has no canvas design; it is authored from the approved
     copy (see sections.tsx).
   - Audit / Dimension / Work / Secure are the Viso Warehouse components, reused.
   - The canvas hero sentence was warehouse placeholder copy under a FACTORY
     title; replaced here with the approved Manufacturing line from
     basic_content-industries.docx.
--------------------------------------------------------------------------- */

const MANIFEST = [
  { n: "01", name: "PRODUCTION VISION", desc: "count, SKU and damage per shift", id: "production-vision" },
  { n: "02", name: "AUDIT VISION", desc: "event-linked proof", id: "audit-vision" },
  { n: "03", name: "DIMENSION VISION", desc: "volumetric capture", id: "dimension-vision" },
  { n: "04", name: "WORK VISION", desc: "attendance from the cameras", id: "work-vision" },
  { n: "05", name: "SECURE VISION", desc: "alerts and logs", id: "secure-vision" },
];

function ManifestLine({ item }: { item: (typeof MANIFEST)[number] }) {
  return (
    <a href={`#${item.id}`} className="flex items-baseline" style={{ height: 40, textDecoration: "none", color: TXT_D2 }}>
      <span style={{ fontFamily: mono, fontSize: 15, letterSpacing: "0.04em", width: 34, flex: "0 0 34px" }}>{item.n}</span>
      <span style={{ fontFamily: mono, fontSize: 15, letterSpacing: "0.04em", textTransform: "uppercase", color: TXT_D1 }}>{item.name}</span>
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
      <div className="hidden md:block" style={{ position: "relative", zIndex: 1, padding: "104px 64px 48px", boxSizing: "border-box" }}>
        <span style={{ ...eyebrow(TXT_D2), display: "block", paddingLeft: 24 }}>OUR PLATFORM — YOUR CAMERAS · ON THE LINE</span>
        <h1 style={{ margin: "72px 0 0", paddingLeft: 6, fontFamily: sans, fontSize: 136, lineHeight: 1, fontWeight: 600, letterSpacing: "-0.035em", textTransform: "uppercase", color: TXT_D1 }}>
          <DecryptedText text="Viso Factory" animateOn="view" sequential revealDirection="start" speed={55} encryptedClassName="v-enc" />
        </h1>
        <p style={{ margin: "40px 0 0", paddingLeft: 24, maxWidth: 620, fontFamily: sans, fontSize: 20, lineHeight: 1.5, color: TXT_D1 }}>
          Production and process, watched continuously — from the cameras already on your line.
        </p>
      </div>

      {/* MOBILE — keeps the manifest list (the products grid below the hero
          is desktop-only) */}
      <div className="md:hidden" style={{ position: "relative", zIndex: 1, padding: "40px 24px 0" }}>
        <span style={{ ...eyebrow(TXT_D2), fontSize: 11 }}>OUR PLATFORM — YOUR CAMERAS · ON THE LINE</span>
        <h1 style={{ margin: "24px 0 0", fontFamily: sans, fontSize: 54, lineHeight: 0.98, fontWeight: 600, letterSpacing: "-0.035em", textTransform: "uppercase", color: TXT_D1 }}>
          <DecryptedText text="Viso Factory" animateOn="view" sequential revealDirection="start" speed={55} encryptedClassName="v-enc" />
        </h1>
        <p style={{ margin: "32px 0 0", fontFamily: sans, fontSize: 18, lineHeight: 1.5, color: TXT_D1 }}>
          Production and process, watched continuously — from the cameras already on your line.
        </p>
        <div style={{ margin: "40px 0 0", display: "flex", flexDirection: "column" }}>
          {MANIFEST.map((m) => (
            <a key={m.id} href={`#${m.id}`} style={{ display: "flex", alignItems: "baseline", height: 34, textDecoration: "none", color: TXT_D2 }}>
              <span style={{ fontFamily: mono, fontSize: 13, width: 28, flex: "0 0 28px" }}>{m.n}</span>
              <span style={{ fontFamily: mono, fontSize: 13, textTransform: "uppercase", color: TXT_D1 }}>{m.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */

export const metadata = pageMeta({
  title: "Viso Factory — Production & Line Vision",
  description:
    "Production and process, watched continuously — from the cameras already on your line. Per-shift count, SKU and damage tracking, dimensioning, attendance and security for manufacturing.",
  path: "/platform/viso-factory",
});

export default function VisoFactoryPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "Viso Factory",
          description:
            "AI vision for manufacturing lines — production count, SKU and damage detection per shift, dimensioning, attendance and security from existing CCTV.",
          path: "/platform/viso-factory",
          features: [
            "Production Vision — count, SKU and damage per shift",
            "Audit Vision — event-linked proof",
            "Dimension Vision — volumetric capture",
            "Work Vision — attendance from the cameras",
            "Secure Vision — alerts and logs",
          ],
        })}
      />
      <FactoryRulerMobile />

      <div style={{ position: "relative", background: CANVAS_DARK }}>
        <div style={{ maxWidth: 1620, margin: "0 auto", display: "flex", alignItems: "flex-start" }}>
          <FactoryRailDesktop />

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
              <Reveal as="div"><SectionProductsOverview /></Reveal>
              <Reveal as="div"><SectionProduction /></Reveal>
              <Reveal as="div"><SectionAudit /></Reveal>
              {/* Dimension is a light band — Reveal wraps inside it (viso-warehouse/sections.tsx) so the background paints immediately */}
              <SectionDimension />
              <Reveal as="div"><SectionWork n="04" /></Reveal>
              <Reveal as="div"><SectionSecure n="05" /></Reveal>
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
