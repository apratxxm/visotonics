import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Whitepapers",
  description: "Whitepapers at Visotonics — coming soon.",
  path: "/resources/whitepapers",
  noindex: true,
});

export default function WhitepapersPage() {
  return <ComingSoon />;
}
