---
number: "04"
title: "Three learning apps, one product"
role: "Senior Product Designer"
roleFull: "Senior Product Designer. I designed the merge and the new Classroom; the Head of Design reviewed before handoff."
oneLiner: "Languages, Math and Vocational became one app, Akelius Education, live since October 2026. I also rebuilt the teacher Classroom for web and checked every flow in a prototype before engineering started."
tag: "Product · live 2026"
change: "Three apps and a Classroom teachers got lost in"
impact: "one app on web, Android and iOS"
order: 4
next:
  slug: "ai-skills"
  title: "Turning design rules into AI skills the team uses"
hero:
  kind: "image"
  src: "/cases/unified-path-language.jpg"
  alt: "The unified learning-path 'mountain' screen, A1 to B2 with word goals"
  caption: "One learning path from A1 to B2. Live in Akelius Education."
exhibits:
  - src: "/cases/unified-path-merge.jpg"
    alt: "The learning path with course/language switcher and 'also available: math'"
    kicker: "The merge"
    caption: "Two apps in one screen: a course switcher for languages, and Math offered right next to it."
    size: "lg"
    tilt: -1
  - src: "/cases/unified-android.jpg"
    alt: "Flow maps, breakpoints and error/edge states, checked off before code"
    kicker: "Checked before code"
    caption: "Every flow, breakpoint and error state checked in a prototype before handoff. This is where the missing QR login and forgot-password screens turned up."
    size: "lg"
    tilt: 1.1
  - src: "/cases/classroom-current.jpg"
    alt: "The old classroom, before"
    kicker: "Before"
    caption: "The old Classroom, mobile only. Teachers couldn't tell what to do next."
    orient: "landscape"
    size: "sm"
    tilt: -1.6
  - src: "/cases/classroom-web-classes.jpg"
    alt: "The redesigned teacher classroom on web: manage classes"
    kicker: "After · web"
    caption: "The new Classroom, on web for the first time: create a class, connect students by QR code, read their progress."
    orient: "landscape"
    size: "lg"
    tilt: 0.8
  - src: "/cases/classroom-web-progress.jpg"
    alt: "Redesigned reports: scores chart, filters, monthly PDF"
    kicker: "After · the reports"
    caption: "Reports: scores by week, month or quarter, a filter for students below the threshold, and a monthly PDF."
    orient: "landscape"
    size: "lg"
    tilt: -1
  - src: "/cases/classroom-mobile-classes.jpg"
    alt: "The same classroom on mobile"
    kicker: "Mobile"
    caption: "The same Classroom on a phone. Every screen was drawn for each device size, so developers didn't have to guess."
    size: "sm"
    tilt: 1.4
process:
  lens: "On a big merge, the cheapest place to be wrong is a clickable prototype."
  map: "derisk"
  briefed: "Merge the Languages, Math and Vocational apps into one product, and move the teacher Classroom from the mobile Languages app to the web."
  reframe: "The old Classroom didn't need a new skin. Teachers didn't know what to do next. And on a merge this size, every screen nobody thought of becomes rework in engineering."
  questions:
    - "Is the Classroom broken in its visuals, or in the order teachers have to do things?"
    - "Which screens will we only notice are missing when someone walks the whole flow?"
    - "Where does navigation break if changes ship in the wrong order?"
  hypotheses:
    - h: "Walking every path in a full mobile and desktop prototype will surface missing screens while they are still cheap to fix."
      test: "I built clickable prototypes for mobile and desktop and walked every flow before handoff."
      learned: "Two screens were missing: QR code login and forgot password. Breadcrumbs also had to go out at the same time as back buttons came in, or navigation would break."
    - h: "Designing the Classroom for web from scratch will make the teacher's next step obvious."
      test: "I redesigned class creation, QR connection and reports, and tested the flow with teachers."
      learned: "Teachers could follow the flow without help. The web version became the base for mobile, not the other way round."
  path:
    - tag: "Before"
      move: "Three apps, and a mobile-only Classroom"
      why: "Repeated patterns and a split learner journey"
      outcome: "explored"
    - tag: "Prototype"
      move: "Mobile and desktop, every path walked"
      why: "Missing screens and wrong ordering caught here"
      outcome: "merged"
    - tag: "Handoff"
      move: "Every breakpoint, built from design system components"
      why: "Nothing left for developers to guess"
      outcome: "merged"
    - tag: "Live"
      move: "One app, Akelius Education"
      why: "Since October 2026 on web, Android and iOS"
      outcome: "shipped"
  tradeoff:
    chose: "Prototype everything before engineering starts"
    gaveUp: "A faster start on code"
    why: "A gap found after code costs a sprint. A gap found in a prototype costs an afternoon."
  measure:
    - metric: "Apps learners need"
      value: "3 → 1"
      how: "Languages, Math and Vocational in one app, live since October 2026."
    - metric: "Gaps caught before code"
      value: "2 screens"
      how: "QR code login and forgot password, found in the prototype, not in production."
    - metric: "What I'd add"
      how: "Task success for teachers on class creation, QR connection and reports, tracked after each release."
---

## Snapshot

| | |
|---|---|
| **Company** | Akelius Languages, free learning apps |
| **Role** | Senior Product Designer, reviewed by the Head of Design |
| **Scope** | Merge Languages, Math and Vocational into Akelius Education. Rebuild the teacher Classroom for web. |
| **Platforms** | Web, Android and iOS |
| **Status** | Live since October 2026 |

## The problem

Learners needed a separate app for each course. Teachers had a Classroom tucked inside the Languages app, on mobile only, and they couldn't tell what to do next.

## What I did

I designed the merged app and the new Classroom: creating classes, adding students, connecting them by QR code, and reading reports.

Before handoff, I built full prototypes for mobile and desktop and walked every path. That is where we found two missing screens and a navigation change that had to ship in one step.

Every screen was drawn for each breakpoint, in auto layout, from design system components. Developers built from the file without guessing spacing or states. That only worked because the design system from case 02 already existed.

## What I'd do differently

I'd agree on teacher task success as a metric before launch, so each release has a number to beat.
