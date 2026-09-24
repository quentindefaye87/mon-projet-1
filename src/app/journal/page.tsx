import Link from "next/link";
import { PageHero } from "@/components/templates/PageHero";
import { PostCard } from "@/components/molecules/PostCard";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import { Reveal } from "@/components/atoms/Reveal";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { posts } from "@/data/posts";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Conseils — menuiseries, vérandas, fermetures",
  description:
    "PVC ou aluminium, véranda, volets roulants, aides à la rénovation et artisans RGE : les conseils de l'équipe SCAL pour bien choisir.",
  path: "/journal",
});

export default function JournalPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Conseils"
        title={
          <>
            Bien choisir, <span className="accent text-brand-400">bien rénover.</span>
          </>
        }
        description="L'expérience de nos techniciens, pour vous aider à faire les bons choix pour votre maison."
        breadcrumbs={[{ label: "Conseils", href: "/journal" }]}
        visual={{ variant: "grid", tone: "dusk", alt: "", src: "/images/maison-pierre-volets-battants.jpg", position: "50% 45%" }}
      />
      <section aria-label="Articles" className="section bg-cream-50">
        <div className="container">
          {featured && (
            <Reveal>
              <article className="group relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <ArtFrame visual={featured.cover} hoverZoom decorative className="aspect-[16/10] shadow-lift" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-600">
                    À la une · {featured.category} · <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  </p>
                  <h2 className="mt-4 font-display text-display-md font-semibold text-charcoal-900">
                    <Link href={`/journal/${featured.slug}`} className="after:absolute after:inset-0">
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-slate-600">{featured.excerpt}</p>
                  <p className="mt-6 text-sm text-slate-500">
                    {featured.author} · {featured.readTime} de lecture
                  </p>
                </div>
              </article>
            </Reveal>
          )}
          <ul className="mt-24 grid gap-14 md:grid-cols-3 md:gap-8">
            {rest.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 0.08}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
