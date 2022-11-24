// src/server/trpc/router/index.ts
import { t } from './trpc'
import * as router from './router'

export const appRouter = t.router({
  ...router,
})

// export type definition of API
export type AppRouter = typeof appRouter
