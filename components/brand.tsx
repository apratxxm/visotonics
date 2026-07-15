import type { CSSProperties } from "react";

type BrandProps = { height?: number; className?: string; style?: CSSProperties };

/**
 * Visotonics wordmark. The official artwork is a black wordmark on transparent
 * (visotonics-high-resolution-logo-transparent.png); the nav + footer are dark,
 * so it's inverted to white via CSS filter.
 */
// The source PNG has ~4% transparent margin baked in before the "V" starts
// (measured: opaque content begins at x=80 of a 2000×456 canvas). At a fixed
// render height that's a real, visible offset — a negative left margin pulls
// the glyph back to true left alignment with any text set beside/below it.
const LOGO_LEFT_INSET_RATIO = 80 / 456;

export function Brand({ height = 20, className, style }: BrandProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/visotonics-high-resolution-logo-transparent.png"
      alt="Visotonics"
      className={className}
      style={{ height, width: "auto", maxWidth: "none", flexShrink: 0, alignSelf: "flex-start", display: "block", filter: "invert(1)", marginLeft: -(height * LOGO_LEFT_INSET_RATIO), ...style }}
    />
  );
}
