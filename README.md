# Tatiana Papastylianou — Portfolio

An award-level personal portfolio for a Senior Product Designer. Art direction: **“Nightfall Gallery”** — an old-master museum at night, where the work hangs in gold frames and the personality glows in the corners. The `/about` page goes fuller (**“Storybook Noir”**) into the dark-dreamy world.

Built with **[Astro](https://astro.build)** · GSAP + Lenis for motion · a hand-written WebGL shader hero. No character/photo assets — all atmosphere is CSS / SVG / shader. Ships to **Netlify** from **GitHub**.

---

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
```

```bash
npm run build      # outputs static site to dist/
npm run preview    # preview the production build
```

Requires Node 18+ (Node 20 recommended, matching Netlify).

---

## Editing content — you don’t need a developer

### The three case studies

Each case is a Markdown file in **`src/content/cases/`**:

| File | Page |
|---|---|
| `design-system.md` | `/work/design-system` |
| `math-app.md` | `/work/math-app` |
| `unified-app.md` | `/work/unified-app` |

Open a file and edit the text — the page updates on the next build. The top block (between the `---` lines) is the **frontmatter** that drives the hero and the plaque:

```yaml
---
number: "01"                       # the numeral in the frame + label
title: "Building the …"            # the big case title
role: "Design Lead"                # short label on the home card
roleFull: "Senior Product Designer — owner of the design system"
oneLiner: "…"                      # the summary line
change: "A design system on paper" # the "[change] → impact" hero discipline
impact: "became infrastructure"
liveUrl: "https://…"               # optional — shows a "live product" button
order: 1                           # order on the home page
next:                              # the "next case" link at the foot
  slug: "math-app"
  title: "…"
---
```

Everything **below** the frontmatter is the case body (Problem, What I owned, etc.). It renders on the readable parchment placard. Keep the honest tone — no invented metrics.

### Other content

- **Craft page** side-pieces (IrisVault, stePlan, No Water): edit the `pieces` array at the top of `src/pages/craft.astro`. Uncomment/add a `url:` to link a tile out.
- **About recommendations:** edit the `recommendations` array at the top of `src/pages/about.astro`. Paste each colleague’s real LinkedIn recommendation into its `quote:` field and it renders in place of the placeholder.
- **CV:** replace `public/Tatiana-Papastylianou-CV.pdf` with an updated file (same name) and the nav/footer links keep working.
- **Design tokens** (colours, type, spacing): `src/styles/tokens.css`.

---

## Deploy (GitHub → Netlify)

This repo is already wired for Netlify via `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20

**Every push to `main` auto-deploys.** To ship a change: edit the Markdown/content, commit, and push — Netlify rebuilds automatically.

```bash
git add -A
git commit -m "Update case copy"
git push
```

First-time setup (already done for this project): create the GitHub repo, push `main`, then in Netlify → *Add new site → Import from Git* → pick the repo. Netlify reads `netlify.toml`, so no manual build settings are needed.

---

## Accessibility & performance notes

- Semantic landmarks, one `<h1>` per page, logical heading order, visible **gold focus states**, a skip link.
- `prefers-reduced-motion: reduce` disables the shader animation, smooth scroll, parallax and reveals — content shows immediately.
- The WebGL hero has a static CSS-gradient fallback (no-WebGL and reduced-motion safe) and pauses when off-screen or the tab is hidden.
- Fonts are self-hosted (`@fontsource-variable`) — no external font requests.
- AA contrast: dark gallery surfaces + parchment case placards, checked against gold/aqua/rose pairs.

---

## Project structure

```
src/
  content/cases/      the three case Markdown files (edit these)
  content.config.ts   case frontmatter schema
  layouts/Base.astro  <head>, nav, footer, motion wiring
  components/         Nav, Footer, ShaderHero, CaseCard
  pages/
    index.astro       home — shader hero + framed cases
    work/[...slug]    case pages (rendered from Markdown)
    craft.astro       craft spotlight + side-pieces
    about.astro       the Storybook-Noir world
    404.astro
  scripts/motion.js   Lenis + GSAP (reduced-motion aware)
  styles/             tokens.css, global.css
public/               CV pdf, favicon
```
