import type { NextPageWithLayout } from '@/pages/_app'
import { useSession } from 'next-auth/react'

import LoginLayout from '@/components/_common/Layout/LoginLayout'
import AuthCard from '@/components/_common/AuthCard'
import PortfolioDetail from '@/components/organisms/PortfolioDetail'

const PortfolioPostPage: NextPageWithLayout = () => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <LoginLayout title='Login'>
        <AuthCard />
      </LoginLayout>
    )
  }

  return <PortfolioDetail />
}

export default PortfolioPostPage
