"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

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
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = as === "ul" ? motion.ul : motion.div;

  return (
    <MotionTag
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {children}
    </MotionTag>
  );
}
