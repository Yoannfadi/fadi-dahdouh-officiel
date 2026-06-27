# Workflow — Mode Batch & Règles d'autorisation

**Statut :** norme du projet (validée 2026-06-27). S'applique à toute la production design/Figma et aux opérations fichiers/Git.
**But :** réduire au minimum les interruptions et les demandes d'autorisation, sans relâcher la sécurité.

---

## 1. Le workflow par lots (batch mode)

Toujours dans cet ordre, en **regroupant au maximum** les appels d'outils indépendants dans un même message :

1. **Planifier** entièrement avant d'exécuter.
2. **Préparer** toutes les opérations.
3. **Télécharger** tout en une fois (un seul `Bash` multi-`curl`).
4. **Vérifier les images** en une seule passe (télécharger d'abord *toutes* les captures, puis les lire).
5. **Modifier Figma** en **un seul appel `use_figma`** (toutes les modifs ensemble) avant toute vérification.
6. **Capturer** tous les rendus en une passe, **vérifier** en une passe, puis **présenter**.

**À éviter :** les boucles unitaires « télécharger → valider → vérifier → valider → recapturer → valider ».

**Règles pratiques :**
- Plusieurs captures → on les télécharge **toutes** avant d'analyser.
- Plusieurs modifs Figma → on les applique **toutes** avant de vérifier le rendu.
- Plusieurs vérifications → **une seule passe**.

---

## 2. Philosophie d'autorisation

| Catégorie | Politique |
|---|---|
| **Lectures récurrentes** (captures, images, fichiers projet, Git lecture) | **Auto-autorisées** (allowlist) |
| **Suppression / déplacement / écrasement de fichiers** (`rm`, `mv`, `cp`) | **Validation manuelle obligatoire** |
| **Modifications irréversibles · suppression de ressources** | **Validation manuelle obligatoire** |
| **Git en écriture** (`commit`, `push`, `merge`, `rebase`, `reset`, `clean`…) | **Validation manuelle obligatoire** |
| **Actions externes** (upload, déploiement, envoi) | **Validation manuelle obligatoire** |

> Règle d'or : tout ce qui **modifie un état** (disque, dépôt, service distant) passe par une validation humaine. Tout ce qui **lit** peut être groupé et automatisé.

---

## 3. Allowlist utilisée (à recréer)

Fichier : `<projet>/.claude/settings.local.json`

```json
{
  "permissions": {
    "allow": [
      "Read(//private/tmp/**)",
      "Read(//Users/<user>/.claude/**)",
      "Read(//Users/<user>/Desktop/**)",
      "Read(//Users/<user>/GitHub/**)",
      "mcp__<FIGMA_SERVER_ID>__*",
      "Bash(curl:*)",
      "Bash(python3:*)",
      "Bash(sips:*)",
      "Bash(ls:*)",
      "Bash(find:*)",
      "Bash(wc:*)",
      "Bash(awk:*)",
      "Bash(mkdir:*)",
      "Bash(git status:*)",
      "Bash(git diff:*)",
      "Bash(git log:*)",
      "Bash(git show:*)",
      "Bash(git branch:*)"
    ]
  }
}
```

**Volontairement absents** (donc toujours soumis à validation) : `Bash(rm:*)`, `Bash(mv:*)`, `Bash(cp:*)`, `Bash(git commit:*)`, `Bash(git push:*)`, et tout outil d'écriture/upload externe.

---

## 4. Recréer sur une autre machine ou un autre dépôt

1. Créer `<projet>/.claude/settings.local.json` avec le bloc ci-dessus.
2. Remplacer `<user>` par le nom d'utilisateur local, et adapter les chemins `Read(...)` aux dossiers réellement utilisés.
3. Remplacer `<FIGMA_SERVER_ID>` par l'identifiant du serveur MCP Figma **de cette machine/connexion** (il est propre à l'installation ; le récupérer via la liste des serveurs MCP — ici il valait `3bcc2997-a95d-4234-ac36-9a6e457fe8a2`). Les autres serveurs MCP suivent la même nomenclature `mcp__<id>__<outil>`.
4. `settings.local.json` est **local** (non versionné) : ne pas le committer s'il contient des identifiants spécifiques à la machine.
5. Conserver la **politique §2** : ne jamais auto-autoriser les opérations destructives ou Git en écriture.

---

## 5. Pourquoi ce mode

- **Moins d'interruptions** = un flux de création continu, sans casser le fil.
- **Sécurité préservée** : la frontière lecture (auto) / écriture (manuelle) reste nette et explicite.
- **Reproductible** : tout repose sur un seul fichier de settings + cette doc.
