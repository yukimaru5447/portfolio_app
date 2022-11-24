import { t, authedProcedure } from '../trpc'
import {
  getPortfolioSchema,
  postPortfolioSchema,
} from '../../../schema/portfolio'
import { Prisma } from '@prisma/client'

// selectに型を付与
// https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#generated-types-for-select
const selectPortfolio = Prisma.validator<Prisma.PortfolioSelect>()({
  title: true,
  description: true,
  serviceUrl: true,
  githubUrl: true,
  isPublished: true,
})

export const portfolioRouter = t.router({
  postPortfolio: authedProcedure
    .input(postPortfolioSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.portfolio.create({
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      })
    }),
  getAllPortfolios: t.procedure.query(({ ctx }) => {
    return ctx.prisma.portfolio.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  }),
  getPortfolio: t.procedure
    .input(getPortfolioSchema)
    .query(({ ctx, input: { id } }) => {
      return ctx.prisma.portfolio.findFirst({
        where: {
          id,
        },
        select: selectPortfolio,
      })
    }),
})
