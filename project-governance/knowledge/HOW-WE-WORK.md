# HOW-WE-WORK — Méthode

## Cycle
```
Sprint → Mission → Production → Validation → Fusion → Version → Release
```
- **Sprint** : un objectif cohérent (ex. « Homepage bloc par bloc »).
- **Mission** : une unité de travail terminée d'un bloc avant le suivant ; jamais deux blocs en parallèle.
- **Production** : exécution en **batch** (voir ci-dessous).
- **Validation** : créatif → ChatGPT ; recherche → Perplexity ; technique → Claude. On ne poursuit pas sans la validation requise.
- **Fusion** : la décision validée est consignée dans `project-governance/` (DECISIONS, STATE, DASHBOARD).
- **Version** : incrément documenté (CHANGELOG).
- **Release** : mise à disposition (doc, Figma figé, ou déploiement Vercel selon la phase).

## Batch mode (obligatoire)
Plan → **toutes** les modifs Figma en un seul lot → **toutes** les captures → **toutes** les lectures/vérifications en une passe → présentation. Jamais production↔question en boucle. Regrouper tout ce qui peut l'être pour minimiser les interruptions.

## Permissions
Lectures récurrentes auto-autorisées (Figma MCP, curl, python, git lecture). **Écriture/suppression de fichiers et Git en écriture = validation humaine.** Détail : `docs/WORKFLOW-BATCH-MODE.md`.

## Fin de chaque mission — format imposé
```
MISSION TERMINÉE
→ Résumé
→ Décisions prises
→ Décisions à arbitrer
→ Questions pour ChatGPT
→ Questions pour Perplexity
→ Prochaine mission
→ Temps estimé
→ Mise à jour du Dashboard
```

## Règles permanentes
- Une info critique ne reste jamais seulement dans une conversation.
- *« Que peut-on retirer ? »* avant *« Que peut-on ajouter ? »*.
- On avance sans revenir en arrière une fois une décision verrouillée.
