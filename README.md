# Lumen & Cadre — site vitrine & configurateur de menuiseries haut de gamme

Site e-commerce premium (B2C & B2B) pour un fabricant de fenêtres sur mesure. Next.js 14 (App Router, SSG), TypeScript, Tailwind CSS, architecture Atomic Design. Tout le contenu est en français.

## Démarrage

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production (42 pages pré-rendues)
npm run lint
```

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Hero, partenaires, collections, histoire, performances, réalisations, démarche, témoignages, journal, CTA |
| `/collections`, `/collections/[slug]` | 6 familles de menuiseries et leurs modèles |
| `/produits/[slug]` | Fiche produit : galerie + vue 3D pivotante, configurateur avec aperçu et estimation en temps réel, fiche technique, FAQ |
| `/realisations`, `/realisations/[slug]` | Portfolio filtrable, fiche projet avec comparateur avant/après et témoignage |
| `/processus` | Les 5 étapes, engagements, FAQ |
| `/a-propos` | Mission, valeurs, historique, équipe |
| `/devis` | Formulaire de devis (reprend la sélection du configurateur), facteurs de prix |
| `/contact` | Formulaire, coordonnées, horaires, carte Google Maps |
| `/journal`, `/journal/[slug]` | Articles conseils |
| `/guide-mesure`, `/mentions-legales`, `/confidentialite` | Pages annexes |

## Architecture

```
src/
  app/                 routes, API (api/quote, api/contact), sitemap.ts, robots.ts
  components/
    atoms/             Button, Field, Eyebrow, Logo, Icon, Reveal, WindowArt
    molecules/         cartes (catégorie, produit, projet, article, témoignage), FAQ, fil d'Ariane
    organisms/         Header, Footer, Hero, sections, configurateur, formulaires, galerie
    templates/         PageHero, LegalPage
  data/                catalogue, réalisations, articles, contenus (source unique à brancher sur un CMS)
  hooks/useQuoteList   sélection « Ajouter au devis » (localStorage)
  lib/                 site.ts (coordonnées), seo.tsx (metadata + JSON-LD), quote.ts (schémas zod + estimation), notify.ts
```

## Visuels

Les images sont des illustrations architecturales vectorielles générées par `components/atoms/WindowArt.tsx` (8 compositions × 5 ambiances). Elles sont légères, sans dépendance réseau et réagissent au configurateur (teinte du cadre, vitrage). Pour passer à de vraies photos, remplacez les champs `visual` des fichiers `src/data/*` par des images et utilisez `next/image` dans `ArtFrame`.

## Formulaires & back-end

`/api/quote` et `/api/contact` valident les données avec zod (partagé avec le client), filtrent les robots (champ piège + limite de débit), puis :

- envoient un e-mail via [Resend](https://resend.com) si `RESEND_API_KEY` et `NOTIFY_EMAIL_TO` sont définis ;
- enregistrent la demande dans Supabase (tables `quote_requests` et `contact_messages`) si `SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY` sont définis.

Sans ces variables, les demandes sont simplement journalisées côté serveur.

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canonique (sitemap, Open Graph, JSON-LD) |
| `RESEND_API_KEY`, `NOTIFY_EMAIL_TO`, `NOTIFY_EMAIL_FROM` | Notifications e-mail |
| `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Stockage des demandes |

## SEO & accessibilité

- Metadata par page, URLs propres en français, `sitemap.xml`, `robots.txt`
- JSON-LD : `HomeAndConstructionBusiness`, `Product` + `Offer`, `FAQPage`, `Article`, `BreadcrumbList`
- HTML sémantique, lien d'évitement, focus visibles, navigation clavier (menu mobile avec Échap, vue 3D aux flèches), `prefers-reduced-motion` respecté
