/* ---------------------------------------------------------------------------
   BlogList — the blog index grid. Cards are real links to per-post pages
   (/resources/blog/[slug]), so each post is a crawlable URL with its own
   server-rendered content and metadata. Server component (no client state).
--------------------------------------------------------------------------- */

import Link from "next/link";
import { FULL_POSTS, type FullPost } from "./posts";

const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const MUTED = "#6D7480";
const BORDER_D = "rgba(244,245,247,0.18)";
const BORDER_D_SOFT = "rgba(244,245,247,0.10)";
const SIGNAL = "#ED510C";

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

function PostImage({ src, alt, height }: { src: string; alt: string; height: number }) {
  return (
    <div style={{ border: `1px solid ${BORDER_D}`, boxSizing: "border-box", overflow: "hidden", height, background: "#15171B" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

function FeaturedCard({ post, mobile }: { post: FullPost; mobile?: boolean }) {
  return (
    <Link
      href={`/resources/blog/${post.id}`}
      className="text-left hover:opacity-90"
      style={{ display: "block", width: "100%", textDecoration: "none" }}
    >
      <PostImage src={post.img} alt={post.title} height={mobile ? 220 : 480} />
      <span style={{ display: "block", marginTop: mobile ? 20 : 28, fontFamily: mono, fontSize: mobile ? 11 : 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL }}>{post.tag}</span>
      <h2 style={{ margin: mobile ? "10px 0 0" : "12px 0 0", maxWidth: mobile ? undefined : 780, fontFamily: sans, fontSize: mobile ? 26 : 40, lineHeight: mobile ? 1.2 : 1.15, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1 }}>{post.title}</h2>
      <p style={{ margin: mobile ? "12px 0 0" : "16px 0 0", maxWidth: mobile ? undefined : 700, fontFamily: sans, fontSize: mobile ? 14 : 16, lineHeight: 1.6, color: TXT_D2 }}>{post.excerpt}</p>
      <span style={{ display: "block", marginTop: mobile ? 12 : 16, fontFamily: mono, fontSize: mobile ? 11 : 12, letterSpacing: "0.06em", color: MUTED }}>{post.readTime}</span>
    </Link>
  );
}

function GridCard({ post, mobile }: { post: FullPost; mobile?: boolean }) {
  return (
    <Link
      href={`/resources/blog/${post.id}`}
      className="text-left hover:opacity-90"
      style={{ display: "block", width: "100%", textDecoration: "none" }}
    >
      <PostImage src={post.img} alt={post.title} height={mobile ? 180 : 260} />
      <span style={{ display: "block", marginTop: mobile ? 14 : 16, fontFamily: mono, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL }}>{post.tag}</span>
      <h3 style={{ margin: mobile ? "6px 0 0" : "8px 0 0", fontFamily: sans, fontSize: mobile ? 18 : 22, lineHeight: 1.3, fontWeight: 600, color: TXT_D1 }}>{post.title}</h3>
      <p style={{ margin: mobile ? "8px 0 0" : "10px 0 0", fontFamily: sans, fontSize: mobile ? 14 : 15, lineHeight: 1.55, color: TXT_D2 }}>{post.excerpt}</p>
      <span style={{ display: "block", marginTop: mobile ? 10 : 12, fontFamily: mono, fontSize: 11, letterSpacing: "0.06em", color: MUTED }}>{post.readTime}</span>
    </Link>
  );
}

export function BlogList({ mobile = false }: { mobile?: boolean }) {
  const featured = FULL_POSTS[0];
  const gridPosts = FULL_POSTS.slice(1);

  return (
    <>
      <FeaturedCard post={featured} mobile={mobile} />
      <div aria-hidden="true" style={{ marginTop: mobile ? 36 : 48, height: 1, background: BORDER_D_SOFT }} />
      {mobile ? (
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 32 }}>
          {gridPosts.map((p) => (
            <GridCard key={p.id} post={p} mobile />
          ))}
        </div>
      ) : (
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 40 }}>
          {gridPosts.map((p) => (
            <GridCard key={p.id} post={p} />
          ))}
        </div>
      )}
    </>
  );
}
