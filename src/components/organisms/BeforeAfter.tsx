"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { VisualImage } from "@/components/atoms/VisualImage";
import type { Visual } from "@/types";

export function BeforeAfter({ before, after }: { before: Visual; after: Visual }) {
  const [pos, setPos] = useState(50);
  return (
    <figure>
      <div className="grain relative aspect-[16/10] overflow-hidden rounded-lg bg-charcoal-900 shadow-lift">
        <div className="absolute inset-0">
          <VisualImage visual={after} sizes="(min-width: 1024px) 60vw, 100vw" />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <div className="absolute inset-0 grayscale-[60%]">
            <VisualImage visual={before} sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
        </div>
        <div aria-hidden className="absolute inset-y-0 z-10 w-px bg-cream-50/90" style={{ left: `${pos}%` }}>
          <span className="glass absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-cream-50 shadow-lift">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>
        <span className="glass-dark absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-medium text-cream-50">Avant</span>
        <span className="glass-dark absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-medium text-cream-50">Après</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Comparer avant et après : faites glisser"
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-sm text-slate-500">Faites glisser pour comparer l&apos;avant et l&apos;après.</figcaption>
    </figure>
  );
}
