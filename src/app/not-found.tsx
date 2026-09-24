import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/atoms/Button";
import { WindowArt } from "@/components/atoms/WindowArt";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal-950">
      <div className="absolute inset-0 opacity-50">
        <WindowArt variant="arch" tone="dusk" alt="" decorative />
      </div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent" />
      <div className="container relative z-10 py-40">
        <p className="eyebrow text-bronze-300">Erreur 404</p>
        <h1 className="mt-5 max-w-xl text-display-lg font-semibold text-cream-50 sm:text-display-xl">Cette fenêtre ne donne sur rien.</h1>
        <p className="mt-6 max-w-md text-lg text-slate-300">La page que vous cherchez a été déplacée ou n&apos;existe plus.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Retour à l&apos;accueil <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href="/collections" size="lg" variant="ghost-light">
            Voir les collections
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
