import { ImageResponse } from "next/og";

/* ---------------------------------------------------------------------------
   Site-wide OpenGraph / social card (1200×630). This is the branded image
   Google and social unfurlers show for the site — replaces the stale
   "globe placeholder" that was appearing. Generated with next/og (flexbox
   subset only). Individual routes inherit this unless they define their own.
--------------------------------------------------------------------------- */

export const alt = "Visotonics — Vision-AI Platform for Industrial Operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CANVAS = "#0A0B0E";
const INK = "#F4F5F7";
const SUB = "#8A9099";
const SIGNAL = "#ED510C";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: CANVAS,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row — eyebrow + signal dot */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 14,
              height: 14,
              background: SIGNAL,
              marginRight: 18,
            }}
          />
          <div
            style={{
              color: SUB,
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Vision-AI Platform
          </div>
        </div>

        {/* wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: INK,
              fontSize: 108,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Visotonics
          </div>
          <div
            style={{
              color: SUB,
              fontSize: 38,
              marginTop: 28,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Yards, warehouses and factories — inspected and monitored from the
            CCTV you already own.
          </div>
        </div>

        {/* baseline rule */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, height: 1, background: "rgba(244,245,247,0.15)" }} />
          <div style={{ color: SUB, fontSize: 24, marginLeft: 24, letterSpacing: 2 }}>
            visotonics.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
