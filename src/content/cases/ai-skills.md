---
number: "05"
title: "Turning design rules into AI skills the team uses"
role: "Senior Product Designer"
roleFull: "Senior Product Designer, author and maintainer of the skills"
oneLiner: "Akelius rules for writing, design and handoff lived in documents. I turned them into seven AI skills that the design team, content staff, Android developers and the CEO use."
tag: "AI workflows · 2026"
change: "Rules in documents, an app drifting from its designs"
impact: "7 AI skills, used by four groups"
order: 5
next:
  slug: "real-estate"
  title: "From 23 real estate apps to 4 products"
hero:
  kind: "image"
  src: "/cases/ai-skills-hero.svg"
  alt: "Seven AI skills: two foundations, clean-your-text and akelius-design, with five working skills on top, used by the design team, content and marketing, Android developers and the CEO of Akelius Languages"
  orient: "landscape"
  caption: "Two skills hold the rules, five do the work on top of them. The Android review follows both, so its tickets use the house wording and the real tokens."
exhibits:
  - src: "/cases/ai-review-compact.jpg"
    alt: "Figma review page for the languages screen at compact size: the live Android app next to two designed frames, with numbered review markers and yellow spacing chips"
    kicker: "Review page · compact size"
    status: "shipped"
    caption: "The live app, captured from the emulator, next to the design. Numbered markers point to each change, and bands show the spacing in both directions."
    orient: "landscape"
    size: "lg"
    tilt: -0.6
  - src: "/cases/ai-review-tickets.jpg"
    alt: "Nine Jira tickets for the languages page in Figma, grouped by component and sorted by priority: 4 high, 4 medium, 1 low"
    kicker: "Nine tickets cover 26 changes"
    status: "shipped"
    caption: "Each ticket is one piece of work: the component, the value to set, the value measured today and when it counts as done. Code file names are blurred here."
    orient: "landscape"
    size: "lg"
    tilt: 0.8
drawings:
  - src: "/cases/ai-skills-review-flow.svg"
    kicker: "One Android screen review"
    caption: "Four sources in, three outputs out. The skill decides for each part where the fix belongs: the screen, the code component or the library."
process:
  lens: "Write the rules once, as tools people and AI both run, so the standard holds without me in the room."
  briefed: "House rules for writing, file names and the design system lived in documents. The Android app had drifted from the designs, and checking the whole app by hand would take one to two months."
  reframe: "A rule people have to remember gets skipped. A rule built into the tool they already use gets followed. So I wrote each rule set once, as a skill, and made the design review produce tickets developers can pick up without asking me."
  questions:
    - "Which rules get broken most, and by whom?"
    - "What does a developer need in a ticket to fix it without a meeting?"
    - "Does the fix belong in the screen, the code component or the library?"
    - "How do the skills stay correct when a rule changes?"
  path:
    - tag: "Foundations"
      move: "Two rule skills"
      why: "clean-your-text and akelius-design: the editing method and the design system, as rules and real tokens"
      outcome: "shipped"
    - tag: "Handoff"
      move: "Three spec skills"
      why: "Designer docs, developer specs and Figma spec frames, in one format"
      outcome: "shipped"
    - tag: "Review, first pattern"
      move: "Welcome page"
      why: "13 changes, 5 tickets. Set the review page and ticket format"
      outcome: "merged"
    - tag: "Review, current pattern"
      move: "Languages page"
      why: "26 changes, 9 tickets. Compared per component, with live captures at all three sizes"
      outcome: "shipped"
    - tag: "Sharing"
      move: "Four groups"
      why: "Design, content, Android and management. I update the skills when people report a rule should work differently"
      outcome: "shipped"
  tradeoff:
    chose: "Live captures at all three window sizes before any review is called done"
    gaveUp: "Faster reviews built from code values and design files alone"
    why: "Wrapping, clipping and real text heights only show on screen. A review without them misses the bugs people actually see."
  measure:
    - metric: "Full app review"
      value: "~2 wks"
      how: "With the skill. By hand, I estimate one to two months. Estimate, not tracked."
    - metric: "Languages page"
      value: "26 → 9"
      how: "26 changes in 6 component groups became 9 tickets. 4 high, 4 medium, 1 low."
    - metric: "Welcome page"
      value: "13 → 5"
      how: "13 changes became 5 tickets. 3 high, 7 medium and 3 low changes."
    - metric: "Groups using the skills"
      value: "4"
      how: "The design team, content and marketing staff, Android developers and the CEO of Akelius Languages."
    - metric: "Fixes live"
      value: "Yes"
      how: "Some review tickets are already fixed in the live Android app."
    - metric: "What I'd add"
      how: "Time per review and the share of tickets fixed, tracked from the first review."
---

## Snapshot

| | |
|---|---|
| **Company** | Akelius Languages, free learning apps for children and adults |
| **Role** | Senior Product Designer, author and maintainer of the skills |
| **Skills** | 7: clean-your-text, akelius-design, android-screen-review, dev-handoff-spec, component-spec, akelius-measurement-spec, akelius-renaming-files |
| **Users** | Design team, content and marketing staff, Android developers, CEO of Akelius Languages |
| **Tools** | Claude skills, Figma, Android Studio and adb, Jira |
| **Time** | 2026, ongoing |

## Summary

Akelius had clear rules for writing, file names and design. They lived in documents.

I turned them into seven AI skills. Two hold the rules, and five do the work on top of them.

The biggest one reviews the Android app against Figma and the code, and hands developers tickets they can build from. A full app review takes about two weeks with it. By hand I estimate one to two months.

## Rules in documents, an app drifting from its designs

The Akelius editing method dates from 2018. The file naming convention came in 2024 and 2025. The design system lives in Figma libraries.

Each was clear on paper. In daily work, people had to remember them.

On Android, the app had drifted from the designs. Some differences came from one screen. Others came from shared components and app-wide logic, so the same bug showed up on many screens.

## Two foundations, five working skills

**clean-your-text** holds the Akelius writing method: no colon, fewer words, facts instead of opinions. It works for docs, emails, decks, UI copy and specs.

**akelius-design** holds the design system as rules and real tokens. Colours, type, spacing, components, illustration, motion, accessibility and product rules for learners.

The working skills build on them. The Android review follows both, the naming skill follows clean-your-text, and the measurement spec follows akelius-design. When a rule changes, I change the foundation.

- **android-screen-review** compares the live app with Figma, the library and the code, and writes the tickets.
- **dev-handoff-spec** writes build specs for developers: parts, sizing, tokens, states and edge cases.
- **component-spec** writes component docs for designers: variants, states, usage rules and accessibility.
- **akelius-measurement-spec** builds spec frames in the Figma library, with anatomy and measurements.
- **akelius-renaming-files** names files by one convention, so anyone can find them.

## How one Android screen review works

One screen per run. Four sources go in.

1. The live app, captured from the emulator at compact, medium and expanded window sizes.
2. The Figma design: every component, text style and layout rule.
3. The component library: variants, tokens and text styles.
4. The Android code: components, tokens and the size class logic.

The skill compares them per component, not per screen. For each difference it decides where the fix belongs: the screen, the code component or the library.

Three things come out. A review page in Figma with live and designed images side by side. Jira tickets grouped by component and sorted by priority. And a CSV, so the tickets go into Jira in one import.

Each ticket names the value to set, the value measured today and when it counts as done.

## What it found that a screenshot never would

**Tablets in landscape got the wrong layout.** The app picked its layout from the shortest side of the screen, not the width. A 1280 by 800 window got the medium layout instead of the expanded one. The fix touches every screen that reads the size class.

**Every button had the same size on every device.** The size was set once for all window sizes, in both branches of the same condition.

**The library disagreed with itself.** Text size variables and text styles gave different values. I decided the text styles win, and the tickets follow that.

**Text boxes rendered taller than the type scale.** A card title measured 26 high against a line height of 21 on phones.

None of these show up when you lay a screenshot over a design. They show up when you read the code, the library and the live app together.

## Keeping the skills right

A skill is only useful while it's correct.

Each review ends with lessons, and new rules go back into the skill. Examples: measure spacing in both directions, and name every screen that uses a shared component before proposing to change it.

When colleagues report that something should work differently, I update the skill and share the new version.

## What changed

- 7 skills, used by four groups: the design team, content and marketing staff, Android developers and the CEO of Akelius Languages.
- A full app review takes about two weeks instead of an estimated one to two months by hand.
- The languages page review found 26 changes and turned them into 9 tickets.
- The welcome page review found 13 changes and turned them into 5 tickets.
- Some fixes from the review tickets are already live in the Android app.
- Writing, file names and specs follow one standard, whoever writes them.

## What I'd do differently

I'd track two numbers from the first review: hours per review and the share of tickets fixed.

The two weeks against one to two months is my estimate. A tracked number would make the gain easier to prove.
