import z from 'zod'

// server
export const getCertificationSchema = z.object({ userId: z.string() })
