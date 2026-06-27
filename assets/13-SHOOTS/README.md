# 13-SHOOTS/ — Séances photo (source des originaux)

Toute **séance photo** vit ici, et **les originaux (RAW) ne sont jamais stockés ailleurs**.
Une fois sélectionnées et retouchées, les images **livrées** sont copiées vers les dossiers thématiques (`00-HERO/`, `01-PORTRAITS/`, `02-CABINET-PARIS/`…).

## Convention de séance

Un dossier par séance, nommé `AAAA-SUJET` (année + sujet, MAJUSCULES) :
- `2026-HERO/` — la séance du portrait Hero « Le Jardinier »
- `2026-CABINET/` — les cabinets (Paris / Troyes)
- `2026-CONFERENCES/` — captations de conférences

Chaque séance suit le **pipeline en 4 étapes** :

| Étape | Rôle |
|---|---|
| `RAW/` | Les fichiers bruts du boîtier (`.cr3`, `.nef`, `.arw`, `.dng`). **Jamais modifiés, jamais supprimés, jamais déplacés.** |
| `SELECTS/` | La sélection (« picks ») retenue après tri. |
| `RETOUCHED/` | Les fichiers retouchés (master `.tif`/`.psd`). |
| `DELIVERED/` | Les exports finaux livrés (`.jpg` sRGB), prêts à être copiés vers les dossiers thématiques. |

> Interprétation à valider : le pipeline `RAW/SELECTS/RETOUCHED/DELIVERED` est placé **dans chaque séance**. Si tu le préfères à plat sous `13-SHOOTS/`, dis-le.

## Règles

- Les `RAW/` sont **sacrés** : sauvegarde obligatoire (cf. `19 — Security`), aucune retouche destructive.
- Nommage des livrables : `categorie-sujet-traitement-NN.jpg` (cf. `assets/README.md`).
- Lumière conforme à la **référence Rembrandt** (Figma `23` · `00-HERO/HERO.md`).
- Aucune photo n'entre dans le site sans passer par `DELIVERED/`.
