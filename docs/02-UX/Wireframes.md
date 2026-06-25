# SPÉCIFICATION DE WIREFRAMES — Site officiel Fadi Dahdouh
### Architecture des écrans · prête pour Figma · V2

**Statut :** V2 (rédigée — en attente de validation) · **Date :** 2026-06-25
**Filiation :** Experience Bible (`../00-CODEX/06-Experience.md`), Information Architecture (`../03-Architecture/Information-Architecture.md`).
**Périmètre :** **architecture uniquement.** Aucune couleur, aucune typographie définitive, aucun style graphique — ils proviendront du Design System (`../00-CODEX/08-Design-System.md`) à l'étape Figma. Ce document décrit **la structure, la hiérarchie, les espacements, les intentions, les composants, les animations, les transitions, les interactions, le responsive et l'accessibilité.**

> À remettre tel quel à un designer Figma. Tout ce qui est nécessaire à la mise en page est ici.

---

## 0 — CONVENTIONS DE SPÉCIFICATION *(à lire en premier)*

### 0.1 Niveaux de hiérarchie *(abstraits — pas de police/couleur)*
- **SUR** — Surtitre (eyebrow) : petit label au-dessus d'un titre.
- **N1** — Titre principal d'écran (1 seul par page).
- **N2** — Titre de section.
- **N3** — Titre de bloc / carte.
- **LEAD** — texte d'introduction (plus grand que le corps).
- **CORPS** — texte courant.
- **META** — petit texte secondaire (légende, date, format).
- **ACT** — étiquette d'action (bouton / lien).
*Hiérarchie exprimée par taille relative + poids + position. Le contraste typographique réel viendra du Design System.*

### 0.2 Échelle d'espacement *(approximative, neutre)*
`2XS≈4 · XS≈8 · S≈16 · M≈24 · L≈32 · XL≈48 · 2XL≈64 · 3XL≈96 · 4XL≈128` (px).
- **Rythme vertical des sections** : Desktop ≈ 96–120 (haut/bas) · Tablet ≈ 72–88 · Mobile ≈ 56–72.
- **Conteneur de contenu** : max ≈ 1200. **Largeur de lecture** (texte long) : ≈ 680–720. **Hero** : jusqu'à ≈ 1320.
- **Marges latérales** : Desktop ≈ 32 · Tablet ≈ 28 · Mobile ≈ 20–24.

### 0.3 Grille & points de rupture
- **Grille** : Desktop **12 col** (gouttière ≈ 24) · Tablet **8 col** (≈ 20) · Mobile **4 col** (≈ 16, empilement).
- **Breakpoints** : **Mobile** < 600 · **Tablet** 600–1023 · **Desktop** ≥ 1024. *(Conception mobile-first.)*

### 0.4 Bibliothèque d'animations *(référencées par ID)*
- **A1 — Reveal-rise** : apparition au défilement (fondu + montée ≈ 24px), **une seule fois**, déclenchée à ≈ 15 % de visibilité, durée ≈ 600–800 ms, easing doux.
- **A2 — Nav-condense** : au scroll > ≈ 40px, la barre se densifie (fond opaque + flou, hauteur réduite).
- **A3 — Link-underline** : soulignement qui croît 0→100 % au survol (≈ 300 ms).
- **A4 — Card-lift** : carte qui s'élève légèrement (≈ 4–6px) + bordure accentuée au survol.
- **A5 — Button-lift** : bouton qui s'élève (≈ 2px) au survol.
- **A6 — Page-fade** : transition douce entre routes (fondu ≈ 300–400 ms).
- **A7 — Manifesto-cascade** : révélation séquentielle lente des strophes.
- **A8 — Breathe** : micro-pulsation très lente (≤ 2 %) d'une image-clé.
- **A9 — Audio-toggle** : changement d'état visuel du bouton son (lecture/pause).
> **Règle globale :** sous `prefers-reduced-motion`, A1/A6/A7/A8 sont **désactivées** (contenu visible d'emblée).

### 0.5 Bibliothèque d'interactions *(référencées par ID)*
- **I1** nav (clic/tap) · **I2** menu mobile ouvrir/fermer (Échap + tap extérieur + piège de focus + scroll body bloqué) · **I3** survol (desktop uniquement) · **I4** focus clavier (anneau visible) · **I5** chargement Calendly (différé, à l'entrée en vue ou au clic) · **I6** lecteur audio (play/pause, état mémorisé) · **I7** formulaire (validation inline + envoi + message d'état) · **I8** téléchargement (dossier de presse) · **I9** ancre interne (défilement doux).

### 0.6 Socle d'accessibilité *(B — appliqué partout)*
- **B1** Repères ARIA : `header / nav / main / footer` ; **1 seul N1 (h1)** par page ; ordre des titres logique.
- **B2** Lien d'évitement « Aller au contenu » en tête.
- **B3** Tout actionnable au clavier ; ordre de tabulation logique ; **B4** focus toujours visible.
- **B5** Cibles tactiles ≥ 44×44 px ; espacement suffisant.
- **B6** Images : `alt` signifiant ; images décoratives `alt=""`.
- **B7** Audio/vidéo : équivalent texte / sous-titres / transcription.
- **B8** Aucune information portée par la seule couleur ou le seul son.
- **B9** `prefers-reduced-motion` respecté.
- **B10** Contraste ≥ 4.5:1 (texte) / 3:1 (UI) — *à garantir au Design System.*

### 0.7 Règles responsive globales *(sauf exception notée)*
- Multi-colonnes Desktop → **empilement 1 colonne** en Mobile (texte avant image).
- Nav Desktop horizontale → **menu plein écran** en Tablet/Mobile (burger).
- Grilles 3 col Desktop → 2 col Tablet → 1 col Mobile.
- Marges et rythme vertical réduits selon §0.2.
- Cibles tactiles agrandies en Mobile ; survols (I3) remplacés par états actifs au tap.

---

## 1 — COMPOSANTS GLOBAUX

### 1.1 Header / Navigation
- **Hiérarchie / contenu** : `[Logo-texte]` à gauche · liste de **7 entrées** (Vocalosteo®, Ostéopathie de la voix, Art Vox, Laboratoire, Conférences, Médias, À propos) · **1 bouton d'action** (« Prendre rendez-vous ») à droite.
- **Composants** : barre fixe, logo, liens de nav (état actif marqué), bouton primaire.
- **Espacement** : hauteur ≈ 72 (état haut) → ≈ 60 (état condensé) ; padding latéral = marges page.
- **Desktop** : tout sur une ligne. **Tablet/Mobile** : logo + **burger** ; les 7 entrées + bouton vont dans le menu plein écran.
- **Animations** : A2 (condense au scroll) · A3 (soulignement liens, desktop).
- **Interactions** : I1, I2, I3, I4.
- **A11y** : `<nav aria-label="Principale">` ; burger = `<button aria-expanded aria-controls>` ; lien actif `aria-current="page"` ; B2, B3, B4, B5.

### 1.2 Menu mobile / tablet *(plein écran)*
- **Contenu** : bouton fermer · 7 entrées empilées (cibles larges) · bouton d'action en bas.
- **Espacement** : entrées espacées ≈ L ; centrées verticalement.
- **Animations** : glissement/fondu d'entrée (désactivé si reduced-motion).
- **Interactions** : I2 (ouvre/ferme, Échap, tap extérieur, **focus trap**, scroll body bloqué).
- **A11y** : focus déplacé dans le menu à l'ouverture, restitué au déclencheur à la fermeture ; B3, B4, B5.

### 1.3 Footer *(structure « en arbre » — voir IA)*
- **Hiérarchie / contenu** : `[Logo]` · 4 colonnes de liens — **L'univers** (Vocalosteo®, Art Vox, CMC Studio, Laboratoire, PolymniVox, Écosystème) · **Découvrir** (Le Manifeste, Médias, Conférences, À propos) · **Agir** (Prendre RDV, Inviter Fadi, Dossier de presse, Contact) · **Légal** (Mentions légales, Confidentialité) · ligne **Réseaux** (Instagram, LinkedIn, YouTube) · séparateur · **META** copyright.
- **Espacement** : padding vertical ≈ 2XL–3XL ; gouttières de colonnes ≈ L.
- **Desktop** : 4 colonnes. **Tablet** : 2 colonnes. **Mobile** : 1 colonne (accordéon optionnel, sinon empilé).
- **Animations** : A3 sur liens (desktop).
- **Interactions** : I1, I3, I4 ; réseaux ouvrent en nouvel onglet (`rel="noopener"`).
- **A11y** : `<footer>` ; listes de liens en `<ul>` ; B4 ; icônes réseaux avec libellé accessible.

### 1.4 Composants réutilisables
- **En-tête de section** : SUR → N2 → LEAD (optionnel). Largeur ≈ lecture/contenu. Espacement sous l'en-tête ≈ XL.
- **Bouton — Action principale** : 1 par vue de préférence ; états défaut/survol(A5)/focus(I4)/actif/désactivé ; cible ≥ 44.
- **Bouton — Action secondaire** : même structure, poids visuel moindre.
- **Lien fléché** : ACT + chevron ; A3/translation au survol.
- **Carte** : zone cliquable ; N3 + CORPS + lien ; états défaut/survol(A4)/focus. Toute la carte est cliquable (cible large).
- **Grille de cartes** : 3 col D / 2 col T / 1 col M ; gouttière ≈ M.
- **Bande CTA** : pleine largeur ; N2 + 1 bouton ; padding vertical ≈ 3XL ; centré.
- **Média / image** : ratio défini (4:5 portrait, 16:10 large, 1:1) ; **placeholder balisé** (slot + intention de prise de vue) tant que la photo réelle manque ; A8 si image-clé.
- **Champ de formulaire** : label (toujours visible) + saisie ; état focus, erreur (message inline), succès.
- **Embed Calendly** : conteneur réservé (hauteur fixe pour éviter tout décalage) ; I5 ; **fallback** : lien + email réel.
- **Lecteur audio (Manifeste)** : bouton lecture/pause + libellé ; I6, A9 ; B7 (équivalent texte).

---

## 2 — ÉCRANS

> Format par section : **hiérarchie · composants · espacement · layout (D/T/M) · intention · animation · interaction · a11y.** Le socle B et les règles §0.7 s'appliquent partout ; on ne note que les spécificités.

### 2.1 ACCUEIL `/`
**Objectif :** porte commune aux 6 visiteurs ; faire respirer, faire comprendre qui est Fadi, inviter. **Transition d'entrée :** A6.

**Structure verticale :**

**S1 — Hero** *(pleine hauteur)*
- Hiérarchie : SUR (rôle) → **N1** (phrase du manifeste, 2–3 lignes) → LEAD (1 ligne) → 2 ACT (principale + secondaire « Lire le manifeste »). Média portrait (ratio 4:5) en regard.
- Composants : en-tête, 2 boutons, image portrait.
- Espacement : hauteur ≈ 100vh ; padding-haut qui dégage la nav (≈ 3XL) ; N1→LEAD ≈ M ; LEAD→ACT ≈ XL ; gap boutons ≈ S. **Beaucoup de vide** autour (silence).
- Layout : **D** 2 colonnes (texte ≈ 7/12, image ≈ 5/12) · **T** 2 colonnes resserrées ou image réduite · **M** empilé (texte puis image, image max ≈ largeur).
- Intention : le visiteur **expire** ; signal simultané soin/science/art/humanité.
- Animation : A8 (portrait) ; entrée douce du texte.
- Interaction : I3 boutons ; I9 si flèche de défilement.
- A11y : N1 unique ; image portrait `alt` signifiant.

**S2 — La figure transversale**
- Hiérarchie : en-tête (SUR/N2/LEAD) → rangée de **6 éléments** (icône + N3 + CORPS court).
- Composants : en-tête de section, 6 tuiles (icône = pictogramme, **pas d'emoji**).
- Espacement : en-tête→grille ≈ XL ; gouttières ≈ 0 (tuiles jointives) ou ≈ S.
- Layout : **D** 6 col (ou 3×2) · **T** 3×2 · **M** 2×3 ou liste.
- Intention : « voilà un être rare » (dignité).
- Animation : A1 (en cascade légère). Interaction : I3 (fond de tuile au survol).
- Transition vers S3 : séparateur fin pleine largeur.

**S3 — Vocalosteo® (aperçu)** — en-tête + court texte + média + **lien** ▸ `/vocalosteo`. Layout D 2 col / M empilé. A1. Intention : donner envie d'approfondir la méthode.

**S4 — La consultation (aperçu)** — en-tête + CORPS + lien ▸ `/osteopathie-de-la-voix`. A1.

**S5 — L'écosystème (les 6 piliers)** — en-tête + **grille de 6 cartes** (N3 + CORPS + lien vers chaque pilier). D 3 col / T 2 / M 1. A1, A4. Intention : montrer l'univers cohérent (investisseur/partenaire).

**S6 — Preuves d'expertise** — en-tête centré + rangée de **compteurs/preuves** (3–4 : ex. 20 ans, méthode, Qualiopi, Laboratoire) + rangée d'étiquettes (badges). D rangée / M empilé. A1. Intention : la preuve qui rassure, sobre.

**S7 — Conférences (aperçu)** — en-tête + 3–4 items en liste + lien ▸ `/conferences`. A1.

**S8 — Bande CTA finale** — N2 (invitation) + 1 bouton (« Prendre rendez-vous »). Composant bande CTA. Intention : inviter sans pression. A1.

**Transitions entre sections :** séparateur fin + rythme vertical régulier (≈ 3XL D) ; chaque section apparaît via A1 au défilement.

---

### 2.2 LE MANIFESTE `/manifeste` *(moment-signature)*
**Objectif :** pic émotionnel. **Aucune sollicitation** annexe.

**S1 — Seuil** — SUR « Le Manifeste » centré ; beaucoup d'air au-dessus (≈ 4XL).
**S2 — Déclencheur audio** — bouton « Écouter dans la voix de Fadi » (lecteur audio) ; **jamais d'autoplay**.
**S3 — Corps du manifeste** — texte intégral, **lignes courtes**, strophes séparées par de larges blancs (≈ 2XL entre strophes) ; largeur de lecture ≈ 680. Dernière ligne « Celui qui transmet ne meurt jamais. » isolée.
**S4 — Sortie unique** — un seul lien discret de retour/suite.

- Layout : **colonne unique centrée** sur D/T/M (largeur de lecture, marges accrues). Pas d'image, pas de nav latérale.
- Intention : silence, recueillement, émotion ; le pic de la « courbe pic-fin ».
- Animation : **A7** (cascade lente des strophes) ; désactivée si reduced-motion (texte entièrement visible).
- Interaction : **I6** (audio) ; A9.
- A11y : **B7** essentiel — l'audio a pour équivalent le texte affiché ; contrôle audio au clavier ; pas de lecture auto.

---

### 2.3 TEMPLATE « PAGE PILIER »
*(appliqué à `/vocalosteo`, `/art-vox`, `/laboratoire`, `/ecosysteme/cmc-studio`, `/ecosysteme/polymnivox`)*

**Structure verticale commune :**
- **P1 — Page-hero** : SUR → **N1** → LEAD → (ACT contextuel optionnel). Pas de pleine hauteur (≈ 60–70vh). Layout D : texte large, parfois média en regard ; M empilé.
- **P2 — Définition canonique** : 1 bloc de texte **autonome et citable** (largeur lecture). *Intention : être la source citée par les IA (GEO).*
- **P3 — Corps** : 2–4 sections alternées **texte / média** (ratio portrait ou large). D alternance gauche/droite (via grille, **pas** de hack de direction) ; M empilé, image après texte.
- **P4 — Liens croisés** : 1–3 liens vers piliers liés (jamais d'impasse).
- **P5 — Bande CTA** : invitation finale adaptée.
- Animations : A1 par section ; A4 sur cartes éventuelles. Interactions : I3, I4, I9. Transitions : séparateurs + rythme régulier.

**Spécificités :**
- **`/vocalosteo`** — P3 = origine (double expérience) + **3 étapes numérotées** (diagnostic → traitement → intégration, en cartes ou liste ordonnée) + « pour qui » (3 publics). CTA : « Réserver une consultation ».
- **`/art-vox`** ★ — P1 promesse « révéler, pas formater » ; P3 = accompagnement (technique → scène) ; P4 ▸ CMC Studio. CTA : découvrir / contact.
- **`/laboratoire`** ★ — P2 définition très rigoureuse ; P3 = mission scientifique + « la voix comme donnée de santé » + biomarqueurs ; P4 ▸ PolymniVox. Ton sobre, sourcé. *(Prévoir un emplacement « publications/sources ».)*
- **`/ecosysteme/cmc-studio`** — P3 = le lieu, le son, l'expérience sensorielle (média large dominant).
- **`/ecosysteme/polymnivox`** — P3 inclut un **bloc-principe encadré** : « l'IA transmet une mémoire, pas une présence » ; emplacement démo/visualisation.

---

### 2.4 LA CONSULTATION `/osteopathie-de-la-voix` *(conversion patient)*
- **C1 — Page-hero** : SUR → N1 → LEAD → ACT « Prendre rendez-vous » (ancre vers C5).
- **C2 — Indications** : en-tête + **grille 2×2** de cartes (motifs de consultation). D 2 col / M 1.
- **C3 — Déroulé d'une séance** : **liste ordonnée 01→04** (étape : N3 + CORPS). D liste alignée / M empilé.
- **C4 — Lieux** : en-tête + 2–3 médias (Paris · Troyes · Visio) en grille. D 2–3 col / M 1.
- **C5 — Prise de rendez-vous** : titre + **embed Calendly** (conteneur à hauteur réservée). Fallback : email réel + lien.
- Intention : rassurer puis convertir sans friction. Animation : A1. Interaction : **I5** (Calendly), I9 (ancre depuis C1). A11y : embed avec titre ; fallback accessible ; conteneur réservé = **pas de décalage de mise en page**.

---

### 2.5 ÉCOSYSTÈME `/ecosysteme` *(hub · l'arbre)*
- **E1 — Page-hero** : N1 « Un homme, un univers » + LEAD (l'unité).
- **E2 — Schéma arbre (optionnel)** : visuel structurel sobre (racines→tronc→branches→fruits) **ou** simple intertitre. *(Décision en bas.)*
- **E3 — Les 6 piliers** : **grille de 6 cartes** (N3 + CORPS + lien). D 3 col / T 2 / M 1. A4.
- **E4 — Bande CTA** : « Nous contacter ».
- Intention : prouver la cohérence de l'univers. Animation : A1, A4.

---

### 2.6 CONFÉRENCES `/conferences` *(l'offre · partenaire)*
- **F1 — Page-hero** : N1 + LEAD + ACT « Inviter Fadi à intervenir ».
- **F2 — Thèmes** : **liste** d'items (N3 + META format), séparés par filets ; survol = léger décalage.
- **F3 — Formats** : rangée d'étiquettes (45 min / 2 h / journée).
- **F4 — Publics** : grille 3 cartes (entreprises / institutions / événements).
- **F5 — Média** : image large (Fadi en conférence).
- **F6 — Bande CTA** : « Demander une intervention ».
- Animation : A1 ; F2 survol (I3). Layout standard responsive.

---

### 2.7 MÉDIAS `/medias` *(preuve d'autorité · journaliste — distincte de l'offre Conférences)*
- **G1 — Page-hero** : N1 + LEAD + ACT « Télécharger le dossier de presse » (**I8**).
- **G2 — Presse & apparitions** : rangée de mentions/logos (sobres) ; META.
- **G3 — Interviews & podcasts** : **liste** (titre + source + lien).
- **G4 — Conférences filmées & vidéos** : grille de vignettes (ratio 16:9) ; lecture au clic (modale ou page externe).
- **G5 — Citation** : pull-quote pleine largeur (N2/citation).
- **G6 — Contact presse** : bloc + dossier téléchargeable.
- Intention : crédibilité, autorité, facilité pour le journaliste (tout trouvable). Animation : A1, A4. Interaction : I8 (téléchargement), lecture vidéo. A11y : vignettes vidéo avec libellé ; vidéos sous-titrées (B7).

---

### 2.8 À PROPOS `/a-propos`
- **H1 — Page-hero** : 2 colonnes — texte « L'homme derrière la méthode » (SUR/N1/LEAD) + média portrait. M empilé.
- **H2 — Citation intime** : bloc citation (largeur lecture).
- **H3 — Récit : le fil rouge** : texte long (largeur lecture) sur les 7 chemins → **lien ▸ Le Manifeste**.
- **H4 — Les 6 territoires** : rangée de pictogrammes (N3) + rangée d'étiquettes (badges/preuves).
- **H5 — Bande CTA double** : « Prendre rendez-vous » + « Inviter Fadi ».
- Animation : A1. Intention : incarner l'homme, relier à la philosophie.

---

### 2.9 CONTACT `/contact` *(hub de conversion)*
- **K1 — Page-hero** : N1 « Échangeons » + LEAD.
- **K2 — Tuiles d'orientation** : **grille 2×2** (RDV · Conférence · Presse · Écosystème), chaque tuile = N3 + CORPS + lien.
- **K3 — Bloc double colonne** : à gauche **embed Calendly** ; à droite coordonnées (lieux, **email réel cliquable**, presse, réseaux). D 2 col / M empilé (Calendly d'abord).
- Intention : router chaque visiteur ; **fin du `mailto:`** (email réel + Calendly).
- Animation : A1. Interaction : I5, I1, I4. A11y : libellés clairs ; embed avec titre ; email en lien.

---

### 2.10 PAGES LÉGALES `/mentions-legales`, `/confidentialite`
- **L1 — Page-hero sobre** : N1 (titre).
- **L2 — Corps** : texte structuré (N2/N3/CORPS), **largeur de lecture ≈ 700**, sommaire d'ancres optionnel (I9).
- Intention : conformité (santé + RGPD), sobriété totale, lisibilité maximale.
- A11y : structure de titres rigoureuse ; liens d'ancrage ; B-socle.

---

### 2.11 PAGE 404 *(état)*
- N1 court + LEAD + bouton retour accueil. Centré, hauteur réduite. (Tonalité éditoriale existante conservée.)

---

## 3 — INVENTAIRE DES ANIMATIONS & TRANSITIONS *(récap)*
| ID | Où | Désactivé si reduced-motion |
|----|----|----|
| A1 Reveal-rise | toutes les sections | ✅ |
| A2 Nav-condense | header au scroll | (réduit, pas critique) |
| A3 Link-underline | liens (desktop) | conservé (léger) |
| A4 Card-lift | cartes | conservé (léger) |
| A5 Button-lift | boutons | conservé (léger) |
| A6 Page-fade | entre routes | ✅ |
| A7 Manifesto-cascade | `/manifeste` | ✅ (texte visible) |
| A8 Breathe | portrait hero | ✅ |
| A9 Audio-toggle | lecteur Manifeste | n/a |
> Toutes durées « calmes » (≈ 300–800 ms), easings doux, **aucune animation ne masque ni ne retarde le contenu**.

---

## 4 — MATRICE RESPONSIVE *(récap)*
| Élément | Desktop ≥1024 | Tablet 600–1023 | Mobile <600 |
|---|---|---|---|
| Navigation | 7 liens + bouton, horizontale | burger → menu plein écran | burger → menu plein écran |
| Hero | 2 colonnes | 2 col resserrées / image réduite | empilé (texte → image) |
| Grilles de cartes | 3 col | 2 col | 1 col |
| Footer | 4 colonnes | 2 colonnes | 1 col (empilé/accordéon) |
| Rythme vertical | 96–120 | 72–88 | 56–72 |
| Marges | ≈32 | ≈28 | ≈20–24 |
| Survols (I3) | actifs | tap | tap |

---

## 5 — CHECKLIST ACCESSIBILITÉ *(récap, B1–B10)*
Repères ARIA · 1 seul N1/page · lien d'évitement · clavier complet · focus visible · cibles ≥44 · alt pertinents · audio/vidéo avec équivalent texte/sous-titres · rien par la seule couleur/son · reduced-motion · contraste ≥4.5/3 (au Design System).

---

## 6 — GUIDE DE REMISE FIGMA
- **Frames de référence** : Desktop **1440**, Tablet **768**, Mobile **375** (3 frames par écran).
- **Pages Figma suggérées** : `00 · Fondations (grille/espacements/composants)` · `01 · Accueil` · `02 · Manifeste` · `03 · Piliers (Vocalosteo/Art Vox/Laboratoire/CMC/PolymniVox)` · `04 · Consultation` · `05 · Écosystème` · `06 · Conférences` · `07 · Médias` · `08 · À propos` · `09 · Contact` · `10 · Légales` · `11 · États (404, vide, erreur, chargement)`.
- **À appliquer à l'étape Figma (hors de ce document) :** couleurs, typographies, lumière, ombres — **depuis le Design System** (`08-Design-System.md`).
- **Composants Figma à créer** (auto-layout) : Header, Menu mobile, Footer, Bouton (primaire/secondaire, états), Carte, En-tête de section, Bande CTA, Champ de formulaire, Embed Calendly, Lecteur audio, Média/placeholder.

---

### ❓ Décisions avant Figma
1. **Schéma de l'arbre** sur `/ecosysteme` (E2) : visuel structurel explicite, ou simple intertitre ?
2. **Hero accueil — la phrase** du N1 : le renversement du manifeste, ou la promesse au visiteur ? *(architecture identique ; choix de copie)*
3. **Médias / vidéos** (G4) : lecture en modale sur le site, ou redirection vers les plateformes (YouTube) ?
4. **Ordre des sections d'accueil** validé (S1→S8) ?

---

*⏸ Spécification de wireframes V2 rédigée — prête pour Figma. Rien n'est figé. Après ta validation et la réalisation des maquettes, **le développement ne commencera qu'après validation des maquettes**, et uniquement sur ton autorisation explicite de toucher au code.*
