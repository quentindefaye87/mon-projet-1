import { ShieldCheck, Clock, UserRound, Wrench } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { ProcessSection } from "@/components/organisms/ProcessSection";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { FaqAccordion } from "@/components/molecules/FaqAccordion";
import { Reveal } from "@/components/atoms/Reveal";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { generalFaqs } from "@/data/content";
import { JsonLd, faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Notre démarche",
  description:
    "Consultation, conception, fabrication, installation et accompagnement : découvrez comment nous menons votre projet de menuiseries de A à Z.",
  path: "/processus",
});

const commitments = [
  { icon: UserRound, title: "Un interlocuteur unique", text: "Un chef de projet dédié, du premier rendez-vous à la réception du chantier." },
  { icon: Clock, title: "Des délais tenus", text: "Planning contractuel et suivi de fabrication en temps réel. 97 % de nos chantiers livrés à la date prévue." },
  { icon: Wrench, title: "Des poseurs salariés", text: "Aucune sous-traitance : nos 48 poseurs sont formés dans notre centre et certifiés RGE." },
  { icon: ShieldCheck, title: "Un chantier protégé", text: "Bâches, protections de sol, évacuation des anciennes menuiseries et nettoyage final inclus." },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <PageHero
        eyebrow="Notre démarche"
        title="Un projet serein, de bout en bout."
        description="Cinq étapes claires, un seul interlocuteur et des engagements écrits. Voici comment nous transformons vos ouvertures."
        breadcrumbs={[{ label: "Notre démarche", href: "/processus" }]}
        visual={{ variant: "interior", tone: "sapphire", alt: "" }}
      />
      <ProcessSection />
      <section aria-labelledby="commitments-title" className="section bg-cream-50">
        <div className="container">
          <SectionHeading id="commitments-title" eyebrow="Nos engagements" title="Ce qui fait la différence." />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map(({ icon: IconCmp, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 0.08} className="rounded-lg border border-charcoal-900/[0.06] bg-white/60 p-7 shadow-soft">
                <IconCmp className="h-6 w-6 text-bronze-500" strokeWidth={1.4} aria-hidden />
                <h3 className="mt-6 font-display text-lg font-semibold text-charcoal-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <section aria-labelledby="faq-process" className="section bg-light-section">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-process" eyebrow="FAQ" title="Vos questions." />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={generalFaqs} />
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
