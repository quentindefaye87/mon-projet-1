"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

/** Séquence d'images (extraites de la vidéo d'ouverture) : lecture image par image, sans à-coup. */
const FRAME_COUNT = 145;
const FRAME_RATIO = 1600 / 918;
const frameSrc = (i: number) => `/video/frames/f${String(i + 1).padStart(4, "0")}.webp`;

/** Début / fin du défilement consacrés à la lecture (le reste : arrêt sur la première et la dernière image). */
const PLAY_FROM = 0.02;
const PLAY_TO = 0.82;

const WALL_LIST = [
  "Menuiseries Limoges",
  "Vérandas Limoges",
  "Fermetures Limoges",
  "Menuiseries PVC Limoges",
  "Menuiseries Alu Limoges",
];

const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);

function WallItem({ label, index, progress }: { label: string; index: number; progress: MotionValue<number>; }) {
  const start = 0.78 + index * 0.03;
  const opacity = useTransform(progress, [start, start + 0.05], [0, 1]);
  const y = useTransform(progress, [start, start + 0.05], [10, 0]);
  return <motion.li style={{ opacity, y }}>{label}</motion.li>;
}

/**
 * Animation d'ouverture : la fenêtre s'ouvre et la caméra entre dans le salon jusqu'au mur,
 * où s'affiche la liste de ce que fait SCAL. La lecture avance avec le défilement.
 * Avec « réduire les animations », seule la dernière image est affichée.
 */
export function ScrollFrames() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const images = useRef<(HTMLImageElement | null)[]>([]);
  const [wall, setWall] = useState({ w: 0, h: 0, fw: 1, cw: 1 });
  const shown = useMotionValue(0);
  const target = useRef(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const hintOpacity = useTransform(shown, [0, 0.05], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    target.current = clamp(v);
  });

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let last = performance.now();
    let dirty = true;
    let dpr = 1;
    let cw = 0;
    let ch = 0;

    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cw = canvas.clientWidth;
      ch = canvas.clientHeight;
      canvas.width = Math.round(cw * dpr);
      canvas.height = Math.round(ch * dpr);
      const scale = Math.max(cw / FRAME_RATIO, ch) ; // hauteur de l'image affichée
      setWall({ w: cw, h: ch, fw: scale * FRAME_RATIO, cw });
      dirty = true;
    };

    const nearest = (i: number) => {
      for (let d = 0; d < FRAME_COUNT; d++) {
        for (const k of [i - d, i + d]) {
          const img = images.current[k];
          if (img && img.complete && img.naturalWidth) return img;
        }
      }
      return null;
    };

    const drawImage = (img: HTMLImageElement, alpha: number) => {
      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.globalAlpha = alpha;
      ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    };

    const render = (p: number) => {
      const t = clamp((p - PLAY_FROM) / (PLAY_TO - PLAY_FROM)) * (FRAME_COUNT - 1);
      const i0 = Math.floor(t);
      const frac = t - i0;
      const a = nearest(i0);
      if (!a) return;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      drawImage(a, 1);
      if (frac > 0.01 && i0 + 1 < FRAME_COUNT) {
        const b = nearest(i0 + 1);
        if (b && b !== a) drawImage(b, frac);
      }
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const cur = shown.get();
      const diff = target.current - cur;
      if (Math.abs(diff) > 0.0004) {
        shown.set(cur + diff * (1 - Math.exp(-dt * 9)));
        dirty = true;
      }
      if (dirty) {
        render(shown.get());
        dirty = false;
      }
      raf = requestAnimationFrame(tick);
    };

    // Chargement : première image d'abord, puis le reste, quelques requêtes à la fois.
    let next = 0;
    let cancelled = false;
    const loadNext = () => {
      if (cancelled || next >= FRAME_COUNT) return;
      const i = next++;
      const img = new Image();
      img.decoding = "async";
      img.onload = img.onerror = () => {
        dirty = true;
        loadNext();
      };
      img.src = frameSrc(i);
      images.current[i] = img;
    };
    for (let k = 0; k < 6; k++) loadNext();

    size();
    const ro = new ResizeObserver(size);
    ro.observe(canvas);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reduce, shown]);

  // Position de la liste sur le mur : calée sur l'image affichée (grand écran), centrée sur mobile.
  const desktop = wall.cw >= 768;
  const listStyle = desktop
    ? { left: wall.cw / 2 + wall.fw * 0.02, top: "48%", fontSize: wall.fw * 0.019 }
    : { width: "86%", left: "7%", top: "46%", fontSize: Math.max(18, wall.cw * 0.055) };
  const listClass =
    "absolute z-10 -translate-y-1/2 flex flex-col gap-[0.35em] font-display font-semibold leading-tight tracking-tight text-[#4f3828] md:-translate-x-1/2";

  if (reduce) {
    return (
      <section aria-label="Ce que fait SCAL" className="relative h-[70vh] min-h-[420px] overflow-hidden bg-charcoal-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={frameSrc(FRAME_COUNT - 1)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <ul className="absolute inset-x-6 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2 font-display text-xl font-semibold text-[#4a3526]">
          {WALL_LIST.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section ref={sectionRef} aria-label="Ce que fait SCAL" className="relative h-[430vh] bg-charcoal-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        <ul className={listClass} style={listStyle}>
          {WALL_LIST.map((l, i) => (
            <WallItem key={l} label={l} index={i} progress={shown} />
          ))}
        </ul>
        <motion.div
          style={{ opacity: hintOpacity }}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 right-6 z-10 flex flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]"
        >
          Faites défiler
          <span className="block h-10 w-px animate-pulse bg-white" />
        </motion.div>
      </div>
    </section>
  );
}
