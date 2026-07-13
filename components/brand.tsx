type BrandProps = { height?: number; className?: string };

/**
 * Visotonics wordmark. Renders /visotonics-logo.svg, sized by height.
 *
 * The current /visotonics-logo.svg is an INTERIM white placeholder wordmark.
 * Replace public/visotonics-logo.svg with the official logo artwork — keep it
 * white (or transparent) so it reads on the dark nav + footer.
 */
export function Brand({ height = 20, className }: BrandProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/visotonics-logo.svg"
      alt="Visotonics"
      className={className}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
