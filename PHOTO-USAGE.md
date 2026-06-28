# PHOTO-USAGE — Images du site

**Règle :** seules des images **optimisées** vivent dans `public/images/`. Les **originaux/RAW restent hors Git** (`assets/13-SHOOTS/**/RAW`, gitignorés, sur disque + à sauvegarder sur Drive). Source de tous les visuels actuels : séance **2026-HERO** (N&B, Olivier Elliard). **Recadrés pour exclure le filigrane** présent en bordure ; à terme, remplacer par les **fichiers HD propres** sous licence.

| Bloc | Fichier `public/images/…` | Source RAW | Format | Poids | Note |
|---|---|---|---|---|---|
| Hero | `hero/hero-007.jpg` | `007.jpg` | 4:5 · 1080×1350 | 129 Ko | Portrait validé (Le Jardinier), clair-obscur, regard caméra |
| Silence | `silence/silence.jpg` | `082.jpg` | 16:10 · 1600×1000 | 112 Ko | Gros plan + lumière en arrière-plan ; pleine largeur, sans texte |
| Voix du Fondateur | `fondateur/fondateur.jpg` | `034.jpg` | 4:5 · 1080×1350 | 107 Ko | Présence trois-quarts, lumière latérale Rembrandt |
| Trois Chemins — Soin | `chemins/soin.jpg` | `127.jpg` | 4:5 · 1080×1350 | 124 Ko | Portrait intime chemise blanche (**interim** : pas de photo cabinet) |
| Trois Chemins — Création | `chemins/creation.jpg` | `092.jpg` | 4:5 · 1080×1350 | 117 Ko | Perfecto, registre artiste (**interim** : pas de photo studio) |
| Trois Chemins — Transmission | `chemins/transmission.jpg` | `124.jpg` | 4:5 · 1080×1350 | 98 Ko | Chemise blanche, autorité (**interim** : pas de photo conférence) |
| Transformation | — | — | — | — | **Aucune photo** : pas d'image « sujet » non-nominative dispo. Bloc sobre. |
| Invitation | — | — | — | — | **Aucune photo** : bloc texte sobre. |

## Optimisation
Script : `/tmp/optimize_photos.py` (Pillow) — recadrage focalisé (exclut le filigrane), conversion N&B, resize, JPEG qualité 82 progressif. Réexécutable pour régénérer.

## À faire ensuite
1. **Fichiers HD propres** (sans filigrane) d'Olivier Elliard → remplacer les recadrages actuels.
2. **Photos de contexte manquantes** (cabinet/ostéo, Art Vox/CMC studio, conférence/LSV) → shooting dédié, pour des Trois Chemins fidèles (les portraits actuels sont des **interim**).
3. **Photo de transformation** (sujet réel, **avec consentement / RGPD**) pour le Bloc 5.
