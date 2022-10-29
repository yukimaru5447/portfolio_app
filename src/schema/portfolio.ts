import z from 'zod'

export const postPortfolioSchema = z.object({
  title: z.string().max(35),
  description: z.string(),
  serviceUrl: z.string().max(100),
  githubUrl: z.string().max(100),
})

export type PostPortfolioInput = z.TypeOf<typeof postPortfolioSchema>
