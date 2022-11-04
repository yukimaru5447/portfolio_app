import { FC } from 'react'

import ImageField from '@/components/organisms/ImageField'
import { TextField, TextArea, LinkBar, Button, Logo } from '@/components/atoms'
import useHooks from './hooks'

type Props = {
  id?: string
}

const PortfolioDetail: FC<Props> = ({ id }) => {
  const {
    isNew,
    isLoading,
    error,
    portfolio,
    title,
    description,
    serviceUrl,
    githubUrl,
    create,
    setTitle,
    setDescription,
    setServiceUrl,
    setGithubUrl,
  } = useHooks({ id })

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
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
