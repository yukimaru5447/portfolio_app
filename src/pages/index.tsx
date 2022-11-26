import Home from '@/components/templates/Home'
import { PageLayout } from '@/components/_common'

import { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return <Home />
}

export default HomePage

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageLayout>{page}</PageLayout>
}
