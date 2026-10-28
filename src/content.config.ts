import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The three case studies. Edit the markdown files in src/content/cases/ and the
// site updates. Frontmatter drives the plaque, the framed hero, and the curated
// visual exhibits; the body renders as the readable case narrative (the deep read).
const exhibit = z.object({
  src: z.string(), // /cases/… (files in public/cases)
  alt: z.string(),
  kicker: z.string(), // tracked-uppercase label, e.g. "THE BREADTH"
  caption: z.string(), // one honest line on why this exhibit earns its place
  status: z.enum(['shipped', 'explored']).optional(), // small honesty tag: shipped/live vs an explored-but-unbuilt study
  orient: z.enum(['portrait', 'landscape']).optional(), // frame orientation (default portrait)
  size: z.enum(['lg', 'md', 'sm']).optional(),
  tilt: z.number().optional(), // museum hang angle for variety
  fit: z.enum(['contain', 'top']).optional(), // 'top' fills the window width and pins to the top (crops the bottom)
});

// The visible "thinking" layer: how the problem was framed, the questions asked,
// the hypotheses tested, the decision path (A→B→C), the trade-off, and measurement.
// Author-editable per case; renders above the long prose placard.
const hypothesis = z.object({
  h: z.string(), // the bet / hypothesis
  test: z.string(), // how it was tested
  learned: z.string(), // what came back
});
const pathStep = z.object({
  tag: z.string(), // e.g. "Direction A · Founder"
  move: z.string(), // the move made
  why: z.string(), // why we moved on / what survived
  outcome: z.enum(['dropped', 'merged', 'shipped', 'explored']).optional(),
});
const measureRow = z.object({
  metric: z.string(), // what is (or would be) measured
  value: z.string().optional(), // the observed number/result, if any
  how: z.string(), // how it was observed / how I'd instrument it properly
});
const process = z
  .object({
    lens: z.string().optional(), // one-line framing of the senior move
    briefed: z.string(), // the problem as it was handed to me
    reframe: z.string(), // the problem once I'd reframed it
    questions: z.array(z.string()).default([]), // the questions I asked before deciding
    hypotheses: z.array(hypothesis).default([]),
    path: z.array(pathStep).default([]), // the decision path, in order
    tradeoff: z
      .object({ chose: z.string(), gaveUp: z.string(), why: z.string() })
      .optional(),
    measure: z.array(measureRow).default([]),
    map: z.enum(['stakeholders', 'derisk']).optional(), // optional inline diagram
  })
  .optional();

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    number: z.string(), // "01"
    title: z.string(),
    role: z.string(), // short plaque label, e.g. "Design Lead"
    roleFull: z.string(), // full role line for the snapshot hero
    oneLiner: z.string(),
    tag: z.string().optional(), // "Category · year" for the work index, e.g. "Design System · 2023"
    change: z.string(), // the "[change]" half of the case title discipline
    impact: z.string(), // the "impact" half
    liveUrl: z.string().url().optional(),
    order: z.number(),
    next: z.object({ slug: z.string(), title: z.string() }),
    // the HR "wow": one framed hero (a live component panel or a clean screen)
    hero: z.object({
      kind: z.enum(['live', 'image']).default('image'),
      src: z.string().optional(),
      alt: z.string().optional(),
      orient: z.enum(['portrait', 'landscape']).optional(),
      fit: z.enum(['contain', 'top']).optional(),
      caption: z.string(),
    }),
    // the Head-of-Design depth: 2–3 curated framed exhibits
    exhibits: z.array(exhibit).default([]),
    // the visible reasoning layer (problem → questions → hypotheses → path → trade-off → measure)
    process,
  }),
});

export const collections = { cases };
