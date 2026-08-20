/**
 * Tailwind safelist.
 *
 * `PROJECT_STATUS_COLOR` / `PROJECT_STATUS_ICON` (data/projects.ts) build class
 * names at runtime via string interpolation (`border-${...}`, `text-${...}`),
 * so Tailwind v4's static content scanner can never see the finished utilities
 * and would purge them. Listing the literals here — a scanned source file —
 * keeps them in the emitted CSS. Previously this was force-injected through a
 * hidden <div id="colors"> in the layout; this replaces that hack.
 */
export const STATUS_CLASSES = [
  "bg-success",
  "text-success",
  "border-success",
  "bg-error",
  "text-error",
  "border-error",
  "bg-warning",
  "text-warning",
  "border-warning",
  // ponytail: inactive status maps to "red", but no --color-red token exists;
  // it renders unstyled today (pre-existing) — add a token before enabling.
  // "text-red", "border-red",
] as const;
