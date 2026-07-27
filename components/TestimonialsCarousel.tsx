"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

const ENTER = { opacity: 0, y: 8 };
const CENTER = { opacity: 1, y: 0 };
const EXIT = { opacity: 0, y: -8 };
const TRANSITION_NORMAL = { duration: 0.35 };
const TRANSITION_REDUCED = { duration: 0 };

export type TestimonialItem = {
  quote: string;
  name: string;
  area: string;
  rating: number;
};

type TestimonialsCarouselProps = {
  testimonials: TestimonialItem[];
  intervalMs?: number;
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
  intervalMs = 6000,
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [testimonials.length, intervalMs]);

  const active = testimonials[activeIndex];

  if (!active) return null;

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
      <div className="relative w-full overflow-hidden">
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
              <p className="text-text/60 text-sm">
                {active.name}, {active.area}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
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
