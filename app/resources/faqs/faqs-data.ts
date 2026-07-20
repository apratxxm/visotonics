/* Shared FAQ content — consumed by the page (accordion UI) and the route
   layout (FAQPage JSON-LD structured data). Single source of truth. */

export const FAQS = [
  {
    q: "What is Visotonics?",
    a: "Visotonics is a computer-vision platform that reads container, gate, warehouse and factory footage from cameras you already have — no new hardware required.",
  },
  {
    q: "How does it read damage automatically?",
    a: "Every checkpoint — gate in, crane on, crane off, gate out — is compared frame to frame. The platform detects, segments and classifies dents, rust and cracks down to the mm², then logs a tamper-evident record automatically.",
  },
  {
    q: "Is Visotonics right for my terminal?",
    a: "If cameras are already watching your gate, yard, warehouse or factory floor, Visotonics can run on that footage — no new hardware. It's built for ports, ICDs, CFS yards, block-stacking warehouses, manufacturing lines and tank storage.",
  },
  {
    q: "What does deployment cost?",
    a: "Pricing depends on camera count and site footprint. Reach out via Contact and we'll scope it against your existing CCTV within a day.",
  },
] as const;
