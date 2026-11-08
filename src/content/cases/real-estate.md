---
number: "01"
title: "From 23 real estate apps to 4 products"
role: "Design Lead"
roleFull: "Design Lead and Product Owner, team of three designers"
oneLiner: "I was asked to merge three apps. I mapped all 23 and rebuilt the suite around the tenancy and the people doing each job."
tag: "Information architecture · 2023–2025"
change: "23 apps, one tenancy split across them"
impact: "4 products along one tenancy"
order: 1
next:
  slug: "design-system"
  title: "Building the Akelius education design system"
hero:
  kind: "image"
  src: "/cases/realestate-hero.svg"
  alt: "23 small app tiles converging into 4 products: Customer Management, Maintenance, My Pages and Investment"
  orient: "landscape"
  caption: "23 apps and services became 4 products. Two were shut down, and one stayed a separate tool for managers."
drawings:
  - src: "/cases/realestate-before.svg"
    kicker: "Before · the map that changed the brief"
    caption: "Every app and service, sorted by tenancy stage. Apps followed departments, and data was copied between them instead of shared."
  - src: "/cases/realestate-after.svg"
    kicker: "After · 4 products along one tenancy"
    caption: "One product per group of people doing the work. One shared user backend underneath, and the rest cut or turned into features."
  - src: "/cases/realestate-roles.svg"
    kicker: "Switch roles, not apps"
    caption: "Property and letting managers share Customer Management. Changing your role changes your tools, while navigation and data exist once."
  - src: "/cases/realestate-tenant-technician.svg"
    kicker: "Tenant to technician"
    caption: "A request in My Pages goes straight to the maintenance app. The tenant answers access questions up front, so the technician doesn't have to call back."
process:
  lens: "Information architecture at suite scale: map the whole system before redesigning any part of it."
  briefed: "Merge three apps."
  reframe: "Apps followed departments, not the people doing the work. Several did overlapping jobs, each with its own copy of the same data. Merging three would have moved the problem around, so I proposed rebuilding the suite around the tenancy and around who does each job."
  questions:
    - "Who uses each of the 23 apps and services?"
    - "Which job does each one do?"
    - "What data does it own?"
    - "Where does that data go next?"
  path:
    - tag: "The brief"
      move: "Merge three apps"
      why: "Would have shifted the overlap, not removed it"
      outcome: "dropped"
    - tag: "The map"
      move: "All 23 apps mapped by user, job and data"
      why: "Showed apps built around departments, with duplicated data"
      outcome: "explored"
    - tag: "Phase one"
      move: "One hub app with shared tasks"
      why: "Inspection, Inventory, Letting and Case management in one place, on the existing design system"
      outcome: "shipped"
    - tag: "Later phases"
      move: "Apps merged into the hub one at a time"
      why: "Each step shipped on its own, so risk stayed small"
      outcome: "merged"
    - tag: "Result"
      move: "4 products along one tenancy"
      why: "Each dev team owns one clear product"
      outcome: "shipped"
  tradeoff:
    chose: "A hub app first, then merging apps one at a time"
    gaveUp: "One big release of the whole new suite"
    why: "Staff got one entry point fast and engineering risk stayed low"
  measure:
    - metric: "Apps per tenancy"
      value: "8 → 1"
      how: "For a property manager. Team estimate, with no tracked baseline."
    - metric: "Days to work alone"
      value: "8 → 3"
      how: "Onboarding for new staff. Team estimate."
    - metric: "Inspection time"
      value: "−25%"
      how: "About 25% less, estimated. An inspection took around 45 to 60 minutes before. Redesigned questions, a progress bar, photos, comments and saved drafts made the difference."
    - metric: "Tenants on My Pages"
      value: "~1,000"
      how: "Onboarded in the first month, and the number kept growing."
    - metric: "Staff using it daily"
      value: "~200"
      how: "Across seven countries, on web and mobile."
    - metric: "What I'd add"
      how: "A measured baseline before phase one: task time and support volume, tracked rather than estimated."
---

## Snapshot

| | |
|---|---|
| **Company** | Akelius Technology, residential real estate |
| **Role** | Design Lead and Product Owner, team of three designers |
| **Engineering** | 4 dev teams of 5 to 6 people |
| **Time** | 2023 to 2025, in stages |
| **Users** | Around 200 staff daily, plus tenants in My Pages |
| **Markets** | Sweden, Germany, UK, France, Canada, US, Cyprus |
| **Platforms** | Web, mobile friendly for field staff |

## Summary

I was asked to merge three apps.

I mapped all 23 and proposed a bigger change: rebuild the suite around the tenancy and around who does each job.

We shipped it in stages over two years. 23 apps became 4 products, two were shut down, and one stayed a separate tool for managers.

## One tenancy meant jumping between apps

Letting, inspection, repairs and rent each lived in a separate app.

- Property managers switched apps to finish one tenancy.
- Apps sent data to each other instead of sharing it, so records drifted out of sync.
- Each dev team owned several apps and couldn't tell what to fix first.
- Selling 23 apps to other property companies looked complicated.

## The brief was three apps, the problem was all 23

Before designing anything, I mapped every app and service.

For each one I noted who uses it, which job it does, what data it owns and where that data goes.

The map showed two things. Apps followed departments, not the people doing the work. And several apps did overlapping jobs, each with its own copy of the same data.

So I proposed organising the suite by tenancy stage and by role: property managers, letting managers, technicians, tenants and the investment team.

## Five decisions that shaped it

**1. Hub first, merges later.** Phase one put Inspection, Inventory, Letting and Case management into one app with shared tasks, on the existing design system. Staff got one entry point fast and engineering risk stayed low. Then we merged apps one at a time.

**2. Switch roles, not apps.** Property and letting managers share Customer Management, and changing your role changes your tools. Navigation and data exist once.

**3. Inspection moved into Customer Management.** The same person usually inspects and manages a property. Now they fix issues while inspecting, from one data source.

**4. Tenants reach technicians directly.** A request in My Pages goes to the maintenance app. The tenant answers access questions up front, like permission to enter or pets, so the technician doesn't have to call back.

**5. Cut some apps, turn others into features.** Energy and Smart Buildings were decommissioned, and Staff stayed a separate tool for managers. Message Dispatcher and Document Generator became features of Customer Management, for emailing a whole building or single tenants and for producing contracts. User Service became the shared user backend for Customer Management, My Pages and the maintenance app. Dictionary Service now translates the websites.

## What changed

- 23 apps became 4 products. Two were decommissioned, one stayed separate for managers.
- A property manager went from 8 apps per tenancy to 1.
- Onboarding for new staff, until working alone, dropped from 8 days to 3.
- Inspections took about 25% less time, thanks to redesigned questions, a progress bar, photos, comments and saved drafts.
- Fewer support requests about the tools.
- Around 200 staff in seven countries used the new tools daily.
- Around 1,000 tenants joined My Pages in the first month, and the number kept growing.
- Four dev teams of 5 to 6 people each owned one clear product.
- The sales pitch went from 23 apps to 4.

## What I'd do differently

I'd set a measured baseline before phase one.

Our before numbers come from team estimates, not tracking. An inspection took around 45 to 60 minutes, a tenancy needed 8 apps, and onboarding took 8 days.

Measured data would have made the gains easier to prove and the business case stronger. Adoption and feedback won people over inside the company. Data would have won them over faster.
