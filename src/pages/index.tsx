import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { trpc } from '../utils/trpc'
import { Layout, Auth, Header } from '../components/_common/_index'

const Home: NextPage = () => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <Layout title="Login">
        <Auth />
      </Layout>
    )
  }

  return (
    <>
      <Header />
    </>
  )
}

export default Home
