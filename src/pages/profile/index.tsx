import { useSession } from 'next-auth/react'

import { ProfileDetail } from '@/components/templates'
import { Auth } from '@/components/_common/Auth'
import { LoginLayout, PageLayout } from '@/components/_common'
import { NextPageWithLayout } from '@/pages/_app'

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
