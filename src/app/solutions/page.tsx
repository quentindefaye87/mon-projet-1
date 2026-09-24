import { PageHero } from "@/components/templates/PageHero";
import { CategoryCard } from "@/components/molecules/CategoryCard";
import { ProductCard } from "@/components/molecules/ProductCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Reveal } from "@/components/atoms/Reveal";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
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
            Six familles, <span className="accent text-brand-400">une seule exigence.</span>
          </>
        }
        description="Fenêtres, vérandas, portes, volets et portails : en PVC ou en aluminium, dans la teinte de votre choix, toujours fabriqués à vos mesures."
        breadcrumbs={[{ label: "Nos solutions", href: "/solutions" }]}
        visual={{ variant: "bay", tone: "stone", alt: "", src: "/images/veranda-alu-anthracite.jpg", position: "50% 55%" }}
      />

      <section aria-label="Familles de produits" className="section bg-cream-50">
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

      <section aria-labelledby="models-title" className="section bg-light-section pt-0 sm:pt-0 lg:pt-0">
        <div className="container">
          <SectionHeading id="models-title" eyebrow="Modèles" title="Tous nos modèles" description="Configurez chaque modèle en ligne et obtenez une première estimation, affinée ensuite lors de la visite technique gratuite." />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 4) * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner title="Vous hésitez entre plusieurs solutions ?" description="Nous vous conseillons gratuitement, à l'atelier d'Aixe-sur-Vienne ou directement chez vous." />
    </>
  );
}
