/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // 301 redirects for stale URLs from the previous site (still indexed by
  // Google under visotonics.com) → closest page on the new site. Permanent
  // so search engines drop the old result and pass ranking value along.
  async redirects() {
    return [
      { source: "/product", destination: "/platform/viso-yard", permanent: true },
      { source: "/products", destination: "/platform/viso-yard", permanent: true },
      { source: "/platform", destination: "/platform/viso-yard", permanent: true },
      { source: "/terms_and_conditions", destination: "/legal/terms-and-conditions", permanent: true },
      { source: "/privacy_policy", destination: "/legal/privacy-policy", permanent: true },
    ];
  },
};

export default nextConfig;
