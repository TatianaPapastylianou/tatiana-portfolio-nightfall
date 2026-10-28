# Portfolio review — two lenses + change plan

_Reviewed October 2026, against the live build (home · work · craft · about · a case page), reading every screen and all case text._

This is honest, not flattering. The craft is genuinely high — a distinctive warm‑paper gallery, real gilded frames, a cinematic loader, live product components, honest case writing. The gaps below are about **what a reviewer sees in the first 20 seconds**, **where your proof is hidden**, and **how clearly the site shows you _think_, not just style.**

---

## PART 1 — Reviewed as a senior HR / Head of Talent hiring a Senior or Lead Product Designer

**How this person reads a portfolio:** 20–40 seconds on the home screen, scanning for signal (title, shipped proof, scale, credibility). If signal is strong, they deep‑read one case and the About page. They are pattern‑matching for *risk* — anything that reads junior, unfinished, or inflated — and for *proof* — things that are undeniably real.

### Verdict
- **Recruiter screen: PASS.** Clear senior title, a live shipped product, design‑systems depth, named recommendations. You get past the screen.
- **Hiring‑manager deep read: INTERVIEW‑WORTHY.** Three real cases with decisions and rigor, a published book, shipped side apps. Shortlist material.
- **The leak:** your single strongest *instant* credibility signals — **two apps live on the App Store and a published book** — are buried at the bottom of a secondary page (Craft). A 20‑second scanner never sees them. You're hiding your best evidence.

### What's working — keep, don't touch
1. **The concept is distinctive and executed.** The gallery metaphor is memorable and the craft backs it up. This alone separates you from 90% of portfolios.
2. **"Shipped, live, free, worldwide."** The magic word *shipped* + a real URL (math.akelius.education) is your biggest asset. Lead with it harder.
3. **Honest‑by‑design voice.** The "explored vs shipped" labels and the "I won't invent metrics" lines read as *senior*, not evasive. Protect this.
4. **Named recommendations** (CEO, direct manager, senior engineer). Real social proof.

### What costs you — fix, in priority order

1. **Your proof is hidden. (Highest leverage.)**
   Two App Store apps + a book are the fastest "this person actually ships" signal a recruiter can get — and they sit below a full column‑operations spotlight on the Craft page. **Surface them above the fold on the home page** as a compact "Shipped & published" proof strip: App Store badges, the book, the live product. This is the single biggest change.

2. **Ludus is missing entirely.**
   A newly‑shipped App Store app is fresh, dateable proof of momentum ("still shipping in 2026"). It needs to appear in the proof strip and Craft — but *honestly*, which means I need its real details (see the questions at the end).

3. **Blank‑on‑scroll first impression (perceived performance).**
   On a normal‑speed scroll, several sections render as empty parchment for a beat — the reveal‑on‑scroll animation plus heavy 1.1 MB frame PNGs that lazy‑load. I caught the hero exhibit and the impact row blank mid‑scroll. For a 20‑second scanner, "blank = broken = next candidate." Fixes: (a) make `.reveal` fail *visible* if the observer hasn't fired within ~1s / on fast scroll; (b) compress/convert the frame PNGs to WebP and preload the first one; (c) never let an above‑the‑fold block depend on scroll to appear.

4. **Above the fold under‑sells the headline facts.**
   The hero is beautiful but abstract ("I build the systems behind serious products"). A recruiter wants the *facts* fast: Senior/Lead Product Designer · shipped a live global edtech product · design system across web/iOS/Android · 2 App Store apps · published author. Add a tight, scannable credibility line or chip row near the hero.

5. **One company (Akelius) for all professional experience.**
   Reads as narrow breadth. Mitigate by *framing* Akelius as three distinct arenas (B2B real‑estate tools → 0→1 edtech → design systems at scale) and by leaning the side‑ships (apps, book) harder as independent range. You already have the material; make the framing explicit.

6. **Contact friction / CTA.**
   The only "hire me" moment is the dark About page footer. Add a persistent, low‑key CTA (email / CV / LinkedIn) that's reachable without hunting, and make the CV link unmissable.

### Copy‑paste prompts — HR‑lens changes

> **Prompt H1 — Home‑page proof strip (highest priority).**
> "On the home page, directly under the hero (before the manifesto section), add a compact 'Shipped & published' proof band in the locked warm‑paper gallery language. It must show, as small framed/badge items a recruiter sees in the first scroll: the live product (math.akelius.education), both App Store apps (IrisVault, stePlan, + Ludus once details are provided) with 'Download on the App Store' badges, and the book No Water. Keep it one quiet, confident row — gold reserved for frames only, all UI ink. Each item links out. This is instant credibility proof, not decoration."

> **Prompt H2 — Hero credibility line.**
> "Add a scannable credibility line or small ink chip row near the home hero stating the facts a recruiter needs in 10 seconds: Senior / Lead Product Designer · shipped a live global edtech product · design system across web·iOS·Android · 3 App Store apps · published author. Match the locked type system; no gold on the chips."

> **Prompt H3 — Fix blank‑on‑scroll.**
> "Audit the reveal‑on‑scroll behaviour in src/scripts/motion.js. Guarantee content is never stuck invisible: if the IntersectionObserver hasn't revealed a `.reveal` element within ~900ms or the user scrolls fast past it, force it visible. Ensure no above‑the‑fold block depends on scroll to appear. Then convert the frame PNGs in public/frames/ to WebP, compress them, and preload the first hero frame so the hero never flashes empty."

> **Prompt H4 — Persistent CTA + CV prominence.**
> "Add a quiet persistent contact affordance (email · CV · LinkedIn) reachable from every page without scrolling to the About footer, in the locked language. Make the CV download visually unmissable in the nav."

---

## PART 2 — Reviewed as a Senior / Lead Product Designer at Revolut or Exness

**How this person reads a portfolio:** they skip the surface and hunt for *thinking*. Can you frame an ambiguous problem? What did you *not* build, and why? What did you measure, or how would you? Can you hold systems at scale and defend tradeoffs under pressure? At Revolut (fast, metric‑obsessed, high‑ambiguity fintech) and Exness (complex corporate systems, high‑fidelity craft) the UI being pretty is table stakes — they're testing judgement and rigor.

### The honest read
Your *writing* already shows strong thinking — the three‑stakeholder synthesis, the defended icon decision, the curriculum cut you lost, the de‑risking‑before‑engineering method. **The problem is it's locked in long prose "placards."** A senior reviewer scanning for process sees walls of text, not a legible thinking trail. The site shows *outcomes and style* well and *process* poorly — which is exactly backwards for this audience.

### What's missing for this audience

1. **The thinking isn't visual or scannable.** There are no artifacts that *show* the reasoning: no problem‑framing panel, no "the questions I asked before deciding," no hypothesis → test → result, no option A→B→C exploration with the rationale for the move, no decision log, no tradeoff table. It's all narrated. Senior reviewers want to *see* the reasoning structure in seconds.

2. **No explicit problem‑definition → reframe.** You jump from "the brief" to "what I did." The senior signal is the *reframe*: here's what they asked for, here's the real problem underneath, here's why I redefined it. Make that a first‑class, visible step.

3. **Exploration shown as outcomes, not as a decision path.** The math case has gorgeous "explored vs shipped" screens — but they're presented as a gallery, not as *a reasoning sequence*: "we tried A because we hypothesised X; it failed on Y; so we moved to B." Turn the exploration strip into a visible decision path.

4. **Measurement maturity is asserted, not demonstrated.** "I'd instrument it next" is the right instinct but appears as a sentence. For Revolut especially (metrics culture), show a small, concrete **measurement plan** artifact per case: the metric, the baseline, the instrumentation, the decision it would inform. That converts a gap into a strength.

5. **Interaction / fidelity craft isn't proven in motion.** Exness JD‑language leans on high‑fidelity and prototyping; Revolut on polish. You *say* you built clickable prototypes and responsive handoff — but the site shows static framed screens. Add 1–2 short motion/interaction proofs (a prototype clip, a micro‑interaction, the responsive reflow you describe) so fidelity is *seen*.

6. **Fintech/complex‑systems framing is implicit.** Neither Revolut nor Exness cares that it's edtech — they care that you handle complex, high‑stakes, multi‑stakeholder systems with real constraints. Name that transferable spine explicitly: "complex B2B/enterprise systems, conversion, design systems, de‑risking engineering." Your real‑estate B2B tools map almost word‑for‑word to Exness's JD — surface that, don't bury it in the book.

### What already meets their bar — surface it harder
- Token‑language negotiation across three platforms + Storybook adoption = real systems seniority.
- Holding three conflicting executives and still shipping = rare senior signal.
- De‑risking a large migration in prototype before engineering = the CFO‑friendly, cost‑aware narrative both companies reward.

### Copy‑paste prompts — designer‑lens changes

> **Prompt D1 — Add a visible "thinking" layer to each case.**
> "For each case in src/content/cases/, add a structured, scannable thinking section rendered *above* the long prose placard, driven by case frontmatter so it stays author‑editable. Sections: (1) The problem as briefed → the problem reframed; (2) The questions I asked before deciding (3–5 real questions); (3) Hypotheses → what I tested → what I learned; (4) The decision & the tradeoff (what I gave up and why); (5) How I'd measure it (metric · baseline · instrumentation · decision it informs). Design it in the locked gallery language as a clean editorial 'decision sheet,' not boxes‑with‑borders clutter. Extend content.config.ts with the new frontmatter and keep existing prose intact."

> **Prompt D2 — Turn the math exploration strip into a decision path.**
> "On the Akelius Math case, convert the 'explored vs shipped' exhibits into a visible decision path: present them as an ordered sequence of moves — 'direction A (founder: austerity) → tension → direction B (board: structured clarity) → what survived to shipped' — with one line per move explaining the hypothesis and why we moved on. Keep the honest shipped/explored tags. The reader should see the *reasoning*, not just the screens."

> **Prompt D3 — Generate the missing process artifacts.**
> "Where a case references a process artifact that isn't shown, generate a clean, on‑brand diagram as an inline SVG or framed exhibit: for Case 03, a user‑flow map / before‑after of the Classroom flow and the 'missing screens caught in prototype' (QR‑login, forgot‑password); for Case 02, a stakeholder‑tension map (founder ↔ board ↔ editors, learner as the fourth) and the search‑first navigation model. Match the warm‑paper palette, ink line work, gold only as an accent. These must illustrate the real reasoning described in the case text, nothing invented."

> **Prompt D4 — Prove fidelity in motion.**
> "Add 1–2 short interaction proofs to the strongest case: a looping prototype clip or a CSS/JS micro‑interaction showing the responsive reflow and a real product interaction described in the handoff section. Keep it reduced‑motion aware and lightweight. The goal is to let a senior reviewer *see* high‑fidelity craft, not just read that it exists."

> **Prompt D5 — Transferable‑spine framing for fintech/complex‑systems roles.**
> "Add a short, honest framing line (home and/or About) positioning the transferable spine for complex‑systems/fintech reviewers: complex multi‑stakeholder B2B/enterprise systems, conversion, design systems at scale, and de‑risking engineering — without claiming fintech domain experience. Reference the real‑estate B2B tooling as the enterprise‑systems proof point."

---

## PART 3 — The specific builds you asked for

1. **Add Ludus** to the proof strip + Craft, honestly — needs real details (see questions).
2. **Make apps + book prominent** — Prompt H1 (home proof strip) is the core of this.
3. **Show the thinking** — Prompts D1–D3 are the core of this; I'll generate wireframes/diagrams/prototypes as needed in the locked language.
4. All of it lands on branch `portfolio-upgrades-2026` for your review before merge to main.

### What I need from you before building (can't invent — this site is honest‑by‑design)
- **Ludus:** App Store URL, the one‑line "what it is / who it's for," and whether you have an icon + 1–2 screenshots (or should I pull them from the App Store listing?). What's your design role on it?
- **Scope of the case‑thinking rework:** go deep on **one exemplar case first** (recommended: Math — your strongest story) so you can react to the pattern before I apply it to all three? Or build all three at once?
- **Metrics:** the CV mentions ~40% retention / ~15% satisfaction while the cases say numbers weren't instrumented. Which do you want to stand behind on the site?
