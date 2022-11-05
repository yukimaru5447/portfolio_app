import z from 'zod'

// client
export const postPortfolioSchema = z.object({
  title: z.string().max(35),
  description: z.string(),
  serviceUrl: z.string().url().max(100),
  githubUrl: z.string().url().max(100),
})

export type PostPortfolioInput = z.TypeOf<typeof postPortfolioSchema>

// server
export const getPortfolioSchema = z.object({
  id: z.string(),
})
