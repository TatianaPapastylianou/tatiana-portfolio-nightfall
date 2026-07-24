---
number: "01"
title: "Building the Akelius education design system"
role: "Design Lead"
roleFull: "Senior Product Designer — owner of the design system"
oneLiner: "I turned three disconnected app teams and a designer-vs-developer naming gap into a single token-driven design system — shared in Storybook, spoken in one language by design and code."
change: "A design system that existed on paper"
impact: "became infrastructure — one language for design and code"
order: 1
next:
  slug: "math-app"
  title: "Akelius Math — shipping through three competing visions"
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
