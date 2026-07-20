import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Newsroom",
  description: "Newsroom at Visotonics — coming soon.",
  path: "/company/newsroom",
  noindex: true,
});

export default function NewsroomPage() {
  return <ComingSoon />;
}
