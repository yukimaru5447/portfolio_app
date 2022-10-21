import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/react'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return <h1>portfolio_app</h1>
}

export default Home
