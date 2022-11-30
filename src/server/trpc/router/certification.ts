import { getCertificationSchema } from '@/schema/certification'
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { t } from '../trpc'

export const CertificationRouter = t.router({
  getAlllCertificationByUserId: t.procedure
    .input(getCertificationSchema)
    .query(async ({ ctx, input: { userId } }) => {
      const data = await ctx.prisma.certification.findMany({
        where: { userId },
        select: selectCertification,
      })

      if (!data)
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'The server cannot find the requested profile.',
        })

      return data
    }),
})

const selectCertification = Prisma.validator<Prisma.CertificationSelect>()({
  name: true,
  startedAt: true,
})
