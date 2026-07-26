---
number: "03"
title: "Unifying two apps and rebuilding the classroom, tested before a line of code"
role: "Product Designer"
roleFull: "Product Designer driving the work, reviewed by the Head of Design"
oneLiner: "Two separate apps, one new unified product, and a teacher experience rebuilt from scratch for web — de-risked with mobile and desktop prototypes so engineering could build it once, right."
change: "Two apps and a broken classroom"
impact: "one product, validated end-to-end before engineering"
order: 3
next:
  slug: "design-system"
  title: "Building the Akelius education design system"
hero:
  kind: "image"
  src: "/cases/unified-path-language.jpg"
  alt: "The unified learning-path 'mountain' screen — A1 to B2, word goals"
  caption: "The signature screen of the unified product: one clean learning path (A1→B2), polished and shipping in staged rollout."
exhibits:
  - src: "/cases/unified-path-merge.jpg"
    alt: "The learning path with course/language switcher and 'also available: math'"
    kicker: "The merge, shown not told"
    caption: "This one screen is the whole thesis: two apps become one. A course/language switcher (English, Swedish, +course) and 'also available: math' in four languages."
    size: "lg"
    tilt: -1
  - src: "/cases/unified-android.jpg"
    alt: "Flow maps, breakpoints and error/edge states, checked off before code"
    kicker: "The de-risking"
    caption: "Flows, breakpoints and error/edge states mapped and ticked before a line of code — where missing QR-login and forgot-password screens were caught in prototype, not production."
    size: "lg"
    tilt: 1.1
  - src: "/cases/classroom-current.jpg"
    alt: "The old classroom — before"
    kicker: "Before"
    caption: "The old Classroom: teachers couldn't tell what to do. This is the state I rebuilt from — shown small, on purpose."
    size: "sm"
    tilt: -1.6
  - src: "/cases/classroom-web-classes.jpg"
    alt: "The redesigned teacher classroom on web — manage classes"
    kicker: "After · web, net-new"
    caption: "The redesigned Classroom, built on web for the first time: create classes, connect students by QR, read progress — teachers are no longer lost."
    size: "lg"
    tilt: 0.8
  - src: "/cases/classroom-web-progress.jpg"
    alt: "Redesigned reports — scores chart, filters, monthly PDF"
    kicker: "After · the reports"
    caption: "Reports redesigned for a clearer read: scores over week/month/quarter, a below-threshold filter, and a monthly PDF."
    size: "md"
    tilt: -1
  - src: "/cases/classroom-mobile-classes.jpg"
    alt: "The same classroom on mobile"
    kicker: "Cross-platform handoff"
    caption: "The same Classroom at a mobile breakpoint — designed per device size, so the handoff leaves no room for a wrong guess."
    size: "sm"
    tilt: 1.4
---

## Snapshot

| | |
|---|---|
| **Role** | Product Designer driving the work, reviewed by the Head of Design |
| **Scope** | Merge the Akelius **Languages** and **Math** apps into one educational product; redesign the teacher **Classroom** from scratch for web |
| **Platforms** | iOS, Android, and Web — designed per breakpoint |
| **Status** | In active, staged rollout (a long-horizon migration, shipping step by step) |
| **Method** | Prototype-first: full mobile + desktop prototypes and user-flow testing *before* handoff |

## The problem

Akelius had **two separate apps** — Languages and Math — and the teacher **Classroom** lived as an option *inside* the Languages app. That split meant duplicated patterns, a fragmented learner journey, and a Classroom that only really existed on mobile. The goal was to converge everything into **one educational app**, and — critically — to **build the Classroom on web for the first time**, from scratch.

The old Classroom had a real usability problem: **teachers couldn't tell what to do.** Creating classes and students, using QR codes, managing connections between teacher and learner — the flow left teachers lost. Rebuilding it for web wasn't a reskin; it was a chance to fix the workflow at its root.

This is a large, high-stakes systems project — the kind where a missed screen or a wrong navigation assumption becomes expensive rebuild work in engineering. So the design job was as much about **de-risking** as about drawing screens.

## What I owned — and why the second pair of eyes mattered

I **prepared all the visions, the connections, and the flows**; the **Head of Design reviewed** them. I want to be precise about that, because it's a strength, not a caveat: on a project this size, one person *will* miss something. Deliberately building in senior review — someone to check that nothing's missing before it reaches engineering — is exactly how you avoid shipping a gap. I drove the design and I engineered the process to catch my own blind spots.

## The Classroom redesign

The Classroom is the **teacher-facing view of student progress** — where a teacher creates classes, adds students, connects them (including via QR codes), and reads reports.

The old UI was unclear: teachers didn't know how to proceed. So I:

- **Reimagined the whole workflow** — class and student creation, QR-code connection, and the teacher↔student links — so the path through the system is obvious rather than guessed.
- **Redesigned the reports** for a clearer read of how each student is doing.
- **Tested every decision with real teachers** — the measure of success was simple and human: *teachers are no longer lost, and the system has everything they need to work smoothly with students.*

Building it net-new for web meant I could design the *right* flow instead of inheriting the mobile compromises.

## De-risking: proving it before engineering touched it

The part I'm proudest of is what happened **before** handoff. I built **full mobile and desktop prototypes** and walked every navigation path, workflow and user flow — so we validated that the whole thing made sense and led to the right outcome *before* asking a developer to build anything or change anything.

That process caught real, expensive-to-miss problems, for example:

- **Missing screens** we simply hadn't thought of in a project this large — we discovered we'd left out **QR-code login** and **forgot-your-password** screens. Found in prototype, not in production.
- **Interaction ordering** — e.g. that breadcrumbs had to be removed and back buttons introduced *together*, not in sequence, or navigation would break.
- **Placement logic** — where each header belongs and which landing page shows when, resolved by testing rather than by developer guesswork mid-build.

Every one of those is a bug, a re-spec, or a sprint of rework if it's found *after* code. Finding them in a clickable prototype is the cheapest possible place to be wrong.

## Handoff: no room for mistakes

The handoff was engineered so developers couldn't misread it:

- **Designs prepared for every breakpoint**, plus a **responsive prototype** developers could stretch from the edge to see exactly how a page reflows across device sizes.
- **Everything in auto-layout**, with **components and variables bound to each padding, gap, corner and stroke** — so spacing and styling are consistent by construction, not by eyeballing.
- **Components linked back to the design system**, each carrying its own documentation, so a developer can trace any element to its source of truth.
- **Prototype connections** mapped the relationships between screens, cutting ambiguity about how the app flows together.

This is the direct payoff of Case 01: because the design system exists, this handoff *could* be this tight.

## Outcome — honestly stated

The unified app is **in staged rollout** — a large migration we're doing step by step toward the final vision, so the honest status is "in progress, over a long horizon," not "done."

There's one early, soft signal I'll frame carefully: after we **changed the path-page view**, we saw **more users in the app**. I don't have the exact numbers, so I won't dress it up — it's a directional indicator, not a measured result. If asked in an interview, I'd say precisely that, and describe how I'd instrument it properly (define the metric, baseline it, isolate the change).

The real, defensible win is the method: **a merge and a from-scratch web Classroom, validated end-to-end in prototype and handed off so engineering can build it once, correctly.**

## What I'd do next

- **Instrument the path-page change** to turn the "more users" signal into a real before/after number.
- **Continue teacher usability testing** through the staged rollout, so each shipped step is validated, not assumed.

### Evidence captured

- Classroom-2026 current-state documentation (existing teacher flows: menu, classroom server/settings, manage students, add/scan groups via QR, group management, per-student info)
- Unified education app file (web + mobile, per-breakpoint)
- Prototype-first process: mobile + desktop prototypes, full user-flow testing pre-handoff
- Handoff system: per-breakpoint layouts, responsive prototype, auto-layout + variables, design-system-linked components
