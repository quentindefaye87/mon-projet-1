import { Icon } from "@/components/atoms/Icon";
import { Reveal } from "@/components/atoms/Reveal";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { features } from "@/data/content";

export function FeaturesSection() {
  return (
    <section aria-labelledby="features-title" className="section bg-dark-section grain relative overflow-hidden">
      <div aria-hidden className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-sapphire-500/10 blur-[140px]" />
      <div className="container relative z-10">
        <SectionHeading
          id="features-title"
          light
          align="center"
          eyebrow="Performances"
          title="L'exigence, jusque dans ce qui ne se voit pas."
          description="Chaque menuiserie est testée en laboratoire et certifiée. Nos performances sont mesurées, jamais estimées."
        />
        <ul className="mt-16 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 0.08} className="group relative bg-charcoal-950/80 p-8 transition-colors duration-500 hover:bg-charcoal-900/80 lg:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-bronze-300 shadow-inner-glass transition-colors duration-500 group-hover:border-bronze-300/40">
                <Icon name={f.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-7 font-display text-lg font-semibold text-cream-50">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{f.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
