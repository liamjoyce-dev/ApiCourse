
# Create & Sell APIs — Course Website

A simple static website for the 9-module course **Create and Sell APIs: From Idea to Income**.

## Structure
- `index.html` — landing page and module directory
- `modules/` — individual module pages (`*.html`)
- `downloads/` — Word documents for each module (`*.docx`)
- `styles.css` — site styles
- `script.js` — theme toggle and module search
- `modules.json` — module metadata (title, path, summary)

## Local Preview
Open `index.html` in your browser, or use a simple local server:

- **Python 3**: `python -m http.server 8000` then visit http://localhost:8000

## Deploy to GitHub Pages
1. Create a new GitHub repo (e.g., `create-and-sell-apis`).
2. Upload the contents of this folder (or push via git).
3. In GitHub, go to **Settings → Pages**.
4. Under **Branch**, select `main` (or `master`) and the `/ (root)` folder.
5. Click **Save**. Your site will be published at `https://<username>.github.io/<repo>/`.

## Customizations
- Update module content in `modules/*.html`.
- Adjust metadata in `modules.json`.
- Replace styles in `styles.css` to match your brand.
