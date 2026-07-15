"use client";

/* ---------------------------------------------------------------------------
   BlogList — client wrapper for the blog grid. Cards are buttons (not links,
   there are no per-post routes) that open the full post in a modal overlay,
   since there's no backend to give each post its own page yet.
--------------------------------------------------------------------------- */

import { useEffect, useState } from "react";
import { FULL_POSTS, type FullPost } from "./posts";

const DARK = "#0A0B0E";
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

function FeaturedCard({ post, onOpen, mobile }: { post: FullPost; onOpen: () => void; mobile?: boolean }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="cursor-pointer bg-transparent text-left hover:opacity-90"
      style={{ display: "block", width: "100%", border: "none", padding: 0 }}
    >
      <PostImage src={post.img} alt={post.title} height={mobile ? 220 : 480} />
      <span style={{ display: "block", marginTop: mobile ? 20 : 28, fontFamily: mono, fontSize: mobile ? 11 : 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL }}>{post.tag}</span>
      <h2 style={{ margin: mobile ? "10px 0 0" : "12px 0 0", maxWidth: mobile ? undefined : 780, fontFamily: sans, fontSize: mobile ? 26 : 40, lineHeight: mobile ? 1.2 : 1.15, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1 }}>{post.title}</h2>
      <p style={{ margin: mobile ? "12px 0 0" : "16px 0 0", maxWidth: mobile ? undefined : 700, fontFamily: sans, fontSize: mobile ? 14 : 16, lineHeight: 1.6, color: TXT_D2 }}>{post.excerpt}</p>
      <span style={{ display: "block", marginTop: mobile ? 12 : 16, fontFamily: mono, fontSize: mobile ? 11 : 12, letterSpacing: "0.06em", color: MUTED }}>{post.readTime}</span>
    </button>
  );
}

function GridCard({ post, onOpen, mobile }: { post: FullPost; onOpen: () => void; mobile?: boolean }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="cursor-pointer bg-transparent text-left hover:opacity-90"
      style={{ display: "block", width: "100%", border: "none", padding: 0 }}
    >
      <PostImage src={post.img} alt={post.title} height={mobile ? 180 : 260} />
      <span style={{ display: "block", marginTop: mobile ? 14 : 16, fontFamily: mono, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL }}>{post.tag}</span>
      <h3 style={{ margin: mobile ? "6px 0 0" : "8px 0 0", fontFamily: sans, fontSize: mobile ? 18 : 22, lineHeight: 1.3, fontWeight: 600, color: TXT_D1 }}>{post.title}</h3>
      <p style={{ margin: mobile ? "8px 0 0" : "10px 0 0", fontFamily: sans, fontSize: mobile ? 14 : 15, lineHeight: 1.55, color: TXT_D2 }}>{post.excerpt}</p>
      <span style={{ display: "block", marginTop: mobile ? 10 : 12, fontFamily: mono, fontSize: 11, letterSpacing: "0.06em", color: MUTED }}>{post.readTime}</span>
    </button>
  );
}

function PostModal({ post, onClose }: { post: FullPost; onClose: () => void }) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={post.title}
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(5,6,8,0.82)", display: "flex", justifyContent: "center", overflowY: "auto", padding: "40px 16px" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", width: "100%", maxWidth: 760, background: DARK, border: `1px solid ${BORDER_D_SOFT}`, borderRadius: 12, boxSizing: "border-box", padding: "0 0 56px", height: "fit-content" }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="cursor-pointer bg-transparent hover:opacity-70"
          style={{ position: "absolute", top: 20, right: 20, zIndex: 1, width: 36, height: 36, borderRadius: "50%", border: `1px solid ${BORDER_D}`, background: DARK, color: TXT_D1, fontFamily: mono, fontSize: 16 }}
        >
          ×
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.img} alt={post.title} style={{ display: "block", width: "100%", height: 320, objectFit: "cover", borderRadius: "12px 12px 0 0" }} />

        <div style={{ padding: "40px 40px 0" }}>
          <span style={{ display: "block", fontFamily: mono, fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL }}>{post.tag}</span>
          <h1 style={{ margin: "14px 0 0", fontFamily: sans, fontSize: 34, lineHeight: 1.2, fontWeight: 600, letterSpacing: "-0.01em", color: TXT_D1 }}>{post.title}</h1>
          <span style={{ display: "block", marginTop: 12, fontFamily: mono, fontSize: 12, letterSpacing: "0.06em", color: MUTED }}>{post.readTime}</span>

          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 28 }}>
            {post.sections.map((s, i) => (
              <div key={i}>
                {s.heading ? (
                  <h2 style={{ margin: "0 0 12px", fontFamily: sans, fontSize: 20, fontWeight: 600, letterSpacing: "-0.005em", color: TXT_D1 }}>{s.heading}</h2>
                ) : null}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {s.blocks.map((b, j) =>
                    b.type === "p" ? (
                      <p key={j} style={{ margin: 0, fontFamily: sans, fontSize: 16, lineHeight: 1.7, color: TXT_D2 }}>{b.text}</p>
                    ) : (
                      <ul key={j} style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                        {b.items.map((it, k) => (
                          <li key={k} style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.6, color: TXT_D2 }}>{it}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogList({ mobile = false }: { mobile?: boolean }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const featured = FULL_POSTS[0];
  const gridPosts = FULL_POSTS.slice(1);
  const openPost = FULL_POSTS.find((p) => p.id === openId) ?? null;

  return (
    <>
      <FeaturedCard post={featured} onOpen={() => setOpenId(featured.id)} mobile={mobile} />
      <div aria-hidden="true" style={{ marginTop: mobile ? 36 : 48, height: 1, background: BORDER_D_SOFT }} />
      {mobile ? (
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 32 }}>
          {gridPosts.map((p) => (
            <GridCard key={p.id} post={p} onOpen={() => setOpenId(p.id)} mobile />
          ))}
        </div>
      ) : (
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 40 }}>
          {gridPosts.map((p) => (
            <GridCard key={p.id} post={p} onOpen={() => setOpenId(p.id)} />
          ))}
        </div>
      )}

      {openPost ? <PostModal post={openPost} onClose={() => setOpenId(null)} /> : null}
    </>
  );
}
