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
    <section aria-labelledby="collections-title" className="section bg-cream-50">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="collections-title"
            eyebrow="Collections"
            title="Une ouverture pour chaque architecture."
            description="Six familles de menuiseries, déclinables en aluminium, bois-aluminium, chêne ou PVC, dans plus de 200 teintes."
          />
          <Reveal>
            <ButtonLink href="/collections" variant="ghost" className="shrink-0">
              Toutes les collections
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {categories.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 3) * 0.08} className={cn(spans[i], i === 0 && "sm:col-span-2")}>
              <CategoryCard category={c} large={i === 0} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
