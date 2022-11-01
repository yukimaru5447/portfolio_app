import { trpc } from '../utils/trpc'

export const usePortfolio = (id: string) => {
  const { data } = trpc.portfolio.getPortfolio.useQuery({ id })

  const portfolio = data || null

  return { portfolio }
}
