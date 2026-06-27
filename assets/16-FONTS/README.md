# 16-FONTS/ — Polices

Fichiers de polices du projet. **Toute police doit avoir sa licence archivée dans `15-LICENSES/Fonts/`.**

| Dossier | Contenu |
|---|---|
| `Commercial/` | Polices commerciales (licence payante) — ex. candidates premium : Canela, Tiempos, Editorial New. |
| `Google/` | Polices open-source Google Fonts — Playfair Display, Cormorant Garamond, Inter. |

## Documentation requise (par police)

Pour chaque police, documenter dans ce README (tableau ci-dessous) :

| Police | Fournisseur | Version | Licence | Téléchargement | Dossier |
|---|---|---|---|---|---|
| Playfair Display | Google Fonts | ○ À DÉFINIR | OFL | fonts.google.com/specimen/Playfair+Display | `Google/` |
| Cormorant Garamond | Google Fonts | ○ À DÉFINIR | OFL | fonts.google.com/specimen/Cormorant+Garamond | `Google/` |
| Inter | Google Fonts | ○ À DÉFINIR | OFL | fonts.google.com/specimen/Inter | `Google/` |
| Canela | ○ À DÉFINIR | ○ À DÉFINIR | Commerciale | ○ À DÉFINIR | `Commercial/` |
| Tiempos | ○ À DÉFINIR | ○ À DÉFINIR | Commerciale | ○ À DÉFINIR | `Commercial/` |
| Editorial New | ○ À DÉFINIR | ○ À DÉFINIR | Commerciale | ○ À DÉFINIR | `Commercial/` |

## Règles

- Formats web : `.woff2` prioritaire (+ `.woff`) ; desktop : `.otf`/`.ttf`.
- Auto-hébergement via `next/font` (cf. Design System — performance + RGPD).
- Aucune police commerciale livrée sans licence web vérifiée dans `15-LICENSES/Fonts/`.
- Le titre du Hero repose sur le token `--font-titre` (swappable Playfair → Canela/Tiempos/Editorial New sans refonte).
