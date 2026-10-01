import { PageHero } from "@/components/templates/PageHero";
import { CategoryCard } from "@/components/molecules/CategoryCard";
import { Reveal } from "@/components/atoms/Reveal";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { categories } from "@/data/categories";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Nos solutions : menuiseries, vérandas, fermetures",
  description:
    "Menuiseries PVC et aluminium, vérandas, portes d'entrée, volets, portails et portes de garage sur mesure, fabriqués et posés par SCAL à Limoges et en Haute-Vienne.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos solutions"
        title={
          <>
            Six familles, <span className="accent text-brand-400">à vos mesures.</span>
          </>
        }
        description="Fenêtres, vérandas, portes, volets, stores et portails : fabriqués et posés par SCAL."
        breadcrumbs={[{ label: "Nos solutions", href: "/solutions" }]}
        visual={{ variant: "bay", tone: "stone", alt: "", src: "/images/veranda-alu-anthracite.jpg", position: "50% 55%" }}
      />

      <section aria-label="Familles de produits" className="section bg-cream-50 pb-28">
        <div className="container">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={(i % 3) * 0.08}>
                <CategoryCard category={c} index={i + 1} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title="Un projet en tête ?" description="Contactez-nous pour un devis gratuit." />
    </>
  );
}
