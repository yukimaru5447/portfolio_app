import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { trpc } from '../utils/trpc'
import { Layout, Auth, Header } from '../components/_common/_index'
import { ImageField } from '../components/atoms/ImageField'
import { TextField } from '../components/atoms/TextField'
import { TextArea } from '../components/atoms/TextArea'

const Post: NextPage = () => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <Layout title="Login">
        <Auth />
      </Layout>
    )
  }

  return (
    <div>
      <div className="h-14 bg-slate-100" />
      <div className="flex flex-col items-center space-y-4 bg-slate-100">
        <ImageField />
        <TextField />
        <TextArea />
      </div>
    </div>
  )
}

export default Post
