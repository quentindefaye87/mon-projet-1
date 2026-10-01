import { LegalPage } from "@/components/templates/LegalPage";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Mentions légales", description: `Mentions légales du site ${site.name}.`, path: "/mentions-legales" });

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Mentions légales"
      path="/mentions-legales"
      sections={[
        {
          heading: "Éditeur du site",
          body: `Société de Constructions en Alliages Légers (${site.legalName}), société par actions simplifiée au capital de 215 000 €, dont le siège social est situé ${site.address.street}, ${site.address.postalCode} ${site.address.city}. SIRET / RCS : 521 196 329. N° de TVA intracommunautaire : FR21 521196329. Téléphone : ${site.phoneDisplay}. E-mail : ${site.email}. [Informations relevées sur le site actuel scal87.fr, à confirmer par l'entreprise avant publication.]`,
        },
        { heading: "Directeur de la publication", body: "Le représentant légal de la société. [Nom à confirmer par l'entreprise.]" },
        { heading: "Hébergement", body: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. [À adapter selon l'hébergeur retenu.]" },
        {
          heading: "Propriété intellectuelle",
          body: "L'ensemble des contenus de ce site (textes, illustrations, logos, marques) est protégé par le droit de la propriété intellectuelle. Toute reproduction sans autorisation préalable est interdite.",
        },
      ]}
    />
  );
}
