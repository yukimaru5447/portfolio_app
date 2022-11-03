import { trpc } from '@/utils/trpc'
import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { PortfolioCard } from '@/components/organisms'

const Home: FC = () => {
  const { t } = useTranslation(['home'])
  const {
    data: portfolios,
    isLoading,
    error,
  } = trpc.portfolio.getAllPortfolios.useQuery()
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

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

  return (
    <>
      {portfolioGridRows &&
        portfolioGridRows.map((grid) => (
          <div
            key={grid.label}
            className="flex w-4/6 flex-col items-center justify-center"
          >
            <div className="w-full  text-2xl font-bold text-gray-600">
              {grid.label}
            </div>
            <div className="flex w-full justify-center">
              {grid.row.map(({ id, title }) => (
                <PortfolioCard key={id} id={id} title={title} />
              ))}
            </div>
          </div>
        ))}
    </>
  )
}

export default Home
