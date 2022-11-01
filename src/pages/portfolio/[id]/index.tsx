import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Layout, Auth } from '../../../components/_common/_index'
import PortfolioDetail from '../../../components/templates/PortfolioDetail'
import { usePortfolio } from '../../../hooks/usePortfolio'

const PortfolioDetailPage: NextPage = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const id = router.query.id as string
  const { portfolio } = usePortfolio(id)

  if (!session) {
    return (
      <Layout title="Login">
        <Auth />
      </Layout>
    )
  }

  if (!portfolio) {
    return <p>Loading...</p>
  }

  return <PortfolioDetail portfolio={portfolio} />
}

export default PortfolioDetailPage
