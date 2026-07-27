"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode, type RefObject } from "react";

// Module-level and stable — see Reveal.tsx for why fresh object literals as
// animation props on every render can leave an in-flight animation stuck.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
};

/** Wraps a list/grid of StaggerItem children so they animate in with a
 * small delay between each, once, as the group enters the viewport. */
export default function StaggerGroup({
  children,
  className,
  as = "div",
}: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (prefersReducedMotion) {
    if (as === "ul") {
      return (
        <ul
          ref={ref as unknown as RefObject<HTMLUListElement>}
          className={className}
        >
          {children}
        </ul>
      );
    }
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const animateState = isInView ? "show" : "hidden";

  if (as === "ul") {
    return (
      <motion.ul
        ref={ref as unknown as RefObject<HTMLUListElement>}
        className={className}
        initial="hidden"
        animate={animateState}
        variants={container}
      >
        {children}
      </motion.ul>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={animateState}
      variants={container}
    >
      {children}
    </motion.div>
  );
}
