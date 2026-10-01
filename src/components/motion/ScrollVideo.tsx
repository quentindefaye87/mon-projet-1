"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ScrollVideoProps {
  /** Chemin sans extension : lit `.webm` puis `.mp4`. */
  src: string;
  poster: string;
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
}

/**
 * Vidéo pilotée par le défilement : la section reste fixée à l'écran pendant
 * que la lecture avance avec la molette / le doigt (vidéo encodée en images
 * clés pour des allers-retours fluides). Avec « réduire les animations »,
 * seule l'image d'aperçu est affichée.
 */
export function ScrollVideo({ src, poster, eyebrow, title, accent, text }: ScrollVideoProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  const textOpacity = useTransform(scrollYProgress, [0, 0.12, 0.8, 0.95], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.12], [30, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    let target = 0;
    let current = 0;
    let raf = 0;
    let duration = video.duration || 0;

    const onMeta = () => {
      duration = video.duration || 0;
    };
    video.addEventListener("loadedmetadata", onMeta);
    video.pause();

    const unsub = scrollYProgress.on("change", (v) => {
      target = Math.min(Math.max(v, 0), 1);
    });
    const tick = () => {
      if (duration) {
        current += (target - current) * 0.12;
        const t = current * (duration - 0.05);
        if (Math.abs(video.currentTime - t) > 0.01 && !video.seeking) video.currentTime = t;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      unsub();
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, [reduce, scrollYProgress]);

  if (reduce) {
    return (
      <section aria-label={title} className="relative overflow-hidden bg-[#f4f1ee] py-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={poster} alt="Logo SCAL — des ouvertures à vos mesures" className="mx-auto w-full max-w-5xl" />
      </section>
    );
  }

  return (
    <section ref={sectionRef} aria-label={title} className="relative h-[320vh] bg-[#f4f1ee]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          poster={poster}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={`${src}.mp4`} type="video/mp4" />
          <source src={`${src}.webm`} type="video/webm" />
        </video>
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 mx-auto mt-auto w-full max-w-6xl px-4 pb-10 md:px-6 md:pb-16"
        >
          <div className="max-w-xl rounded-2xl bg-[#2b2b2b]/80 p-6 text-white shadow-2xl backdrop-blur-md md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">{eyebrow}</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-4xl">
            {title} <span className="accent text-[#ffb3b5]">{accent}</span>
          </h2>
          <p className="mt-4 text-base text-white/85 md:text-lg">{text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
