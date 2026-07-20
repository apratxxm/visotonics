import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "ROI Calculator",
  description: "ROI Calculator at Visotonics — coming soon.",
  path: "/resources/roi-calculator",
  noindex: true,
});

export default function RoiCalculatorPage() {
  return <ComingSoon />;
}
