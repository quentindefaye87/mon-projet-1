"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Sens d'ouverture du volet. */
  from?: "left" | "right" | "bottom";
}

/**
 * Révèle une image comme une ouverture : un vantail rouge SCAL puis anthracite
 * glisse et libère l'image, qui se dézoome légèrement.
 */
export function ImageReveal({ children, className, delay = 0, from = "left" }: ImageRevealProps) {
  const reduce = useReducedMotion();
  const axis = from === "bottom" ? "scaleY" : "scaleX";
  const origin = from === "left" ? "right" : from === "right" ? "left" : "top";
  const ease = [0.76, 0, 0.24, 1] as const;

  if (reduce) return <div className={cn("relative overflow-hidden", className)}>{children}</div>;

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        className="absolute inset-0"
        variants={{ hidden: { scale: 1.18 }, visible: { scale: 1 } }}
        transition={{ duration: 1.6, delay: delay + 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute inset-0 z-20 bg-brand-600"
        style={{ transformOrigin: origin }}
        variants={{ hidden: { [axis]: 1 }, visible: { [axis]: 0 } }}
        transition={{ duration: 0.9, delay: delay + 0.2, ease }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 z-10 bg-charcoal-800"
        style={{ transformOrigin: origin }}
        variants={{ hidden: { [axis]: 1 }, visible: { [axis]: 0 } }}
        transition={{ duration: 0.9, delay: delay + 0.35, ease }}
      />
    </motion.div>
  );
}
