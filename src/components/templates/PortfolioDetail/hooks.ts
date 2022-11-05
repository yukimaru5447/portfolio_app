import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
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

  const defaultValues = {
    title: '',
    description: '',
    serviceUrl: '',
    githubUrl: '',
  }

  const { control, setValue, handleSubmit } = useForm<DefaultValues>({
    resolver: zodResolver(postPortfolioSchema),
    defaultValues,
  })

  useEffect(() => {
    if (!portfolio) return

    setValue('title', portfolio.title)
    setValue('description', portfolio.description)
    setValue('serviceUrl', portfolio.serviceUrl)
    setValue('githubUrl', portfolio.githubUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolio])

  const create = async (values: DefaultValues) => {
    postPortfolioMutation.mutate({
      ...values,
    })
    router.push('/')
  }

  return {
    isNew,
    isLoading,
    error,
    control,
    defaultValues,
    portfolio,
    create: handleSubmit(create),
  }
}

export default useHooks
