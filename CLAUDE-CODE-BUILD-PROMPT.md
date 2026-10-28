# Master build spec — Tatiana Papastylianou portfolio

> Paste this whole file into Claude Code as the brief. Build with **live preview** and iterate visually. Sibling files in this folder are the source of truth: `case-01/02/03-*.md` (case copy), `case-visual-curation.md` (what to show per case + why), `ideas-from-monfeur.md` (craft moves), `art-direction-spec.md`, and the prototypes `framed-hero.html` / `interactive-cards.html` (the visual + interaction reference to match). Assets live in `assets/`.

---

## 0. Who this is for (drives every decision)

A **Senior Product Designer** portfolio targeting remote roles at **Fundraise Up, Wrike, Revolut, Exness**. Two judges:
- **Recruiter / HR (~20-second scan):** needs *scale, impact, "shipped," breadth* — one instant "wow" per case, legible outcomes.
- **Head of Design (deep read):** needs *decisions, rigor, systems thinking, craft, judgment* — curated process, never raw dumps.

Design goal: read as **unmistakably a senior human designer, not an AI template** — via voice, restraint, and craft in motion. But keep the **work legible and impact obvious**; atmosphere frames the work, never hides it (fintech recruiters skew conservative).

---

## 1. Design language (LOCKED — do not re-explore)

- **Base:** warm paper `#EDE4D2` (light gallery). **Dark burgundy/charcoal only for atmosphere moments** (loader, About).
- **Accent:** GOLD, used ONLY for picture frames + one accented word per statement. Never gold on buttons/links/marquee.
- **UI colour:** ink `#211913` for cursor, links, controls.
- **Type:** display = **Zodiak** (editorial serif, italics for emphasis); UI/body = **General Sans**; **product components = Verdana** (the real Akelius system font). All free (Fontshare).
- **Component tokens (from the real design system):** green on `#00a57c` / off `#e2e5e8`; primary dark blue `#172b53`; download-button bg `#d0efff`; sizes 4/8; Verdana 16–18. Use these exactly for any rebuilt component.
- **Cursor:** small ink dot by default and over UI controls; morphs to a **rounded "View case →" pill** only over case frames/links.
- **Signature motifs:** real gilded **picture frames** (see §4), a small **eye-orb** fixed top-right that (a) tracks the cursor and (b) travels down as the scroll-progress indicator; frames **sway slowly right↔left** (transform-origin top center, ~13s, ±0.8°), no nail dots.

---

## 2. Craft moves to build (from monfeur.art — the "not AI" signal)

1. **Cinematic preloader:** dark burgundy field, a live % counter, case screens sliding into gold frames (or frames assembling), then resolve into the light gallery. **≤2s, skippable.**
2. **Dark → light:** loader + About are dark/atmospheric; the working gallery is warm paper.
3. **Manifesto statement:** a large Zodiak *italic* line pulled from the book *No Water — A Designer's Confession* (author to supply the exact line). One accented word in gold.
4. **Scroll text-reveal:** each case's opening line colours in grey → ink as it scrolls into view; the key metric/verb lands in gold.
5. **Tracked uppercase kickers** on every section (`01 · DESIGN LEAD`, `THE PROBLEM`, `THE RIGOR`).
6. **Minimal case index:** right-aligned, tracked-uppercase list of the three cases + craft pieces; hovering one previews its framed screen.
7. **Ruthless restraint:** huge whitespace, faint paper texture, one gold accent, everything else ink.
8. Respect `prefers-reduced-motion` (disable sway/loader/parallax; show static composed states). Keep a normal, obvious nav in addition to any artful index.

---

## 3. Tech stack

- **Astro** (content-driven, minimal JS, renders the case markdown, easy Netlify deploy). Vite + vanilla-TS acceptable if preferred — keep it maintainable (author works in HTML/CSS/JS).
- **Motion:** GSAP + ScrollTrigger (scroll reveal, text-reveal, frame parallax); **Lenis** smooth scroll. Keep it light; everything degrades with reduced-motion.
- **Case content** from `case-*.md` via Astro content collections — author edits markdown, site updates.
- **Performance:** Lighthouse ≥90 perf, ≥95 a11y. Optimized JP/PNG only (assets already optimized in `assets/`). No heavy image libs.

---

## 4. The picture-frame pipeline (signature element)

Frames are **real Firefly-generated gilded frames**, chroma-keyed to a transparent window — NOT CSS. Pipeline already proven:
1. Generate ornate frame in Firefly with a flat green (#00FF00) center + background.
2. Chroma-key green → transparent window + transparent background (script in repo history; `assets/frames/frame-cut-web.png` is the first one).
3. Mount a **live, zoomable screen OR a live interactive panel** behind the frame's window (window rect for the current frame ≈ left 25.65%, top 22.05%, w 48.71%, h 55.99%).
- **Images must fit fully inside the opening** (object-fit contain on a mat) — never clipped by the frame.
- **Generate a DISTINCT frame per case** (museum-style variety: rectangular, oval, landscape). Reuse the flat-green trick.
- Inside frames, prefer **live interactive components** over static images where it makes sense (Marco-style — see §5).

---

## 5. Per-case build (content from case-*.md; curation from case-visual-curation.md)

Each case = **1 hero "wow" (HR) + 2–3 curated depth exhibits (Head of Design) + short captions.** Cut everything else.

### Case 01 — Design system  ✅ assets ready
- **Hero:** live interactive component panel inside a gold frame — rebuild these to the real tokens (Verdana; green `#00a57c`; etc.): the **iOS squircle toggle**, **input field** (green focus), **download button** (pill: icon + "download all" + "3.5MB", with fill/progress on click), a **segmented level control**. (Also available to rebuild live: the level/mode path background-changer, the table.)
- **Exhibits:** button component matrix (`assets/design-system/web/04-buttons.jpg`) = breadth; handoff responsive matrix (`01-handoff-matrix.jpg`) = rigor; three-libraries row (product / `07-extra-library.jpg` / `08-generator.jpg`) = systems thinking.
- **Cut as heroes:** raw colour/type sheets → fold into a live token playground (click swatch → component recolours).

### Case 02 — Akelius Math (shipped live)  ⚠️ needs clean screens
- **Hero:** ONE clean final **live** screen (math.akelius.education) — "shipped, polished" in 2s.
- **Exhibits:** a curated, **labelled strip of the 4 stakeholder directions** (Roger / Roger+Igor / math-team / design-team) = breadth + politics navigated; one **decision annotation** ("they wanted zero icons; I saved the ones that carried wayfinding").
- **Cut:** the raw dev-handoff spec collage.
- **Needed from author:** node-specific Figma URLs for the final home + a lesson screen (+ the 4-directions frame).

### Case 03 — Unified education app  ⚠️ needs redesigned screens
- **Hero:** clean **redesigned Classroom (web)** screen.
- **Exhibits:** a **user-flow / prototype-connections map** = the "tested before code" de-risking proof; one screen at **mobile → desktop** breakpoints = handoff rigor; **before → after** (old classroom collage `assets/cases/classroom-current.jpg` used *small* as "before").
- **Needed from author:** node URLs for the redesigned classroom web screen(s) + one flow/prototype frame.

### Craft spotlight (smaller framed tiles)
Column-operations slides, IrisVault (iOS, shipped), stePlan (App Store), *No Water* (book + landing). Link out where live.

---

## 6. Site structure
```
/            Loader → light hero (name + Zodiak, eye-orb, manifesto line from No Water) → case index
/work/design-system   Case 01 (framed live components + curated exhibits)
/work/math-app        Case 02
/work/unified-app     Case 03
/craft                Craft spotlight tiles
/about                Dark/atmospheric — bio, No Water, LinkedIn recommendations, contact
```
Global nav: Work · Craft · About · CV · LinkedIn. CV = `Tatiana-Papastylianou-CV.pdf`.

## 7. Accessibility & responsive (hard requirements)
Semantic landmarks, one h1/page, keyboard operable, visible gold focus rings, `prefers-reduced-motion` fully honored, AA contrast (test parchment/ink and gold pairs), fluid `clamp()` type, breakpoints mobile→desktop, frames stack on mobile, test on a real phone. Half of reviewers open on mobile.

## 8. Deploy (GitHub → Netlify)
`git init` → commit → GitHub repo → Netlify import from Git → build `npm run build`, publish `dist/` → HTTPS + custom domain. Auto-deploy on push to `main`. README: how to edit a case (markdown) + how to deploy.

## 9. Definition of done
All routes built in the locked language; loader + dark/light + manifesto + scroll text-reveal + kickers + case index all present; three cases each with 1 hero + 2–3 curated exhibits; real gold frames (distinct per case) with fitted screens / live components; eye-orb tracks cursor AND acts as scroll progress; cursor dot/pill logic; Lighthouse ≥90/≥95; deployed live; honest content only (no invented metrics; integrity fixes from the CV applied).

## 10. Asset inventory (in `assets/`)
- `frames/frame-cut-web.png` (transparent gold frame), `frame-raw.png`, `framed-colors.png`
- `design-system/web/`: 01-handoff-matrix, 02-colors, 03-typography, 04-buttons, 05-cards, 06-mountain, 07-extra-library, 08-generator (.jpg)
- `design-system/components/`: chips.png, switches.png, toggle.png, download-btn.png
- `cases/`: math-01-home, math-02-lesson, math-03-progress, classroom-current (.jpg) — NOTE: math ones are page collages; replace with clean single-frame exports (node URLs pending).
- Reference: `refs/` museum frame photos. Prototypes: `framed-hero.html`, `interactive-cards.html`. CV: `Tatiana-Papastylianou-CV.pdf/.docx`.
