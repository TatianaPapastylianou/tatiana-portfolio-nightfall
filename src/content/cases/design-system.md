---
number: "01"
title: "Building the Akelius education design system"
role: "Design Lead"
roleFull: "Senior Product Designer — owner of the design system"
oneLiner: "I turned three disconnected app teams and a designer-vs-developer naming gap into a single token-driven design system — shared in Storybook, spoken in one language by design and code."
tag: "Design System · 2023–now"
change: "A design system that existed on paper"
impact: "became infrastructure — one language for design and code"
order: 1
next:
  slug: "math-app"
  title: "Akelius Education — shipping through three competing visions"
hero:
  kind: "image"
  src: "/cases/ds-overview.jpg"
  alt: "The Akelius design-system board — cards, method-icon states, grade-progress, the full button matrix and dev-annotated handoff"
  orient: "portrait"
  caption: "The real system on one wall: components and their states, grade-progress cards, the full button matrix, and dev-annotated handoff that links each element back to its Figma node."
exhibits:
  - src: "/cases/ds-04-buttons.jpg"
    alt: "Button component matrix — every size, state and variant"
    kicker: "The breadth"
    caption: "One component, every size × state × variant. The instant read: comprehensive and rigorous."
    orient: "landscape"
    size: "lg"
    tilt: -1.2
  - src: "/cases/ds-01-handoff-matrix.jpg"
    alt: "Handoff responsive matrix — each component across five breakpoints"
    kicker: "The rigor"
    caption: "The most senior artefact in the kit: a per-component responsive matrix across five breakpoints, so engineers can't misread the spec."
    orient: "landscape"
    size: "lg"
    tilt: 1
  - src: "/cases/ds-07-extra-library.jpg"
    alt: "The illustration and icon library"
    kicker: "System of systems · 1"
    caption: "Beyond the UI kit: a dedicated illustration & icon library — education, vocational, language and math."
    orient: "landscape"
    size: "lg"
    tilt: -0.8
  - src: "/cases/ds-08-generator.jpg"
    alt: "The Generator authoring-tool library"
    kicker: "System of systems · 2"
    caption: "A second, purpose-built system for the internal authoring tool — its own style guide, variables and editor-only components. I architected a system of systems, not one kit."
    orient: "landscape"
    size: "lg"
    tilt: 1.2
process:
  lens: "Turning a design system from a picture into infrastructure — won month by month as the new person on the team, not with one big argument."
  briefed: "A ‘design system’ already existed — a folder of finished-looking components for the Math and Languages apps."
  reframe: "It looked done but didn't connect design and engineering: designers and developers used different names — and sometimes different values — for the same token, components weren't architected to be shared, and the brand was mid-shift. The real problem wasn't drawing more components; it was building one shared language and the change management to make a team actually adopt it."
  questions:
    - "Where exactly do design and code diverge today — naming, values, or the components themselves — and which divergence is the most expensive?"
    - "Do I optimise token names for designers' comfort or for the syntax developers actually write — and can one system honestly serve both?"
    - "Which components genuinely need to differ per platform, and which are just being duplicated out of habit?"
    - "What would make using the system obviously easier than not using it — so adoption happens without a mandate I don't have?"
    - "The consumer app and the internal authoring tool are different jobs — should they share one library, or get purpose-built systems?"
  hypotheses:
    - h: "Naming tokens to match code syntax — not design-friendly names — will make the system real: the same token meaning the same thing in Figma and the repo."
      test: "Went to each engineering group — Web, Android, iOS — and aligned token naming and syntax to what developers actually write."
      learned: "Code-truth over design-comfort held. Mismatches that used to surface at build time now have a shared reference; designers gave up some naming nicety and the system became infrastructure."
    - h: "Documenting components in Storybook will turn the system from a picture into a shared, inspectable source of truth."
      test: "Pushed engineering to adopt Storybook so design and code share one inspectable reference."
      learned: "The piece I'm proudest of — it's the whole difference between a design system as a picture and as infrastructure."
    - h: "Sharing components by default and splitting only where the platform demands it will cut cost without duplication."
      test: "Shared the set across web and Android; platform-specific variants only where needed (top nav, dialog); a dedicated iOS set."
      learned: "A deliberate cost decision, not duplication — and where a few components can't be 1:1 between design and code, I documented why, so the divergence is intentional rather than a silent bug."
  path:
    - tag: "Inherited"
      move: "Components on paper"
      why: "Looked finished; design and code spoke different languages"
      outcome: "explored"
    - tag: "Step 1"
      move: "One shared token language across three platforms"
      why: "A token in Figma now maps to the variable developers write"
      outcome: "merged"
    - tag: "Step 2"
      move: "Storybook as the shared source of truth"
      why: "From a picture to inspectable infrastructure"
      outcome: "merged"
    - tag: "Now"
      move: "A system of systems — consumer kit + Generator library"
      why: "Two fit-for-purpose systems, maintained across web · iOS · Android"
      outcome: "shipped"
  tradeoff:
    chose: "Code-syntax token names, aligned across all three platforms"
    gaveUp: "Designer-friendly ‘nice’ names, and exact 1:1 parity for a few flexible Figma components"
    why: "A token has to mean the same thing in Figma and the repo; where parity was impossible I documented the divergence so it reads as a known decision, not a bug"
  measure:
    - metric: "Component-adoption rate"
      how: "Not yet instrumented — the honest next step. I'd track how often teams compose from the system versus create one-off components per release."
    - metric: "Token drift (Figma ↔ code)"
      how: "I'd add automated drift detection between Figma tokens and code tokens to catch mismatches before they reach a build."
    - metric: "Handoff turnaround"
      how: "Qualitatively faster — developers self-serve from the library. I'd measure questions routed back to design per handoff to put a number on it."
---

## Snapshot

| | |
|---|---|
| **Role** | Senior Product Designer — owner of the design system |
| **Company** | Akelius Languages & Math (educational apps) |
| **Timeframe** | ~2023–present (built step-by-step, still maintained) |
| **Platforms** | Web, iOS, Android |
| **Team** | Design team of ~3 + Web / iOS / Android engineering groups |
| **My contribution** | System architecture, token naming, component design, developer adoption, rebrand, cross-platform maintenance |
| **Platform strategy** | Shared components across web + Android; platform-specific variants only where needed (e.g. top nav, dialog); dedicated iOS set |

## The problem — a system that existed on paper, not in practice

When I joined, "the design system" was a folder of components that looked finished but didn't actually connect design and engineering:

- **No token connection.** Designers and developers used *different naming* for the same values. There was no shared vocabulary between the Figma library and the codebase.
- **Colors drifted.** In some places design and code were literally using *different colour values* for the same intended token.
- **Components weren't built to be shared.** They were drawn for design, not architected so developers could reuse the exact same building blocks. Every handoff risked a re-interpretation.
- **The brand was mid-shift.** We were moving from a dark-blue theme to a lighter-blue one, and from a white background to a soft grey — so the "source of truth" was itself moving.

The result was the quiet, expensive kind of broken: nothing was on fire, but every new screen reopened old questions, and every build risked a mismatch.

## What I owned

I wasn't handed a mandate — I built one. Specifically, I:

- **Set the shared token language.** Went to each engineering group — Web, Android, iOS — and aligned token *naming and syntax* so a token in Figma maps to the variable developers actually write in code, instead of designers keeping "nice" names on one side and `--primary-color` living unlinked on the other.
- **Pushed adoption of Storybook.** Got engineering to document components in Storybook, so design and code share one inspectable source of truth. This is the piece I'm proudest of — it's the difference between a design system as a *picture* and a design system as *infrastructure*.
- **Designed and maintained the component set** across platforms as they grew — 24 core web component families, a dedicated iOS component set, an illustration/icon library, and an editor-tooling library.
- **Carried the rebrand through the system** (dark→light blue, white→soft grey) without breaking existing surfaces.
- **Led the merge.** The system was originally built for Math and Languages as *two* products; over time I converged them into one shared foundation as the apps themselves merged.

## The hardest trade-off — one vocabulary, honestly negotiated

The real tension wasn't visual, it was social and technical: **designers wanted human-friendly token names; developers needed code-syntax names.** Two valid preferences, one system.

I chose **code-truth over design-comfort**: tokens are named so they line up with what developers write, and I aligned that syntax with all three platforms rather than letting each invent its own. Designers gave up some naming nicety; in exchange, the system became *real* — the same token means the same thing in Figma and in the repo.

I also accepted a deliberate imperfection: **a few components can't be 1:1 between design and code.** In Figma I can reuse one flexible component in ways the code implementation can't mirror exactly. Rather than dumbing the design down or over-engineering the code, I documented where and why they diverge — so the divergence is a known, intentional decision instead of a silent bug.

What made it hard wasn't the design work — it was **change management as the new person on the team.** Designers felt they "didn't have time" for the system; developers felt alignment "wasn't necessary" because they could roughly build from a mockup. I didn't win that with a big argument. I won it month by month, with patience, until using the system was obviously easier than not using it.

## What shipped

A maintained, multi-library system, not a static kit:

- **Foundations:** type primitives and text styles bound to variables, a responsive type scale (mobile → tablet → desktop), colour tokens, sizing, grid & breakpoints, logo/app-icon rules.
- **24 core component families** — badge, banner, breadcrumbs, buttons, cards, checkbox, chips, dialog, divider, expansion, footer, inputs, list, menus, navigation, notes, progress/path, radio, sheets, snackbars, switches, tabs, tables, and a custom "mountain" progress component. **Web and Android share the same components**, with **platform-specific variants only where the platform demands it** (e.g. top navigation bar, dialog) — plus a **dedicated iOS component set.** Sharing by default and splitting only when justified is a deliberate cost decision, not duplication.
- **An illustration & icon library** (education/vocational/language/math icons and character illustrations).
- **A Generator library** — a second, purpose-built system for the internal tool editors use to author course content, with its own style guide, variables and icons plus editor-specific components a consumer app never needs: drag-and-drop, file upload, floating toolbar, slide components, on-screen keyboards, tooltips and game assets. Designing *two* fit-for-purpose systems (consumer app + authoring tool) rather than forcing one library to do both jobs.
- **Governance docs that most systems skip:** explicit **naming guidelines** and **handoff guidelines**, including a per-component responsive matrix that documents how each component changes across five breakpoints (mobile, small tablet, tablet, wide tablet/laptop, desktop).
- **A custom English typeface for learning content**, extended with the extra glyphs Swedish, German and French require. *(The product UI itself uses Verdana; Noto Sans covers Arabic and Hindi. The custom face is for learning content, not chrome.)*

## Outcome — honestly stated

I didn't instrument before/after numbers, so I won't invent them. What changed is observable and defensible:

- **Design work got faster and more consistent** across all three platforms — the team now composes from the system instead of redrawing.
- **Handoff got easier.** Developers can find the design detail they need in the library and resolve it themselves, so fewer questions route back to designers.
- **Design and code finally share one source of truth** via aligned tokens + Storybook — the mismatches that used to appear at build time have a shared reference to be caught against.

*(Interview note: this is where I'd talk about how I'd add measurement next — e.g. tracking component-adoption rate, one-off components created per release, or handoff turnaround — rather than claim a percentage I never measured.)*

## What I'd do next

Instrument it. The system is mature enough that the honest next step is proving its value with data: adoption metrics, drift detection between Figma tokens and code tokens, and a lightweight contribution model so the system scales beyond me.

### Evidence captured

- Handoff guidelines page (responsive breakpoint matrix across 5 device sizes)
- Typography foundations (variable-bound type scale, responsive)
- Component library overview (24 web families + iOS set)
- Extra library (icons, illustrations, characters)
- Generator library (editor style guide, variables, and authoring-specific components)
