"use client";

import { useState } from "react";
import { ArrowUpRight, Facebook } from "lucide-react";
import { Button, ButtonLink } from "@/components/atoms/Button";
import { site } from "@/lib/site";

const facebook = site.socials[0];

/**
 * Fil d'actualité de la page Facebook de SCAL. Le contenu n'est chargé depuis Facebook
 * qu'après un clic, pour ne pas déposer de cookies sans l'accord du visiteur.
 */
export function FacebookFeed() {
  const [shown, setShown] = useState(false);
  const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebook.href)}&tabs=timeline&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`;

  return (
    <div className="mx-auto w-full max-w-[500px]">
      {shown ? (
        <div className="overflow-hidden rounded-lg border border-charcoal-900/10 bg-white shadow-lift">
          <iframe
            title="Publications de la page Facebook de SCAL"
            src={src}
            width="500"
            height="700"
            className="h-[700px] w-full"
            loading="lazy"
            allow="encrypted-media"
          />
        </div>
      ) : (
        <div className="glass-light rounded-lg p-10 text-center shadow-soft">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1877f2] text-white">
            <Facebook className="h-8 w-8" aria-hidden />
          </span>
          <h2 className="mt-6 font-display text-xl font-semibold text-charcoal-900">Nos dernières publications</h2>
          <p className="mt-3 text-slate-600">
            Le fil s&apos;affiche depuis Facebook : en cliquant, vous acceptez le chargement du contenu de ce réseau.
          </p>
          <Button className="mt-8" onClick={() => setShown(true)}>
            Afficher les publications
          </Button>
        </div>
      )}
      <div className="mt-6 text-center">
        <ButtonLink href={facebook.href} external variant="ghost">
          Ouvrir la page Facebook
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </ButtonLink>
      </div>
    </div>
  );
}
