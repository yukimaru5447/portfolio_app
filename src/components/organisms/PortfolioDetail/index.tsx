import { FC } from 'react'

import SubmitHeader from '@/components/_common/Header/SubmitHeader'
import Loading from '@/components/atoms/Loading'
import TextField from '@/components/molucules/TextField'
import LinkBar from '@/components/molucules/LinkBar'
import ImageField from '@/components/organisms/ImageField'
import SubmitField from '@/components/organisms/SubmitField'
import TextArea from '@/components/molucules/TextArea'

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
    watchIsPublished,
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
      <SubmitHeader>
        <SubmitField
          isEdit={isEdit}
          watchIsPublished={watchIsPublished}
          control={control}
          defaultValues={defaultValues}
          checkUnClickable={checkUnClickable}
        />
      </SubmitHeader>

      <div className='flex flex-col items-center space-y-4 bg-slate-100 py-24'>
        {/* portfolio.imageが実装できたら変更 */}
        <ImageField />
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
          sx={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            paddingLeft: 1,
            paddingRight: 1,
            fontSize: '1.25rem',
          }}
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
          sx={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            paddingLeft: 1,
            paddingRight: 1,
            fontSize: '1.25rem',
          }}
          label='Github'
          readOnly={isEdit}
          placeholder={isEdit ? '' : 'https://'}
        />
      </div>
    </form>
  )
}

export default PortfolioDetail
