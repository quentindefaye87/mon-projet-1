import { Reveal } from "@/components/atoms/Reveal";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { processSteps } from "@/data/content";

export function ProcessSection({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) {
  return (
    <section aria-labelledby="process-title" className="section bg-light-section">
      <div className="container">
        <SectionHeading
          id="process-title"
          as={headingAs}
          align="center"
          eyebrow="Notre démarche"
          title="Du premier croquis à la dernière vis."
          description="Un interlocuteur unique vous accompagne à chaque étape, avec un planning clair et des engagements tenus."
        />
        <ol className="relative mt-20 grid gap-12 lg:grid-cols-5 lg:gap-6">
          <span aria-hidden className="absolute left-[23px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-bronze-400/60 via-charcoal-900/10 to-transparent lg:left-0 lg:top-[23px] lg:h-px lg:w-full lg:bg-gradient-to-r" />
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.1} className="relative flex gap-6 lg:flex-col lg:gap-0">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-bronze-400/40 bg-cream-50 font-display text-sm font-semibold text-bronze-600 shadow-soft">
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
