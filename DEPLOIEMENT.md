# Déploiement — GitHub + Vercel

Guide pas à pas. Compte GitHub visé : **Yoannfadi** · Dépôt : **fadi-dahdouh-officiel**.

---

## 1. Préparer le projet en local

1. Dézippez `fadi-dahdouh-officiel.zip`.
2. Dans un terminal, placez-vous dans le dossier :
   ```bash
   cd fadi-dahdouh-officiel
   npm install
   npm run dev      # vérifiez http://localhost:3000
   ```

## 2. Créer le dépôt GitHub

### Option A — via le site (recommandé, aucun outil à installer)
1. Connectez-vous au compte **Yoannfadi** sur https://github.com.
2. Allez sur **https://github.com/new**.
3. Renseignez :
   - **Repository name** : `fadi-dahdouh-officiel`
   - **Description** : `Site officiel de Fadi Dahdouh — Ostéopathe de la voix · Vocalosteo®`
   - Visibilité : **Private** (ou Public).
   - **NE PAS** cocher « Add a README » / .gitignore / license (le projet en contient déjà).
4. Cliquez **Create repository**.

### Pousser le code (depuis le dossier du projet)
```bash
git init
git add -A
git commit -m "Initial commit — site officiel Fadi Dahdouh (Next.js)"
git branch -M main
git remote add origin https://github.com/Yoannfadi/fadi-dahdouh-officiel.git
git push -u origin main
```
> GitHub demandera vos identifiants. Utilisez un **Personal Access Token** (Settings → Developer settings → Tokens) comme mot de passe si besoin.

## 3. Déployer sur Vercel

1. Connectez-vous sur https://vercel.com avec le compte GitHub **Yoannfadi**.
2. **Add New… → Project**.
3. Si Vercel ne voit pas le dépôt : **Adjust GitHub App Permissions** → autorisez **uniquement** `fadi-dahdouh-officiel` (ou « All repositories »).
4. Sélectionnez `fadi-dahdouh-officiel` → **Import**.
5. Vercel détecte **Next.js** automatiquement. Laissez les réglages par défaut :
   - Framework Preset : **Next.js**
   - Build Command : `next build` (auto)
   - Output : (auto)
6. Cliquez **Deploy**. Attendez la fin du build (~1–2 min).
7. Vercel fournit une URL `https://fadi-dahdouh-officiel.vercel.app`.

## 4. Après le premier déploiement

- **Domaine** : Project → Settings → Domains → ajoutez `fadidahdouh.com` / `www.fadidahdouh.com` et suivez les instructions DNS.
- Mettez à jour `site.url` dans `lib/content.js` avec le domaine final, puis `git push` (Vercel redéploie automatiquement).

## 5. Vérifications post-déploiement

- [ ] Les 8 pages s'ouvrent (Accueil, Vocalosteo®, Ostéopathie de la voix, Conférences, Médias, Écosystème, À propos, Contact).
- [ ] Le menu mobile fonctionne (burger).
- [ ] `https://…/sitemap.xml` et `https://…/robots.txt` répondent.
- [ ] L'aperçu de partage (Open Graph) s'affiche (testez sur https://www.opengraph.xyz).
- [ ] Le formulaire de contact ouvre bien la messagerie.

## Mises à jour futures
Chaque `git push` sur `main` redéclenche automatiquement un déploiement Vercel. Aucune manipulation supplémentaire.
