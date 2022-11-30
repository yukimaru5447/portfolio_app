import z from 'zod'

// server
export const getEducationSchema = z.object({ userId: z.string() })
