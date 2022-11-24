import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'

import { Layout, Auth } from '@/components/_common/_index'
import PortfolioDetail from '@/components/templates/PortfolioDetail'

const PortfolioPostPage: NextPage = () => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <Layout title="Login">
        <Auth />
      </Layout>
    )
  }

  return <PortfolioDetail />
}

export default PortfolioPostPage
