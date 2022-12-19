import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { LoginLayout, Auth } from '@/components/_common'
import PortfolioDetail from '@/components/organisms/PortfolioDetail'

const PortfolioDetailPage: NextPage = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const id = router.query.id as string

  if (!session) {
    return (
      <LoginLayout title='Login'>
        <Auth />
      </LoginLayout>
    )
  }

  return <PortfolioDetail id={id} />
}

export default PortfolioDetailPage
