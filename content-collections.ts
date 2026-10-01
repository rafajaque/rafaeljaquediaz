import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
    role: z.string(),
    client: z.string(),
    order: z.number(),
    tags: z.array(z.string()),
    image: z.string(),
    liveUrl: z.string().optional(),
    content: z.string(),
  }),
})

export default defineConfig({
  collections: [projects],
})
