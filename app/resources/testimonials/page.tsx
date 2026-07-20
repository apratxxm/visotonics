import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Testimonials",
  description: "Testimonials at Visotonics — coming soon.",
  path: "/resources/testimonials",
  noindex: true,
});

export default function TestimonialsPage() {
  return <ComingSoon />;
}
