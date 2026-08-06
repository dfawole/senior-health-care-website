"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Card, type CardItem } from "@/components/CardGrid";
import CarouselArrowButton from "@/components/CarouselArrowButton";

type ServicesCarouselProps = {
  items: CardItem[];
  scrollLeftLabel: string;
  scrollRightLabel: string;
};

// Card width (w-80, see CardGrid) + the row's gap-8 — how far one click
// advances, so each click reveals roughly one new card at the edge.
const SCROLL_STEP = 320 + 32;

/** Manually-navigated row of service cards — no auto-play, so there is no
 * motion to pause (WCAG 2.2.2 Pause, Stop, Hide doesn't apply to
 * user-initiated scrolling). Arrow clicks scroll smoothly except under
 * prefers-reduced-motion, where the same click jumps instantly instead. */
export default function ServicesCarousel({
  items,
  scrollLeftLabel,
  scrollRightLabel,
}: ServicesCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function updateScrollState() {
      if (!track) return;
      setCanScrollLeft(track.scrollLeft > 1);
      setCanScrollRight(
        track.scrollLeft + track.clientWidth < track.scrollWidth - 1,
      );
    }

    updateScrollState();
    track.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  function scrollByStep(direction: 1 | -1) {
    trackRef.current?.scrollBy({
      left: direction * SCROLL_STEP,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar -mx-4 flex scroll-px-4 gap-8 overflow-x-auto px-4"
      >
        {items.map((item) => (
          <div key={item.title} className="w-80 shrink-0">
            <Card item={item} />
          </div>
        ))}
      </div>

      <CarouselArrowButton
        direction="left"
        onClick={() => scrollByStep(-1)}
        disabled={!canScrollLeft}
        ariaLabel={scrollLeftLabel}
        className="absolute top-1/2 left-2 -translate-y-1/2"
      />

      <CarouselArrowButton
        direction="right"
        onClick={() => scrollByStep(1)}
        disabled={!canScrollRight}
        ariaLabel={scrollRightLabel}
        className="absolute top-1/2 right-2 -translate-y-1/2"
      />
    </div>
  );
}
