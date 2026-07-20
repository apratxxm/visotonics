import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Press Kit",
  description: "Press Kit at Visotonics — coming soon.",
  path: "/resources/press-kit",
  noindex: true,
});

export default function PressKitPage() {
  return <ComingSoon />;
}
