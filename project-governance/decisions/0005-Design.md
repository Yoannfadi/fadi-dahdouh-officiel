# 0005 — Design system

- **Statut :** 🔒 Figé · **Date :** 2026-06-27 (CODEX V1 : 2026-06-25) · **Décideurs :** Fadi (+ CODEX)

## Contexte
Une marque de luxe contemplative ; le design doit servir l'émotion, pas la décorer.

## Décision
- **Couleurs :** `--noir #080808` · `--noir-2 #0F0F0F` · `--noir-3 #121212` · `--or #BFA06E` (ponctuation, **jamais une lumière**) · `--blanc #FAFAFA` · `--platine #9A9A9A`.
- **Typo :** Playfair Display (serif, l'âme) + Inter (sans, la science). Signature = script manuscrit (scan réel à venir).
- **Lumière :** clair-obscur Rembrandt, blanche chaude.
- **Grille :** base-8, 12 colonnes, marges ≥ 120 px, rayon 1–2 px.
- **Photo :** documentaire uniquement (êtres, pas modèles). **Mouvement :** sobre, accompagne, jamais spectaculaire. **Tempo :** largo.
- **Accessibilité :** contrastes élevés, responsive dès la conception.

## Conséquences
Tout composant (Figma puis Tailwind) hérite de ces tokens.

## Alternatives écartées
Branding PDF du Drive (bleu nuit/Caravage) — obsolète.

## Retour arrière
Non (figé). Détail : `knowledge/DESIGN.md`, `project-governance/STYLE.md`, `docs/00-CODEX/`.
