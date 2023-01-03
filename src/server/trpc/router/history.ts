import { getHistorySchema } from '@/schema/history'
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { t } from '../trpc'

export const HistoryRouter = t.router({
  getAlllHistoryByUserId: t.procedure
    .input(getHistorySchema)
    .query(async ({ ctx, input: { userId } }) => {
      const data = await ctx.prisma.history.findMany({
        where: { userId },
        select: selectHistory,
      })

      if (!data)
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'The server cannot find the requested profile.',
        })

      return data
    }),
})

const selectHistory = Prisma.validator<Prisma.HistorySelect>()({
  name: true,
  startedAt: true,
  endedAt: true,
  description: true,
})
