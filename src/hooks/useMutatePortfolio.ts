import { trpc } from '../utils/trpc'

export const useMutatePortfolio = () => {
  const utils = trpc.useContext()

  const postPortfolioMutation = trpc.portfolio.postPortfolio.useMutation({
    onSuccess: (res) => {
      const previousPortfolios = utils.portfolio.getAllPortfolios.getData()
      if (previousPortfolios) {
        utils.portfolio.getAllPortfolios.setData([res, ...previousPortfolios])
      }
    },
  })

  return { postPortfolioMutation }
}
