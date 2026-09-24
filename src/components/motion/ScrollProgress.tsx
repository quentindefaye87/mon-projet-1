"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Fine barre rouge en haut de page qui suit la progression de lecture. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-700 via-brand-500 to-brand-400"
      style={{ scaleX }}
    />
  );
}
