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
          body: `${site.legalName}, [forme juridique à compléter], dont le siège social est situé ${site.address.street}, ${site.address.postalCode} ${site.address.city}. Téléphone : ${site.phoneDisplay}. E-mail : ${site.email}. [SIREN, capital social et numéro de TVA intracommunautaire à compléter.]`,
        },
        { heading: "Directeur de la publication", body: "[Nom du directeur de la publication à compléter.]" },
        { heading: "Hébergement", body: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. [À adapter selon l'hébergeur retenu.]" },
        {
          heading: "Propriété intellectuelle",
          body: "L'ensemble des contenus de ce site (textes, illustrations, logos, marques) est protégé par le droit de la propriété intellectuelle. Toute reproduction sans autorisation préalable est interdite.",
        },
      ]}
    />
  );
}
