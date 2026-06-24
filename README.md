# Fadi Dahdouh — Site officiel

Site personal brand de **Fadi Dahdouh** — Ostéopathe de la voix, créateur de la méthode **Vocalosteo®**.
Construit avec **Next.js 14 (App Router)** + **React 18**. Design premium : noir absolu, or discret, serif éditorial, animations sobres.

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de production

```bash
npm run build
npm start
```

## Architecture

```
app/
  layout.js                  Layout racine : polices, Nav, Footer, SEO global
  globals.css                Design system complet (variables + composants)
  page.js                    Accueil (one-page enrichi)
  vocalosteo/page.js         La méthode Vocalosteo®
  osteopathie-de-la-voix/    La consultation (indications, déroulé, lieux)
  conferences/page.js        Conférences & masterclasses
  medias/page.js             Médias + stratégie éditoriale
  ecosysteme/page.js         Art Vox · CMC Studio · Polymnivox
  a-propos/page.js           Biographie
  contact/page.js            CTA de conversion + formulaire
  icon.svg                   Favicon
  opengraph-image.js         Image Open Graph générée (1200×630)
  sitemap.js / robots.js     SEO
components/                  Nav, Footer, Reveal, CTA, Placeholder, ContactForm, SectionLine
lib/content.js              TOUT le contenu éditable (textes, CTA, listes)
public/images/              Vos photos (voir ci-dessous)
```

> Pour modifier les textes, commencez par **`lib/content.js`** : il centralise la navigation, les piliers, les conférences, l'écosystème et la stratégie éditoriale.

## Photos à remplacer

Les emplacements sont des « placeholders » premium balisés. Remplacez le composant `<Placeholder slot="…" />`
par `<Image src="/images/…" … />` (`next/image`). Slots prévus :

| Slot | Page | Recommandation de prise de vue |
|------|------|--------------------------------|
| Portrait officiel | Accueil (hero) | Regard caméra, lumière Rembrandt, fond sombre — 4:5 |
| Portrait décontracté | À propos | Sourire, lumière naturelle |
| Fadi en consultation | Vocalosteo® | Mains sur zone cervicale/mandibulaire, sans visage patient |
| Cabinet — Paris | Ostéopathie de la voix | Intérieur/extérieur du cabinet parisien |
| Cabinet — Troyes | Ostéopathie de la voix | Intérieur/extérieur du cabinet de Troyes |
| Photo scène / chant | Écosystème (Art Vox) | Scène, lumière de spectacle |
| Photo studio | Écosystème (CMC) | Casque, console en arrière-plan |
| Photo IA vocale / Polymnivox | Écosystème (Polymnivox) | Interface d'analyse, visualisation de la voix |
| Fadi en conférence | Conférences | Au micro, scène, lumière dramatique |

## À brancher plus tard

- Email réel + endpoint de formulaire (actuellement `mailto:`). Recommandé : Resend, Formspree ou route API.
- Liens réseaux (Instagram, LinkedIn, TikTok) dans `components/Footer.js`.
- Liens externes Art Vox / CMC Studio / Polymnivox dans `app/ecosysteme/page.js` et `lib/content.js`.
- `site.url` dans `lib/content.js` → votre domaine final (impacte SEO/sitemap/OG).

## Déploiement

Optimisé pour **Vercel** (détection Next.js automatique). Voir `DEPLOIEMENT.md`.
