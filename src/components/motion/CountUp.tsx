"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: number;
  /** Affiche le nombre sans séparateur de milliers (ex. une année). */
  plain?: boolean;
  duration?: number;
  className?: string;
}

/** Compteur animé qui démarre lorsqu'il entre dans la zone visible. */
export function CountUp({ value, plain, duration = 1.8, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const start = plain ? Math.max(0, value - 60) : 0;
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduce) return;
    setDisplay(start);
  }, [reduce, start]);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(start, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, start, value, duration]);

  const text = plain ? String(display) : display.toLocaleString("fr-FR");
  return (
    <span ref={ref} className={className}>
      <span aria-hidden>{text}</span>
      <span className="sr-only">{plain ? value : value.toLocaleString("fr-FR")}</span>
    </span>
  );
}
