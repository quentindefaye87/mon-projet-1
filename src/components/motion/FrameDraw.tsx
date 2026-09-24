"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Le motif du logo SCAL (dormant + vantail ouvert) qui se dessine trait par trait.
 * Purement décoratif.
 */
export function FrameDraw({ className, delay = 0, light }: { className?: string; delay?: number; light?: boolean }) {
  const reduce = useReducedMotion();
  const draw = (d: number, dur = 1.2) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          viewport: { once: true },
          transition: { pathLength: { duration: dur, delay: delay + d, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.01, delay: delay + d } },
        };
  return (
    <svg viewBox="0 0 200 240" fill="none" className={cn("overflow-visible", className)} aria-hidden>
      <motion.path d="M120 30 H180 V210 H86" stroke={light ? "rgba(255,255,255,0.35)" : "#4d4d4d"} strokeWidth="3" {...draw(0, 1.4)} />
      <motion.path d="M40 42 L120 12" stroke="#b93538" strokeWidth="3" strokeLinecap="square" {...draw(0.5, 0.7)} />
      <motion.path d="M120 12 V238" stroke="#b93538" strokeWidth="5" strokeLinecap="square" {...draw(0.9, 0.9)} />
      <motion.path d="M52 206 L120 238" stroke="#b93538" strokeWidth="3" strokeLinecap="square" {...draw(1.4, 0.7)} />
    </svg>
  );
}
