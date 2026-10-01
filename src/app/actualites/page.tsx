import { PageHero } from "@/components/templates/PageHero";
import { Reveal } from "@/components/atoms/Reveal";
import { FacebookFeed } from "@/components/organisms/FacebookFeed";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Actualités",
  description: "Suivez l'actualité de SCAL, entreprise de menuiseries à Aixe-sur-Vienne, sur sa page Facebook.",
  path: "/actualites",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Actualités"
        title={
          <>
            L&apos;actualité de SCAL, <span className="accent text-brand-400">sur les réseaux.</span>
          </>
        }
        description="Retrouvez nos dernières publications et nos chantiers sur notre page Facebook."
        breadcrumbs={[{ label: "Actualités", href: "/actualites" }]}
        visual={{ variant: "bay", tone: "stone", alt: "", src: "/images/veranda-alu-anthracite.jpg", position: "50% 55%" }}
      />
      <section aria-label="Publications Facebook" className="section bg-cream-50">
        <div className="container">
          <Reveal>
            <FacebookFeed />
          </Reveal>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
