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
  orient: z.enum(['portrait', 'landscape']).optional(), // frame orientation (default portrait)
  size: z.enum(['lg', 'md', 'sm']).optional(),
  tilt: z.number().optional(), // museum hang angle for variety
});

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
      caption: z.string(),
    }),
    // the Head-of-Design depth: 2–3 curated framed exhibits
    exhibits: z.array(exhibit).default([]),
  }),
});

export const collections = { cases };
