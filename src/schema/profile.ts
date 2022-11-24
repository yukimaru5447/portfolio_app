import z from 'zod'

// server
export const getProfileSchema = z.object({ userId: z.string() })
