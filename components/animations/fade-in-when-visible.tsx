"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function FadeInWhenVisible({
  children,
  delay = 0,
  direction = "up",
}: FadeInWhenVisibleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={
        isInView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]
      }
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
