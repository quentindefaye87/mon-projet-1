"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/atoms/Reveal";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { processSteps } from "@/data/content";

export function ProcessSection({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section aria-labelledby="process-title" className="section bg-light-section">
      <div className="container">
        <SectionHeading
          id="process-title"
          as={headingAs}
          align="center"
          eyebrow="Notre méthode"
          title={
            <>
              Du premier rendez&#8209;vous <span className="accent text-brand-600">au dernier réglage.</span>
            </>
          }
          description="Un interlocuteur unique vous accompagne à chaque étape, de la prise de cotes à la pose par nos propres techniciens."
        />
        <ol ref={ref} className="relative mt-20 grid gap-12 lg:grid-cols-5 lg:gap-6">
          <span aria-hidden className="absolute left-[23px] top-2 h-[calc(100%-1rem)] w-px bg-charcoal-900/10 lg:left-0 lg:top-[23px] lg:h-px lg:w-full" />
          <motion.span
            aria-hidden
            className="absolute left-[23px] top-2 hidden h-px w-full origin-left bg-brand-500 lg:left-0 lg:top-[23px] lg:block"
            style={{ scaleX: reduce ? 1 : progress }}
          />
          <motion.span
            aria-hidden
            className="absolute left-[23px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-brand-500 lg:hidden"
            style={{ scaleY: reduce ? 1 : progress }}
          />
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.1} className="group relative flex gap-6 lg:flex-col lg:gap-0">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-500/40 bg-cream-50 font-display text-sm font-semibold text-brand-600 shadow-soft transition-all duration-500 group-hover:scale-110 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-cream-50">
                {step.number}
              </span>
              <div className="lg:mt-8 lg:pr-4">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{step.duration}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-charcoal-900">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
