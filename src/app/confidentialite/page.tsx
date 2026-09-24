import { LegalPage } from "@/components/templates/LegalPage";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Politique de confidentialité",
  description: `Comment ${site.name} collecte, utilise et protège vos données personnelles.`,
  path: "/confidentialite",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      path="/confidentialite"
      sections={[
        {
          heading: "Données collectées",
          body: "Lorsque vous remplissez un formulaire de devis ou de contact, nous collectons vos nom, prénom, coordonnées, code postal et les informations relatives à votre projet. Aucune donnée n'est collectée à votre insu.",
        },
        {
          heading: "Finalités",
          body: "Ces données sont utilisées exclusivement pour répondre à votre demande, établir un devis et assurer le suivi de votre projet. Elles ne sont jamais cédées ni vendues à des tiers.",
        },
        {
          heading: "Durée de conservation",
          body: "Les données des prospects sont conservées 3 ans à compter du dernier contact. Les données clients sont conservées pendant la durée de la relation contractuelle et de la garantie.",
        },
        {
          heading: "Vos droits",
          body: `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et de portabilité de vos données. Pour l'exercer, écrivez à ${site.email}. Vous pouvez également introduire une réclamation auprès de la CNIL.`,
        },
        {
          heading: "Stockage local",
          body: "Le configurateur enregistre votre sélection de menuiseries dans le stockage local de votre navigateur afin de la retrouver sur la page de devis. Ces informations ne quittent votre appareil que si vous envoyez le formulaire.",
        },
      ]}
    />
  );
}
