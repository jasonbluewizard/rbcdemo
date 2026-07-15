# Royal BankQuest

A lightweight demo hub that links to **Questor Labs'** financial-literacy **edugames**,
built for a pitch to RBC. (Questor Labs is the educational-games studio of Blue Wizard —
[questorlabs.com](https://questorlabs.com).) Pick a game, click **Play**, and it opens in a new tab.
Designed for desktop, but it degrades gracefully on phones — any game marked
*best on desktop* shows a badge and warns mobile visitors instead of hiding.

- **No build step. No dependencies.** Just static files + a tiny Node server.
- **One file to edit:** [`games.js`](games.js) holds every game's link and details.

---

## ✏️ Add the game links (do this first)

Open [`games.js`](games.js) and, for each game, set:

```js
url: "https://your-live-game-url",   // makes the Play button live
desktopOnly: true,                   // optional: shows "Best on desktop" + warns phones
```

Until a `url` is filled in, that card shows a greyed-out **“Link coming soon”**
button, so the page still looks complete during setup.

You can also tweak each card's `blurb`, `skills`, `ageBand`, `emoji`, and
`accent` (two hex colors for the header gradient) in the same file.

---

## ▶️ Run it on Replit (→ rbcquest.com)

1. **Create the Repl:** Replit → *Create* → *Import from GitHub* →
   `jasonbluewizard/rbcdemo`.
2. **Preview:** press **Run**. The webview serves the site (`node server.js`).
3. **Publish:** open **Deploy** → choose **Static**. Set **Public directory** to
   `.` (the repo root, where `index.html` lives) → **Deploy**.
4. **Custom domain:** in the deployment's **Settings → Domains**, add
   `rbcquest.com` and point your DNS as Replit instructs (an `A` record, plus a
   `CNAME` for `www`). It’s live once DNS propagates.

> A **Static** deployment just serves the files — no server process, fastest and
> cheapest. `server.js` powers the in-editor **Run** preview and local use.

---

## 💻 Run it locally

```bash
node server.js         # → http://localhost:3000
```

No Node handy? Any static server works, e.g.:

```bash
python3 -m http.server 8000    # → http://localhost:8000
```

---

## 📁 What's in here

| File | Purpose |
|------|---------|
| `games.js` | **The catalog** — edit game links & details here. |
| `index.html` | Page structure (hero, grid, footer). |
| `styles.css` | Look & feel (responsive, light/dark). |
| `app.js` | Renders cards + the mobile "best on desktop" warning. |
| `server.js` | Zero-dependency static server (Replit + local). |
| `.replit`, `package.json` | Replit run/deploy config. |
| `assets/` | Optional logo / thumbnails (site works without them). |

---

*RBC Quest — built by [Questor Labs](https://questorlabs.com), the educational-games studio of Blue Wizard. “Make Learning Irresistible.”*
