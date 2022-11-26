import type { NextPageWithLayout } from '@/pages/_app'
import { useSession } from 'next-auth/react'

import { LoginLayout, Auth } from '@/components/_common'
import { PortfolioDetail } from '@/components/templates'

const PortfolioPostPage: NextPageWithLayout = () => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <LoginLayout title='Login'>
        <Auth />
      </LoginLayout>
    )
  }

  return <PortfolioDetail />
}

export default PortfolioPostPage
