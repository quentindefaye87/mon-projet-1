import { PageHero } from "@/components/templates/PageHero";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Reveal } from "@/components/atoms/Reveal";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Guide : comment mesurer ses fenêtres",
  description: "Largeur, hauteur, profondeur de tableau : notre guide pas à pas pour mesurer vos ouvertures avant de demander un devis.",
  path: "/guide-mesure",
});

const steps = [
  {
    title: "Mesurez la largeur",
    text: "Mesurez la largeur du tableau (d'un mur à l'autre, côté extérieur) en trois points : en haut, au milieu et en bas. Retenez la plus petite valeur.",
  },
  {
    title: "Mesurez la hauteur",
    text: "Mesurez la hauteur du tableau, de l'appui au linteau, à gauche, au centre et à droite. Là encore, retenez la plus petite valeur.",
  },
  {
    title: "Vérifiez l'équerrage",
    text: "Mesurez les deux diagonales. Un écart supérieur à 5 mm indique une ouverture hors d'équerre : signalez-le dans votre demande.",
  },
  {
    title: "Notez la profondeur et l'environnement",
    text: "Profondeur du tableau, présence d'un volet roulant, d'un doublage ou d'une isolation intérieure : ces détails orientent le type de pose.",
  },
];

function MeasureDiagram() {
  return (
    <svg viewBox="0 0 400 320" className="h-auto w-full" role="img" aria-labelledby="diagram-title">
      <title id="diagram-title">Schéma : largeur (L) et hauteur (H) à mesurer en trois points, diagonales D1 et D2</title>
      <rect x="80" y="40" width="240" height="220" fill="#efefef" stroke="#2b2b2b" strokeWidth="3" />
      <rect x="92" y="52" width="216" height="196" fill="#dededf" stroke="#59595b" strokeWidth="1.5" />
      <line x1="80" y1="40" x2="320" y2="260" stroke="#dc6a6d" strokeDasharray="6 5" strokeWidth="1.5" />
      <line x1="320" y1="40" x2="80" y2="260" stroke="#dc6a6d" strokeDasharray="6 5" strokeWidth="1.5" />
      {[60, 150, 240].map((y) => (
        <g key={y}>
          <line x1="84" y1={y} x2="316" y2={y} stroke="#a52e32" strokeWidth="1.5" markerEnd="url(#arr)" markerStart="url(#arr)" />
        </g>
      ))}
      {[100, 200, 300].map((x) => (
        <line key={x} x1={x} y1="44" x2={x} y2="256" stroke="#3f6690" strokeWidth="1.5" markerEnd="url(#arr)" markerStart="url(#arr)" />
      ))}
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#59595b" />
        </marker>
      </defs>
      <text x="200" y="26" textAnchor="middle" fontSize="14" fill="#a52e32" fontWeight="600">L — largeur ×3</text>
      <text x="340" y="155" fontSize="14" fill="#3f6690" fontWeight="600">H ×3</text>
      <text x="200" y="295" textAnchor="middle" fontSize="13" fill="#8a663f">D1 / D2 — diagonales</text>
    </svg>
  );
}

export default function MeasureGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Guide pratique"
        title="Comment mesurer vos fenêtres."
        description="Quelques minutes et un mètre ruban suffisent pour une première estimation. Notre technicien reprendra ensuite toutes les cotes sur place, au millimètre."
        breadcrumbs={[{ label: "Guide de mesure", href: "/guide-mesure" }]}
        visual={{ variant: "frame", tone: "stone", alt: "" }}
      />
      <section aria-labelledby="steps-title" className="section bg-cream-50">
        <div className="container grid items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading id="steps-title" eyebrow="Pas à pas" title="Quatre mesures essentielles." />
            <ol className="mt-12 space-y-10">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 0.06} className="flex gap-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-400/50 font-display text-sm font-semibold text-brand-600">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal-900">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="glass-light rounded-lg p-8 lg:sticky lg:top-28">
            <MeasureDiagram />
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              <strong className="text-charcoal-900">Bon à savoir :</strong> ces mesures servent à l&apos;estimation. Les cotes de
              fabrication sont toujours relevées par nos techniciens, qui engagent notre responsabilité sur la précision.
            </p>
          </Reveal>
        </div>
      </section>
      <CtaBanner title="Laissez-nous mesurer pour vous." description="Le déplacement et la prise de cotes sont gratuits et sans engagement, partout en Haute-Vienne." />
    </>
  );
}
