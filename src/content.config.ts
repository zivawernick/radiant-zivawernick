// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      role: z.string().default('Project Creator'),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      order: z.number().int().default(999),
      thumbnail: image().optional(),
      heroBanner: image().optional(),
    }),
})

// 4. Export a single `collections` object to register you collection(s)
export const collections = { projects }
