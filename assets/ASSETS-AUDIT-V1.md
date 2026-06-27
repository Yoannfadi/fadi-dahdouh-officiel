# ASSETS AUDIT — V1

Audit de l'architecture des assets du projet **fadi-dahdouh-officiel**.
**Date :** 2026-06-27 · **Périmètre :** `assets/` uniquement (aucun code / maquette / composant / FDOS touché).
**Statut :** architecture **figée** après cet audit.

---

## 1. Arborescence (19 catégories)

```
assets/
├── README.md · INDEX.md · ASSETS-AUDIT-V1.md
├── 00-HERO/        → Approved · Alternatives · Rejected · In-Progress · README.md · HERO.md
├── 01-PORTRAITS/ … 12-REFERENCES/   (thématiques)
├── 13-SHOOTS/      → 2026-HERO|CABINET|CONFERENCES × {RAW·SELECTS·RETOUCHED·DELIVERED} · README.md
├── 14-BRAND/       → Colors·Typography·Illustrations·Patterns·Icons·Motion·Logo · README.md
├── 15-LICENSES/    → Fonts·Images·Icons·Music · README.md
├── 16-FONTS/       → Commercial·Google · README.md
├── 17-MOCKUPS/     → Homepage·Mobile·Social · README.md
└── 18-EXPORTS/     → PNG·JPG·SVG·PDF · README.md
```

## 2. Grille d'audit

| Critère | Constat | Note |
|---|---|---|
| **Cohérence des dossiers** | Numérotation continue `00→18`, rôles clairs et non ambigus. Léger recouvrement `14-BRAND/Logo` ↔ `09-LOGOS` et `14-BRAND/*` ↔ `10-TEXTURES` (arbitré dans les README : sources vs prêts-à-l'emploi). | 18 / 20 |
| **Conventions de nommage** | Catégories `NN-NOM` (MAJ), séances `AAAA-SUJET`, pipeline `RAW/SELECTS/RETOUCHED/DELIVERED`, sous-dossiers CapitalCase. Conventions de fichiers documentées (`hero-rembrandt-01.jpg`…) + interdits (`IMG_xxxx`, `DSC_xxxx`, `photo_finale_v8`). Casse volontairement différenciée par niveau. | 18 / 20 |
| **Présence des README** | `assets/README.md`, `INDEX.md`, et README pour `00-HERO`, `13`→`18` (+ `HERO.md`). Les thématiques `01`→`12` n'ont pas de README dédié — couvertes par le README racine. | 17 / 20 |
| **Présence des .gitkeep** | 51 `.gitkeep` ajoutés : **100 % des dossiers vides** sont versionnables. | 15 / 15 |
| **Évolutivité** | Numérotation à trous possible, pipeline shoots réplicable par date, fonts swappables (`--font-titre`), séparation sources/exports. | 14 / 15 |
| **Maintenabilité** | Structure lisible et documentée. Réserves : `assets/.DS_Store` (parasite macOS) non ignoré ; pas de `.gitignore` dédié ; recouvrement BRAND/LOGOS à surveiller. | 8 / 10 |

## 3. Score global

> ## **90 / 100**

## 4. Réserves & recommandations (non bloquantes)

- 🟡 **`.DS_Store`** présent dans `assets/` (fichier macOS préexistant — non supprimé par respect de la règle « ne touche à aucun fichier existant »). → Recommandation : l'ajouter à un `.gitignore` (hors périmètre assets, à valider).
- 🟡 **Recouvrement `14-BRAND` ↔ `09-LOGOS` / `10-TEXTURES`** : règle posée (sources éditables vs assets prêts à l'emploi) ; à fusionner si l'on préfère une seule source.
- 🟡 **README thématiques `01`→`12`** : optionnels, ajoutables plus tard si chaque thème mérite ses propres règles.
- 🔵 **Pipeline `13-SHOOTS`** : placé **dans chaque séance** (interprétation) — à confirmer vs une organisation à plat.

## 5. Verdict

Architecture **cohérente, documentée, versionnable et évolutive** — prête à être figée. Les réserves sont mineures et n'empêchent pas de passer à l'import des vraies ressources.

*Prochaine phase : sélectionner les meilleures photos · importer les assets · construire les vraies maquettes. De la préparation à la création.*
