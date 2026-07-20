import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/* ---------------------------------------------------------------------------
   robots.txt — crawl rules. We intentionally allow AI/LLM crawlers (no
   Disallow for GPTBot/ClaudeBot/etc.) since discoverability by LLMs is a goal.
   Only the auth surface is disallowed. Unbuilt pages are kept out of results
   via per-page `noindex`, not here.
--------------------------------------------------------------------------- */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/client-portal", "/client-portal/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
