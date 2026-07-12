import type { CSSProperties } from "react";

/* ---------------------------------------------------------------------------
   /company/about
   Ported from Claude Design: Hero-DraftingTable.dc.html —
   Section 13 · About us · 1440×900 (top), then
   Section 12 · Team · Variant D · sparse 2-col (below).
--------------------------------------------------------------------------- */

const CANVAS_DARK = "#0A0B0E";
const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const TXT_D3 = "#6B7078";
const BORDER_D = "rgba(244,245,247,0.10)";
const SIGNAL = "#ED510C";

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

const eyebrow: CSSProperties = {
  fontFamily: mono,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: TXT_D2,
};

const STATS = [
  { n: "6", label: "Patents", accent: false },
  { n: "15+", label: "Deep-tech experts", accent: false },
  { n: "99.8%", label: "Detection accuracy", accent: true },
  { n: "10+", label: "Core IPs", accent: false },
];

const BRANDS = [
  { name: "Checko", strong: true },
  { name: "Upjao", strong: true },
  { name: "Tracksure", strong: false },
  { name: "BovTag", strong: false },
  { name: "BillionTests", strong: false },
  { name: "MilkoChecko", strong: false },
];

const TEAM = [
  { name: "Pranav Asthana", role: "COFOUNDER (BUSINESS)", founder: true, bio: "Cofounded Checko, Upjao. 20+ research papers, 10+ patents. Ex-Intel, IIT Kanpur.", image: "/images/team/pranav-asthana.png" },
  { name: "Ritu Mishra", role: "COFOUNDER (PRODUCT)", founder: true, bio: "Cofounded Upjao. 7 years building deep tech products. Ex-researcher at NCFlexe, IIT Kanpur.", image: "/images/team/ritu-mishra.png" },
  { name: "Mohini Behera", role: "COFOUNDER (TECH)", founder: true, bio: "Cofounded Upjao. Developed 10+ AI products for large enterprises. IIT Jodhpur, NIT Rourkela.", image: "/images/team/mohini-behera.png" },
  { name: "Ravish Sangani", role: "SVP (MARKETING)", founder: false, bio: "Founded multiple rubber manufacturing units, ran pan-India sales. 20+ years of experience.", image: "/images/team/ravish-sangani.png" },
  { name: "Gurudev Singh", role: "SVP (CONTAINER BUSINESS)", founder: false, bio: "15+ years in shipping. Ex-Econship Marine. MBA in Port & Logistics.", image: "/images/team/gurudev-singh.png" },
  { name: "Shreyan Awasthi", role: "PARTNERSHIP MANAGER", founder: false, bio: "Cofounded Externship. 4 years in B2B sales & marketing. Ex-researcher at IIT Hyderabad.", image: "/images/team/shreyan.webp" },
];

function AboutSection() {
  return (
    <div style={{ maxWidth: 1440, margin: "0 auto", boxSizing: "border-box" }} className="px-6 py-14 md:p-24">
      <span style={eyebrow}>About us</span>
      <h1 className="text-3xl md:text-[44px]" style={{ margin: "20px 0 0", fontFamily: sans, lineHeight: 1.2, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1, maxWidth: "22ch" }}>
        Builders of AI for the physical world.
      </h1>
      <p style={{ margin: "24px 0 0", fontSize: 18, lineHeight: 1.6, color: TXT_D2, maxWidth: "62ch" }}>
        We operate where complexity is highest — yards, gates, warehouses and terminals — turning messy, real-world visual operations into
        measurable intelligence, from damage inspection to gate automation and cargo counting.
      </p>

      {/* stats band */}
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ marginTop: 64, borderTop: `1px solid ${BORDER_D}` }}>
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              borderRight: i === STATS.length - 1 ? "none" : `1px solid ${BORDER_D}`,
              padding: i === 0 ? "32px 32px 0 0" : "32px 32px 0 32px",
            }}
          >
            <span className="text-4xl md:text-[56px]" style={{ display: "block", fontFamily: sans, fontWeight: 500, letterSpacing: "-0.02em", color: s.accent ? SIGNAL : TXT_D1 }}>{s.n}</span>
            <span style={{ display: "block", marginTop: 8, fontFamily: mono, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: TXT_D2 }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* founder track record timeline */}
      <div style={{ marginTop: 64, borderTop: `1px solid ${BORDER_D}`, paddingTop: 32 }}>
        <span style={{ display: "block", fontFamily: mono, fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", color: SIGNAL }}>FOUNDER TRACK RECORD</span>
        <span style={{ display: "block", marginTop: 12, fontFamily: sans, fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1 }}>A decade of founder-built brands.</span>
        <div className="hidden md:flex" style={{ marginTop: 40, position: "relative", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div aria-hidden="true" style={{ position: "absolute", left: 6, right: 6, top: 6, height: 1, background: "rgba(244,245,247,0.14)" }} />
          {BRANDS.map((b) => (
            <div key={b.name} style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, width: 100 }}>
              <span style={{ width: 12, height: 12, borderRadius: 999, background: CANVAS_DARK, border: `2px solid ${b.strong ? TXT_D1 : TXT_D2}` }} />
              <span style={{ fontSize: 14, fontWeight: b.strong ? 600 : 500, color: b.strong ? TXT_D1 : TXT_D2 }}>{b.name}</span>
            </div>
          ))}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, width: 120 }}>
            <span style={{ width: 16, height: 16, marginTop: -2, borderRadius: 999, background: SIGNAL }} />
            <span style={{ fontFamily: sans, fontSize: 16, fontWeight: 600, color: SIGNAL }}>Visotonics</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <div style={{ maxWidth: 1440, margin: "0 auto", boxSizing: "border-box" }} className="px-6 py-14 md:px-40 md:py-24">
      <span style={eyebrow}>The team</span>
      <h2 className="text-3xl md:text-5xl" style={{ margin: "16px 0 0", fontFamily: sans, fontWeight: 600, letterSpacing: "-0.02em", color: TXT_D1, maxWidth: "18ch" }}>
        A decade of computer vision &amp; AI experience.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24" style={{ marginTop: 64 }}>
        {TEAM.map((m) => (
          <div key={m.name} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m.image}
              alt={m.name}
              className="mx-auto md:mx-0"
              style={{ display: "block", width: 260, maxWidth: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: 2, background: "#cccccc" }}
            />
            <div>
              <span style={{ fontFamily: sans, fontSize: 24, fontWeight: 600, color: TXT_D1 }}>{m.name}</span>
              <span style={{ display: "block", marginTop: 6, fontFamily: mono, fontSize: 12, letterSpacing: "0.06em", color: m.founder ? SIGNAL : TXT_D2 }}>{m.role}</span>
              <span style={{ display: "block", marginTop: 16, fontSize: 15, lineHeight: 1.6, color: TXT_D3, maxWidth: "32ch" }}>{m.bio}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section style={{ background: CANVAS_DARK }}>
      <AboutSection />
      <div style={{ borderTop: `1px solid ${BORDER_D}` }} />
      <TeamSection />
    </section>
  );
}
