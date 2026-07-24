import Link from "next/link";
import { Heart } from "lucide-react";
import { siteContent } from "@/content/site";

type LogoProps = {
  /** "dark" = wordmark text for light backgrounds (header). "light" = wordmark text for the dark navy background (footer). */
  variant?: "dark" | "light";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "text-primary" : "text-white";
  const iconColor = variant === "dark" ? "text-accent" : "text-accent-light";

  return (
    <Link
      href="/"
      aria-label={`${siteContent.name} — Home`}
      className={`inline-flex items-center gap-2 font-serif text-lg font-semibold tracking-wide ${textColor}`}
    >
      <Heart
        className={`h-5 w-5 shrink-0 ${iconColor}`}
        strokeWidth={1.5}
        fill="currentColor"
        fillOpacity={0.15}
        aria-hidden="true"
      />
      {siteContent.name}
    </Link>
  );
}
