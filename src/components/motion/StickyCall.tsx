"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

/** Bouton d'appel flottant sur mobile, qui apparaît après un peu de défilement. */
export function StickyCall() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          aria-label={`Appeler SCAL au ${site.phoneDisplay}`}
          initial={reduce ? false : { opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift md:hidden"
        >
          <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full border border-brand-500/70 motion-reduce:hidden" />
          <Phone className="h-6 w-6" aria-hidden />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
