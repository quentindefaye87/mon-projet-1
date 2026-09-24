import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import { CategoryCard } from "@/components/molecules/CategoryCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

const spans = ["lg:col-span-7 lg:row-span-2", "lg:col-span-5", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];

export function CollectionsSection() {
  return (
    <section id="solutions" aria-labelledby="collections-title" className="section scroll-mt-16 bg-cream-50">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="collections-title"
            eyebrow="Nos solutions"
            title={
              <>
                Toute l&apos;enveloppe de votre maison, <span className="accent text-brand-600">sur mesure.</span>
              </>
            }
            description="Fenêtres, baies, vérandas, portes, volets et portails : six familles de produits, en PVC ou en aluminium, dans la teinte de votre choix."
          />
          <Reveal>
            <ButtonLink href="/solutions" variant="ghost" className="shrink-0">
              Toutes nos solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {categories.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 3) * 0.08} className={cn(spans[i], i === 0 && "sm:col-span-2")}>
              <CategoryCard category={c} large={i === 0} index={i + 1} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
