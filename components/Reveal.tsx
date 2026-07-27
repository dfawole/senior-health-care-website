"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

// Hoisted to stable module-level references. Passing fresh object literals
// as `initial`/`animate`/`transition` on every render (as this component
// previously did inline) gives Motion a new target reference each time its
// parent re-renders — which, if a re-render happens mid-transition, can
// interrupt the animation and leave the element frozen at whatever opacity
// it had reached rather than completing to 1. Stable references make the
// animation resilient to parent re-renders.
const HIDDEN = { opacity: 0, y: 16 };
const SHOWN = { opacity: 1, y: 0 };
const TRANSITION = { duration: 0.45, ease: "easeOut" as const };

/** Fades + slides content up once as it enters the viewport. Renders
 * instantly with no animation when the user prefers reduced motion. */
export default function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  // useInView (IntersectionObserver-backed boolean) instead of whileInView:
  // whileInView re-evaluates as part of Motion's prop-diffing on every
  // render, whereas a plain boolean driving `animate` is unambiguous and
  // can't be "missed" by a render that happens to land mid-observation.
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={HIDDEN}
      animate={isInView ? SHOWN : HIDDEN}
      transition={TRANSITION}
    >
      {children}
    </motion.div>
  );
}
