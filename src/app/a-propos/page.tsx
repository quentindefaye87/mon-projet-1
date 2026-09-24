import Image from "next/image";
import { PageHero } from "@/components/templates/PageHero";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Reveal } from "@/components/atoms/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { stats } from "@/data/content";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "L'entreprise",
  description: `Entreprise familiale installée à Aixe-sur-Vienne depuis ${site.foundedYear}, SCAL fabrique et pose menuiseries PVC et aluminium, vérandas et fermetures à Limoges et en Haute-Vienne.`,
  path: "/a-propos",
});

const values = [
  {
    title: "La proximité",
    text: "Installés à Aixe-sur-Vienne, nous connaissons le bâti limousin, ses granges en pierre comme ses pavillons récents. Et nous restons joignables, bien après la pose.",
  },
  {
    title: "Le travail bien fait",
    text: "Une menuiserie ne vaut que par sa pose. Calfeutrement, équerrage, finitions : nos techniciens prennent le temps de bien faire.",
  },
  {
    title: "Le conseil sincère",
    text: "Nous recommandons ce dont votre maison a besoin, au juste prix. Chaque projet est étudié sur place, jamais sur catalogue.",
  },
];

const timeline = [
  { year: String(site.foundedYear), text: "Création de SCAL, entreprise familiale installée rue de Cognac à Aixe-sur-Vienne." },
  { year: "Savoir-faire", text: "Menuiseries PVC et aluminium, vérandas, fermetures et protections solaires : une offre complète pour l'enveloppe de la maison." },
  { year: "RGE", text: "Qualification RGE Qualibat, gage de compétence en rénovation énergétique." },
  { year: "Aujourd'hui", text: "La même exigence : fabriquer et poser, avec nos propres équipes, des ouvertures à vos mesures." },
];

const gallery = [
  { src: "/images/veranda-alu-anthracite.jpg", alt: "Véranda aluminium anthracite à toit pans", position: "50% 55%" },
  { src: "/images/porte-fenetre-alu-grange.jpg", alt: "Porte-fenêtre aluminium dans une grange en pierre", position: "50% 40%" },
  { src: "/images/porte-entree-rouge.jpg", alt: "Porte d'entrée rouge à hublots avec fixe latéral", position: "50% 45%" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="L'entreprise"
        title={
          <>
            Une famille d&apos;artisans, <span className="accent text-brand-400">depuis {site.foundedYear}.</span>
          </>
        }
        description="Depuis sa création, SCAL reste fidèle à une conviction : une ouverture bien conçue et bien posée change la façon dont on habite sa maison."
        breadcrumbs={[{ label: "L'entreprise", href: "/a-propos" }]}
        visual={{ variant: "frame", tone: "stone", alt: "", src: "/images/porte-fenetre-alu-grange.jpg", position: "50% 30%" }}
      />

      <section aria-labelledby="mission-title" className="section bg-cream-50">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <ImageReveal className="aspect-[4/5] rounded-lg shadow-lift">
            <Image
              src="/images/veranda-alu-anthracite.jpg"
              alt="Véranda aluminium réalisée par SCAL"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              style={{ objectPosition: "50% 55%" }}
            />
          </ImageReveal>
          <div>
            <SectionHeading
              id="mission-title"
              eyebrow="Notre métier"
              title={
                <>
                  Fabriquer et poser, <span className="accent text-brand-600">avec la même équipe.</span>
                </>
              }
              description="SCAL est spécialisée dans la menuiserie PVC et aluminium, les vérandas et tout type de fermetures et de protections solaires. Le savoir-faire de nos techniciens, tant à la fabrication qu'à la pose, nous permet de répondre à vos besoins dans tous les domaines de la fermeture de l'habitat."
            />
            <Reveal delay={0.1}>
              <dl className="mt-12 grid grid-cols-2 gap-8">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse border-l-2 border-brand-500/70 pl-5">
                    <dt className="mt-1 text-sm text-slate-600">{s.label}</dt>
                    <dd className="font-display text-3xl font-semibold text-charcoal-900">
                      <CountUp value={s.value} plain={"plain" in s} />
                      <span className="text-brand-600">{s.suffix}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title" className="section bg-light-section">
        <div className="container">
          <SectionHeading id="values-title" align="center" eyebrow="Nos valeurs" title="Ce qui nous guide." />
          <ul className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                as="li"
                key={v.title}
                delay={i * 0.1}
                className="glass-light group rounded-lg p-8 transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="font-serif text-3xl italic text-brand-600">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-charcoal-900">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="history-title" className="section bg-cream-50">
        <div className="container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="history-title" eyebrow="Repères" title="Plus de quarante ans d'ouvertures." />
          </div>
          <ol className="relative space-y-10 border-l-2 border-brand-500/30 pl-8 lg:col-span-8">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 0.06} className="relative">
                <span aria-hidden className="absolute -left-[39px] top-2 h-3 w-3 rounded-full bg-brand-500 ring-4 ring-cream-50" />
                <p className="font-display text-2xl font-semibold text-charcoal-900">{t.year}</p>
                <p className="mt-2 max-w-xl leading-relaxed text-slate-600">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="gallery-title" className="section bg-cream-100">
        <div className="container">
          <SectionHeading id="gallery-title" eyebrow="En images" title="Notre travail parle pour nous." />
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {gallery.map((g, i) => (
              <li key={g.src}>
                <ImageReveal delay={i * 0.12} from={i === 1 ? "bottom" : "left"} className="aspect-[3/4] rounded-lg shadow-soft">
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" style={{ objectPosition: g.position }} />
                </ImageReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FeaturesSection />
      <CtaBanner
        title="Venez nous rencontrer."
        description={`Retrouvez-nous ${site.address.street.replace("Rue", "rue")} à ${site.address.city}, ou nous nous déplaçons chez vous pour étudier votre projet.`}
      />
    </>
  );
}
