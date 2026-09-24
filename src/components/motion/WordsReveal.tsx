"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Fragment, type ReactNode } from "react";

interface Line {
  text: string;
  className?: string;
}

/** Titre dont chaque mot remonte derrière un masque, ligne après ligne. */
export function WordsReveal({ lines, delay = 0, className }: { lines: Line[]; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  let index = 0;
  const words: ReactNode[] = lines.map((line, li) => (
    <span key={li} className="block">
      {line.text.split(" ").map((word, wi, arr) => {
        const i = index++;
        return (
          <Fragment key={wi}>
            <span className="inline-block overflow-hidden pb-[0.12em] align-bottom -mb-[0.12em]">
              <motion.span
                className={`inline-block ${line.className ?? ""}`}
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </span>
            {wi < arr.length - 1 && " "}
          </Fragment>
        );
      })}
    </span>
  ));
  return (
    <span className={className}>
      <span className="sr-only">{lines.map((l) => l.text).join(" ")}</span>
      <span aria-hidden>{words}</span>
    </span>
  );
}
