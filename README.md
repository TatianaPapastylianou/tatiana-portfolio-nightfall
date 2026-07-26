# Tatiana Papastylianou — Portfolio

A senior product-design portfolio built as **a warm-paper gallery**: the work hangs in real gilded picture frames on a light parchment wall, gold is reserved for the frames and one accented word, and every control is ink. Two atmosphere moments go dark — the cinematic **loader** and the **/about** room. The signature line, from the author's book *No Water — A Designer's Confession*: **a portfolio sells judgement, not screens.**

Built with **[Astro](https://astro.build)** · GSAP + Lenis for motion (all reduced-motion aware). Type is **Zodiak** (display) + **General Sans** (UI/body) via Fontshare, with **Verdana** for the live product components (the real Akelius system font). Ships to **Netlify** from **GitHub**.

Signature elements: real Firefly-generated gold frames (`public/frames/frame-cut-web.png`), a live interactive component panel (the actual toggle/input/download/segmented control on the real design-system tokens), an **eye-orb** that tracks the cursor and doubles as the scroll-progress indicator, a custom cursor that morphs from an ink dot to a "View case →" pill over frames, a manifesto statement, scroll text-reveal, and tracked kickers.

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

Open a file and edit the text — the page updates on the next build. The top block (between the `---` lines) is the **frontmatter**. Alongside the plaque fields it drives the **framed hero** and the **curated exhibits**:

```yaml
---
number: "01"                       # the numeral in the label
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
hero:                              # the HR "wow" at the top of the case
  kind: "image"                    # "image" (a clean screen) or "live" (the component panel)
  src: "/cases/math-final-lesson.jpg"
  alt: "…"
  caption: "One honest line on why this is the hero."
exhibits:                          # 2–3 curated depth exhibits, each in its own frame
  - src: "/cases/…jpg"             # a file in public/cases/
    alt: "…"
    kicker: "THE RIGOR"            # tracked-uppercase label
    caption: "Why this exhibit earns its place."
    size: "lg"                     # lg | md | sm (frame scale)
    tilt: -1.2                     # museum hang angle, degrees
---
```

Everything **below** the frontmatter is the case body (Problem, What I owned, etc.). It renders on the readable card placard. Keep the honest tone — no invented metrics.

**To add an exhibit image:** drop the file into `public/cases/` and reference it as `/cases/your-file.jpg` in an `exhibits:` entry.

### Other content

- **Home manifesto / hero copy:** `src/pages/index.astro`.
- **Craft page** side-pieces (IrisVault, stePlan, No Water): edit the `pieces` array at the top of `src/pages/craft.astro`. Add an `href:` to link a tile out (a `piece` with no `href` shows a "Live link coming soon" note).
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
- `prefers-reduced-motion: reduce` disables the loader, frame sway, smooth scroll, parallax, the custom cursor and reveals — the composed page shows immediately.
- The custom cursor and eye-orb pointer-tracking are enhancement only (fine-pointer devices); the site is fully usable and readable without them.
- The loader is ≤2s, skippable, and plays once per session.
- Fonts load from Fontshare (Zodiak + General Sans) with `preconnect`; the product components use system Verdana (no download).
- AA contrast: ink on warm paper, and the deep-gold accent (`--gold-deep #7E611F`) for accent words and kicker numerals.

---

## Project structure

```
src/
  content/cases/      the three case Markdown files (edit these)
  content.config.ts   case frontmatter schema (plaque + hero + exhibits)
  layouts/Base.astro  <head>, fonts, chrome, nav, footer, motion wiring
  components/
    Nav, Footer        site chrome
    SiteChrome.astro   custom cursor + eye-orb
    Loader.astro       cinematic preloader (home only)
    Frame.astro        the reusable gilded picture frame
    LiveComponents.astro  the live Akelius component panel
    CaseCard.astro     framed case card on the home gallery
  pages/
    index.astro        home — hero + manifesto + case index + framed cases
    work/[...slug]     case pages (framed hero + exhibits + markdown placard)
    craft.astro        craft spotlight + framed side-pieces
    about.astro        the dark atmosphere room + No Water
    404.astro
  scripts/motion.js    Lenis + GSAP reveals (reduced-motion aware)
  styles/              tokens.css (light + dark-atmosphere), global.css
public/
  frames/             the transparent gold frame PNG
  cases/              case exhibit screens + design-system images
  Tatiana-Papastylianou-CV.pdf, favicon.svg
```
