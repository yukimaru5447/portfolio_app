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
})

export const portfolioRouter = t.router({
  postPortfolio: authedProcedure
    .input(postPortfolioSchema)
    .mutation(async ({ ctx, input }) => {
      console.log('-----------')
      console.log(ctx, input)
      console.log('-----------')

      // const portfolio = await ctx.prisma.portfolio.create({
      //   data: {
      //     ...input,
      //     user: {
      //       connect: {
      //         id: ctx.session?.user?.id,
      //       },
      //     },
      //   },
      // })
      // return portfolio
      return {}
    }),
  getAllPortfolios: t.procedure.query(({ ctx }) => {
    return ctx.prisma.portfolio.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
  }),
  getPortfolio: t.procedure
    .input(getPortfolioSchema)
    .query(({ ctx, input }) => {
      return ctx.prisma.portfolio.findFirst({
        where: {
          id: input.id,
        },
        select: selectPortfolio,
      })
    }),
})
