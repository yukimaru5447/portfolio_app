import { useRouter } from 'next/router'
import ImageField from '@/components/organisms/ImageField'
import { TextField } from '@/components/atoms/TextField'
import { TextArea } from '@/components/atoms/TextArea'
import { LinkBar } from '@/components/atoms/LinkBar'
import { Button } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
import { FC, FormEvent, useState } from 'react'
import { useMutatePortfolio } from '@/hooks/useMutatePortfolio'
import { Portfolio } from '@prisma/client'

type Props = {
  portfolio?: Pick<
    Portfolio,
    'title' | 'description' | 'serviceUrl' | 'githubUrl'
  >
}

const PortfolioDetail: FC<Props> = ({ portfolio }) => {
  const router = useRouter()
  const { postPortfolioMutation } = useMutatePortfolio()
  const isNew = !portfolio

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [serviceUrl, setServiceUrl] = useState<string>('')
  const [githubUrl, setGithubUrl] = useState<string>('')

  const create = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postPortfolioMutation.mutate({
      title,
      description,
      serviceUrl,
      githubUrl,
    })
    router.push('/')
  }

  return (
    <form onSubmit={isNew ? create : undefined}>
      <header className="flex justify-between bg-slate-100 md:flex">
        <Logo />
        <div className="flex justify-between">
          <Button name="下書き保存" />
          <Button name="ポートフォリオを投稿する" />
        </div>
      </header>

      <div className="flex flex-col items-center space-y-4 bg-slate-100 pt-10 pb-20">
        {/* portfolio.imageが実装できたら変更 */}
        <ImageField
          imageUrl={
            portfolio
              ? 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
              : undefined
          }
        />
        <TextField
          value={portfolio ? portfolio?.title : title}
          readOnly={!portfolio}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          value={portfolio ? portfolio?.description : description}
          readOnly={!portfolio}
          onChange={(e) => setDescription(e.target.value)}
        />
        <LinkBar
          name="URL"
          value={portfolio ? portfolio?.serviceUrl : serviceUrl}
          readOnly={!portfolio}
          onChange={(e) => setServiceUrl(e.target.value)}
        />
        <LinkBar
          name="Github"
          value={portfolio ? portfolio?.githubUrl : githubUrl}
          readOnly={!portfolio}
          onChange={(e) => setGithubUrl(e.target.value)}
        />
      </div>
    </form>
  )
}

export default PortfolioDetail
