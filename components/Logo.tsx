import Link from "next/link";
import ShcMonogram from "@/components/ShcMonogram";
import { siteContent } from "@/content/site";

type LogoProps = {
  /** "dark" = wordmark text for light backgrounds (header). "light" = wordmark text for the dark navy background (footer). */
  variant?: "dark" | "light";
  /** Collapse to icon-only below the `sm` breakpoint. Use where the logo
   * shares a row with other fixed-width elements (the header's phone
   * number + menu trigger) that would otherwise collide with the full
   * wordmark on narrow viewports. */
  hideWordmarkBelowSm?: boolean;
};

export default function Logo({
  variant = "dark",
  hideWordmarkBelowSm = false,
}: LogoProps) {
  const textColor = variant === "dark" ? "text-primary" : "text-white";

  return (
    <Link
      href="/"
      aria-label={`${siteContent.name} — Home`}
      className={`inline-flex items-center gap-2 font-serif text-lg font-semibold tracking-wide ${textColor}`}
    >
      <ShcMonogram variant={variant} className="h-9 w-9 shrink-0" />
      <span className={hideWordmarkBelowSm ? "hidden sm:inline" : undefined}>
        {siteContent.name}
      </span>
    </Link>
  );
}
