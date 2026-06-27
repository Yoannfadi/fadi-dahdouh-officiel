# TECH

## Stack (cible, après Figma)
- **Front :** Next.js (App Router) · React · TypeScript · Tailwind CSS.
- **Design source :** Figma (`6YeoDDfYIImKSD4Q1J6Nn3`) → tokens CODEX → thème Tailwind.
- **Repo :** GitHub `Yoannfadi/fadi-dahdouh-officiel` (branche docs/codex-foundations).
- **Déploiement :** Vercel.
- **Automatisations :** Make (orchestrateur) ; intégrations Odoo, Stripe, Calendly, Doctolib, Tally, Google.

## Exigences dès la conception
Responsive (mobile-first), accessibilité (contrastes élevés, navigation simple), performance, SEO (structure sémantique, métadonnées), animations sobres (le mouvement accompagne).

## État
- Documentation/gouvernance : 🟢 en place (`project-governance/`, `docs/`).
- Code applicatif : ⬜ non démarré (phase design Figma en cours).
- Vercel/Make/Odoo/Stripe : ⬜ non configurés.

## Règles de production (rappel)
- Workflow **batch** : plan → modifs groupées → captures groupées → vérif → présentation.
- Écritures fichiers / Git en écriture : **validation humaine** (jamais auto-allowlistées).
- Travailler par **copie** sur les assets ; ne jamais toucher un original.
