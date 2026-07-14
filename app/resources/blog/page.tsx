import { Reveal } from "@/components/motion";

/* ---------------------------------------------------------------------------
   /resources/blog — "Blogs" index. Ported from Claude Design canvas
   VisoWarehouse-Section05-WorkVision-Explorations.dc.html, blog-index
   option 2a "Masthead — featured post over a 3-up grid" (design refetched —
   this revision replaced the old placeholder posts with real titles/images).

   Filter chips are static (design-only) — there's no per-category post
   backend yet. Cards aren't links: no individual post pages exist yet, so
   linking them to unrelated product anchors would be misleading.
--------------------------------------------------------------------------- */

const DARK = "#0A0B0E";
const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const MUTED = "#6D7480";
const BORDER_D = "rgba(244,245,247,0.18)";
const BORDER_D_SOFT = "rgba(244,245,247,0.10)";
const SIGNAL = "#ED510C";

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

const FILTERS = ["ALL", "COMPANY NEWS", "ENGINEERING", "CASE STUDIES", "INDUSTRY TRENDS"];

type Post = { tag: string; img: string; title: string; date?: string; readTime: string; byline?: string };

const FEATURED: Post = {
  tag: "COMPANY",
  img: "https://c.animaapp.com/ibuebEyz/img/img.png",
  title: "The Hidden Cost of Damaged Containers",
  date: "16 MAR 2026",
  readTime: "5 MIN READ",
  byline: "JOHN SMITH",
};

const GRID_POSTS: Post[] = [
  { tag: "ENGINEERING", img: "https://c.animaapp.com/ibuebEyz/img/img-1.png", title: "Why Your Terminal Gate Is Your Biggest Operational Blind Spot", date: "16 MAR 2026", readTime: "5 MIN" },
  { tag: "CASE STUDIES", img: "https://c.animaapp.com/ibuebEyz/img/img-4.png", title: "IIT Kanpur summit", readTime: "5 MIN READ" },
  { tag: "ENGINEERING", img: "https://c.animaapp.com/ibuebEyz/img/img-5.png", title: "Mumbai Dec 2025", readTime: "12 MIN READ" },
  { tag: "COMPANY NEWS", img: "https://c.animaapp.com/ibuebEyz/img/img-6.png", title: "Lucknow Yogi's summit", readTime: "3 MIN READ" },
  { tag: "ENGINEERING", img: "https://c.animaapp.com/ibuebEyz/img/img-7.png", title: "And other accolades", readTime: "7 MIN READ" },
  { tag: "CASE STUDIES", img: "https://c.animaapp.com/ibuebEyz/img/img-8.png", title: "2 Patents", readTime: "4 MIN READ" },
];

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

function PostImage({ src, alt, height }: { src: string; alt: string; height: number }) {
  return (
    <div style={{ border: `1px solid ${BORDER_D}`, boxSizing: "border-box", overflow: "hidden", height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
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

        {/* featured post */}
        <div>
          <PostImage src={FEATURED.img} alt={FEATURED.title} height={480} />
          <span style={{ display: "block", marginTop: 28, fontFamily: mono, fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL }}>{FEATURED.tag}</span>
          <h2 style={{ margin: "12px 0 0", maxWidth: 780, fontFamily: sans, fontSize: 40, lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1 }}>{FEATURED.title}</h2>
          <p style={{ margin: "16px 0 0", maxWidth: 700, fontFamily: sans, fontSize: 16, lineHeight: 1.6, color: TXT_D2 }}>
            A 40-foot container arrives at your terminal on a busy morning. The surveyor is stretched, the gate queue is long, and the box moves through without a damage flag.
          </p>
          <span style={{ display: "block", marginTop: 16, fontFamily: mono, fontSize: 12, letterSpacing: "0.06em", color: MUTED }}>{FEATURED.date} · {FEATURED.readTime} · {FEATURED.byline}</span>
        </div>

        <div aria-hidden="true" style={{ marginTop: 48, height: 1, background: BORDER_D_SOFT }} />

        {/* 3-up grid (2 rows of 3) */}
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 32 }}>
          {GRID_POSTS.map((p) => (
            <div key={p.title}>
              <PostImage src={p.img} alt={p.title} height={210} />
              <span style={{ display: "block", marginTop: 16, fontFamily: mono, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL }}>{p.tag}</span>
              <h3 style={{ margin: "8px 0 0", fontFamily: sans, fontSize: 19, lineHeight: 1.3, fontWeight: 600, color: TXT_D1 }}>{p.title}</h3>
              <span style={{ display: "block", marginTop: 10, fontFamily: mono, fontSize: 11, letterSpacing: "0.06em", color: MUTED }}>{p.date ? `${p.date} · ` : ""}{p.readTime}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* MOBILE */}
      <Reveal as="div" className="md:hidden" style={{ position: "relative", padding: "48px 24px 64px" }}>
        <span style={{ fontFamily: mono, fontSize: 28, fontWeight: 600, letterSpacing: "0.06em", color: TXT_D1 }}>BLOGS</span>
        <FilterChips />
        <div aria-hidden="true" style={{ marginTop: 20, height: 1, background: BORDER_D }} />

        <div>
          <PostImage src={FEATURED.img} alt={FEATURED.title} height={220} />
          <span style={{ display: "block", marginTop: 20, fontFamily: mono, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL }}>{FEATURED.tag}</span>
          <h2 style={{ margin: "10px 0 0", fontFamily: sans, fontSize: 26, lineHeight: 1.2, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1 }}>{FEATURED.title}</h2>
          <p style={{ margin: "12px 0 0", fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: TXT_D2 }}>
            A 40-foot container arrives at your terminal on a busy morning. The surveyor is stretched, the gate queue is long, and the box moves through without a damage flag.
          </p>
          <span style={{ display: "block", marginTop: 12, fontFamily: mono, fontSize: 11, letterSpacing: "0.06em", color: MUTED }}>{FEATURED.date} · {FEATURED.readTime} · {FEATURED.byline}</span>
        </div>

        <div aria-hidden="true" style={{ marginTop: 36, height: 1, background: BORDER_D_SOFT }} />

        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 32 }}>
          {GRID_POSTS.map((p) => (
            <div key={p.title}>
              <PostImage src={p.img} alt={p.title} height={180} />
              <span style={{ display: "block", marginTop: 14, fontFamily: mono, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL }}>{p.tag}</span>
              <h3 style={{ margin: "6px 0 0", fontFamily: sans, fontSize: 18, lineHeight: 1.3, fontWeight: 600, color: TXT_D1 }}>{p.title}</h3>
              <span style={{ display: "block", marginTop: 8, fontFamily: mono, fontSize: 11, color: MUTED }}>{p.date ? `${p.date} · ` : ""}{p.readTime}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
