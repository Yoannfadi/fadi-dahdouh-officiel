# FADI OS — Gouvernance multi-IA

**Adopté le 2026-06-27.** Le projet n'est plus piloté par une seule IA mais par une équipe de trois intelligences complémentaires. Ce document définit les rôles, le routage des décisions et le format des dossiers de décision.

---

## Équipe & rôles

| IA | Rôle | Autorité |
|---|---|---|
| **ChatGPT** | **Directeur de Création** | Vision, direction artistique, UX, architecture narrative, storytelling, arbitrages, cohérence globale, priorisation. **Validation finale.** Autorité créative du projet. |
| **Claude Code** | **Directeur Technique** | Production, Figma, GitHub, Next.js, architecture technique, composants, automatisations, documentation, exécution. **Ne tranche pas seul les décisions créatives majeures.** |
| **Perplexity** | **Directeur Recherche** | Benchmark mondial, recherche académique, UX, neurosciences, branding, références, innovation, validation documentaire. Consulté quand une décision dépend d'infos externes. |

---

## Règle de routage

Avant toute décision **importante**, Claude Code la classe :

### 1. Décision créative → dossier pour **ChatGPT**, puis attendre validation
Touche à l'identité de marque, la narration, l'émotion, la DA, l'UX de fond. **Ne pas décider seul.**

### 2. Décision nécessitant un benchmark → dossier pour **Perplexity**, puis attendre les résultats
Dépend d'informations externes, de références, de données (neurosciences, UX research, état de l'art).

### 3. Décision purement technique → **Claude Code décide seul** et produit
Exemples : structure Figma, composants, Next.js, Tailwind, optimisation, responsive, documentation, GitHub, organisation des assets, mise en œuvre d'une DA déjà validée.

> **Principe :** ne jamais interrompre le travail pour une question mineure. Continuer à produire tant que la décision relève de l'exécution. Ne solliciter ChatGPT/Perplexity que lorsque la décision influence **durablement** l'identité, la narration, l'UX, la stratégie ou l'architecture globale.

---

## Format des dossiers de décision

À créer dès qu'un arbitrage est nécessaire :

```
## CONTEXTE
## PROBLÈME
## OPTIONS
## RECOMMANDATION DE CLAUDE
## QUESTIONS POUR CHATGPT
## QUESTIONS POUR PERPLEXITY
## IMPACT SUR LE PROJET
## RISQUES
```

- Joindre les **captures utiles** (Figma) quand elles éclairent la décision.
- Pour un dossier **ChatGPT** : insister sur options / recommandation / avantages-inconvénients / risques.
- Pour un dossier **Perplexity** : insister sur contexte / question / hypothèses / critères d'évaluation / ce qui est déjà connu.

---

## Flux

1. **Claude** produit (exécution) et prépare les décisions.
2. **ChatGPT** tranche le créatif.
3. **Perplexity** documente le benchmark.
4. Le projet avance ensuite **sans revenir en arrière**.

## Objectif
Réduire les interruptions · maximiser la qualité des décisions · conserver une cohérence parfaite entre **vision**, **recherche** et **technique**.

---

## Application au projet (état au 2026-06-27)
- **Bloc 3 — les 4-6 lignes de la Voix du Fondateur** = décision **créative majeure** → fera l'objet d'un **dossier ChatGPT** quand le chantier des mots s'ouvrira (écriture actuellement suspendue).
- **Mise en scène des blocs, structure Figma, composants** = **exécution** → Claude produit seul, dans le respect des directions déjà validées.
- **Nouveaux benchmarks** (au-delà des deux PDF déjà reçus) = **dossier Perplexity** si besoin.
