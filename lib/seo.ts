import type { Metadata } from "next";

/* ---------------------------------------------------------------------------
   Central SEO constants + a small helper so every page can declare its
   metadata in one line and stay consistent (canonical URL, OpenGraph, Twitter,
   robots). The root layout sets metadataBase + the title template; pages set
   only their leaf title/description/path here.
--------------------------------------------------------------------------- */

export const SITE_URL = "https://visotonics.com";
export const SITE_NAME = "Visotonics";
export const DEFAULT_TITLE =
  "Visotonics — Vision-AI Platform for Industrial Operations";
export const DEFAULT_DESCRIPTION =
  "Visotonics turns the CCTV you already own into an AI vision layer for yards, warehouses and factories — container damage detection, OCR, counting and inspection with no new hardware.";

type PageMetaInput = {
  /** Leaf title — rendered as "<title> — Visotonics" via the root template. */
  title: string;
  description: string;
  /** Route path beginning with "/" (used for canonical + OpenGraph url). */
  path: string;
  /** When true, tell crawlers not to index this route (unbuilt / auth pages). */
  noindex?: boolean;
  /** Optional absolute-or-relative OG image (defaults to the site OG card). */
  image?: string;
};

/** Default social card — the generated site OG route (app/opengraph-image.tsx).
   Declaring an openGraph block on a page suppresses the auto-inherited
   file-convention image, so we attach one explicitly on every page. */
const DEFAULT_OG_IMAGE = "/opengraph-image";

export function pageMeta({
  title,
  description,
  path,
  noindex,
  image,
}: PageMetaInput): Metadata {
  const url = path === "/" ? "/" : path.replace(/\/$/, "");
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url,
      title: `${title} — ${SITE_NAME}`,
      description,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    ...(noindex
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}
