// src/server/trpc/router/index.ts
import { t } from '../trpc'
import { portfolioRouter } from './portfolio'

export const appRouter = t.router({
  portfolio: portfolioRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
