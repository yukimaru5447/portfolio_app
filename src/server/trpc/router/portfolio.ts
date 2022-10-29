import { t, authedProcedure } from '../trpc'
import { postPortfolioSchema } from '../../../schema/portfolio'

export const portfolioRouter = t.router({
  postPortfolio: authedProcedure
    .input(postPortfolioSchema)
    .mutation(async ({ ctx, input }) => {
      const portfolio = await ctx.prisma.portfolio.create({
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      })
      return portfolio
    }),
  getAllPortfolios: t.procedure.query(({ ctx }) => {
    return ctx.prisma.portfolio.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
  }),
})
