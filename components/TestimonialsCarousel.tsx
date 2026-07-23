"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

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

      {testimonials.length > 1 && (
        <div className="mt-2 flex gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial from ${testimonial.name}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-primary/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
