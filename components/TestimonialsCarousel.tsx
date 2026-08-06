"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import CarouselArrowButton from "@/components/CarouselArrowButton";

const ENTER = { opacity: 0, y: 8 };
const CENTER = { opacity: 1, y: 0 };
const EXIT = { opacity: 0, y: -8 };
const TRANSITION_NORMAL = { duration: 0.35 };
const TRANSITION_REDUCED = { duration: 0 };

export type TestimonialItem = {
  quote: string;
  name: string;
  rating: number;
};

type TestimonialsCarouselProps = {
  testimonials: TestimonialItem[];
  previousLabel: string;
  nextLabel: string;
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialsCarousel({
  testimonials,
  previousLabel,
  nextLabel,
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const active = testimonials[activeIndex];

  if (!active) return null;

  // Small, fixed-size set of quotes — wraps around at each end rather than
  // disabling, since there's no meaningful "start"/"end" to a rotating
  // quote carousel the way there is a hard edge on a scrollable card row.
  function goToPrevious() {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  }

  function goToNext() {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
      <div className="flex w-full items-center justify-center gap-2 sm:gap-4 lg:gap-8">
        {testimonials.length > 1 && (
          <CarouselArrowButton
            direction="left"
            onClick={goToPrevious}
            ariaLabel={previousLabel}
            className="shrink-0"
          />
        )}

        <div className="max-w-2xl min-w-0 flex-1 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              initial={prefersReducedMotion ? false : ENTER}
              animate={CENTER}
              exit={prefersReducedMotion ? undefined : EXIT}
              transition={
                prefersReducedMotion ? TRANSITION_REDUCED : TRANSITION_NORMAL
              }
              className="flex flex-col items-center gap-6"
            >
              <div className="flex gap-1" aria-hidden="true">
                {Array.from({ length: active.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="fill-accent text-accent h-5 w-5"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className="text-text font-serif text-2xl font-medium">
                &ldquo;{active.quote}&rdquo;
              </p>

              <div className="flex flex-col items-center gap-3">
                <span className="bg-primary flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white">
                  {getInitials(active.name)}
                </span>
                <p className="text-text/60 text-sm">{active.name}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {testimonials.length > 1 && (
          <CarouselArrowButton
            direction="right"
            onClick={goToNext}
            ariaLabel={nextLabel}
            className="shrink-0"
          />
        )}
      </div>

      {testimonials.length > 1 && (
        <div className="mt-2 flex items-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition-all duration-200 ${
                index === activeIndex
                  ? "bg-accent h-2.5 w-2.5"
                  : "bg-primary/20 hover:bg-primary/40 h-2 w-2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
