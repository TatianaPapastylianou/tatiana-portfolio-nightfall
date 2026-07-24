import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The three case studies. Edit the markdown files in src/content/cases/ and the
// site updates — frontmatter drives the hero/plaque, the body renders as the
// museum-placard case narrative.
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    number: z.string(), // "01"
    title: z.string(),
    role: z.string(), // short plaque label, e.g. "Design Lead"
    roleFull: z.string(), // full role line for the snapshot hero
    oneLiner: z.string(),
    change: z.string(), // the "[change]" half of the case title discipline
    impact: z.string(), // the "impact" half
    liveUrl: z.string().url().optional(),
    order: z.number(),
    next: z.object({ slug: z.string(), title: z.string() }),
  }),
});

export const collections = { cases };
