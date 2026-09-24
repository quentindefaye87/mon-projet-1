import { PageHero } from "@/components/templates/PageHero";
import { PortfolioGrid } from "@/components/organisms/PortfolioGrid";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Réalisations",
  description:
    "Villas contemporaines, immeubles haussmanniens, sièges sociaux, hôtels : découvrez une sélection de nos chantiers de menuiseries sur mesure.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Chaque projet raconte une lumière."
        description="Une sélection de chantiers récents, du résidentiel au tertiaire, du patrimoine à l'architecture contemporaine."
        breadcrumbs={[{ label: "Réalisations", href: "/realisations" }]}
        visual={{ variant: "facade", tone: "forest", alt: "" }}
      />
      <section aria-label="Galerie des réalisations" className="section bg-cream-50">
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>
      <TestimonialsSection />
      <CtaBanner title="Votre projet sera le prochain." />
    </>
  );
}
