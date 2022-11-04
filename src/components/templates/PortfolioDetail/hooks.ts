import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { trpc } from '@/utils/trpc'

import { useMutatePortfolio } from '@/hooks/useMutatePortfolio'

type Props = {
  id?: string
}

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

  return {
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
  }
}

export default useHooks
