"use client";

import { useReducedMotion } from "framer-motion";
import CardGrid, { Card, type CardItem } from "@/components/CardGrid";

type ServicesMarqueeProps = {
  items: CardItem[];
};

/** Infinite auto-scrolling row of service cards. Falls back to the plain
 * static CardGrid for prefers-reduced-motion, rather than animating. */
export default function ServicesMarquee({ items }: ServicesMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <CardGrid items={items} />;
  }

  return (
    <div className="group/marquee -mx-4 overflow-hidden">
      <div className="animate-marquee flex w-max gap-8 px-4 group-focus-within/marquee:[animation-play-state:paused] group-hover/marquee:[animation-play-state:paused]">
        {[...items, ...items].map((item, index) => {
          const isDuplicate = index >= items.length;
          return (
            <div
              key={`${item.title}-${index}`}
              className="w-80 shrink-0"
              aria-hidden={isDuplicate}
            >
              <Card item={item} tabIndex={isDuplicate ? -1 : undefined} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
