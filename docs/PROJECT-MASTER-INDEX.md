# PROJECT MASTER INDEX — Fadi Digital Operating System (FDOS)

> ⚠️ **LEGACY (depuis 2026-06-27).** La **source de vérité unique** est désormais **`project-governance/`** (opérationnel) + **`project-governance/knowledge/`** (mémoire permanente) + **`project-governance/decisions/`** (ADR). Ce document est conservé pour mémoire historique (Phase 5) ; en cas de divergence, `project-governance/` fait foi.

### Le tableau de bord central du projet · (archive)

**Objectif :** toute personne — humaine ou IA — comprend l'intégralité du système en **moins de 10 minutes**.
**Statut :** Phase 5 (FDOS) documentée · prochaine phase = **Hero & premières maquettes** · **Date :** 2026-06-27
**Règle absolue :** le **CODEX** est la source de vérité. Aucune décision ne peut le contredire.
**Synchronisation :** ce document est la **source de vérité**. La page Figma **`21 — Master Index`** en est la représentation visuelle. **Les deux doivent rester synchronisés** : toute modification ici doit être reportée sur la page Figma (et inversement).

> **Nous construisons un système, pas un site.** Le site web n'est qu'une interface du FDOS.

**Sommaire :** [Vision](#1-vision) · [Architecture](#2-architecture) · [UX](#3-ux) · [Design](#4-design) · [Assets](#5-assets) · [User Flows](#6-user-flows) · [Business Logic](#7-business-logic) · [System Architecture](#8-system-architecture) · [API Map](#9-api-map) · [Automation](#10-automation) · [AI Layer](#11-ai-layer) · [Roadmap](#12-roadmap) · [Décisions validées](#13-décisions-validées) · [Décisions à valider](#14-décisions-à-valider) · [Journal des versions](#15-journal-des-versions) · [Liens](#16-liens)

---

## 1. Vision

Fadi Dahdouh — créateur de l'**ostéopathie de la voix**, ostéopathe + ténor + chercheur — bâtit un écosystème (soin, art, science, IA). Le **FDOS** unifie sa couche numérique : site, CRM, automatisations, IA, données.

- **Positionnement :** « L'Architecte de la Voix ».
- **Archétype :** Le Révélateur · **Métaphore :** le Jardinier.
- **Mantra :** « Révéler. Pas fabriquer. » · **Signature :** « Celui qui transmet ne meurt jamais. »
- **Les 4 verbes :** Comprendre · Protéger · Révéler · Transmettre.
- **Les 3 refus :** technique froide · voix sans émotion · artistes fabriqués.
- **Hiérarchie des fins :** voix → dignité → liberté → vie pleinement vécue.

## 2. Architecture

**Make est le hub d'orchestration.** Front (Next.js/Vercel) → capture (Tally) → orchestration (Make) → services (Calendly, Google, Stripe, Odoo, Drive, Notion, Email).
**Odoo = CRM central** (source de vérité ventes/finance). Détail : page Figma `12` et `16`.

## 3. UX

Le site est **un jardin, pas une boutique** (Experience Bible). Arc émotionnel : *je respire → je suis compris → c'est possible → j'avance*. 8 lois : silence · révéler (pas vendre) · créer les conditions · voix présente · preuve qui murmure · dignité · élévation · joie sans injonction. 6 visiteurs servis (patient, artiste, pro, entreprise, journaliste, investisseur). Accessibilité = dignité (WCAG AA).
→ [`06-Experience.md`](00-CODEX/06-Experience.md) · Figma `07`, `08`, `09`, `10`, `11`.

## 4. Design

Monochrome **noir + un seul or**. Lumière **Rembrandt**, tempo *largo*, velours noir & laiton patiné. Tokens : `--noir #080808` · `--noir-2 #0F0F0F` · `--noir-3 #121212` · `--or #BFA06E` · `--blanc #FAFAFA` · `--platine #9A9A9A`. Typo : Cormorant/Playfair (serif, l'âme) + Inter (sans, la science). Espace base 8 ; grille 12 colonnes ; coins 1–2px.
→ [`08-Design-System.md`](00-CODEX/08-Design-System.md) · [`Figma-Creative-Brief.md`](02-UX/Figma-Creative-Brief.md) · Figma `01`–`06`.

**Direction Hero de référence : « Le Jardinier »** (page Figma `23`) — la révélation plutôt que la démonstration ; la présence plutôt que la performance ; la transmission plutôt que l'expertise ; l'humain avant la technique. Toute maquette future doit être cohérente avec cette direction.

## 5. Assets

10 familles : **Hero · Portraits · Cabinets · Art Vox · LSV · Médias · Logos · Icônes · Textures · Vidéos.** Emplacements balisés par ratio (portraits 4:5, scènes 16:10). Photo : clair-obscur, l'humain, le geste — jamais de banque d'images.
→ Figma `13 — Assets Library`.

## 6. User Flows

6 parcours, pipeline homogène : `Visiteur → Lecture → Qualification → Tally → Make → Calendly → Google Calendar → Consultation → Stripe (si applicable) → CRM·Odoo → Emails → Suivi`.
→ Figma `11 — User Flows`.

## 7. Business Logic

Cycle de vie d'un lead : **Lead → Qualifié → RDV → Consulté → Suivi** (+ Récurrent | Perdu | No-show). Chaque parcours = règles · décisions · conditions · états · exceptions. Données sensibles (tarifs, zones, éligibilité, NDA) = **○ À DÉFINIR**.
→ Figma `14 — Business Logic` (audit 91/100).

## 8. System Architecture

`Website → Tally → Make` (ingestion) puis fan-out `Make → Calendly (→ Google Calendar) · Stripe · Odoo · Google Drive · Notion · Email · Automations`. Chaque flèche porte un flux de données nommé. *Odoo : pas de connecteur Make natif → JSON-RPC/HTTP.*
→ Figma `12 — System Architecture`.

## 9. API Map

8 APIs : **Website · Stripe · Calendly · Tally · Odoo · Google · Make · Figma.** Pour chacune : auth, endpoints/webhooks, flux, dépendances, erreurs. Secrets gérés en page Security.
→ Figma `16 — API Map` (audit 90/100).

## 10. Automation

10 scénarios Make documentés : capture lead · routage persona · proposition RDV · RDV confirmé · paiement · cycle d'emails · documents · suivi · no-show · reporting KPI. Chaque scénario : déclencheur, modules, données, résultat, gestion d'erreur (retries, idempotence).
→ Figma `15 — Automation` (audit 92/100).

## 11. AI Layer

Principe (CODEX) : **« L'IA transmet une mémoire, pas une présence. »** Toute décision philosophique/artistique/narrative/émotionnelle/clinique → **validation humaine**.
Rôles : **ChatGPT** (création) · **Claude Code** (technique) · **Perplexity** (recherche) · **LSV** (science) · **PolymniVox** (IA vocale/biomarqueurs).
→ Figma `18 — AI Layer` (audit 93/100).

## 12. Roadmap

| Phase | Objet | Statut |
|---|---|---|
| 1 — Stratégie | CODEX (Philosophie → Wireframes) | ✅ Figé V1 |
| 2 — Brief créatif | Figma Creative Brief | ✅ Fait |
| 3 — Structure Figma | 11 pages (00→10) | ✅ Fait |
| 4 — Couche fonctionnelle | User Flows, Architecture, Assets (11→13) | ✅ Fait |
| 5 — FDOS | Business Logic → Future + Master Index (14→21) | ✅ Fait |
| **6 — Hero & maquettes** | **Direction de référence : Le Jardinier** (ex-D, synthèse A+C, séquence-film) — Playground (A/B/C) page `22`, mise en scène page `23` | 🔄 En cours |
| 7 — Développement | Next.js/Vercel après validation des maquettes | À venir |
| 8 — Intégrations | Make, Odoo, Stripe, Calendly en production | À venir |
| Idées long terme | App, portail, académie, EN, API publique… | Figma `20 — Future` |

## 13. Décisions validées

- ✅ CODEX V1 (Philosophie, Brand Bible v1.4, Experience, IA, Design System, Wireframes).
- ✅ Palette noir + un seul or ; serif + sans (2 familles).
- ✅ Archétype Le Révélateur · métaphore Jardinier · 4 verbes · 3 refus.
- ✅ **CRM = Odoo** ; RDV = Calendly ; orchestration = Make.
- ✅ FR uniquement (architecture EN-ready).
- ✅ Nav 7 entrées flat ; le Manifeste = un seuil.
- ✅ 22 pages Figma structurées ; principe IA « mémoire, pas présence ».
- ✅ Conventions d'état : ✅ Validé / ◐ À valider / ○ À définir.

## 14. Décisions à valider

**Par Fadi :** grilles tarifaires (B2C/B2B) · zones géographiques · critères d'éligibilité clinique · modèle NDA & data room · conformité santé (HDS, DPO, rétention RGPD) · politique d'accès presse.
**Par ChatGPT (Directeur de création) :** ton & copy des emails · messages de qualification · narration des parcours · phrase du Hero.
**Recherches Perplexity à mener :** architectures multi-agents · gouvernance IA human-in-the-loop · biomarqueurs vocaux · EU AI Act · funnels cliniques premium · idempotence webhooks/Make.
**Technique à confirmer :** connexion Odoo (JSON-RPC vs module tiers) · versions d'API · mapping fin Odoo.

## 15. Journal des versions

| Date | Version | Évolution |
|---|---|---|
| 2026-06-25 | CODEX V1 | Philosophie, Brand, Experience, IA, Design System, Wireframes validés |
| 2026-06-27 | Figma V1 | 11 pages design (00→10) |
| 2026-06-27 | Figma V2 | Couche fonctionnelle (11→13) |
| 2026-06-27 | FDOS V1 | Pages 14→21 + ce Master Index |
| 2026-06-27 | Dashboard V1 | Master Index étendu en tableau de bord central + synchro Figma 21 |
| 2026-06-27 | Hero V1 | 4 directions Hero comparées (Figma `22`) · Direction D retenue |
| 2026-06-27 | Hero V2 | Direction D renommée **Le Jardinier** (référence artistique officielle) · A/B/C archivées (Playground `22`) · Hero Laboratory (page `23`) |

## 16. Liens

### CODEX (source de vérité)
- [01 — Philosophie](00-CODEX/01-Philosophie.md) · [02 — Vision](00-CODEX/02-Vision.md) · [03 — Histoire](00-CODEX/03-Histoire.md) · [04 — Mission](00-CODEX/04-Mission.md)
- [05 — Brand Bible](00-CODEX/05-Brand.md) · [06 — Experience Bible](00-CODEX/06-Experience.md) · [08 — Design System](00-CODEX/08-Design-System.md)
- [Information Architecture](03-Architecture/Information-Architecture.md) · [Wireframes](02-UX/Wireframes.md) · [Figma Creative Brief](02-UX/Figma-Creative-Brief.md)

### Pages Figma — *Fadi Dahdouh — Website V2*
Fichier : https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3

| # | Page | Lien direct |
|---|---|---|
| 00 | Cover | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=21-2 |
| 01 | Visual Bible | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=21-3 |
| 02 | References | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=21-4 |
| 03 | Moodboard | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=21-5 |
| 04 | Typography | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=21-6 |
| 05 | Colors | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=21-7 |
| 06 | Components | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=21-8 |
| 07 | Homepage | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=21-9 |
| 08 | Other Pages | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=21-10 |
| 09 | Mobile | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=21-11 |
| 10 | Prototype | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=21-12 |
| 11 | User Flows | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=32-2 |
| 12 | System Architecture | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=32-3 |
| 13 | Assets Library | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=32-4 |
| 14 | Business Logic | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=39-2 |
| 15 | Automation | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=39-3 |
| 16 | API Map | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=39-4 |
| 17 | Data Model | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=39-5 |
| 18 | AI Layer | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=39-6 |
| 19 | Security | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=39-7 |
| 20 | Future | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=39-8 |
| 21 | Master Index | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=39-9 |
| 22 | Hero Playground (archive A/B/C) | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=56-2 |
| 23 | Hero · Le Jardinier (mise en scène) | https://www.figma.com/design/6YeoDDfYIImKSD4Q1J6Nn3?node-id=63-2 |

### Outils & plateformes
| Service | Rôle | Lien |
|---|---|---|
| GitHub | Versionning | https://github.com/Yoannfadi/fadi-dahdouh-officiel |
| Vercel | Déploiement | ○ À DÉFINIR — coller l'URL du projet Vercel |
| Odoo | CRM central | ○ À DÉFINIR — coller l'URL de l'instance Odoo |
| Make | Orchestration | ○ À DÉFINIR — coller l'URL de l'organisation Make |
| Calendly | Réservation | ○ À DÉFINIR — coller l'URL Calendly publique |
| Tally | Qualification | ○ À DÉFINIR — coller l'URL du workspace Tally |
| Stripe | Paiement | ○ À DÉFINIR — coller l'URL du dashboard Stripe |

> Les liens `○ À DÉFINIR` suivent la convention du projet : emplacement prêt, jamais d'URL inventée. Les compléter dès qu'ils existent.

---

*Tableau de bord central du FDOS. En cas de doute : revenir au CODEX, et préférer le silence au bruit. Prochaine phase = produire du visible (Hero & maquettes), plus de la documentation.*
