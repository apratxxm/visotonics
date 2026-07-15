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

export default function BlogPage() {
  return (
    <section style={{ background: DARK }}>
      {/* DESKTOP */}
      <Reveal as="div" className="hidden md:block" style={{ position: "relative", maxWidth: 1232, margin: "0 auto", padding: "40px 88px 96px", boxSizing: "border-box" }}>
        <BlogList />
      </Reveal>

      {/* MOBILE (BlogList mobile prop renders the mobile-sized cards) */}
      <Reveal as="div" className="md:hidden" style={{ position: "relative", padding: "32px 24px 64px" }}>
        <BlogList mobile />
      </Reveal>
    </section>
  );
}
