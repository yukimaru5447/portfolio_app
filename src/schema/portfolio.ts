import z from 'zod'

// client
export const postPortfolioSchema = z.object({
  title: z
    .string()
    .max(35, { message: 'タイトルは35文字以内です' })
    .min(1, { message: 'タイトルが入力されていません' }),
  description: z.string().min(1),
  serviceUrl: z.string().url({ message: '無効なURLです' }).max(100).min(1),
  githubUrl: z.string().url({ message: '無効なURLです' }).max(100).min(1),
})

export type PostPortfolioInput = z.infer<typeof postPortfolioSchema>

// server
export const getPortfolioSchema = z.object({
  id: z.string(),
})
