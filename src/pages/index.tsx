import Home from '@/components/organisms/Home'
import PageLayout from '@/components/_common/Layout/PageLayout'

import { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return <Home />
}

export default HomePage

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageLayout>{page}</PageLayout>
}
