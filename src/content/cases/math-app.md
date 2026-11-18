---
number: "03"
title: "Akelius Math: three visions, one minimal product"
role: "Design lead on the project"
roleFull: "Design lead on the project · Senior Product Designer from May 2025"
oneLiner: "The founder, the board and the math editors wanted three different apps. I turned them into one minimal, search-first product. It now ships inside Akelius Education on web, Android and iOS."
tag: "EdTech, 0 → 1 · 2024–2026"
change: "Three conflicting directions"
impact: "one minimal product, now live in Akelius Education"
liveUrl: "https://akelius.education/"
order: 3
next:
  slug: "unified-app"
  title: "Three learning apps, one product"
hero:
  kind: "image"
  src: "/cases/math-final-lesson.jpg"
  alt: "The shipped Akelius Math lesson screen: minimal, search-first, with method icon cards"
  orient: "landscape"
  fit: "top"
  caption: "Shipped. Minimal so it reads as serious for a child and an adult: search-first navigation, and the method icons kept for wayfinding."
exhibits:
  - src: "/cases/math-final-progress.jpg"
    alt: "The shipped my-progress / learning-track screen"
    kicker: "Progress, made legible"
    status: "shipped"
    caption: "The shipped learning track. Progress is readable without illustration or extra colour, as the founder asked."
    orient: "landscape"
    size: "lg"
    fit: "top"
    tilt: 1
  - src: "/cases/math-final-mobile.jpg"
    alt: "The mobile topic picker — the surviving wayfinding icons for each subject"
    kicker: "The decision I defended"
    status: "shipped"
    caption: "The push was for zero icons. In an app with no illustration and almost no colour, I kept the few that carry wayfinding. A partial win, and the part the learner needed."
    orient: "portrait"
    size: "md"
    tilt: -1.2
  - src: "/cases/math-explore-expanded.jpg"
    alt: "An explored home-page concept — country, level, topic, activity and keyword filters over a clean field"
    kicker: "The front door"
    status: "explored"
    caption: "An explored home page: one search-first surface with filters for country, level, topic and keyword. Prototyped to test the idea, not built."
    orient: "landscape"
    size: "lg"
    fit: "top"
    tilt: -0.8



  - src: "/cases/math-curriculum.jpg"
    alt: "An explored curriculum view — the whole syllabus as a legible vertical path per level"
    kicker: "Approved, then shelved"
    status: "explored"
    caption: "The curriculum view the math editors asked for. It was rejected twice, approved on the third round, and then the editors decided it wasn't needed yet. It never reached production."
    orient: "landscape"
    size: "lg"
    fit: "top"
    tilt: -1.2
spotlight:
  kicker: "Zoom in · One lesson type"
  title: "Teaching column operations"
  intro: "From the whole product down to one lesson type: how a dense method became steps a learner can follow."
  steps:
    - step: "Problem"
      body: "The column method in the maths material is rigorous but dense. On a small screen a learner sees a wall of digits and carries, and gives up before the logic lands."
    - step: "Decision"
      body: "Teach it the way a patient tutor would. One column at a time, the carry appears exactly when it happens, and nothing is on screen that the next move doesn't need."
    - step: "Craft"
      body: "Digits sit on a strict grid. One functional accent marks the cell that just changed. Every edge case has a rule: digit limits, carries, decimals, remainders, and what scrolls when an equation is too tall."
  exhibits:
    - src: "/cases/math-column-ops-research.jpg"
      alt: "Handwritten working on squared paper: a long division with two decimals, used to define the lesson rules"
      kicker: "The rules first"
      caption: "The rules a learner never sees: digit limits, when the carry appears, how a too-tall equation scrolls, decimals and remainders. Worked out on paper before any screen."
      orient: "portrait"
      size: "md"
      fit: "top"
      tilt: 1
    - src: "/cases/math-column-ops-system.jpg"
      alt: "The developer flow for column operations: how multiplication and division work, look and behave for editors and for learners"
      kicker: "The flow for developers"
      caption: "A complete flow for developers: how column multiplication and division should work, look and behave, for the editor who builds the lesson and for the learner who solves it. Every cell has its toolbox and its rules, so any lesson is built the same way."
      orient: "landscape"
      size: "lg"
      fit: "top"
      tilt: -0.8
    - src: "/cases/math-column-ops-learner.png"
      alt: "The shipped learner screen: 57 times 9 in columns, the carry 6 above the tens, answer cells and a number keypad"
      kicker: "What the learner sees"
      status: "shipped"
      caption: "One column at a time. The carry sits above the digit it belongs to, the keypad moves between cells, and a hint is one tap away."
      orient: "landscape"
      size: "lg"
      tilt: 0.8
    - src: "/cases/math-column-ops-editor.png"
      alt: "The shipped editor view in the Generator: 54 plus 23 lined up in columns with cells and a number keypad"
      kicker: "What the editor sees"
      status: "shipped"
      caption: "The same kind of exercise in the Generator, the slide editor where lessons are built. Editors line up the numbers and set which cells the learner fills in."
      orient: "landscape"
      size: "lg"
      tilt: -1
  outcome: "Live in Akelius Education on web, Android and iOS. The rules are built into the Generator, so editors make new column operations lessons from the same system. I have no usage numbers for these lessons, so I don't claim any."
process:
  lens: "The question was never whose idea wins. It was how to turn three conflicting directions into one product a learner can use."
  map: "stakeholders"
  briefed: "Turn the Akelius Math Learning Lab's school maths material into a free app for children and teenagers, including learners in refugee camps and schools with few teachers."
  reframe: "Mid-project the audience widened from school children to any age. Three people who could each overrule the others wanted three different apps. The job was designing minimalism for a moving target, and keeping the learner in the room."
  questions:
    - "Who is this for now: a child, an adult, or both on the same screen? What has to read as serious for all of them?"
    - "When the founder, the board and the editors disagree, who is speaking for the learner? Where do I argue for the learner instead?"
    - "Which icons are decoration, and which are the only wayfinding left once illustration and colour are gone?"
  hypotheses:
    - h: "Showing each stakeholder's vision as a real screen will move the decision faster than arguing in the abstract."
      test: "Built named directions in Figma (founder, founder + board, math team, design team), each carried through to mobile."
      learned: "People reacted to real screens instead of circling. The shipped product came out of those versions."
    - h: "A minimal, search-first interface with no illustration and almost no colour can feel credible for an adult and still work for a child."
      test: "Stripped the interface to functional accents, then tested removing icons entirely."
      learned: "It works, but only if a few method icons stay. Without any icons, dense maths had no visual anchors."
  path:
    - tag: "Direction A · Founder"
      move: "No long text, no colour, search-first"
      why: "Set the discipline, but left learners with no anchors"
      outcome: "explored"
    - tag: "Direction B · + Board"
      move: "Clear app structure, some visual representation"
      why: "Added the structure pure austerity lacked. Became the base"
      outcome: "merged"
    - tag: "Direction C · Editors"
      move: "More assets, colour and interactivity"
      why: "Too busy for a serious tool for all ages"
      outcome: "dropped"
    - tag: "Shipped"
      move: "Minimal, search-first, a few wayfinding icons kept"
      why: "Serious for an adult, usable for a child. Now part of Akelius Education"
      outcome: "shipped"
  tradeoff:
    chose: "Austerity, with a small set of wayfinding icons protected"
    gaveUp: "The editors' richer, more colourful direction, and most icons"
    why: "A learning tool for all ages has to read as serious first. The icons that stayed carry wayfinding, not decoration."
  measure:
    - metric: "Live"
      value: "3 platforms"
      how: "Inside Akelius Education on web, Android and iOS since October 2026."
    - metric: "What I'd add"
      how: "Task tests across age groups for search-first navigation, and lesson completion per level as a baseline."
---

## Snapshot

| | |
|---|---|
| **Role** | Design lead on the project. Senior Product Designer from May 2025 |
| **Product** | Akelius Math, free. Now part of Akelius Education |
| **Content** | Akelius Math Learning Lab, with Chalmers and the University of Gothenburg |
| **For** | Refugee camps, schools with few teachers, any age |
| **Timeframe** | Nov 2024 – Jan 2026. Live since Oct 2026 |
| **Platforms** | Web, Android, iOS |

## How I came to it

In November 2024 I was Design Lead at Akelius Technology, and the Languages team needed help with a new maths app. One of my designers started it with my guidance. Within a few months the project was fully mine, and I moved to Akelius Languages in May 2025.

## Three people, three apps

The founder wanted no long text, no colour, and search as the main way in. The board member wanted a clear structure and some visuals. The math editors wanted more colour and interactivity. Each could overrule the others, and halfway through, the audience widened from school children to any age.

I built each direction as a real screen, through to mobile. People reacted to something concrete, and the debate stopped going in circles. When taste and learner needs differed, I argued for the learner.

## Two calls, told honestly

**Icons.** The push was to remove them all. With no illustration and almost no colour, learners would have had nothing to hold on to. I kept the few that carry wayfinding. A partial win.

**The curriculum page.** Rejected twice, approved on the third round, then shelved by the editors before production. Lesson: log each decision and its reason when it's made, so a reversal is visible.

## Outcome

Akelius Math is free and runs inside Akelius Education on web, Android and iOS. I have no measured outcome numbers, so I don't claim any.
