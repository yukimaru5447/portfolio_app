import { useSession } from 'next-auth/react'

import { NextPageWithLayout } from '@/pages/_app'
import { Auth } from '@/components/_common/Auth'
import { LoginLayout, PageLayout } from '@/components/_common'
import ProfileDetail from '@/components/organisms/ProfileDetail'

const ProfilePage: NextPageWithLayout = () => {
  // userIdを取得する
  const { data: session } = useSession()
  const userId = session?.user?.id || ''

  if (!session) {
    return (
      <LoginLayout title='Login'>
        <Auth />
      </LoginLayout>
    )
  }

  return <ProfileDetail userId={userId} />
}

export default ProfilePage

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageLayout>{page}</PageLayout>
}
