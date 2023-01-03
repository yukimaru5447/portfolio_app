import z from 'zod'

// server
export const getHistorySchema = z.object({ userId: z.string() })
