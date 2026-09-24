import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import { PostCard } from "@/components/molecules/PostCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { posts } from "@/data/posts";

export function JournalTeaser() {
  return (
    <section aria-labelledby="journal-title" className="section bg-cream-50">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="journal-title"
            eyebrow="Journal"
            title="Conseils & inspirations."
            description="Performance énergétique, entretien, tendances : l'expertise de nos équipes, partagée."
          />
          <Reveal>
            <ButtonLink href="/journal" variant="ghost" className="shrink-0">
              Tous les articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>
        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.08}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
