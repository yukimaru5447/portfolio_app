import { trpc } from '../utils/trpc'
import type { NextPage } from 'next'
import { Header, Footer } from '../components/_common/_index'
import { SearchBlock } from '../components/organisms/SearchBlock'
import { PortfolioCard } from '../components/organisms/PortfolioCard'

const Home: NextPage = () => {
  // dataを型定義してデータの中身わかりやすくしたい→tsdoc?
  const { data, isLoading, error } = trpc.portfolio.getAllPortfolios.useQuery()
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <>
      <Header />
      <SearchBlock />

      <main className="mt-5 mb-5 flex flex-col items-center justify-center space-y-4">
        <div className="flex w-4/6 flex-col items-center justify-center">
          <div className="w-full  text-2xl font-bold text-gray-600">新着</div>
          <div className="flex w-full justify-center">
            {data.map(({ id, title }) => (
              <PortfolioCard key={id} id={id} title={title} />
            ))}
          </div>
        </div>
        <div className="flex w-4/6 flex-col items-center justify-center">
          <div className="w-full  text-2xl font-bold text-gray-600">注目</div>
          <div className="flex w-full justify-center">
            {data.map(({ id, title }) => (
              <PortfolioCard key={id} id={id} title={title} />
            ))}
          </div>
        </div>
        <div className="flex w-4/6 flex-col items-center justify-center">
          <div className="w-full  text-2xl font-bold text-gray-600">
            おすすめ
          </div>
          <div className="flex w-full justify-center">
            {data.map(({ id, title }) => (
              <PortfolioCard key={id} id={id} title={title} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
