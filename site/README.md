# Site vitrine SCAL

Site vitrine statique (HTML / CSS / JS, sans framework) pour **SCAL**, entreprise
familiale de menuiserie PVC et aluminium basée Route de Cognac, 87700 Aixe-sur-Vienne.

## Lancer le site en local

Aucune dépendance ni build n'est nécessaire. Servez simplement le dossier :

```bash
cd site
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Structure

```
site/
  index.html                  Page principale (une seule page, ancres de section)
  mentions-legales.html
  politique-confidentialite.html
  robots.txt
  sitemap.xml
  assets/
    css/style.css              Design tokens, mise en page, animations
    js/main.js                 Menu mobile, animations au scroll, galerie + lightbox, validation du formulaire
    img/favicon.svg
```

## Informations vérifiées publiquement

Les contenus (historique, adresse, téléphone, horaires, activités) proviennent de
sources publiques (annuaire-entreprises.data.gouv.fr, Pages Jaunes, presse locale)
concernant la société « SOCIETE DE CONSTRUCTIONS EN ALLIAGES LEGERS (SCAL) »,
SIREN 521 196 329. **Ces informations sont à faire valider par SCAL avant mise en
ligne**, notamment :

- l'adresse e-mail de contact (`contact@scal87.fr` est une adresse indicative, à confirmer) ;
- la liste exacte des services/gammes proposés (la section « Nos services » est une
  base de travail, clairement signalée comme modifiable sur le site) ;
- les horaires, qui peuvent avoir évolué.

## À compléter avant mise en ligne

1. **Photos** — Cette session n'a pas d'accès réseau pour récupérer ou vérifier des
   photographies réelles de SCAL. Tous les emplacements image du site (hero,
   « qui sommes-nous », cartes de services, galerie de réalisations) sont donc des
   **emplacements visuels premium clairement identifiés** (`.img-slot`), et non des
   photos génériques. Il suffit de remplacer chaque `<div class="img-slot">...</div>`
   par une balise `<img src="..." alt="...">` pointant vers une vraie photo
   (chantier, atelier, équipe, réalisations), idéalement en `.webp`/`.avif`, avec
   `loading="lazy"` déjà prévu par défaut sur les images hors zone visible initiale.
2. **Formulaire de contact** — La validation (champs requis, format e-mail/téléphone,
   champ anti-spam « honeypot ») est fonctionnelle côté client, mais **aucun envoi
   réel n'est câblé** (pas de backend dans ce dépôt). Avant mise en ligne, connecter
   la soumission à un service d'envoi (API interne, Formspree, Netlify Forms, etc.) —
   voir le commentaire `NOTE POUR L'INTÉGRATEUR` dans `assets/js/main.js`.
3. **Mentions légales / politique de confidentialité** — Les blocs marqués « à
   compléter » (hébergeur, SIRET d'établissement, capital social, durée de
   conservation des données, etc.) doivent être remplis avec les informations
   exactes de SCAL, idéalement relues par un professionnel du droit.
4. **Domaine** — Les balises canonical/OG et le sitemap pointent vers
   `https://www.scal87.fr/` (domaine existant de l'entreprise). À adapter si le site
   est déployé ailleurs.
