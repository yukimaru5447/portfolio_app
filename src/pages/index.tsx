import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { trpc } from '../utils/trpc'
import { Layout, Auth, Header, Footer } from '../components/_common/_index'
import { SearchBlock } from '../components/organisms/SearchBlock'
import { PortfolioCard } from '../components/organisms/PortfolioCard'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <SearchBlock />

      <main className="mt-5 mb-5 flex flex-col items-center justify-center space-y-4">
        <div className="flex w-4/6 flex-col items-center justify-center">
          <div className="w-full  text-2xl font-bold text-gray-600">注目</div>
          <div className="flex w-full justify-center ">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
        </div>
        <div className="flex w-4/6 flex-col items-center justify-center">
          <div className="w-full  text-2xl font-bold text-gray-600">新着</div>
          <div className="flex w-full justify-center ">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
        </div>
        <div className="flex w-4/6 flex-col items-center justify-center">
          <div className="w-full  text-2xl font-bold text-gray-600">
            おすすめ
          </div>
          <div className="flex w-full justify-center ">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
