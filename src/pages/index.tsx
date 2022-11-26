import type { NextPage } from 'next'

import Home from '@/components/templates/Home'
import { PageLayout } from '@/components/_common'

const HomePage: NextPage = () => {
  return (
    <PageLayout>
      <main className='mt-5 mb-5 flex flex-col items-center justify-center space-y-4 border-gray-200 bg-slate-100'>
        <Home />
      </main>
    </PageLayout>
  )
}

export default HomePage
