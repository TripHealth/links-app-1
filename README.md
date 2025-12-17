
# Links App (Static) — GitHub Pages Ready

A minimal web app that renders a list of links loaded from `config/links.json`.

## Deploy to GitHub Pages (GUI)
1. Create a new GitHub repo (e.g., `links-app`).
2. Upload these files to the repo root and commit to `main`.
3. Repo **Settings → Pages**:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Wait ~1–2 minutes; your site will be at `https://<username>.github.io/<repo>/`.

## Edit links
Update `config/links.json` with your URLs.

## Local preview
```bash
python -m http.server 8080
# open http://localhost:8080
```
