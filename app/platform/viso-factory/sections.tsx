import type { CSSProperties } from "react";
import {
  ANCHOR_OFFSET,
  BORDER_D,
  BORDER_D_STRONG,
  CROSS_D,
  Cross,
  Dot,
  GRID_D,
  SIGNAL,
  TXT_D1,
  TXT_D2,
  eyebrow,
  mono,
  sans,
} from "../viso-yard/_shared";
import { Schematic } from "../viso-yard/_media";

/* ---------------------------------------------------------------------------
   Viso Factory — section modules.

   Audit / Dimension / Work / Secure are the Viso Warehouse designs, re-exported.

   Production Vision is ported from the VisoWarehouse-Overview canvas frame
   "Production Vision — the feed" (VISO-WAREHOUSE · SECTION 12C · DESKTOP 1360 +
   its Mobile 390 companion): a live line-feed demo slot, REC/EXIT overlays, and
   a COUNT · SKU ID · INSPECT · TRACE capability register.
--------------------------------------------------------------------------- */

export { SectionAudit, SectionDimension, SectionWork, SectionSecure } from "../viso-warehouse/sections";

const HAIR_STRONG = "rgba(244,245,247,0.24)";
const HAIR = "rgba(244,245,247,0.18)";
const SLOT_BORDER = "rgba(244,245,247,0.14)";

// dark-section eyebrow-row chrome (gridline through the eyebrow + one orange dot)
function EyebrowRule({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: mobile ? 64 : 120, height: 1, background: GRID_D, zIndex: 0 }} />
      <Dot style={{ left: mobile ? 23 : 63, top: mobile ? 63 : 119, zIndex: 1 }} />
    </>
  );
}

const REGISTER: [string, string][] = [
  ["COUNT", "this shift"],
  ["SKU ID", "read on the fly"],
  ["INSPECT", "defects flagged in-line"],
  ["TRACE", "unit-level history"],
];

const overlay = (color: string): CSSProperties => ({
  position: "absolute",
  zIndex: 2,
  fontFamily: mono,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.06em",
  color,
  whiteSpace: "nowrap",
});

/* =========================================================================
   01 · PRODUCTION VISION [CNT]  (dark) — "the feed"
   ========================================================================= */
export function SectionProduction() {
  return (
    <section id="production-vision" className={ANCHOR_OFFSET} style={{ position: "relative" }}>
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 0, height: 1, background: BORDER_D_STRONG, zIndex: 2 }} />
      <Cross color={CROSS_D} style={{ left: -4, top: -4, zIndex: 3 }} />
      <Cross color={CROSS_D} style={{ left: "calc(100% - 5px)", top: -4, zIndex: 3 }} />

      {/* DESKTOP */}
      <div className="hidden md:block" style={{ position: "relative", paddingBottom: 96 }}>
        <EyebrowRule />
        <div style={{ position: "relative", zIndex: 1, padding: "104px 64px 0" }}>
          <span style={{ ...eyebrow(TXT_D2), display: "block", paddingLeft: 24 }}>PRODUCTION VISION · COUNT · IDENTIFY · INSPECT</span>
          <h2 style={{ margin: "40px 0 0", paddingLeft: 6, maxWidth: 820, fontFamily: sans, fontSize: 40, lineHeight: 1.18, fontWeight: 600, letterSpacing: "-0.015em", color: TXT_D1 }}>
            One camera over the line — every unit counted, identified and inspected the moment it leaves the line.
          </h2>

          {/* demo slot — live line feed */}
          <div style={{ position: "relative", marginTop: 48, border: `1px solid ${SLOT_BORDER}`, boxSizing: "border-box", overflow: "hidden" }}>
            <Schematic
              file="factory-production-schematic-desktop.svg"
              label="Production line feed — units flowing past one camera, each counted, SKU-read and inspected in a single pass, with one defect flagged in-line"
              fit="width"
              style={{ display: "block", width: "100%" }}
            />
            <span style={{ ...overlay(SIGNAL), left: 24, top: 22 }}>● REC — DETECTION ZONE ACTIVE</span>
            <span style={{ ...overlay(TXT_D2), right: 24, top: 22 }}>LIVE LINE FEED — DEMO</span>
            <span style={{ ...overlay(TXT_D1), right: 24, top: "48%" }}>EXIT CONVEYOR ▸</span>
          </div>

          {/* capability register */}
          <div style={{ marginTop: 44, borderTop: `1px solid ${HAIR_STRONG}`, borderBottom: `1px solid ${HAIR}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "26px 0" }}>
              {REGISTER.map(([k, v]) => (
                <span key={k} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontFamily: mono, fontSize: 16, fontWeight: 500, letterSpacing: "0.06em", color: TXT_D1 }}>{k}</span>
                  <span style={{ fontFamily: mono, fontSize: 13, color: TXT_D2 }}>{v}</span>
                </span>
              ))}
            </div>
          </div>

          <p style={{ margin: "40px auto 0", maxWidth: 1000, textAlign: "center", fontFamily: sans, fontSize: 18, lineHeight: 1.5, fontWeight: 500, color: TXT_D2 }}>
            No manual tally, no separate inspection station — count, SKU and condition are read in the same pass, on the same camera.
          </p>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden" style={{ position: "relative", padding: "56px 24px 56px 40px" }}>
        <EyebrowRule mobile />
        <span style={{ ...eyebrow(TXT_D2), display: "block", fontSize: 11 }}>PRODUCTION VISION · COUNT · IDENTIFY · INSPECT</span>
        <h2 style={{ margin: "24px 0 0", fontFamily: sans, fontSize: 26, lineHeight: 1.2, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1 }}>
          One camera over the line — every unit counted, identified and inspected as it passes.
        </h2>
        <p style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 14, lineHeight: 1.5, color: TXT_D2 }}>
          No manual tally, no separate inspection station — count, SKU and condition are read in the same pass, on the same camera.
        </p>

        <span style={{ ...eyebrow(TXT_D2), display: "block", marginTop: 24, fontSize: 11 }}>LIVE LINE FEED — DEMO</span>
        <div style={{ position: "relative", marginTop: 8, border: `1px solid ${SLOT_BORDER}`, boxSizing: "border-box", overflow: "hidden" }}>
          <Schematic
            file="factory-production-schematic-mobile.svg"
            label="Production line feed — units flowing past one camera, counted, SKU-read and inspected, one defect flagged"
            fit="width"
            style={{ display: "block", width: "100%" }}
          />
          <span style={{ ...overlay(TXT_D1), left: 12, top: "17%", fontSize: 11 }}>◂ LINE 3</span>
          <span style={{ ...overlay(SIGNAL), left: 12, bottom: 12, fontSize: 11 }}>● REC — DETECTION ZONE ACTIVE</span>
        </div>

        <div style={{ marginTop: 24, borderTop: `1px solid ${HAIR_STRONG}`, borderBottom: `1px solid ${HAIR}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 16, padding: "20px 0" }}>
            {REGISTER.map(([k, v]) => (
              <span key={k} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", color: TXT_D1 }}>{k}</span>
                <span style={{ fontFamily: mono, fontSize: 12, color: TXT_D2 }}>{v}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
