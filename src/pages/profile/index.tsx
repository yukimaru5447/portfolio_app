import { NextPage } from 'next'
import { useSession } from 'next-auth/react'

import { ProfileDetail } from '@/components/templates'
import { Auth } from '@/components/_common/Auth'
import { LoginLayout } from '@/components/_common'

const Profile: NextPage = () => {
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

export default Profile
