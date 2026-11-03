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
  const [ready, setReady] = useState(0);
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

    // Images chargées (compressées) et, seulement autour de l'image affichée, versions décodées prêtes à dessiner.
    const loaded: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);
    const bitmaps = new Map<number, ImageBitmap>();
    const pending = new Set<number>();
    const WINDOW = 10;
    let contiguous = 0; // nombre d'images consécutives déjà chargées depuis le début
    let raf = 0;
    let last = performance.now();
    let dirty = true;
    let cancelled = false;
    let lastIdx = -1;

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      if (!cw || !ch) return;
      canvas.width = Math.round(cw * dpr);
      canvas.height = Math.round(ch * dpr);
      setWall({ w: cw, h: ch, fw: Math.max(cw / FRAME_RATIO, ch) * FRAME_RATIO, cw });
      dirty = true;
    };

    const ensureBitmap = (i: number) => {
      if (i < 0 || i >= FRAME_COUNT || bitmaps.has(i) || pending.has(i)) return;
      const img = loaded[i];
      if (!img) return;
      pending.add(i);
      createImageBitmap(img)
        .then((bm) => {
          pending.delete(i);
          if (cancelled) return bm.close();
          bitmaps.set(i, bm);
          dirty = true;
        })
        .catch(() => pending.delete(i));
    };

    const prefetch = (center: number, dir: number) => {
      const sign = dir >= 0 ? 1 : -1;
      for (let d = 0; d <= WINDOW; d++) ensureBitmap(center + d * sign); // devant
      for (let d = 1; d <= WINDOW / 2; d++) ensureBitmap(center - d * sign); // derrière
      for (const k of [...bitmaps.keys()]) {
        if (Math.abs(k - center) > WINDOW + 4) {
          bitmaps.get(k)?.close();
          bitmaps.delete(k);
        }
      }
    };

    const nearest = (i: number) => {
      for (let d = 0; d < FRAME_COUNT; d++) {
        const lo = bitmaps.get(i - d);
        if (lo) return lo;
        const hi = bitmaps.get(i + d);
        if (hi) return hi;
      }
      return null;
    };

    const drawBitmap = (bm: ImageBitmap, alpha: number) => {
      const scale = Math.max(canvas.width / bm.width, canvas.height / bm.height);
      const w = bm.width * scale;
      const h = bm.height * scale;
      ctx.globalAlpha = alpha;
      ctx.drawImage(bm, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    };

    const render = (p: number) => {
      // Ne jamais dépasser ce qui est déjà chargé : pas de saut d'image si la connexion est lente.
      const maxT = Math.max(0, contiguous - 1);
      const t = Math.min(clamp((p - PLAY_FROM) / (PLAY_TO - PLAY_FROM)) * (FRAME_COUNT - 1), maxT);
      const i0 = Math.floor(t);
      const frac = t - i0;
      const dir = t >= lastIdx ? 1 : -1;
      if (Math.round(t) !== lastIdx) {
        lastIdx = Math.round(t);
        prefetch(i0, dir);
      }
      const a = nearest(i0);
      if (!a) return;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      drawBitmap(a, 1);
      if (frac > 0.02 && i0 + 1 < FRAME_COUNT) {
        const b = bitmaps.get(i0 + 1);
        if (b) drawBitmap(b, frac);
      }
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const cur = shown.get();
      const diff = target.current - cur;
      if (Math.abs(diff) > 0.0003) {
        shown.set(cur + diff * (1 - Math.exp(-dt * 8)));
        dirty = true;
      }
      if (dirty) {
        dirty = false;
        render(shown.get());
      }
      raf = requestAnimationFrame(tick);
    };

    // Chargement : dans l'ordre, quelques requêtes à la fois.
    let next = 0;
    const loadNext = () => {
      if (cancelled || next >= FRAME_COUNT) return;
      const i = next++;
      const img = new Image();
      img.onload = () => {
        loaded[i] = img;
        while (contiguous < FRAME_COUNT && loaded[contiguous]) contiguous++;
        if (i < 3) ensureBitmap(i);
        setReady(contiguous / FRAME_COUNT);
        dirty = true;
        loadNext();
      };
      img.onerror = () => {
        // Image manquante : on réutilise la précédente pour ne pas bloquer la lecture.
        loaded[i] = loaded[i - 1] ?? null;
        while (contiguous < FRAME_COUNT && loaded[contiguous]) contiguous++;
        loadNext();
      };
      img.src = frameSrc(i);
    };
    for (let k = 0; k < 6; k++) loadNext();

    target.current = clamp(scrollYProgress.get());
    shown.set(target.current);
    size();
    const ro = new ResizeObserver(size);
    ro.observe(canvas);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      bitmaps.forEach((bm) => bm.close());
      bitmaps.clear();
    };
  }, [reduce, shown, scrollYProgress]);

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
        {ready < 1 && (
          <div aria-hidden="true" className="absolute inset-x-0 top-[72px] z-10 h-0.5 bg-white/10">
            <div className="h-full bg-white/70 transition-[width] duration-200" style={{ width: `${ready * 100}%` }} />
          </div>
        )}
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
