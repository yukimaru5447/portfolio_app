import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { Layout, Auth } from '@/components/_common/_index'
import PortfolioDetail from '@/components/templates/PortfolioDetail'

const PortfolioDetailPage: NextPage = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const id = router.query.id as string

  if (!session) {
    return (
      <Layout title="Login">
        <Auth />
      </Layout>
    )
  }

  return <PortfolioDetail id={id} />
}

export default PortfolioDetailPage
