import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/atoms/Reveal";
import { FrameDraw } from "@/components/motion/FrameDraw";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { commitments } from "@/data/content";

export function CommitmentsSection() {
  return (
    <section aria-labelledby="commitments-title" className="section bg-dark-section grain relative overflow-hidden">
      <div aria-hidden className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-brand-600/15 blur-[120px]" />
      <div className="container relative z-10 grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeading
            id="commitments-title"
            light
            eyebrow="Nos engagements"
            title={
              <>
                Un artisan de proximité, <span className="accent text-brand-400">une exigence haut de gamme.</span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <div className="glass relative mt-12 flex items-center gap-6 overflow-hidden rounded-lg p-6">
              <FrameDraw light className="absolute -right-4 -top-4 w-24 opacity-60" />
              <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-md bg-[#1d9ad6] text-white shadow-lift">
                <span className="text-[0.6rem] font-bold uppercase leading-none">RGE</span>
                <ShieldCheck className="mt-1 h-6 w-6" strokeWidth={1.6} aria-hidden />
              </span>
              <div className="relative">
                <p className="font-display text-lg font-semibold text-cream-50">Qualifié RGE Qualibat</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  Reconnu Garant de l&apos;Environnement : une qualification qui atteste de nos compétences en rénovation énergétique.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <ol className="space-y-6 lg:col-span-7">
          {commitments.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 0.1}>
              <div className="group flex gap-6 rounded-lg border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 ease-premium hover:border-brand-500/40 hover:bg-white/[0.05] sm:p-8">
                <span className="font-serif text-4xl italic leading-none text-brand-400 transition-transform duration-500 group-hover:-translate-y-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-cream-50">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{c.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
