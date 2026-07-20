import DecryptedText from "@/components/decrypted-text";
import { JsonLd, productSchema } from "@/components/json-ld";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/motion";
import { WarehouseRailDesktop, WarehouseRulerMobile } from "./rail";
import { Convert } from "./convert";
import {
  SectionAudit,
  SectionCargo,
  SectionDimension,
  SectionDocument,
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
   /platform/viso-warehouse — page assembly (hero manifest + rail + 6 sections).
   Ported from VisoWarehouse-Overview.dc.html.

   Scroll order (hero manifest):
     hero → 01 CARGO → 02 AUDIT → 03 DIMENSION[light] → 04 DOCUMENT
     → 05 WORK → 06 SECURE → Convert (closing bookend).
   Cargo + Document are the Viso Yard components, reused verbatim.
--------------------------------------------------------------------------- */

const MANIFEST = [
  { n: "01", name: "CARGO VISION", desc: "count with proof", id: "cargo-vision" },
  { n: "02", name: "AUDIT VISION", desc: "event-linked proof", id: "audit-vision" },
  { n: "03", name: "DIMENSION VISION", desc: "volumetric capture", id: "dimension-vision" },
  { n: "04", name: "DOCUMENT VISION", desc: "key-value extraction", id: "document-vision" },
  { n: "05", name: "WORK VISION", desc: "attendance from the cameras", id: "work-vision" },
  { n: "06", name: "SECURE VISION", desc: "alerts and logs", id: "secure-vision" },
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
        <span style={{ ...eyebrow(TXT_D2), display: "block", paddingLeft: 24 }}>OUR PLATFORM — YOUR CAMERAS · INBOUND TO OUTBOUND</span>
        <h1 style={{ margin: "72px 0 0", paddingLeft: 6, fontFamily: sans, fontSize: 136, lineHeight: 1, fontWeight: 600, letterSpacing: "-0.035em", textTransform: "uppercase", color: TXT_D1 }}>
          <DecryptedText text="Viso Warehouse" animateOn="view" sequential revealDirection="start" speed={55} encryptedClassName="v-enc" />
        </h1>
        <p style={{ margin: "40px 0 0", paddingLeft: 24, maxWidth: 592, fontFamily: sans, fontSize: 20, lineHeight: 1.5, color: TXT_D1 }}>
          Every case counted, every pallet dimensioned, every order proven — on the cameras already covering your floor.
        </p>
      </div>

      {/* MOBILE — keeps the manifest list (the products grid below the hero
          is desktop-only) */}
      <div className="md:hidden" style={{ position: "relative", zIndex: 1, padding: "40px 24px 0" }}>
        <span style={{ ...eyebrow(TXT_D2), fontSize: 11 }}>OUR PLATFORM — YOUR CAMERAS · INBOUND TO OUTBOUND</span>
        <h1 style={{ margin: "24px 0 0", fontFamily: sans, fontSize: 54, lineHeight: 0.98, fontWeight: 600, letterSpacing: "-0.035em", textTransform: "uppercase", color: TXT_D1 }}>
          <DecryptedText text="Viso Warehouse" animateOn="view" sequential revealDirection="start" speed={55} encryptedClassName="v-enc" />
        </h1>
        <p style={{ margin: "32px 0 0", fontFamily: sans, fontSize: 18, lineHeight: 1.5, color: TXT_D1 }}>
          Every case counted, every pallet dimensioned, every order proven — on the cameras already covering your floor.
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
  title: "Viso Warehouse — Warehouse & DC Vision",
  description:
    "Every case counted, every pallet dimensioned, every order proven — on the cameras already covering your floor. Cargo counting, dimensioning, document extraction, attendance and security for warehouses and distribution centres.",
  path: "/platform/viso-warehouse",
});

export default function VisoWarehousePage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "Viso Warehouse",
          description:
            "AI vision for warehouses and distribution centres — case counting, pallet dimensioning, document extraction, attendance and security from existing CCTV.",
          path: "/platform/viso-warehouse",
          features: [
            "Cargo Vision — count with proof",
            "Audit Vision — event-linked proof",
            "Dimension Vision — volumetric capture",
            "Document Vision — key-value extraction",
            "Work Vision — attendance from the cameras",
            "Secure Vision — alerts and logs",
          ],
        })}
      />
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
              <Reveal as="div"><SectionProductsOverview /></Reveal>
              <Reveal as="div"><SectionCargo n="01" /></Reveal>
              <Reveal as="div"><SectionAudit /></Reveal>
              {/* Dimension is a light band — Reveal wraps inside it (sections.tsx) so the background paints immediately */}
              <SectionDimension />
              <Reveal as="div"><SectionDocument n="04" /></Reveal>
              <Reveal as="div"><SectionWork /></Reveal>
              <Reveal as="div"><SectionSecure /></Reveal>
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
