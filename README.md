# SCAL — site vitrine premium (projet d'exemple)

Refonte haut de gamme du site de **SCAL**, entreprise familiale de menuiseries installée à Aixe-sur-Vienne (87) depuis 1978 : menuiseries PVC et aluminium, vérandas, portes d'entrée, volets, portails et portes de garage, qualifiée **RGE Qualibat**.

Next.js 14 (App Router, SSG), TypeScript, Tailwind CSS, framer-motion, architecture Atomic Design. Tout le contenu est en français.

## Démarrage

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
npm run lint
```

## Identité visuelle

- **Couleurs** reprises du logo et du site historique SCAL : rouge `#b93538` / `#a52e32` / `#8c1a1c` (`brand-*` dans `tailwind.config.ts`) et gris anthracite `#4d4d4d` / `#2b2b2b`, sur fonds clairs (blancs cassés) ponctués de sections anthracite et d'un bandeau rouge SCAL.
- **Typographies** : Manrope (titres), Inter (texte), Instrument Serif italique pour les mots-clés (classe `.accent`), en écho à l'italique du logo.
- **Logo** redessiné en SVG (`components/atoms/Logo.tsx`) ; le PNG d'origine est dans `public/images/logo-scal.png`.
- **Photos** de chantier dans `public/images/`. Les produits sans photo utilisent des illustrations vectorielles (`WindowArt`) ; il suffit d'ajouter un champ `src` au visuel dans `src/data/*` pour passer à une vraie photo.

## Animations

Dans `src/components/motion/` : barre de progression de lecture, titre révélé mot par mot, motif du logo qui se dessine (`FrameDraw`), images révélées par un « volet » rouge (`ImageReveal`), parallaxe du hero, compteurs animés, halo qui suit la souris (`Spotlight`), boutons magnétiques, bandeaux défilants et transitions de page. Toutes respectent `prefers-reduced-motion`.

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Hero, savoir-faire, solutions, entreprise, atouts, réalisations, méthode, engagements & RGE, conseils, CTA |
| `/solutions`, `/solutions/[slug]` | 6 familles de produits et leurs modèles |
| `/produits/[slug]` | Fiche produit : galerie, configurateur (options et dimensions propres à chaque produit) avec estimation, fiche technique, FAQ |
| `/realisations`, `/realisations/[slug]` | Chantiers réels à partir des photos SCAL |
| `/processus`, `/a-propos`, `/journal`, `/devis`, `/contact`, `/guide-mesure` | Méthode, entreprise, conseils, devis, contact, guide |

## À compléter / vérifier avec l'entreprise

- Horaires d'ouverture (`src/lib/site.ts`, indicatifs).
- Lieux et années des réalisations (`src/data/projects.ts`), photos supplémentaires, avis clients réels.
- Gammes réellement distribuées, caractéristiques techniques et prix « à partir de » (`src/data/products.ts`, valeurs indicatives).
- Mentions légales : forme juridique, SIREN, directeur de publication, hébergeur.

## Formulaires & back-end

`/api/quote` et `/api/contact` valident les données avec zod, filtrent les robots, puis envoient un e-mail via Resend (`RESEND_API_KEY`, `NOTIFY_EMAIL_TO`, `NOTIFY_EMAIL_FROM`) et/ou enregistrent la demande dans Supabase (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`). Sans ces variables, les demandes sont journalisées côté serveur. `NEXT_PUBLIC_SITE_URL` définit l'URL canonique.
