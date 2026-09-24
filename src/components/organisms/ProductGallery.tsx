"use client";

import { useRef, useState } from "react";
import { Rotate3d } from "lucide-react";
import { WindowArt } from "@/components/atoms/WindowArt";
import { VisualImage } from "@/components/atoms/VisualImage";
import { cn } from "@/lib/utils";
import type { Visual } from "@/types";

export function ProductGallery({ visuals, name }: { visuals: Visual[]; name: string }) {
  const [active, setActive] = useState(0);
  const [mode3d, setMode3d] = useState(false);
  const [angle, setAngle] = useState({ x: -6, y: 18 });
  const drag = useRef<{ x: number; y: number; ax: number; ay: number } | null>(null);
  const current = visuals[active] ?? visuals[0];
  if (!current) return null;

  const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));

  const onPointerDown = (e: React.PointerEvent) => {
    if (!mode3d) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, ax: angle.x, ay: angle.y };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    setAngle({ x: clamp(drag.current.ax - dy * 0.25, 25), y: clamp(drag.current.ay + dx * 0.35, 60) });
  };
  const onPointerUp = () => {
    drag.current = null;
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!mode3d) return;
    const step = 6;
    if (e.key === "ArrowLeft") setAngle((a) => ({ ...a, y: clamp(a.y - step, 60) }));
    else if (e.key === "ArrowRight") setAngle((a) => ({ ...a, y: clamp(a.y + step, 60) }));
    else if (e.key === "ArrowUp") setAngle((a) => ({ ...a, x: clamp(a.x + step, 25) }));
    else if (e.key === "ArrowDown") setAngle((a) => ({ ...a, x: clamp(a.x - step, 25) }));
    else return;
    e.preventDefault();
  };

  return (
    <div>
      <div
        className={cn(
          "grain relative aspect-[4/3] overflow-hidden rounded-lg bg-charcoal-900 shadow-lift",
          mode3d && "cursor-grab touch-none active:cursor-grabbing",
        )}
        style={{ perspective: "1400px" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
        tabIndex={mode3d ? 0 : -1}
        role={mode3d ? "application" : undefined}
        aria-label={mode3d ? `Vue 3D de ${name}. Utilisez les flèches pour faire pivoter.` : undefined}
      >
        {mode3d ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-charcoal-800 to-charcoal-950">
            <div
              className="relative aspect-[4/3] w-[62%] transition-transform duration-150 ease-out"
              style={{ transform: `rotateX(${angle.x}deg) rotateY(${angle.y}deg)`, transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 overflow-hidden rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
                <WindowArt variant="frame" tone={current.tone} alt="" decorative />
              </div>
              <div
                aria-hidden
                className="absolute inset-y-0 right-0 w-5 origin-right bg-gradient-to-r from-charcoal-700 to-charcoal-950"
                style={{ transform: "rotateY(90deg)" }}
              />
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-5 origin-top bg-gradient-to-b from-charcoal-600 to-charcoal-900"
                style={{ transform: "rotateX(-90deg)" }}
              />
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-400">Faites glisser pour pivoter</p>
          </div>
        ) : (
          <div key={active} className="absolute inset-0 animate-fade-in">
            <VisualImage visual={current} priority={active === 0} sizes="(min-width: 1024px) 58vw, 100vw" />
          </div>
        )}
        <button
          type="button"
          onClick={() => setMode3d((m) => !m)}
          aria-pressed={mode3d}
          className="glass absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-cream-50 transition-colors hover:bg-white/20"
        >
          <Rotate3d className="h-4 w-4" aria-hidden />
          {mode3d ? "Quitter la vue 3D" : "Vue 360°"}
        </button>
      </div>

      <ul className="mt-4 grid grid-cols-4 gap-3" aria-label="Galerie d'images">
        {visuals.map((v, i) => (
          <li key={`${v.variant}-${v.tone}-${i}`}>
            <button
              type="button"
              onClick={() => {
                setActive(i);
                setMode3d(false);
              }}
              aria-label={`Afficher : ${v.alt}`}
              aria-current={i === active && !mode3d ? "true" : undefined}
              className={cn(
                "grain relative block aspect-[4/3] w-full overflow-hidden rounded-md bg-charcoal-900 transition-all duration-300",
                i === active && !mode3d ? "ring-2 ring-brand-500 ring-offset-2 ring-offset-cream-100" : "opacity-70 hover:opacity-100",
              )}
            >
              <VisualImage visual={v} decorative sizes="160px" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
