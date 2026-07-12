import type { CSSProperties } from "react";

/* ---------------------------------------------------------------------------
   Client Portal (Login / Register) — shared drafting-sheet primitives.
   Ported from Claude Design: Hero-DraftingTable.dc.html, Section 8
   (Login Variant B, Register). Same tokens as the home port / Viso Yard.
--------------------------------------------------------------------------- */

export const CANVAS_DARK = "#0A0B0E";
export const SURFACE_DARK = "#101216";
export const TXT_D1 = "#F4F5F7";
export const TXT_D2 = "#A6ADB8";
export const GRID_D = "rgba(244,245,247,0.08)";
export const CROSS_D = "rgba(244,245,247,0.3)";
export const BORDER_D = "rgba(244,245,247,0.10)";
export const BORDER_D_INPUT = "rgba(244,245,247,0.14)";
export const BORDER_D_OUTLINE = "rgba(244,245,247,0.28)";
export const SIGNAL = "#ED510C";

export const mono = "var(--font-plex-mono)";
export const sans = "var(--font-archivo)";

export const eyebrow = (color: string): CSSProperties => ({
  fontFamily: mono,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color,
});

export const inputStyle: CSSProperties = {
  height: 52,
  boxSizing: "border-box",
  background: CANVAS_DARK,
  border: `1px solid ${BORDER_D_INPUT}`,
  borderRadius: 6,
  padding: "0 16px",
  color: TXT_D1,
  fontFamily: sans,
  fontSize: 16,
  width: "100%",
};

// The 5 page-wide verticals: margins at 64 / (100%-64), interiors dividing
// the inset content into 4 equal columns — same coordinates as every other
// drafting sheet on the site so the grid reads continuous.
const V_X = ["64px", "calc(64px + (100% - 128px) * 0.25)", "50%", "calc(64px + (100% - 128px) * 0.75)", "calc(100% - 64px)"];
export function Verticals({ color }: { color: string }) {
  return (
    <>
      {V_X.map((x, i) => (
        <div key={i} aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, left: x, width: 1, background: color }} />
      ))}
    </>
  );
}

// L-corner registration brackets, four canvas corners.
export function CornerBrackets({ color }: { color: string }) {
  return (
    <>
      <div style={{ position: "absolute", left: 16, top: 16, width: 16, height: 16, borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}` }} />
      <div style={{ position: "absolute", right: 16, top: 16, width: 16, height: 16, borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}` }} />
      <div style={{ position: "absolute", left: 16, bottom: 16, width: 16, height: 16, borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}` }} />
      <div style={{ position: "absolute", right: 16, bottom: 16, width: 16, height: 16, borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}` }} />
    </>
  );
}

// 3px signal-orange registration dot.
export function Dot({ style }: { style: CSSProperties }) {
  return <div aria-hidden="true" style={{ position: "absolute", width: 3, height: 3, background: SIGNAL, ...style }} />;
}
