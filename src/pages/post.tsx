import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { trpc } from '../utils/trpc'
import { Layout, Auth, Header } from '../components/_common/_index'
import { ImageField } from '../components/atoms/ImageField'
import { TextField } from '../components/atoms/TextField'
import { TextArea } from '../components/atoms/TextArea'
import { LinkBar } from '../components/atoms/LinkBar'

import { Button } from '../components/atoms/Button'
import { Logo } from '../components/atoms/Logo'

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
      <header className="flex justify-between bg-slate-100 md:flex">
        <Logo />
        <div className="flex justify-between">
          <Button name="下書き保存" />
          <Button name="ポートフォリオを投稿する" />
        </div>
      </header>

      <div className="flex flex-col items-center space-y-4 bg-slate-100 pt-10 pb-20">
        <ImageField />
        <TextField />
        <TextArea />
        <LinkBar name="URL" />
        <LinkBar name="Github" />
      </div>
    </div>
  )
}

export default Post
