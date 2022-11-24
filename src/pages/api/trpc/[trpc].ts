// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from '@/server/trpc/app'
import { createContext } from '@/server/trpc/context'
import { env } from '@/env/server.mjs'

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError:
    env.NODE_ENV === 'development'
      ? ({ path, error }) => {
          if (error.code === 'INTERNAL_SERVER_ERROR') {
            console.error(`❌ tRPC failed on ${path}: ${error}`)
          }
          if (error.code === 'NOT_FOUND') {
            console.log('NOT_FOUND')
            console.log(error)
          }
        }
      : undefined,
})
