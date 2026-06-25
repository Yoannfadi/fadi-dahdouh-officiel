# 08 — DESIGN SYSTEM
### La langue visuelle de l'œuvre · CODEX

**Statut :** **V1 validé le 2026-06-25.** · **Date :** 2026-06-25
**Décisions validées :** (1) l'**arbre** remplace définitivement la pyramide — reporté dans `05-Brand.md` v1.4 ; (2) **platine `#9A9A9A`** adopté (accessibilité) ; (3) typo **Cormorant + Playfair + Inter conservées à titre provisoire** — un benchmark des meilleures typographies premium sera fait avant verrouillage définitif ; (4) **identité sonore différée** (sera définie une fois animations/rythme/séquences stabilisés).
**Filiation :** en aval de [`01-Philosophie.md`](01-Philosophie.md), [`05-Brand.md`](05-Brand.md), [`06-Experience.md`](06-Experience.md). En cas de conflit, **la Philosophie prime.**

> **Loi souveraine du design.** Aucun choix graphique n'existe pour « faire joli ». Chaque décision se justifie par **une intention, une émotion ou une fonction** — sinon elle est supprimée. *Le design est au service de la philosophie.*

---

## 00 — Le serment du design

Avant toute couleur, trois questions pour chaque élément :
1. **Intention** — qu'est-ce que cela veut *dire* ? *(lien au CODEX)*
2. **Émotion** — qu'est-ce que cela veut *faire ressentir* ?
3. **Fonction** — à quoi cela *sert* concrètement ?

Si les trois sont vides, l'élément n'a pas sa place.

---

## 01 — La métaphore visuelle : du jardin, pas de la vitrine

Le Design System incarne **Le Jardinier**. Conséquences directes :
- **L'espace prime sur le remplissage** — un jardin respire ; une vitrine sature.
- **La lumière révèle, ne montre pas tout** — on éclaire ce qui compte, on laisse le reste dans l'ombre *(Rembrandt)*.
- **La croissance organique structure la page** — d'où l'**arbre** comme schéma directeur *(voir §12)*, qui remplace l'ancienne « pyramide de transmission ».
- **Rien ne crie** — pas d'effet, pas d'urgence, pas de bruit *(Experience Bible)*.

> ✅ *Résolu (2026-06-25) :* l'**arbre** remplace définitivement la « pyramide de transmission ». Reporté dans `05-Brand.md` §10 (v1.4). L'arbre est désormais la métaphore fondatrice de toute l'œuvre (racines = CODEX, tronc = l'homme, branches = les 6 piliers, fruits = la transmission).

---

## 02 — La couleur

Palette **monochrome + un seul or**. Le minimalisme chromatique est un choix de sens : une voix unique sur fond de silence.

| Token | Valeur | Rôle | **Pourquoi** *(intention · émotion · fonction)* |
|---|---|---|---|
| `--noir` | `#080808` | Fond principal | *Le silence d'où la voix émerge.* Émotion : calme, profondeur, gravité. Fonction : faire ressortir l'or et le texte. |
| `--noir-2` | `#0F0F0F` | Surfaces (cartes) | Profondeur sans rupture. Fonction : hiérarchiser sans cloisonner. |
| `--noir-3` | `#121212` | Surfaces élevées | Micro-relief, sensation de matière. |
| `--or` | `#BFA06E` | Accent unique | *L'or = la révélation.* Laiton patiné, jamais doré clinquant. Émotion : préciosité sobre. Fonction : **désigner ce qui compte** (rare, donc fort). Contraste sur noir ≈ 8:1 (excellent). |
| `--blanc` | `#FAFAFA` | Texte principal | Clarté, lisibilité. Jamais de blanc pur agressif (#FFF). |
| `--platine` | `#9A9A9A` | Texte secondaire | *La voix qui murmure.* **Relevé de #8A8A8A → #9A9A9A** pour garantir le contraste AA sur fond noir *(dignité — voir §10)*. |

**Règles de couleur**
- **Un seul accent.** Pas d'autre couleur vive. L'or est le seul « événement » chromatique.
- **L'or se mérite.** S'il est partout, il ne désigne plus rien. Usage parcimonieux : titres-clés, liens, traits, CTA.
- **Aucune information portée par la seule couleur** *(accessibilité)*.
- **Opacités faibles = décoratif uniquement.** Tout texte porteur de sens respecte ≥ 4.5:1. *(Les anciens `rgba(138,138,138,.5)` et micro-légendes ne doivent jamais porter d'information — défaut signalé à l'audit.)*

Variantes utilitaires : `--or-soft: rgba(191,160,110,.30)` (traits, bordures) · `--or-faint: rgba(191,160,110,.10)` (halo, lueur). Décoratives uniquement.

---

## 03 — La typographie

Deux familles, et leur **contraste raconte la marque** : l'art *et* la science.

| Rôle | Police | **Pourquoi** |
|---|---|---|
| **Voix de l'auteur** (titres, citations, manifeste) | **Serif éditorial** — *Cormorant Garamond* / *Playfair Display* | *Intention :* l'âme, l'autorité, le geste artistique. *Émotion :* noblesse, intemporalité. *Fonction :* incarner « la voix » de Fadi à l'écrit. |
| **Clarté clinique** (corps, UI, légendes) | **Sans-serif sobre** — *Inter* | *Intention :* la rigueur, la science. *Émotion :* confiance, lisibilité. *Fonction :* lire sans effort, sur tout écran. |

**Échelle typographique** *(fluide, `clamp()`)* — la hiérarchie est une respiration, pas une cacophonie :

| Niveau | Taille | Police | Usage |
|---|---|---|---|
| Display | `clamp(40px, 5vw, 74px)` | Serif | Hero h1 |
| Titre | `clamp(28px, 3.4vw, 46px)` | Serif | Titres de section h2 |
| Sous-titre | `clamp(19px, 2vw, 24px)` | Serif | Accroches, citations |
| Lead | `18–19px` | Sans | Chapeaux |
| Corps | `16px` (min) | Sans | Texte courant *(jamais < 16px sur mobile)* |
| Légende | `12–13px` | Sans | Métadonnées, eyebrows |
| Eyebrow | `12px`, `letter-spacing .32em`, capitales | Sans, or | Sur-titres |

**Règles typographiques**
- **Phrases courtes, blancs généreux** — la typographie respire comme le manifeste *(identité verbale)*.
- `line-height` : 1.1 titres · **1.7 corps** (souffle).
- **Auto-hébergement via `next/font`** — fin des requêtes Google bloquantes *(performance + RGPD ; défaut de l'audit)*.
- Pas plus de **2 familles**. La sobriété est un message.

---

## 04 — L'espace & la mise en page

> *L'espace = la respiration* (loi visuelle n°3). Le vide est un acte de luxe et de confiance.

**Échelle d'espacement** (base 8, le souffle) : `4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`.
- Sections généreuses : ~`110px` desktop / `80px` mobile (vertical).
- **Largeur de lecture** max ≈ `680–720px` pour le texte long *(confort de lecture)*.
- **Largeur de contenu** max `1200px` ; hero jusqu'à `1320px`.
- **Marges latérales** : `32px` desktop, `24px` mobile.

**Grille** : 12 colonnes desktop, fluide ; effondrement en 1 colonne ≤ 900px. Pas de grille visible — l'ordre se sent, il ne se montre pas.

**Breakpoints** : `560` · `900` · `980` · `1200`. *(Corriger l'astuce `direction:rtl` de l'écosystème par un vrai `order`/grid — défaut de l'audit.)*

---

## 05 — Lumière, profondeur, traits

- **La lumière Rembrandt** *(loi n°4)* : halos radiaux d'or très faibles (`--or-faint`) en haut-droite des sections-clés ; le reste plonge dans l'ombre. *Intention :* révéler une part, garder une part de mystère. *Fonction :* guider l'œil sans surligner.
- **Le trait d'or fin** (`1px`, `--or-soft`) : séparateur de sections, bordures de cartes. *Émotion :* précision, élégance retenue.
- **Profondeur par la matière, pas par l'ombre portée** : on superpose des noirs (`--noir`, `--noir-2`, `--noir-3`) plutôt que des ombres grises (qui saliraient le noir).
- **Coins** : quasi-droits (`radius 1–2px`). *Intention :* sérieux, éditorial, intemporel — le rond est « tech/friendly », pas notre registre.

---

## 06 — Le mouvement

> *Le mouvement = apaisement* (loi visuelle n°5). Jamais de mouvement « parce que c'est joli ».

- **Apparition au défilement** (`reveal`) : opacité 0→1 + translation douce de ~24px. *Fonction :* rythmer la lecture, faire « advenir » le contenu.
- **Respiration** : micro-pulsation très lente (≤ 2 %) sur le portrait hero. *Émotion :* le vivant, le souffle.
- **Durées** : `300–400ms` (UI) · `600–800ms` (apparitions). **Easings** doux (`cubic-bezier(.22,.61,.36,1)`), jamais de rebond.
- **Hover** : élévation discrète (`translateY(-2 à -6px)`) + passage de bordure à l'or.
- **`prefers-reduced-motion`** : tout mouvement non essentiel **désactivé** *(défaut de l'audit à corriger)*.
- **Règle d'or** : aucune animation ne masque ni ne retarde le contenu *(« le contenu d'abord »)*.

---

## 07 — Le son *(dimension de design à part entière)*

Une marque de la voix possède une **identité sonore** *(Experience Bible §06 ; voix de Fadi validée)*.
- **Signature sonore** : 3–5 s, idéalement *un souffle qui devient timbre* *(le souffle, cœur du Ch. III)*.
- **La voix de Fadi** : manifeste lu, extraits — **opt-in**, jamais d'autoplay sonore.
- **Contrôle visible** (bouton son), état mémorisé, respect des préférences système.
- **Équivalent texte** pour tout audio *(accessibilité)*.

---

## 08 — Image & photographie

- **Direction** : lumière Rembrandt, clair-obscur, l'humain toujours, le geste plutôt que la pose. *Intention :* révéler une présence, pas illustrer.
- **Jamais de banque d'images générique.** *(Fonction : crédibilité, unicité.)*
- **Format** : portraits 4:5 ; scènes 16:10. `next/image`, AVIF/WebP, lazy-loading *(performance)*.
- **Système de placeholders** (déjà présent) conservé jusqu'aux vraies photos — chaque slot est balisé.

---

## 09 — Iconographie

- **Pictogrammes SVG en trait fin**, `aria-hidden`, alignés à la grille typographique.
- **Remplacer les emojis** (🩺🎼🎤…) actuellement utilisés comme marqueurs sémantiques. *Pourquoi :* les emojis sont lus par les lecteurs d'écran, varient selon les plateformes et cassent le registre premium. *(Défaut signalé à l'audit.)*

---

## 10 — Accessibilité = dignité *(non négociable)*

*Fondement : réponse canonique n°5 — « une personne muette possède aussi une voix ».*
- **Contraste** : texte courant ≥ **4.5:1** ; grand texte / UI ≥ 3:1. *(D'où `--platine` relevé à `#9A9A9A`.)*
- **Focus visible** : anneau or net sur tout élément interactif.
- **Cibles tactiles** ≥ 44×44px.
- **Clavier** : tout est atteignable et actionnable ; menu fermable à `Échap`.
- **Sémantique** : `<button>` pour le burger (`aria-expanded`), titres hiérarchisés, libellés de champs.
- **`prefers-reduced-motion`** respecté ; aucune info portée par la seule couleur ou le seul son.

---

## 11 — Composants *(spécifications & justification)*

**Boutons**
- *Or plein* (`--or` / texte noir) — l'**action principale** (RDV). *Émotion :* l'invitation chaude. Une seule par vue.
- *Fantôme* (bordure `--or-soft`, texte blanc) — actions secondaires.
- Hover : `translateY(-2px)` + éclaircissement de l'or. Capitales, `letter-spacing .1em`.
- **Langage** : inviter/élever (« Prendre rendez-vous », « Découvrir Vocalosteo® ») — jamais « Acheter », jamais d'impératif marchand *(éthique de l'expérience)*.

**Liens** : or, soulignement animé (largeur 0→100 %). État actif marqué.

**Cartes** : fond `--noir-2`, trait `--or-soft`, hover → bordure or + légère élévation. Pour piliers, audiences, conférences.

**Navigation** : fixe, transparente en haut, fond `rgba(8,8,8,.82)` + flou au défilement. 7 entrées + CTA. Lien actif souligné or.

**Formulaires** : champs à soulignement (pas de boîtes lourdes), focus or, labels en eyebrow or. Sobres, dignes.

**Bande CTA** : halo d'or radial sur `--noir-2`, titre serif italique, une seule action. Le seul moment « ample ».

**Calendly** : intégré dans le registre (cadre sobre, sans rupture visuelle violente), chargé sans bloquer le rendu.

---

## 12 — L'arbre : schéma directeur

La structure de l'univers se lit comme un arbre — métaphore fondatrice rendue visible :

```
        FRUITS  → la transmission (conférences, livre, médias, masterclass)
          │
       BRANCHES → les 6 piliers (Vocalosteo®, Ostéo, Art Vox, CMC, Laboratoire, PolymniVox)
          │
        TRONC   → l'homme, la marque (Fadi Dahdouh)
          │
       RACINES  → le CODEX (philosophie, les 4 verbes, les 3 refus)
```
*Intention :* montrer que tout est relié et vivant (*« ce ne sont pas des projets indépendants »*). *Fonction :* guider l'architecture des pages et les visualisations (accueil, écosystème).

---

## 13 — Ce que le design REFUSE *(anti-esthétique)*

- ❌ La couleur décorative (toute couleur hors noir/or/blanc/platine).
- ❌ L'animation gratuite, le parallaxe tape-à-l'œil, le rebond.
- ❌ Les ombres portées grises qui salissent le noir.
- ❌ Les coins très arrondis « friendly/tech ».
- ❌ Les emojis comme icônes.
- ❌ Le blanc pur `#FFFFFF` (trop dur).
- ❌ Plus de 2 familles typographiques.
- ❌ Toute tendance datable. *On vise l'intemporel, pas le tendance.*

---

## 14 — Jetons de design *(tokens — prêts pour le développement)*

```css
:root{
  /* Couleur */
  --noir:#080808; --noir-2:#0F0F0F; --noir-3:#121212;
  --or:#BFA06E; --or-soft:rgba(191,160,110,.30); --or-faint:rgba(191,160,110,.10);
  --blanc:#FAFAFA; --platine:#9A9A9A;            /* relevé pour AA */
  /* Typographie */
  --font-serif:'Cormorant Garamond', Georgia, serif;
  --font-titre:'Playfair Display', Georgia, serif;
  --font-sans:'Inter', system-ui, sans-serif;
  /* Espace (base 8) */
  --s-1:4px; --s-2:8px; --s-3:16px; --s-4:24px; --s-5:32px;
  --s-6:48px; --s-7:64px; --s-8:96px; --s-9:128px; --s-10:160px;
  /* Layout */
  --maxw:1200px; --maxw-hero:1320px; --maxw-lecture:700px;
  /* Traits & coins */
  --trait:1px solid var(--or-soft); --radius:2px;
  /* Mouvement */
  --ease:cubic-bezier(.22,.61,.36,1);
  --dur-ui:340ms; --dur-reveal:720ms;
}
```
> Ces jetons **prolongent** le `globals.css` actuel (déjà noir/or/serif) : la continuité est assurée ; on **formalise, corrige (contraste, `next/font`, reduced-motion) et étend**.

---

## 🎯 Synthèse

| | |
|---|---|
| **Loi** | Aucun choix gratuit : intention · émotion · fonction. |
| **Métaphore** | Le jardin / l'arbre — pas la vitrine. |
| **Couleur** | Noir (silence) + un seul or (révélation) + platine lisible. |
| **Typo** | Serif (l'âme) + sans (la science). Deux, pas plus. |
| **Espace** | La respiration. Le vide est un luxe. |
| **Lumière** | Rembrandt : révéler une part, garder l'ombre. |
| **Mouvement** | Apaisement. Jamais de bruit. |
| **Son** | La voix présente, aux conditions du visiteur. |
| **Accessibilité** | La dignité, traduite en contraste et en clavier. |
| **Refus** | Couleur déco · animation gratuite · emojis · tendance. |

---

### ✅ Décisions validées (2026-06-25)
1. **L'arbre** remplace définitivement la pyramide — métaphore fondatrice de toute l'œuvre (reporté dans `05-Brand.md` v1.4).
2. **Platine `#9A9A9A`** adopté — *l'accessibilité fait partie de la philosophie de la marque.*
3. **Typographies provisoires** : Cormorant + Playfair + Inter conservées. ⏳ *Décision ouverte : benchmark des meilleures typographies premium avant verrouillage définitif.*
4. **Identité sonore différée** : sera définie une fois les animations, le rythme et les séquences du site stabilisés.

---

*✅ Design System validé (V1) le 2026-06-25. Étape suivante : les **Wireframes** (`02-UX/`).*
