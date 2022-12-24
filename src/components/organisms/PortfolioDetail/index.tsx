import { FC } from 'react'

import SubmitHeader from '@/components/_common/Header/SubmitHeader'
import Loading from '@/components/atoms/Loading'
import SubmitField from '@/components/organisms/SubmitField'
import PortfolioFormField from '@/components/organisms/PortfolioFormField'

import useHooks from './hooks'
import { FormProvider } from 'react-hook-form'

type Props = {
  id?: string
}

const PortfolioDetail: FC<Props> = ({ id }) => {
  const {
    isNew,
    isEdit,
    isLoading,
    error,
    defaultValues,
    watchIsPublished,
    portfolio,
    methods,
    create,
    checkUnClickable,
  } = useHooks({
    id,
  })

  if (isLoading) <Loading />
  if (error) <p>{error.message}</p>

  return (
    <FormProvider {...methods}>
      <form onSubmit={isNew ? create : undefined}>
        <SubmitHeader>
          <SubmitField
            isEdit={isEdit}
            watchIsPublished={watchIsPublished}
            defaultValues={defaultValues}
            checkUnClickable={checkUnClickable}
          />
        </SubmitHeader>

        <PortfolioFormField
          defaultValues={defaultValues}
          portfolio={portfolio}
          isEdit={isEdit}
        />
      </form>
    </FormProvider>
  )
}

export default PortfolioDetail
