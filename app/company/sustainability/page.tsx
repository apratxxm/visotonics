import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Sustainability",
  description: "Sustainability at Visotonics — coming soon.",
  path: "/company/sustainability",
  noindex: true,
});

export default function SustainabilityPage() {
  return <ComingSoon />;
}
