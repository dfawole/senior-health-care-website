import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselArrowButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
  ariaLabel: string;
  disabled?: boolean;
  className?: string;
};

/** Shared prev/next control for the site's manually-navigated carousels
 * (services, testimonials). Solid navy fill at a confident size — matches
 * the weight of the site's primary CTA buttons rather than a faint outline,
 * so it reads as unmistakably interactive rather than decorative. */
export default function CarouselArrowButton({
  direction,
  onClick,
  ariaLabel,
  disabled = false,
  className = "",
}: CarouselArrowButtonProps) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`bg-primary z-10 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition duration-200 ease-out hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:opacity-40 ${className}`}
    >
      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
