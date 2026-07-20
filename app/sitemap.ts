import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { FULL_POSTS } from "@/app/resources/blog/posts";

/* ---------------------------------------------------------------------------
   sitemap.xml — a curated allowlist of BUILT, indexable pages only. Unbuilt
   stub routes (ComingSoon pages, empty resource routes) and the auth surface
   are intentionally excluded so crawlers never surface them.
--------------------------------------------------------------------------- */

// Single build-time timestamp for lastModified across static entries.
const LAST_MODIFIED = new Date();

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ROUTES: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  // Products — top priority
  { path: "/platform/viso-yard", priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform/viso-warehouse", priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform/viso-factory", priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform/viso-data", priority: 0.9, changeFrequency: "monthly" },

  // Use cases
  { path: "/industries", priority: 0.9, changeFrequency: "monthly" },

  // Company / contact / resources (built)
  { path: "/company/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/company/offices", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources/faqs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources/blog", priority: 0.6, changeFrequency: "weekly" },

  // Legal
  { path: "/legal/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = FULL_POSTS.map((p) => ({
    url: `${SITE_URL}/resources/blog/${p.id}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
