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
  title: "Collections de fenêtres sur mesure",
  description:
    "Fenêtres battantes, baies coulissantes, oscillo-battantes, châssis fixes, bow-windows et formes sur mesure : découvrez nos six collections de menuiseries haut de gamme.",
  path: "/collections",
});

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="Six familles, une infinité de configurations."
        description="Chaque collection se décline en aluminium, bois-aluminium, chêne massif ou PVC haute performance, dans plus de 200 teintes et finitions."
        breadcrumbs={[{ label: "Collections", href: "/collections" }]}
        visual={{ variant: "grid", tone: "sapphire", alt: "" }}
      />

      <section aria-label="Types de fenêtres" className="section bg-cream-50">
        <div className="container">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={(i % 3) * 0.08}>
                <CategoryCard category={c} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="models-title" className="section bg-light-section pt-0 sm:pt-0 lg:pt-0">
        <div className="container">
          <SectionHeading id="models-title" eyebrow="Modèles" title="Tous nos modèles" description="Configurez chaque modèle en ligne et obtenez une estimation instantanée." />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 4) * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner title="Vous hésitez entre plusieurs modèles ?" description="Nos conseillers vous orientent gratuitement, en showroom, à domicile ou en visio." />
    </>
  );
}
