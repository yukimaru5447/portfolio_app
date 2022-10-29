import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Layout, Auth } from '../../../components/_common/_index'
import ImageField from '../../../components/organisms/ImageField'
import { TextField } from '../../../components/atoms/TextField'
import { TextArea } from '../../../components/atoms/TextArea'
import { LinkBar } from '../../../components/atoms/LinkBar'
import { Button } from '../../../components/atoms/Button'
import { Logo } from '../../../components/atoms/Logo'
import { FormEvent, useState } from 'react'
import { useMutatePortfolio } from '../../../hooks/useMutatePortfolio'

const Post: NextPage = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const { postPortfolioMutation } = useMutatePortfolio()

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [serviceUrl, setServiceUrl] = useState<string>('')
  const [githubUrl, setGithubUrl] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postPortfolioMutation.mutate({
      title,
      description,
      serviceUrl,
      githubUrl,
    })
    router.push('/')
  }

  if (!session) {
    return (
      <Layout title="Login">
        <Auth />
      </Layout>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <header className="flex justify-between bg-slate-100 md:flex">
        <Logo />
        <div className="flex justify-between">
          <Button name="下書き保存" />
          <Button name="ポートフォリオを投稿する" />
        </div>
      </header>

      <div className="flex flex-col items-center space-y-4 bg-slate-100 pt-10 pb-20">
        <ImageField />
        <TextField value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <LinkBar
          name="URL"
          value={serviceUrl}
          onChange={(e) => setServiceUrl(e.target.value)}
        />
        <LinkBar
          name="Github"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Post
