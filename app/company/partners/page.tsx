import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Partners",
  description: "Partners at Visotonics — coming soon.",
  path: "/company/partners",
  noindex: true,
});

export default function PartnersPage() {
  return <ComingSoon />;
}
