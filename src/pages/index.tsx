import type { NextPage } from 'next'

import { Footer, Header } from '@/components/_common/_index'
import Home from '@/components/templates/Home'
import { SearchBlock } from '@/components/organisms'

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <SearchBlock />

      <main className='mt-5 mb-5 flex flex-col items-center justify-center space-y-4'>
        <Home />
      </main>

      <Footer />
    </>
  )
}

export default HomePage
