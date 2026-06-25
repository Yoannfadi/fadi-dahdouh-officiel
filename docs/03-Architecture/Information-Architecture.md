# INFORMATION ARCHITECTURE — Site officiel Fadi Dahdouh
### Le plan de l'œuvre numérique · V1.1

**Statut :** **V1.2 — VALIDÉE le 2026-06-25.** · **Date :** 2026-06-25
**Filiation :** en aval du CODEX — Philosophie, [`05-Brand.md`](../00-CODEX/05-Brand.md), [`06-Experience.md`](../00-CODEX/06-Experience.md).
**Décisions cadre :** FR uniquement (EN-ready) · prise de RDV **Calendly** · hero porté par le **manifeste**.
**Journal :**
- v1.2 (2026-06-25) — **VALIDÉE.** Nav = **7 entrées flat** (pas de menu Écosystème) ; slug raccourci **`/laboratoire`**.
- v1.1 (2026-06-25) — Art Vox & Laboratoire promus en piliers de premier niveau ; Limova retirée ; Médias en page de premier niveau ; École en phase 2 ; réseaux = Instagram · LinkedIn · YouTube.

> L'architecture n'organise pas des pages. Elle **cultive des chemins** — comme le jardinier trace les allées d'un jardin : pour que chacun trouve, sans jamais se sentir poussé.

---

## 01 — Les 6 principes d'architecture

1. **Clarté avant exhaustivité.** Moins de portes, mieux nommées. Une navigation légère est une forme de silence *(Experience Bible, loi n°1)*.
2. **Les 4 verbes comme logique d'organisation.** Chaque page se rattache à *Comprendre · Protéger · Révéler · Transmettre*. Rien n'existe hors d'eux.
3. **Un chemin par visiteur.** Les 6 personas doivent trouver leur route en un clic depuis l'accueil, sans que la structure n'en privilégie un seul *(Brand §07)*.
4. **Guider, ne pas pousser.** L'IA propose des suites logiques (liens contextuels), jamais des impasses ni des tunnels forcés *(le Jardinier)*.
5. **Chaque URL est une définition.** Slugs clairs, stables, en langage humain — pour le visiteur, le SEO et les IA *(GEO)*.
6. **Prêt pour demain.** Structure pensée pour accueillir l'anglais, l'École et le blog sans être refondue.

---

## 02 — Le plan du site *(site map)*

```
/                          ACCUEIL — hero manifeste, orchestration des 6 visiteurs
│
├── /manifeste             LE MANIFESTE — pic émotionnel · voix de Fadi
│
├── /vocalosteo            VOCALOSTEO® — la méthode               (Révéler · Protéger)
│
├── /osteopathie-de-la-voix   LA CONSULTATION (patient)           (Protéger)  → Calendly
│
├── /art-vox  ★PILIER      ART VOX — l'académie artistique        (Révéler)
│
├── /laboratoire  ★PILIER   LABORATOIRE SCIENTIFIQUE DE LA VOIX   (Comprendre)
│
├── /ecosysteme            L'ÉCOSYSTÈME — « un homme, un univers » (vue d'ensemble)
│     ├── /ecosysteme/cmc-studio     CMC Studio                   (Révéler · Créer)
│     └── /ecosysteme/polymnivox     PolymniVox — IA vocale       (Comprendre)
│
├── /conferences           CONFÉRENCES & MASTERCLASSES            (Transmettre)
│
├── /medias  ★PREMIER NIVEAU   MÉDIAS — presse · interviews · podcasts ·
│                               conférences filmées · vidéos · apparitions   (Transmettre)
│
├── /a-propos              À PROPOS — l'homme, le fil rouge
│
├── /contact               CONTACT — hub + Calendly
│
├── /mentions-legales      Légal (obligatoire)
└── /confidentialite       RGPD (obligatoire)

   [PHASE 2]  /formation        École / Formation Vocalosteo® (former les passeurs)
   [PHASE 2]  /journal          Articles / blog (SEO éditorial)
   [FUTUR]    /en/*             Version anglaise
```

**Pages V2 au lancement : 13** (dont 2 légales) + **2 sous-pages d'écosystème** (CMC Studio, PolymniVox).

**Les 6 piliers de l'univers** *(tous des pages pleines)* : **Vocalosteo®** · **Ostéopathie de la voix** · **Art Vox** · **CMC Studio** · **Laboratoire Scientifique de la Voix** · **PolymniVox**. Art Vox et le Laboratoire sont **de premier niveau** (URL racine, présence forte) ; CMC Studio et PolymniVox vivent sous le hub `/ecosysteme`.

> ✅ **« Limova » est retirée** du périmètre (décision du 2026-06-25). *Note de build :* les anciens contenus (ex. `lib/content.js` qui citait « Limova ») devront être nettoyés lors du développement.
>
> 🔎 *Observation de gardien (non bloquante) :* PolymniVox sert les mêmes personas que le Laboratoire (médecin, investisseur) et porte un différenciateur fort (l'IA vocale). Il reste sous-page pour l'instant — il pourra être promu pilier de premier niveau si tu le souhaites plus tard.

---

## 03 — La navigation

### Navigation principale *(7 entrées + 1 appel)*
> Tes piliers majeurs (Art Vox, Laboratoire, Médias) sont **visibles**, pas regroupés sous un menu. La densité est assumée au nom de ta priorité « piliers en pleine lumière ».

`Vocalosteo®` · `Ostéopathie de la voix` · `Art Vox` · `Laboratoire de la voix` · `Conférences` · `Médias` · `À propos` — puis le bouton **`Prendre rendez-vous`**.

- **L'Écosystème** n'est pas dans la barre : il est la *vue d'ensemble* (la preuve d'unité — *« ce ne sont pas des projets indépendants »*), atteinte depuis l'accueil et le pied de page. Il héberge CMC Studio et PolymniVox.
- **Décision validée (2026-06-25) :** on retient les **7 entrées flat**. Pas de menu « Écosystème ». Art Vox et le Laboratoire sont des piliers majeurs et doivent être **visibles immédiatement**.

### Navigation de pied de page
- **L'univers** : Vocalosteo® · Art Vox · CMC Studio · Laboratoire de la voix · PolymniVox · Écosystème
- **Découvrir** : Le Manifeste · Médias & presse · Conférences · À propos
- **Agir** : Prendre rendez-vous · Inviter Fadi · Dossier de presse · Contact
- **Légal** : Mentions légales · Confidentialité
- **Réseaux** : **Instagram · LinkedIn · YouTube** *(pas de TikTok en V1)*

### Accès contextuel
- **Le Manifeste** reste hors nav : appelé depuis le hero (« Lire le manifeste »), depuis À propos et le pied de page — un *seuil*, pas un onglet ordinaire.

### Mobile
Menu plein écran, sobre, fermable au clavier (`Échap`) et au tap extérieur ; hamburger accessible (`<button>`, `aria-expanded`) *(corrige un défaut de l'audit)*.

---

## 04 — Structure des URL

- **Langage humain, stable, en français** : `/osteopathie-de-la-voix`, `/laboratoire`. Chaque URL se lit comme une définition *(GEO)*.
- **Slugs existants conservés** (continuité SEO) ; on **ajoute** `/manifeste`, `/art-vox`, `/laboratoire`, les sous-pages d'écosystème et les pages légales.
- **Prêt pour l'anglais** : le FR vit à la racine ; l'EN viendra via le préfixe `/en/*` (routage i18n Next.js, `hreflang`). **Différé, structure prête.**
- **Canonique unique** par page.

---

## 05 — Blueprint des pages *(ordre narratif des blocs)*

> Chaque page suit l'arc émotionnel de l'Experience Bible : *respirer → être compris → entrevoir le possible → être invité.* Le dernier bloc est toujours une **invitation**, jamais une pression.

**`/` Accueil** — Hero (manifeste + portrait Rembrandt + « Lire le manifeste » / « Prendre rendez-vous ») · la figure transversale (6 territoires) · Vocalosteo® (aperçu) · la consultation (aperçu) · l'écosystème (les 6 piliers) · preuves d'expertise *(la preuve qui murmure)* · conférences (aperçu) · bande finale (invitation).

**`/manifeste`** *(moment-signature)* — texte intégral, lecture lente, **audio dans la voix de Fadi** (opt-in, contrôle visible, équivalent texte). Aucune autre sollicitation.

**`/vocalosteo`** — origine (double expérience) · les 3 piliers (diagnostic → traitement → intégration) · pour qui · invitation (RDV).

**`/osteopathie-de-la-voix`** *(patient)* — indications · déroulé d'une séance · lieux (Paris · Troyes · Visio) · **module Calendly** · invitation.

**`/art-vox`** ★ *(artiste — pilier)* — la promesse (« révéler, pas formater ») · l'accompagnement (de la technique à la scène) · pour quels artistes · liens vers CMC Studio · invitation.

**`/laboratoire`** ★ *(médecin/pair · investisseur — pilier)* — la mission scientifique · la voix comme donnée de santé · biomarqueurs · lien vers PolymniVox · ton **rigoureux, sourcé** *(la science murmure)*.

**`/ecosysteme` Hub** — « un homme, un univers » · les 6 piliers présentés (Vocalosteo® · Ostéopathie · Art Vox · CMC Studio · Laboratoire · PolymniVox) avec liens · invitation (contact).
- **/ecosysteme/cmc-studio** — le studio, le son, l'expérience sensorielle (Créer).
- **/ecosysteme/polymnivox** — l'IA vocale ; **principe affiché : « l'IA transmet une mémoire, pas une présence »** *(réponse canonique n°4 — différenciateur éthique)*.

**`/conferences`** *(l'OFFRE — partenaire/institution)* — thèmes (rangés sous les 4 verbes) · formats (45 min / 2 h / journée Qualiopi) · publics · invitation (« Inviter Fadi à intervenir »).

**`/medias`** ★ *(journaliste · preuve d'autorité)* — **distincte de `/conferences`** : ici la *présence* et les *preuves*, pas l'offre. Regroupe **presse · interviews · podcasts · conférences filmées · vidéos · apparitions publiques** · **dossier de presse téléchargeable** (bio, photos HD, thèmes, citations) · contact presse.

**`/a-propos`** — l'homme derrière la méthode · le fil rouge des 7 chemins · lien vers le Manifeste · badges/preuves · double invitation (RDV / conférence).

**`/contact`** — tuiles d'orientation (RDV · conférence · presse · écosystème) · **Calendly** · coordonnées · **email réel** *(fin du `mailto:`)*.

**`/mentions-legales`, `/confidentialite`** — conformité (santé + RGPD).

---

## 06 — Les parcours des 6 visiteurs

| Visiteur | Entrée | Chemin | Conversion |
|---|---|---|---|
| 🩺 Patient | `/` ou `/osteopathie-de-la-voix` | hero → consultation → déroulé → Calendly | **RDV** |
| 🎤 Artiste | `/` → `/art-vox` | Art Vox → Vocalosteo® → CMC Studio | RDV / Art Vox |
| 🩻 Médecin/pair | `/` → `/laboratoire` | laboratoire → PolymniVox | lecture / échange pro |
| 📰 Journaliste | `/` → `/manifeste` → `/medias` | manifeste → médias → dossier | **dossier de presse** |
| 💼 Investisseur | `/` → `/ecosysteme` | écosystème → laboratoire / PolymniVox | contact / vision |
| 🤝 Partenaire | `/` → `/conferences` | conférences → écosystème | contact / collaboration |

Chaque page-destination offre la **suite logique** (liens contextuels) — jamais une impasse.

---

## 07 — L'architecture de conversion

- **Calendly** intégré sur `/osteopathie-de-la-voix` et `/contact` (appelé par tous les CTA « Prendre rendez-vous »). Chargement respectueux de la performance (pas de script bloquant).
- **Dossier de presse** : téléchargeable depuis `/medias` (et tuile `/contact`).
- **Lead magnet** *(« 5 signes que votre corps bride votre voix »)* : capture email sans piège — *don avant demande*. En fin de `/vocalosteo` et `/osteopathie-de-la-voix`. *(Outil email à décider.)*
- **Email réel** partout (fin du `mailto:`).

---

## 08 — Crochets SEO / GEO structurels

*(Détail complet à venir dans `00-CODEX/07-SEO-GEO.md`. Ici, les exigences structurelles.)*
- **JSON-LD** par page : `Person` (Fadi), `MedicalBusiness`/`LocalBusiness` (Paris, Troyes), `Organization` (Art Vox, CMC Studio, Laboratoire, PolymniVox), `FAQPage`, `Article` (phase blog).
- **Définitions canoniques autonomes** sur `/vocalosteo`, `/osteopathie-de-la-voix`, `/laboratoire`, `/ecosysteme/polymnivox` — pour être *la source* citée par les IA.
- **Sitemap & robots** régénérés sur la nouvelle arborescence.
- **Une intention de recherche par page**, pas de cannibalisation.

---

## 09 — Préparation au bilingue *(différé)*
Contenu séparé de la présentation (via `lib/content.js`, à conserver) · slugs/libellés centralisés et traduisibles · le moment venu : routage i18n Next.js avec `/en`, `hreflang`, sélecteur de langue discret.

---

## 10 — Mapping ancien → nouveau *(continuité SEO)*

| Site actuel | V2 | Action |
|---|---|---|
| `/`, `/vocalosteo`, `/osteopathie-de-la-voix`, `/conferences`, `/medias`, `/a-propos`, `/contact` | identiques | **conservés** (slugs inchangés) |
| `/ecosysteme` (page unique, citait Art Vox/CMC/Polymnivox/Limova) | hub + pages réparties | **restructuré** : Art Vox & Laboratoire → premier niveau ; CMC & PolymniVox → sous-pages ; **Limova supprimée** |
| — | `/manifeste`, `/art-vox`, `/laboratoire` | **nouveau** |
| — | `/mentions-legales`, `/confidentialite` | **nouveau** (obligatoire) |
| formulaire `mailto:` | Calendly + email réel | **remplacé** |

> Aucune URL existante supprimée → pas de perte SEO. Tout est additif.

---

## 🎯 Synthèse

- **13 pages** au lancement (FR) + **2 sous-pages** ; structure additive, EN-ready.
- **6 piliers** en pleine page ; **Art Vox & Laboratoire de la voix** de premier niveau.
- **Médias** = page de premier niveau (presse, interviews, podcasts, conférences filmées, vidéos, apparitions) — distincte de l'**offre** `/conferences`.
- **Nav** : 7 entrées flat + RDV ; le Manifeste reste un seuil.
- **Limova retirée** ; **École en phase 2** ; réseaux **Instagram · LinkedIn · YouTube**.
- **Chaque page = un verbe, une intention, une invitation finale.**

---

### ✅ Décisions validées (2026-06-25)
1. **Navigation** : **7 entrées flat**, pas de menu Écosystème — piliers en pleine lumière.
2. **Slug du Laboratoire** : **`/laboratoire`** (court, élégant, mémorisable ; le SEO sera porté par les contenus, titres, métadonnées et le maillage interne).
3. **Plan général validé.** L'IA est considérée comme mature → passage au **Design System**.

---

*✅ Information Architecture validée (V1.2) le 2026-06-25. Étape suivante : **Design System** (`00-CODEX/08-Design-System.md`).*
