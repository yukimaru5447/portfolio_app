import { useTranslation } from 'react-i18next'

import { trpc } from '@/utils/trpc'

const useHooks = () => {
  const { t } = useTranslation(['home'])
  const {
    data: portfolios,
    isLoading,
    error,
  } = trpc.portfolio.getAllPortfolios.useQuery()

  const portfolioGridRows = [
    {
      label: t('home:New'),
      row: portfolios,
    },
    {
      label: t('home:Attention'),
      row: portfolios,
    },
    {
      label: t('home:Recommendation'),
      row: portfolios,
    },
  ]
  return { portfolios, isLoading, error, portfolioGridRows }
}

export default useHooks
