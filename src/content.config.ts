import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Live URLs preserve filename case (Hexo filename_case: 0), e.g.
// /ReSharper-7-EAP-in-Visual-Studio-11/ — the default generateId would
// lowercase these via github-slugger and silently break URLs.
const casePreservingGlob = (base: string) =>
  glob({
    pattern: '**/*.md',
    base,
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  });

const aliasField = z
  .union([z.string(), z.array(z.string())])
  .optional()
  .transform((a) => (a === undefined ? [] : Array.isArray(a) ? a : [a]));

const posts = defineCollection({
  loader: casePreservingGlob('./src/content/posts'),
  schema: z.object({
    title: z.string(),
    // handles both '2018-03-26' and '2016-11-17 10:17:49'
    date: z.coerce.date(),
    // Hexo default_category mapped empty categories to 'Other'
    categories: z
      .array(z.string())
      .default([])
      .transform((c) => c[0] ?? 'Other'),
    // tolerate nulls from trailing commas in flow sequences
    tags: z
      .array(z.string().nullish())
      .default([])
      .transform((t) => t.filter((x): x is string => !!x)),
    alias: aliasField,
    permalink: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: casePreservingGlob('./src/content/pages'),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    alias: aliasField,
  }),
});

export const collections = { posts, pages };
