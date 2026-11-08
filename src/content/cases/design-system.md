---
number: "02"
title: "Building the Akelius education design system"
role: "Senior Product Designer"
roleFull: "Senior Product Designer, owner of the design system"
oneLiner: "Design and code used different names, and sometimes different values, for the same thing. I aligned the tokens with three engineering teams, brought Storybook in, and now maintain one system across web, Android and iOS."
tag: "Design System · 2025–now"
change: "A design system that existed on paper"
impact: "became infrastructure: one language for design and code"
order: 2
next:
  slug: "math-app"
  title: "Akelius Math: three visions, one minimal product"
hero:
  kind: "image"
  src: "/cases/ds-overview.jpg"
  alt: "The Akelius design-system board — cards, method-icon states, grade-progress, the full button matrix and dev-annotated handoff"
  orient: "portrait"
  caption: "The system on one wall: components and their states, grade-progress cards, the full button matrix, and handoff notes that link each element to its Figma node."
exhibits:
  - src: "/cases/ds-04-buttons.jpg"
    alt: "Button component matrix — every size, state and variant"
    kicker: "The breadth"
    caption: "One component in every size, state and variant."
    orient: "landscape"
    size: "lg"
    tilt: -1.2
  - src: "/cases/ds-01-handoff-matrix.jpg"
    alt: "Handoff responsive matrix — each component across five breakpoints"
    kicker: "The rigor"
    caption: "A responsive matrix per component across five breakpoints, so engineers don't have to guess how it reflows."
    orient: "landscape"
    size: "lg"
    tilt: 1
  - src: "/cases/ds-07-extra-library.jpg"
    alt: "The illustration and icon library"
    kicker: "System of systems · 1"
    caption: "A separate illustration and icon library for languages, math and vocational courses."
    orient: "landscape"
    size: "lg"
    tilt: -0.8
  - src: "/cases/ds-08-generator.jpg"
    alt: "The Generator authoring-tool library"
    kicker: "System of systems · 2"
    caption: "A second system for the Generator, the tool editors use to build lessons. It has its own style guide, variables and editor-only components."
    orient: "landscape"
    size: "lg"
    tilt: 1.2
process:
  lens: "The components existed. The connection between design and code did not. The work was building that connection and getting two groups to use it."
  briefed: "A design system already existed: a Figma folder of finished-looking components for the Math and Languages apps."
  reframe: "Designers and developers used different names, and sometimes different values, for the same token. Components were drawn, not built to be shared. The brand was also changing. The problem was not missing components. It was the missing shared language, and a team that had no reason yet to adopt one."
  questions:
    - "Where do design and code actually diverge: names, values, or the components themselves? Which one costs the most?"
    - "Should token names suit designers or match what developers write?"
    - "Which components really need to differ per platform, and which are duplicated out of habit?"
    - "What would make using the system easier than not using it, without a mandate?"
    - "The learner app and the internal authoring tool do different jobs. One library or two?"
  hypotheses:
    - h: "If token names match code syntax, the same token will mean the same thing in Figma and in the repo."
      test: "Met each engineering group (web, Android, iOS) and aligned token names and syntax with what they write."
      learned: "It held. Designers lost some friendly names. In return, a mismatch now has one shared reference to be checked against."
    - h: "If components live in Storybook, designers can review a build against the Figma library instead of against a screenshot."
      test: "Brought Storybook to the team and showed developers how to build by component."
      learned: "This is the part I am proudest of. It is the difference between a system as a picture and a system as infrastructure."
    - h: "Sharing components by default, and splitting only where a platform demands it, saves work without hidden duplication."
      test: "Web and Android share one set. Platform variants only where needed (top navigation, dialog). iOS gets its own set."
      learned: "Where a component can't match 1:1 between Figma and code, I wrote down why. The difference is a known decision, not a bug."
  path:
    - tag: "Inherited"
      move: "Components in Figma only"
      why: "Looked finished, but design and code used different names"
      outcome: "explored"
    - tag: "Step 1"
      move: "One token language across web, Android and iOS"
      why: "A Figma token maps to the variable a developer writes"
      outcome: "merged"
    - tag: "Step 2"
      move: "Storybook as the shared reference"
      why: "Builds are reviewed against the library, component by component"
      outcome: "merged"
    - tag: "Now"
      move: "Four libraries: core, iOS, Generator, icons"
      why: "Maintained as the three apps merged into Akelius Education"
      outcome: "shipped"
  tradeoff:
    chose: "Token names that follow code syntax, the same on all three platforms"
    gaveUp: "Designer-friendly names, and exact 1:1 parity for a few flexible Figma components"
    why: "A token has to mean the same thing in Figma and in the repo. Where parity was impossible, the difference is documented."
  measure:
    - metric: "Component adoption"
      how: "Not measured yet. I'd track how often teams build from the library versus creating one-off components per release."
    - metric: "Token drift between Figma and code"
      how: "I'd add an automated check that compares Figma variables with code tokens before a build."
    - metric: "Questions back to design per handoff"
      how: "Developers now find answers in the library themselves. I'd count questions per handoff to put a number on it."
---

## Snapshot

| | |
|---|---|
| **Role** | Senior Product Designer, owner of the design system |
| **Company** | Akelius Languages & Math, free learning apps |
| **Timeframe** | May 2025 – now, maintained continuously |
| **Platforms** | Web, Android, iOS |
| **Worked with** | Head of Design, designers, web, Android and iOS engineering |
| **My part** | Token naming, component design, Storybook adoption, rebrand, four libraries |
| **Before this** | Maintained the Technology design system in Figma and Storybook, 2023–2025 |

## The problem

The design system looked finished. It did not connect design and code.

Designers and developers used different names for the same values. In some places they used different colour values for the same token.

Components were drawn for design, not built so developers could reuse the same pieces. Every handoff risked a new interpretation.

The brand was also moving: from dark blue to a lighter blue, and from a white background to a soft grey.

Nothing was on fire. But every new screen reopened old questions, and every build risked a mismatch.

## What I did

**Aligned the token language.** I met each engineering group, web, Android and iOS, and matched token names and syntax to what developers write in code.

**Brought Storybook to the team.** I showed developers how to structure work by component. Designers can now review a build against the Figma library.

**Designed and maintained the components** as the apps grew: 24 core families, a dedicated iOS set, an icon library and a Generator library.

**Carried the rebrand through the system** without breaking live screens.

**Merged the foundations.** The system started as two products, Math and Languages. It became one foundation as the apps merged into Akelius Education.

## The hard trade-off

Designers wanted friendly token names. Developers needed names that match code.

I chose code. Tokens follow the syntax developers write, and the syntax is the same on all three platforms.

Designers gave up some comfort. In return, a token means the same thing in Figma and in the repo.

I also accepted one imperfection. A few flexible Figma components can't be mirrored exactly in code.

I didn't simplify the design or over-build the code. I documented where and why they differ.

## Adoption, month by month

The harder part was people, not pixels.

Designers felt they had no time for the system. Developers felt alignment wasn't necessary because they could build roughly from a mockup.

There was no big argument that won it. I kept going, month by month, until using the system was easier than not using it.

## What shipped

**Foundations.** Type primitives and text styles bound to variables, a responsive type scale, colour tokens, sizing, grid and breakpoints, logo and app icon rules.

**24 core component families,** shared by web and Android: badge, banner, breadcrumbs, buttons, cards, checkbox, chips, dialog, divider, expansion, footer, inputs, list, menus, navigation, notes, progress path, radio, sheets, snackbars, switches, tabs, tables, and a custom "mountain" progress component. Platform variants exist only where needed, such as the top navigation bar and the dialog.

**A dedicated iOS component set.**

**An illustration and icon library** for languages, math and vocational courses.

**A Generator library.** The Generator is the internal tool editors use to build lessons. Its library has its own style guide, variables and icons, plus components a learner app never needs: drag and drop, file upload, a floating toolbar, slide components, on-screen keyboards and game assets.

**Naming and handoff guidelines,** including a responsive matrix that shows how each component changes across five breakpoints.

**The Akelius handwritten typeface** for learning content. I designed it in FontForge with OpenType substitutions and MathJax math size families (Size1 to Size4), and extend it as new languages launch. The app interface uses Verdana, with Noto Sans for Arabic and Hindi.

## Outcome

I didn't measure before and after, so there are no percentages here.

What changed is visible:

- The team builds screens from the system instead of redrawing them, on all three platforms.
- Developers find design details in the library themselves, so fewer questions come back to designers.
- Tokens and Storybook give design and code one reference, so mismatches are caught against it.
- The system carried the merge of Languages, Math and Vocational into one app, Akelius Education, live since October 2026.

## What I'd do next

Measure it. Adoption rate, an automated token drift check, and a simple contribution model so the system doesn't depend on one person.
