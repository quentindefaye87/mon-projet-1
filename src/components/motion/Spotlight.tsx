"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Carte avec halo lumineux qui suit le pointeur. */
export function Spotlight({ children, className, color = "rgba(185,53,56,0.22)" }: { children: ReactNode; className?: string; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn("group/spot relative overflow-hidden", className)}
      style={{ ["--spot" as string]: color }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{ background: "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), var(--spot), transparent 45%)" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
