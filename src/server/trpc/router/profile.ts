import { getProfileSchema } from '@/schema/profile'
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { t } from '../trpc'

export const ProfileRouter = t.router({
  getProfileByUserId: t.procedure
    .input(getProfileSchema)
    .query(async ({ ctx, input: { userId } }) => {
      const data = await ctx.prisma.profile.findFirst({
        where: { userId },
        select: selectProfile,
      })

      if (!data)
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'The server cannot find the requested profile.',
        })

      return data
    }),
})

const selectProfile = Prisma.validator<Prisma.ProfileSelect>()({
  firstName: true,
  firstNameKana: true,
  lastName: true,
  lastNameKana: true,
  description: true,
})
