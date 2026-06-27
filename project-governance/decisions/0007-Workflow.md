# 0007 — Workflow batch & permissions

- **Statut :** 🔒 Figé · **Date :** 2026-06-27 · **Décideurs :** Fadi

## Contexte
Réduire les interruptions et les validations sans relâcher la sécurité.

## Décision
- **Cycle :** Sprint → Mission → Production → Validation → Fusion → Version → Release.
- **Batch mode :** plan → toutes les modifs Figma en un lot → toutes les captures → toutes les vérifications en une passe → présentation. Jamais production↔question en boucle.
- **Permissions :** lectures récurrentes auto-autorisées (Figma MCP, curl, python, git lecture) ; **écriture/suppression de fichiers et Git en écriture = validation humaine obligatoire**.

## Conséquences
Flux de production continu ; frontière lecture (auto) / écriture (manuelle) nette.

## Alternatives écartées
Validation unitaire à chaque étape (rejetée : trop d'interruptions).

## Retour arrière
Réversible (ajuster l'allowlist). Détail : `docs/WORKFLOW-BATCH-MODE.md`, `knowledge/HOW-WE-WORK.md`.
