import { Reveal } from "@/components/motion";
import { BlogList } from "./blog-list";

/* ---------------------------------------------------------------------------
   /resources/blog — "Blogs" index. Ported from Claude Design canvas
   VisoWarehouse-Section05-WorkVision-Explorations.dc.html, blog-index
   option 2a "Masthead — featured post over a grid".

   Content is the 5 real posts supplied directly (not sourced from the
   design canvas). Full post bodies live in posts.ts; card click opens the
   full post in a modal (blog-list.tsx, client) since there are no per-post
   routes/backend yet.

   Filter chips are static (design-only) — there's no per-category post
   backend yet.
--------------------------------------------------------------------------- */

const DARK = "#0A0B0E";
const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const MUTED = "#6D7480";
const BORDER_D = "rgba(244,245,247,0.18)";

const mono = "var(--font-plex-mono)";

const FILTERS = ["ALL", "COMPANY NEWS", "ENGINEERING", "CASE STUDIES", "INDUSTRY TRENDS"];

function FilterChips() {
  return (
    <div style={{ marginTop: 24, display: "flex", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
      <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: MUTED }}>FILTER BY:</span>
      {FILTERS.map((f, i) => (
        <span
          key={f}
          style={{
            fontFamily: mono,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.06em",
            padding: "6px 14px",
            borderRadius: 999,
            background: i === 0 ? TXT_D1 : "transparent",
            color: i === 0 ? DARK : TXT_D2,
            border: i === 0 ? "none" : `1px solid ${BORDER_D}`,
          }}
        >
          {f}
        </span>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <section style={{ background: DARK }}>
      {/* DESKTOP */}
      <Reveal as="div" className="hidden md:block" style={{ position: "relative", maxWidth: 1232, margin: "0 auto", padding: "64px 88px 96px", boxSizing: "border-box" }}>
        <span style={{ fontFamily: mono, fontSize: 40, fontWeight: 600, letterSpacing: "0.06em", color: TXT_D1 }}>BLOGS</span>
        <FilterChips />
        <div aria-hidden="true" style={{ marginTop: 24, height: 1, background: BORDER_D }} />
        <div style={{ marginTop: 40 }}>
          <BlogList />
        </div>
      </Reveal>

      {/* MOBILE (BlogList mobile prop renders the mobile-sized cards) */}
      <Reveal as="div" className="md:hidden" style={{ position: "relative", padding: "48px 24px 64px" }}>
        <span style={{ fontFamily: mono, fontSize: 28, fontWeight: 600, letterSpacing: "0.06em", color: TXT_D1 }}>BLOGS</span>
        <FilterChips />
        <div aria-hidden="true" style={{ marginTop: 20, height: 1, background: BORDER_D }} />
        <div style={{ marginTop: 28 }}>
          <BlogList mobile />
        </div>
      </Reveal>
    </section>
  );
}
