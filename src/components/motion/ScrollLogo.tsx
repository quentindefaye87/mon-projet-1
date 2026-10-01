"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { LOGO_GREY, LOGO_HEIGHT, LOGO_RED, LOGO_WIDTH } from "@/data/logo-paths";

interface ScrollLogoProps {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
}

/** Point du logo sur lequel on zoome (le « A » de SCAL). */
const FOCUS = { x: 243, y: 112 };
const CENTER = { x: LOGO_WIDTH / 2, y: LOGO_HEIGHT / 2 };
const MAX_ZOOM = 14;

const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);
const ease = (t: number) => t * t * (3 - 2 * t);

function Tagline() {
  return (
    <text
      x="34"
      y="238"
      fill="#4d4d4d"
      fontFamily="var(--font-display), Arial, sans-serif"
      fontSize="26"
      fontWeight="800"
      textLength="389"
      lengthAdjust="spacingAndGlyphs"
    >
      DES OUVERTURES À VOS MESURES
    </text>
  );
}

/**
 * Animation d'ouverture : le logo SCAL (vectoriel, donc net quel que soit le zoom)
 * se rapproche du « A » au fil du défilement, se fond dans une lumière douce,
 * puis laisse place à la baseline. Avec « réduire les animations », le logo reste fixe.
 */
export function ScrollLogo({ eyebrow, title, accent, text }: ScrollLogoProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const size = useRef({ w: 1440, h: 900 });
  const progress = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  const draw = (p: number) => {
    const svg = svgRef.current;
    if (!svg) return;
    const { w, h } = size.current;
    // Zoom 1 = logo entièrement visible avec une marge.
    const base = Math.min(w / (LOGO_WIDTH * 1.12), h / (LOGO_HEIGHT * 1.35));
    const t = ease(clamp((p - 0.06) / 0.58));
    const zoom = Math.exp(Math.log(MAX_ZOOM) * t * t);
    const move = ease(clamp((p - 0.06) / 0.5));
    const cx = CENTER.x + (FOCUS.x - CENTER.x) * move;
    const cy = CENTER.y + (FOCUS.y - CENTER.y) * move;
    const vw = w / (base * zoom);
    const vh = h / (base * zoom);
    svg.setAttribute("viewBox", `${cx - vw / 2} ${cy - vh / 2} ${vw} ${vh}`);
  };

  useMotionValueEvent(progress, "change", draw);
  useMotionValueEvent(smooth, "change", (v) => progress.set(v));

  useEffect(() => {
    const el = stageRef.current;
    if (!el || reduce) return;
    const measure = () => {
      size.current = { w: el.clientWidth, h: el.clientHeight };
      draw(progress.get());
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  const taglineOpacity = useTransform(smooth, [0.04, 0.2], [1, 0]);
  const logoOpacity = useTransform(smooth, [0.5, 0.7], [1, 0]);
  const blur = useTransform(smooth, [0.4, 0.7], [0, 14]);
  const logoFilter = useTransform(blur, (b) => `blur(${b}px)`);
  const flare = useTransform(smooth, [0.38, 0.58, 0.8], [0, 1, 0.55]);
  const warm = useTransform(smooth, [0.5, 0.75], [0, 1]);
  const hintOpacity = useTransform(smooth, [0, 0.05], [1, 0]);
  const textOpacity = useTransform(smooth, [0.66, 0.8, 0.94, 1], [0, 1, 1, 0.9]);
  const textY = useTransform(smooth, [0.66, 0.8], [30, 0]);

  if (reduce) {
    return (
      <section aria-label={title} className="flex min-h-[70vh] items-center justify-center bg-[#fdfcfb] px-6 pt-24">
        <svg viewBox={`0 0 ${LOGO_WIDTH} ${LOGO_HEIGHT}`} className="w-full max-w-3xl" role="img" aria-label="SCAL — des ouvertures à vos mesures">
          <path d={LOGO_GREY} fill="#4d4d4d" />
          <path d={LOGO_RED} fill="#b93538" />
          <Tagline />
        </svg>
      </section>
    );
  }

  return (
    <section ref={sectionRef} aria-label={title} className="relative h-[320vh] bg-[#fdfcfb]">
      <div ref={stageRef} className="sticky top-0 h-screen w-full overflow-hidden bg-[#fdfcfb]">
        <motion.div
          style={{ opacity: warm }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,#f8f3ec_0%,#e4dcd2_55%,#c9bfb3_100%)]"
        />
        <motion.svg
          ref={svgRef}
          style={{ opacity: logoOpacity, filter: logoFilter }}
          viewBox={`0 0 ${LOGO_WIDTH} ${LOGO_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="SCAL — des ouvertures à vos mesures"
        >
          <path d={LOGO_GREY} fill="#4d4d4d" />
          <path d={LOGO_RED} fill="#b93538" />
          <motion.g style={{ opacity: taglineOpacity }}>
            <Tagline />
          </motion.g>
        </motion.svg>
        <motion.div
          style={{ opacity: flare }}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_48%,rgba(255,255,255,0.95)_0%,rgba(255,250,244,0.55)_18%,transparent_48%)]"
        />
        <motion.div
          style={{ opacity: hintOpacity }}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 right-6 z-10 flex flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#4d4d4d]"
        >
          Faites défiler
          <span className="block h-10 w-px animate-pulse bg-[#a52e32]" />
        </motion.div>
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 z-10 mx-auto flex max-w-6xl items-end px-4 pb-10 md:items-center md:px-6 md:pb-0"
        >
          <div className="max-w-xl rounded-2xl bg-[#2b2b2b]/85 p-6 text-white shadow-2xl backdrop-blur-md md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              {title} <span className="accent text-[#ffb3b5]">{accent}</span>
            </h2>
            <p className="mt-4 text-base text-white/85 md:text-lg">{text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
