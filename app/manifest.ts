import type { MetadataRoute } from "next";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/seo";

/* ---------------------------------------------------------------------------
   Web app manifest — brand identity for install prompts / mobile home-screen
   and a signal to crawlers. Reuses the existing app/icon.png favicon.
--------------------------------------------------------------------------- */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0B0E",
    theme_color: "#0A0B0E",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
