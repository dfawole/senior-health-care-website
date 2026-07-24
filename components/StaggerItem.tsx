"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

/** A single item within a StaggerGroup. Has no animation of its own when
 * reduced motion is preferred, since the parent StaggerGroup never
 * requests the "show" variant transition in that case. */
export default function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  );
}
