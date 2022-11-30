import { getEducationSchema } from '@/schema/education'
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { t } from '../trpc'

export const EducationRouter = t.router({
  getAlllEducationByUserId: t.procedure
    .input(getEducationSchema)
    .query(async ({ ctx, input: { userId } }) => {
      const data = await ctx.prisma.education.findMany({
        where: { userId },
        select: selectEducation,
      })

      if (!data)
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'The server cannot find the requested profile.',
        })

      return data
    }),
})

const selectEducation = Prisma.validator<Prisma.EducationSelect>()({
  name: true,
  startedAt: true,
  endedAt: true,
  description: true,
})
