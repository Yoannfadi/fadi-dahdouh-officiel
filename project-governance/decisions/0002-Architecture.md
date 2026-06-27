# 0002 — Architecture système / FDOS

- **Statut :** 🔒 Figé · **Date :** 2026-06-27 · **Décideurs :** Fadi (+ ChatGPT)

## Contexte
On ne construit pas un site mais un **système d'exploitation numérique** (FADI OS). Le site est le module 1.

## Décision
- **Modules :** Site/Marque → Production/Déploiement → Acquisition/Relation → Connaissance/Contenus → Présence.
- **Chaîne produit :** Figma → GitHub → Vercel.
- **Chaîne relation (hub Make) :** Tally → Make → Calendly/Doctolib → Google Calendar → Stripe → **Odoo (CRM = vérité ventes)** → emails.
- **Principe :** une personne → une fiche → une seule source de vérité.
- **Source de vérité projet :** `project-governance/` (+ `knowledge/`).

## Conséquences
Tout livrable doit pouvoir évoluer vers cet écosystème ; rien n'est conçu isolément.

## Alternatives écartées
Approche « simple site vitrine » (rejetée : ne scale pas vers l'OS).

## Retour arrière
Non (cadre structurant). Détail : `knowledge/FDOS.md`, `knowledge/SYSTEM-DIAGRAM.md`.
