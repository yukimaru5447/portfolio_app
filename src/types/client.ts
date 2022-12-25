import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { AppRouter } from '@/server/trpc/app'
type RouterInput = inferRouterInputs<AppRouter>
type RouterOutput = inferRouterOutputs<AppRouter>
type PostPortfolioInput = RouterInput['portfolio']['postPortfolio']
type PostPortfolioOutput = RouterOutput['portfolio']['postPortfolio']
