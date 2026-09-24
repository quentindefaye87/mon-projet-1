import { PageHero } from "@/components/templates/PageHero";
import { PortfolioGrid } from "@/components/organisms/PortfolioGrid";
import { CommitmentsSection } from "@/components/organisms/CommitmentsSection";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Réalisations",
  description:
    "Menuiseries aluminium, vérandas, portes d'entrée : découvrez des chantiers réalisés par SCAL à Limoges et en Haute-Vienne.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title={
          <>
            Chaque chantier, <span className="accent text-brand-400">une signature.</span>
          </>
        }
        description="Granges en pierre, maisons en granit, extensions : quelques réalisations de nos équipes, en Haute-Vienne."
        breadcrumbs={[{ label: "Réalisations", href: "/realisations" }]}
        visual={{ variant: "frame", tone: "stone", alt: "", src: "/images/porte-fenetre-alu-grange.jpg", position: "50% 35%" }}
      />
      <section aria-label="Galerie des réalisations" className="section bg-cream-50">
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>
      <CommitmentsSection />
      <CtaBanner title="Votre projet sera le prochain." />
    </>
  );
}
