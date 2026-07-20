import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";

/* The contact page is a client component (form state), so its metadata lives
   here in the route layout (a server component). */

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch with Visotonics. Tell us about your site and existing CCTV and we'll scope AI vision for your yard, warehouse or factory.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
