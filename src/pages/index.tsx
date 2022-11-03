import { trpc } from '../utils/trpc'
import type { NextPage } from 'next'
import { Header, Footer } from '../components/_common/_index'
import { SearchBlock } from '../components/organisms/SearchBlock'
import { PortfolioCard } from '../components/organisms/PortfolioCard'
import { useTranslation } from 'react-i18next'

const Home: NextPage = () => {
  // dataを型定義してデータの中身わかりやすくしたい→tsdoc?
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
      <Header />
      <SearchBlock />

      <main className="mt-5 mb-5 flex flex-col items-center justify-center space-y-4">
        {portfolioGridRows &&
          portfolioGridRows.map((grid) => (
            <div
              key={grid.label}
              className="flex w-4/6 flex-col items-center justify-center"
            >
              <div className="w-full  text-2xl font-bold text-gray-600">
                {t('home:New')}
              </div>
              <div className="flex w-full justify-center">
                {grid.row.map(({ id, title }) => (
                  <PortfolioCard key={id} id={id} title={title} />
                ))}
              </div>
            </div>
          ))}
      </main>

      <Footer />
    </>
  )
}

export default Home
