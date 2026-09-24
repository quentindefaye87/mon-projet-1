"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FrameDraw } from "@/components/motion/FrameDraw";

export function HeroMedia() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yMain = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120]);
  const ySmall = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.06, 1.18]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-md lg:max-w-none">
      <motion.div
        style={{ y: yMain }}
        initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-[0_40px_100px_-30px_rgba(43,43,43,0.45)]"
      >
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src="/images/veranda-alu-anthracite.jpg"
            alt="Véranda aluminium anthracite à toit quatre pans réalisée par SCAL en Haute-Vienne"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
            style={{ objectPosition: "50% 55%" }}
          />
        </motion.div>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-charcoal-950/45 via-transparent to-transparent" />
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="glass absolute bottom-4 right-4 rounded-full px-4 py-2 text-xs font-medium text-cream-50"
        >
          Réalisation · Véranda aluminium
        </motion.p>
      </motion.div>

      <FrameDraw delay={1} className="pointer-events-none absolute -right-6 -top-8 hidden w-28 sm:block lg:-right-10 lg:w-36" />

      <motion.div
        style={{ y: ySmall }}
        initial={reduce ? false : { opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-10 -left-3 w-[42%] sm:-left-12"
      >
        <div className="animate-float motion-reduce:animate-none">
          <div className="relative aspect-[3/4] overflow-hidden rounded-md border-4 border-white shadow-lift">
            <Image
              src="/images/porte-entree-rouge.jpg"
              alt="Porte d'entrée aluminium rouge à hublots posée par SCAL"
              fill
              sizes="(min-width: 1024px) 18vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
