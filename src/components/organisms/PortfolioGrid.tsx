"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const ALL = "Toutes";

/** Galerie de photos de chantier filtrable par solution, avec visionneuse plein écran (sans texte, comme sur le site historique). */
export function PortfolioGrid() {
  const [windowType, setWindowType] = useState(ALL);
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const windowTypes = useMemo(() => [ALL, ...new Set(projects.map((p) => p.windowType))], []);
  const filtered = projects.filter((p) => windowType === ALL || p.windowType === windowType);

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + filtered.length) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      lastFocus.current?.focus();
    };
  }, [open, step]);

  const current = open !== null ? filtered[open] : null;

  return (
    <div>
      <div role="group" aria-label="Solution" className="flex flex-wrap items-center gap-2 border-b border-charcoal-900/10 pb-8">
        {windowTypes.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={windowType === o}
            onClick={() => setWindowType(o)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-all duration-300",
              windowType === o
                ? "border-charcoal-900 bg-charcoal-900 text-cream-50"
                : "border-charcoal-900/15 text-slate-600 hover:border-charcoal-900/40 hover:text-charcoal-900",
            )}
          >
            {o}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {filtered.length} photo{filtered.length > 1 ? "s" : ""} affichée{filtered.length > 1 ? "s" : ""}
      </p>
      <motion.ul layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.li
              layout
              key={p.slug}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                className="group block w-full text-left"
                aria-label={`Agrandir la photo ${i + 1} sur ${filtered.length} — ${p.windowType}`}
                onClick={(e) => {
                  lastFocus.current = e.currentTarget;
                  setOpen(i);
                }}
              >
                <ArtFrame
                  visual={p.cover}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  hoverZoom
                  className="aspect-[4/3] shadow-soft transition-shadow duration-500 group-hover:shadow-lift"
                />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {current?.cover.src && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo de réalisation"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Fermer"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
          {filtered.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Photo précédente"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:left-6"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Photo suivante"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:right-6"
              >
                <ChevronRight className="h-6 w-6" aria-hidden />
              </button>
            </>
          )}
          <div className="relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.cover.src} alt={current.cover.alt} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
