import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { trpc } from '@/utils/trpc'
import { useMutatePortfolio } from '@/hooks/useMutatePortfolio'
import { useEffect } from 'react'
import { postPortfolioSchema, PostPortfolioInput } from '@/schema/portfolio'

type Props = {
  id?: string
}

type DefaultValues = PostPortfolioInput

const useHooks = ({ id }: Props) => {
  const portfolioId = id ?? ''
  const router = useRouter()
  const {
    data: portfolio,
    isLoading,
    error,
  } = trpc.portfolio.getPortfolio.useQuery({
    id: portfolioId,
  })
  const { postPortfolioMutation } = useMutatePortfolio()
  const isNew = !portfolio
  const isEdit = !!portfolio

  const defaultValues = {
    title: '',
    description: '',
    serviceUrl: '',
    githubUrl: '',
    isPublished: true,
  }

  const { control, watch, setValue, handleSubmit } = useForm<DefaultValues>({
    resolver: zodResolver(postPortfolioSchema),
    defaultValues,
  })

  useEffect(() => {
    if (!portfolio) return

    setValue('title', portfolio.title)
    setValue('description', portfolio.description)
    setValue('serviceUrl', portfolio.serviceUrl)
    setValue('githubUrl', portfolio.githubUrl)
    setValue('isPublished', portfolio.isPublished)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolio])

  const watchFields = watch(['title', 'description', 'serviceUrl', 'githubUrl'])
  const watchIsPublished = watch('isPublished')
  /** 全ての値が入力されていなければtrue */
  const checkUnClickable = () => watchFields.some((f) => !f.length)

  const create: SubmitHandler<DefaultValues> = async (
    values: DefaultValues,
  ) => {
    postPortfolioMutation.mutate({
      ...values,
    })
    router.push('/')
  }

  return {
    isNew,
    isEdit,
    isLoading,
    error,
    control,
    defaultValues,
    watchIsPublished,
    portfolio,
    create: handleSubmit(create),
    checkUnClickable,
  }
}

export default useHooks
