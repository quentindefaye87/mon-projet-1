"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

/**
 * Séquence d'images de l'animation d'ouverture (vidéo agrandie par IA, texte d'origine effacé).
 * Trois jeux d'images selon l'écran :
 *  - m  : recadrage vertical pour téléphones et tablettes en portrait ;
 *  - d  : paysage pour la plupart des ordinateurs ;
 *  - hd : paysage haute définition pour les grands écrans à forte densité.
 */
const FRAME_COUNT = 145;
const SETS = {
  m: { width: 800, height: 1274 },
  d: { width: 1920, height: 1101 },
  hd: { width: 2560, height: 1468 },
} as const;
type SetName = keyof typeof SETS;

const frameSrc = (set: SetName, i: number) => `/video/${set}/f${String(i + 1).padStart(4, "0")}.webp`;
const PORTRAIT_QUERY = "(max-aspect-ratio: 4/5)";

/** Part du défilement consacrée à la lecture ; ensuite la caméra est arrêtée face au mur. */
const PLAY_FROM = 0.02;
const PLAY_TO = 0.8;
/** La liste apparaît une fois la caméra arrêtée, ligne par ligne. */
const LIST_FROM = 0.83;
const LIST_STEP = 0.025;

const WALL_LIST = [
  "Menuiseries Limoges",
  "Vérandas Limoges",
  "Fermetures Limoges",
  "Menuiseries PVC Limoges",
  "Menuiseries Alu Limoges",
];

const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);

function pickSet(): SetName {
  if (window.matchMedia(PORTRAIT_QUERY).matches) return "m";
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  return window.innerWidth * dpr > 2100 ? "hd" : "d";
}

function Bullet() {
  return <span aria-hidden="true" className="inline-block h-[0.38em] w-[0.38em] shrink-0 rounded-full bg-[#a52e32]" />;
}

function WallItem({ label, index, progress }: { label: string; index: number; progress: MotionValue<number> }) {
  const start = LIST_FROM + index * LIST_STEP;
  const opacity = useTransform(progress, [start, start + 0.04], [0, 1]);
  const x = useTransform(progress, [start, start + 0.04], [-12, 0]);
  return (
    <motion.li style={{ opacity, x }} className="flex items-center gap-[0.55em]">
      <Bullet />
      <span>{label}</span>
    </motion.li>
  );
}

/** Image affichée tout de suite (rendu serveur) sous le canevas : jamais d'écran noir. */
function Poster({ frame }: { frame: number }) {
  return (
    <picture>
      <source media={PORTRAIT_QUERY} srcSet={frameSrc("m", frame)} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={frameSrc("d", frame)}
        alt=""
        {...({ fetchpriority: "high" } as Record<string, string>)}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </picture>
  );
}

/**
 * Animation d'ouverture : la fenêtre s'ouvre, la caméra entre dans le salon et s'arrête face au mur,
 * où s'affiche la liste de ce que fait SCAL. La lecture suit le défilement, image par image.
 * Avec « réduire les animations », seule la dernière image est affichée, avec la liste.
 */
export function ScrollFrames() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [set, setSet] = useState<SetName | null>(null);
  const [canvasReady, setCanvasReady] = useState(false);
  const shown = useMotionValue(0);
  const target = useRef(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const hintOpacity = useTransform(shown, [0, 0.04], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    target.current = clamp(v);
  });

  // Choix du jeu d'images (et nouveau choix si l'écran change vraiment, par ex. rotation).
  useEffect(() => {
    let timer = 0;
    const update = () => setSet((prev) => {
      const next = pickSet();
      return prev === next ? prev : next;
    });
    const onResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(update, 200);
    };
    update();
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (reduce || !set) return;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const ctx = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !section || !ctx) return;
    const frameSet = set;
    const { width: FW, height: FH } = SETS[frameSet];

    const loaded: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);
    const bitmaps = new Map<number, ImageBitmap>();
    const pending = new Set<number>();
    const AHEAD = 8;
    const BEHIND = 4;
    let drawnIdx = -1; // image réellement affichée
    let lastIdx = 0; // image demandée par la position de défilement
    let raf = 0;
    let running = false;
    let last = performance.now();
    let cancelled = false;

    const placeList = () => {
      const ul = listRef.current;
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      if (!ul || !cw || !ch) return;
      const ratio = FW / FH;
      const fw = Math.max(cw, ch * ratio);
      const fh = fw / ratio;
      const portrait = frameSet === "m";
      const fontSize = Math.round(portrait ? clamp(cw * 0.056, 18, 26) : clamp(fw * 0.0185, 18, 44));
      ul.style.fontSize = `${fontSize}px`;
      const cx = portrait ? cw / 2 : cw / 2 + 0.03 * fw;
      const cy = ch / 2 + (portrait ? 0.06 : 0) * fh; // sur la partie éclairée du mur
      // Positions entières : texte net, sans demi-pixel.
      ul.style.left = `${Math.round(cx - ul.offsetWidth / 2)}px`;
      ul.style.top = `${Math.round(cy - ul.offsetHeight / 2)}px`;
      ul.style.visibility = "visible";
    };

    const paint = (source: CanvasImageSource) => {
      const scale = Math.max(canvas.width / FW, canvas.height / FH);
      const w = FW * scale;
      const h = FH * scale;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(source, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    };

    const ensureBitmap = (i: number) => {
      if (i < 0 || i >= FRAME_COUNT || bitmaps.has(i) || pending.has(i) || !loaded[i]) return;
      pending.add(i);
      createImageBitmap(loaded[i] as HTMLImageElement)
        .then((bm) => {
          pending.delete(i);
          if (cancelled || Math.abs(i - lastIdx) > AHEAD + 2) return bm.close();
          bitmaps.set(i, bm);
        })
        .catch(() => pending.delete(i));
    };

    const prefetch = (center: number, dir: number) => {
      for (let d = 0; d <= AHEAD; d++) ensureBitmap(center + d * dir);
      for (let d = 1; d <= BEHIND; d++) ensureBitmap(center - d * dir);
      bitmaps.forEach((bm, k) => {
        if (Math.abs(k - center) > AHEAD + 2) {
          bm.close();
          bitmaps.delete(k);
        }
      });
    };

    const frameAt = (p: number) => Math.round(clamp((p - PLAY_FROM) / (PLAY_TO - PLAY_FROM)) * (FRAME_COUNT - 1));

    /** Image chargée la plus proche avant (sinon après) l'image demandée : jamais d'image vide. */
    const available = (idx: number) => {
      for (let j = idx; j >= 0; j--) if (loaded[j]) return j;
      for (let j = idx + 1; j < FRAME_COUNT; j++) if (loaded[j]) return j;
      return -1;
    };

    /** Dessine une seule image, l'exacte correspondant à la position (aucun mélange de deux images). */
    const render = (force = false) => {
      const idx = frameAt(shown.get());
      if (idx !== lastIdx) {
        prefetch(idx, idx > lastIdx ? 1 : -1);
        lastIdx = idx;
      }
      const src = available(idx);
      if (src < 0 || (src === drawnIdx && !force)) return;
      paint(bitmaps.get(src) ?? (loaded[src] as HTMLImageElement));
      if (drawnIdx === -1) setCanvasReady(true);
      drawnIdx = src;
    };

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      if (!cw || !ch) return;
      const w = Math.round(cw * dpr);
      const h = Math.round(ch * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        render(true); // redessin immédiat : pas d'image vide après un redimensionnement
      }
      placeList();
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const cur = shown.get();
      const diff = target.current - cur;
      if (diff !== 0) shown.set(Math.abs(diff) < 0.0005 ? target.current : cur + diff * (1 - Math.exp(-dt * 10)));
      render();
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (running || cancelled) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    target.current = clamp(scrollYProgress.get());
    shown.set(target.current);
    lastIdx = frameAt(target.current);

    // Ordre de chargement : l'image à l'écran et ses voisines d'abord (utile après un rechargement
    // en milieu de page), puis toutes les autres dans l'ordre de lecture.
    const order: number[] = [];
    const queued = new Set<number>();
    const push = (i: number) => {
      if (i >= 0 && i < FRAME_COUNT && !queued.has(i)) {
        queued.add(i);
        order.push(i);
      }
    };
    push(lastIdx);
    for (let d = 1; d <= AHEAD; d++) {
      push(lastIdx + d);
      push(lastIdx - d);
    }
    for (let i = 0; i < FRAME_COUNT; i++) push(i);

    let next = 0;
    const loadNext = () => {
      const i = order[next++];
      if (cancelled || i === undefined) return;
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        if (cancelled) return;
        loaded[i] = img;
        if (Math.abs(i - lastIdx) <= AHEAD) ensureBitmap(i);
        render(); // affiche l'image si elle est (ou se rapproche de) celle demandée
        loadNext();
      };
      img.onerror = () => loadNext(); // image manquante : la plus proche reste affichée
      img.src = frameSrc(frameSet, i);
    };
    for (let k = 0; k < 6; k++) loadNext();
    size();
    document.fonts?.ready.then(() => !cancelled && placeList());
    const ro = new ResizeObserver(size);
    ro.observe(canvas);
    const io = new IntersectionObserver((entries) => (entries.some((e) => e.isIntersecting) ? start() : stop()));
    io.observe(section);

    return () => {
      cancelled = true;
      stop();
      ro.disconnect();
      io.disconnect();
      bitmaps.forEach((bm) => bm.close());
      bitmaps.clear();
      setCanvasReady(false);
    };
  }, [reduce, set, shown, scrollYProgress]);

  if (reduce) {
    return (
      <section aria-label="Ce que fait SCAL" className="relative h-[75vh] min-h-[440px] overflow-hidden bg-cream-100">
        <Poster frame={FRAME_COUNT - 1} />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cream-50/90 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center px-6 pt-16">
          <ul className="flex flex-col gap-[0.5em] font-display text-[clamp(1.125rem,2.2vw,2rem)] font-semibold leading-tight tracking-tight text-[#2a1c13]">
            {WALL_LIST.map((l) => (
              <li key={l} className="flex items-center gap-[0.55em]">
                <Bullet />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} aria-label="Ce que fait SCAL" className="relative h-[430vh] bg-cream-100">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Poster frame={0} />
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${canvasReady ? "opacity-100" : "opacity-0"}`}
        />
        <ul
          ref={listRef}
          style={{ visibility: "hidden" }}
          className="absolute left-0 top-0 z-10 flex flex-col gap-[0.5em] whitespace-nowrap font-display font-semibold leading-tight tracking-tight text-[#2a1c13]"
        >
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
