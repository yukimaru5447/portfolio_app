import z from 'zod'

// server
export const getExperienceSchema = z.object({ userId: z.string() })
