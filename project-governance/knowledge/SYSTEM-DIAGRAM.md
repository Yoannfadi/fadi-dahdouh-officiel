# SYSTEM-DIAGRAM — Tout le système et ses relations

## Vue d'ensemble
```
                        ┌─────────── DIRECTION ───────────┐
                        │  ChatGPT (DG IA) — tranche       │
                        └───────────────┬─────────────────┘
            prépare les dossiers        │  arbitre
                        ┌───────────────┴─────────────────┐
   Perplexity ◄────────►│  Claude Code (Tech) — produit    │◄──► recherche/benchmark
   (Recherche)          └───────────────┬─────────────────┘
                                        │ exécute
   DESIGN ──► CODE ──► LIGNE ──► AUTOMATISATIONS ──► CRM
   Figma  →  GitHub →  Vercel  →    Make (hub)    →  Odoo (vérité ventes)
```

## Chaîne produit (design → live)
**Figma** (tokens CODEX) → **GitHub** (Next.js/React/Tailwind) → **Vercel** (mise en ligne).

## Chaîne relation (acquisition → suivi), orchestrée par Make
**Site (Vercel)** → **Tally** (form) → **Make** → **Calendly / Doctolib** (RDV) → **Google Calendar** → consultation → **Stripe** (paiement) → **Odoo** (CRM) → **Gmail** (emails) → suivi.

## Connaissances & présence
- **Google Drive** (fichiers) · **Assets** (`assets/`, par copie) · **Presse/Médias**.
- **Analytics / Search Console** (mesure) → informent ChatGPT (direction) & Claude (optimisation).
- **Instagram / LinkedIn / YouTube** (présence) ← contenus issus de la marque.

## Relations clés
- **Make** = hub central : il relie forms, RDV, paiement, CRM, emails.
- **Odoo** = source de vérité des ventes/relations ; **`project-governance/`** = source de vérité du projet/connaissance.
- **Une personne → une fiche** : tout point de contact (Tally, Calendly, Doctolib, Stripe) converge vers **une seule fiche Odoo**.
- **IA** : ChatGPT décide → Claude exécute (Figma/GitHub/Vercel/Make) → Perplexity documente.

## États (2026-06-27)
🟢 Figma, GitHub (docs), gouvernance · ⬜ Vercel, Make, Odoo, Stripe, Calendly, Doctolib (non démarrés) · 🟡 Assets (photos finales sous licence en attente).
