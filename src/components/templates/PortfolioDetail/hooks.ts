import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { trpc } from '@/utils/trpc'
import { useMutatePortfolio } from '@/hooks/useMutatePortfolio'

type Props = {
  id?: string
}

const schema = z.object({
  title: z.string(),
  description: z.string(),
  serviceUrl: z.string(),
  githubUrl: z.string(),
})

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
  type DefaultValues = typeof defaultValues

  const { control, handleSubmit } = useForm<DefaultValues>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const create = (values: DefaultValues) => {
    console.log('作成')
    console.log(values)

    // postPortfolioMutation.mutate({
    //   title,
    //   description,
    //   serviceUrl,
    //   githubUrl,
    // })
    // router.push('/')
    // postPortfolioMutation.mutate({
    //   ...values,
    // })
    // router.push('/')
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
