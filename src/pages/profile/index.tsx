import { useSession } from 'next-auth/react'

import { NextPageWithLayout } from '@/pages/_app'
import PageLayout from '@/components/_common/Layout/PageLayout'
import LoginLayout from '@/components/_common/Layout/LoginLayout'
import AuthCard from '@/components/_common/AuthCard'
import ProfileDetail from '@/components/organisms/ProfileDetail'

const ProfilePage: NextPageWithLayout = () => {
  // userIdを取得する
  const { data: session } = useSession()
  const userId = session?.user?.id || ''

  if (!session) {
    return (
      <LoginLayout title='Login'>
        <AuthCard />
      </LoginLayout>
    )
  }

  return <ProfileDetail userId={userId} />
}

export default ProfilePage

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageLayout>{page}</PageLayout>
}
