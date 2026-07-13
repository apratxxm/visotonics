type BrandProps = { height?: number; className?: string };

/**
 * Visotonics wordmark. The official artwork is a black wordmark on transparent
 * (visotonics-high-resolution-logo-transparent.png); the nav + footer are dark,
 * so it's inverted to white via CSS filter.
 */
export function Brand({ height = 20, className }: BrandProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/visotonics-high-resolution-logo-transparent.png"
      alt="Visotonics"
      className={className}
      style={{ height, width: "auto", display: "block", filter: "invert(1)" }}
    />
  );
}
