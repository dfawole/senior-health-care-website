import Link from "next/link";
import ShcMonogram from "@/components/ShcMonogram";
import { siteContent } from "@/content/site";

type LogoProps = {
  /** "dark" = wordmark text for light backgrounds (header). "light" = wordmark text for the dark navy background (footer). */
  variant?: "dark" | "light";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "text-primary" : "text-white";

  return (
    <Link
      href="/"
      aria-label={`${siteContent.name} — Home`}
      className={`inline-flex items-center gap-2 font-serif text-lg font-semibold tracking-wide ${textColor}`}
    >
      <ShcMonogram variant={variant} className="h-9 w-9 shrink-0" />
      {siteContent.name}
    </Link>
  );
}
