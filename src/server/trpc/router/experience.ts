import { getExperienceSchema } from '@/schema/experience'
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { t } from '../trpc'

export const ExperienceRouter = t.router({
  getAlllExperienceByUserId: t.procedure
    .input(getExperienceSchema)
    .query(async ({ ctx, input: { userId } }) => {
      const data = await ctx.prisma.education.findMany({
        where: { userId },
        select: selectExperience,
      })

      if (!data)
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'The server cannot find the requested profile.',
        })

      return data
    }),
})

const selectExperience = Prisma.validator<Prisma.ExperienceSelect>()({
  name: true,
  startedAt: true,
  endedAt: true,
  description: true,
})
