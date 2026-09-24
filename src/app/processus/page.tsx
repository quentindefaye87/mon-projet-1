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
  title: "Notre méthode",
  description:
    "Rencontre, métré et devis gratuit, fabrication sur mesure, pose par nos techniciens et suivi : comment SCAL mène votre projet de A à Z.",
  path: "/processus",
});

const commitments = [
  { icon: UserRound, title: "Un interlocuteur unique", text: "La même équipe vous suit du premier rendez-vous au réglage final." },
  { icon: Clock, title: "Un planning clair", text: "Vous connaissez les étapes et les délais dès la signature du devis, et nous vous prévenons avant chaque intervention." },
  { icon: Wrench, title: "Nos propres techniciens", text: "Fabrication et pose sont assurées par l'équipe SCAL, formée à nos produits et qualifiée RGE Qualibat." },
  { icon: ShieldCheck, title: "Un chantier respecté", text: "Protection de votre intérieur, évacuation des anciennes menuiseries et nettoyage en fin de pose." },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <PageHero
        eyebrow="Notre méthode"
        title={
          <>
            Un projet serein, <span className="accent text-brand-400">de bout en bout.</span>
          </>
        }
        description="Cinq étapes claires et un seul interlocuteur. Voici comment nous transformons vos ouvertures."
        breadcrumbs={[{ label: "Notre méthode", href: "/processus" }]}
        visual={{ variant: "picture", tone: "ember", alt: "", src: "/images/porte-entree-rouge.jpg", position: "50% 40%" }}
      />
      <ProcessSection />
      <section aria-labelledby="commitments-title" className="section bg-cream-50">
        <div className="container">
          <SectionHeading id="commitments-title" eyebrow="Nos engagements" title="Ce qui fait la différence." />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map(({ icon: IconCmp, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 0.08} className="rounded-lg border border-charcoal-900/[0.06] bg-white/60 p-7 shadow-soft">
                <IconCmp className="h-6 w-6 text-brand-500" strokeWidth={1.4} aria-hidden />
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
