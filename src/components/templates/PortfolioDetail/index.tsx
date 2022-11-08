import { FC } from 'react'

import ImageField from '@/components/organisms/ImageField'
import {
  TextField,
  TextArea,
  LinkBar,
  Button,
  Logo,
  Loading,
} from '@/components/atoms'
import useHooks from './hooks'

type Props = {
  id?: string
}

const PortfolioDetail: FC<Props> = ({ id }) => {
  const {
    isNew,
    isEdit,
    isLoading,
    error,
    control,
    defaultValues,
    portfolio,
    create,
    checkUnClickable,
  } = useHooks({
    id,
  })

  if (isLoading) <Loading />
  if (error) <p>{error.message}</p>

  return (
    <form onSubmit={isNew ? create : undefined}>
      <header className='flex justify-between bg-slate-100 md:flex'>
        <Logo />
        <div className='my-4 flex justify-between '>
          <Button
            name='下書き保存'
            type='button'
            disabled={isEdit || checkUnClickable()}
          />
          <Button
            name='ポートフォリオを投稿する'
            type='submit'
            disabled={isEdit || checkUnClickable()}
          />
        </div>
      </header>

      <div className='flex flex-col items-center space-y-4 bg-slate-100 pt-10 pb-20'>
        {/* portfolio.imageが実装できたら変更 */}
        <ImageField
          imageUrl={
            portfolio
              ? 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
              : undefined
          }
        />
        <TextField
          name='title'
          control={control}
          defaultValue={portfolio ? portfolio?.title : defaultValues.title}
          readOnly={isEdit}
          placeholder={isEdit ? '' : 'タイトル（32文字以内）'}
        />
        <TextArea
          name='description'
          control={control}
          defaultValue={
            portfolio ? portfolio?.description : defaultValues.description
          }
          readOnly={isEdit}
          placeholder={
            isEdit
              ? ''
              : 'ポートフォリオの説明（マークダウン記法を使用できます）'
          }
        />
        <LinkBar
          name='serviceUrl'
          control={control}
          defaultValue={
            portfolio ? portfolio?.serviceUrl : defaultValues.serviceUrl
          }
          label='URL'
          readOnly={isEdit}
          placeholder={isEdit ? '' : 'https://'}
        />
        <LinkBar
          name='githubUrl'
          control={control}
          defaultValue={
            portfolio ? portfolio?.githubUrl : defaultValues.githubUrl
          }
          label='Github'
          readOnly={isEdit}
          placeholder={isEdit ? '' : 'https://'}
        />
      </div>
    </form>
  )
}

export default PortfolioDetail
