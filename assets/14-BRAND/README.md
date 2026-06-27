# 14-BRAND/ — Actifs de marque

Tous les **actifs de marque** sources, dérivés du Design System (`docs/00-CODEX/08-Design-System.md`).

| Dossier | Contenu |
|---|---|
| `Colors/` | Nuanciers, tokens couleur exportés (noir `#080808`, or `#BFA06E`, blanc `#FAFAFA`, platine `#9A9A9A`), fichiers `.ase`/`.clr`. |
| `Typography/` | Spécimens, échelles typographiques, réglages (Playfair / Cormorant / Inter). Les fichiers de police vivent dans `16-FONTS/`. |
| `Illustrations/` | Illustrations propriétaires. |
| `Patterns/` | Motifs et trames de marque. |
| `Icons/` | Pictogrammes SVG en trait fin (jamais d'emoji). |
| `Motion/` | Principes & presets d'animation (easing, durées), références de mouvement. |
| `Logo/` | Logos sources & déclinaisons (Fadi Dahdouh, Vocalosteo®, Art Vox, LSV, CMC Studio, PolymniVox). |

## Règles

- `.svg` prioritaire pour logos/icônes ; `.png` transparent en secours.
- Cohérence stricte avec le Design System — toute déclinaison respecte noir + un seul or.
- ⚠️ Recoupe partiellement `09-LOGOS/`, `10-TEXTURES/`. **Règle :** `14-BRAND/` = **sources de marque** (fichiers éditables, déclinaisons officielles) ; `09-LOGOS/` & `10-TEXTURES/` = **assets prêts à l'emploi** pour la production. À arbitrer si l'on veut fusionner.
