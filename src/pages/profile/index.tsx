import { ProfileDetail } from '@/components/templates'
import { useSession } from 'next-auth/react'
import { Auth } from '@/components/_common/Auth'
import { Layout } from '@/components/_common/Layout'
import React from 'react'

const Profile = () => {
  // userIdを取得する
  const { data: session } = useSession()
  const userId = session?.user?.id || ''

  if (!session) {
    return (
      <Layout title='Login'>
        <Auth />
      </Layout>
    )
  }

  return <ProfileDetail userId={userId} />
}

export default Profile
