import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Webinars",
  description: "Webinars at Visotonics — coming soon.",
  path: "/resources/webinars",
  noindex: true,
});

export default function WebinarsPage() {
  return <ComingSoon />;
}
