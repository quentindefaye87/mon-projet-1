import { PageHero } from "@/components/templates/PageHero";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import { Reveal } from "@/components/atoms/Reveal";
import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { stats } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Notre maison",
  description:
    "Depuis 1994, notre atelier lyonnais conçoit et fabrique des menuiseries d'exception. Découvrez notre histoire, nos valeurs et nos équipes.",
  path: "/a-propos",
});

const values = [
  {
    title: "La justesse du détail",
    text: "Un profil affiné de 3 mm, une parclose biseautée, un joint invisible : c'est dans ces détails que se joue l'élégance d'une fenêtre.",
  },
  {
    title: "La durabilité comme principe",
    text: "Nous concevons des menuiseries pour durer 40 ans et plus. Pièces détachées disponibles, matériaux réparables, conseils d'entretien.",
  },
  {
    title: "La sincérité du conseil",
    text: "Nous recommandons ce dont votre projet a besoin, pas davantage. Parfois, cela signifie rénover plutôt que remplacer.",
  },
];

const timeline = [
  { year: "1994", text: "Création de l'atelier par Bernard Lacombe, compagnon menuisier, à Lyon Gerland." },
  { year: "2006", text: "Lancement de la gamme bois-aluminium et ouverture du bureau d'études." },
  { year: "2015", text: "Nouveau site de production de 12 000 m², alimenté à 100 % en énergie renouvelable." },
  { year: "2021", text: "Certification Passivhaus de la gamme Cité et ouverture du showroom parisien." },
  { year: "2026", text: "140 collaborateurs, 14 000 menuiseries par an et une deuxième génération à la direction." },
];

const team = [
  { name: "Camille Lacombe", role: "Directrice générale", visual: { variant: "interior" as const, tone: "bronze" as const } },
  { name: "Hugo Brenner", role: "Directeur du bureau d'études", visual: { variant: "frame" as const, tone: "sapphire" as const } },
  { name: "Élise Moreau", role: "Directrice artistique", visual: { variant: "arch" as const, tone: "forest" as const } },
  { name: "Karim Aït-Saïd", role: "Responsable des chantiers", visual: { variant: "facade" as const, tone: "dusk" as const } },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre maison"
        title="Des menuisiers, avant tout."
        description="Trente-deux ans après la création de l'atelier, nous restons fidèles à une conviction : une fenêtre bien dessinée transforme la manière dont on habite un lieu."
        breadcrumbs={[{ label: "Notre maison", href: "/a-propos" }]}
        visual={{ variant: "frame", tone: "bronze", alt: "" }}
      />

      <section aria-labelledby="mission-title" className="section bg-cream-50">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <ArtFrame visual={{ variant: "frame", tone: "dusk", alt: "Profil de fenêtre en cours d'assemblage dans l'atelier" }} className="aspect-[4/5] shadow-lift" />
          </Reveal>
          <div>
            <SectionHeading
              id="mission-title"
              eyebrow="Notre mission"
              title="Faire entrer la lumière, durablement."
              description="Nous concevons, fabriquons et posons des menuiseries qui conjuguent la précision de l'artisanat et la rigueur de l'ingénierie. Chaque fenêtre sort de nos ateliers lyonnais, contrôlée une à une, avant d'être posée par nos propres équipes."
            />
            <Reveal delay={0.1}>
              <dl className="mt-12 grid grid-cols-2 gap-8">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse">
                    <dt className="mt-1 text-sm text-slate-600">{s.label}</dt>
                    <dd className="font-display text-3xl font-semibold text-charcoal-900">
                      {s.value}
                      <span className="text-bronze-500">{s.suffix}</span>
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
              <Reveal as="li" key={v.title} delay={i * 0.1} className="glass-light rounded-lg p-8">
                <span className="font-display text-sm font-semibold text-bronze-500">0{i + 1}</span>
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
            <SectionHeading id="history-title" eyebrow="Histoire" title="Trois décennies d'atelier." />
          </div>
          <ol className="relative space-y-10 border-l border-bronze-400/40 pl-8 lg:col-span-8">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 0.06} className="relative">
                <span aria-hidden className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-bronze-400 ring-4 ring-cream-50" />
                <p className="font-display text-2xl font-semibold text-charcoal-900">{t.year}</p>
                <p className="mt-2 max-w-xl leading-relaxed text-slate-600">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="team-title" className="section bg-cream-100">
        <div className="container">
          <SectionHeading id="team-title" eyebrow="L'équipe" title="Les visages de l'atelier." description="Ingénieurs, menuisiers, designers et poseurs : 140 passionnés au service de vos projets." />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal as="li" key={m.name} delay={i * 0.08}>
                <ArtFrame visual={{ ...m.visual, alt: "" }} decorative className="aspect-[4/5] shadow-soft" />
                <p className="mt-5 font-display text-lg font-semibold text-charcoal-900">{m.name}</p>
                <p className="text-sm text-slate-500">{m.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FeaturesSection />
      <CtaBanner title="Venez nous rencontrer." description="Showrooms à Lyon et Paris, visite de l'atelier sur rendez-vous. Nous serons ravis de vous montrer comment naissent nos menuiseries." />
    </>
  );
}
