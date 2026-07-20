import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FULL_POSTS } from "../posts";
import { PostBody } from "../post-body";
import { JsonLd, articleSchema } from "@/components/json-ld";
import { pageMeta } from "@/lib/seo";

/* ---------------------------------------------------------------------------
   /resources/blog/[slug] — crawlable per-post page. Statically generated from
   FULL_POSTS. Server-rendered article body (real text in the SSR HTML) + a
   BlogPosting JSON-LD block. This replaces the modal-only, URL-less posts so
   each article is indexable by search engines and readable by LLMs.
--------------------------------------------------------------------------- */

const DARK = "#0A0B0E";
const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const MUTED = "#6D7480";
const BORDER_D = "rgba(244,245,247,0.18)";
const SIGNAL = "#ED510C";
const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

export function generateStaticParams() {
  return FULL_POSTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = FULL_POSTS.find((p) => p.id === slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/resources/blog/${post.id}`,
    image: post.img,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = FULL_POSTS.find((p) => p.id === slug);
  if (!post) notFound();

  return (
    <article style={{ background: DARK }}>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          path: `/resources/blog/${post.id}`,
          image: post.img,
        })}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 96px", boxSizing: "border-box" }}>
        <Link href="/resources/blog" className="dt-underline" style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: MUTED, textDecoration: "none" }}>
          ← All posts
        </Link>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.img} alt={post.title} style={{ display: "block", width: "100%", height: 360, objectFit: "cover", borderRadius: 12, marginTop: 24, border: `1px solid ${BORDER_D}` }} />

        <span style={{ display: "block", marginTop: 32, fontFamily: mono, fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL }}>{post.tag}</span>
        <h1 style={{ margin: "14px 0 0", fontFamily: sans, fontSize: 40, lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.015em", color: TXT_D1 }}>{post.title}</h1>
        <span style={{ display: "block", marginTop: 12, fontFamily: mono, fontSize: 12, letterSpacing: "0.06em", color: MUTED }}>{post.readTime}</span>

        <PostBody sections={post.sections} />
      </div>
    </article>
  );
}
