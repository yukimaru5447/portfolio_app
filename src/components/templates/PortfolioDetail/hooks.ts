import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { Portfolio } from '@prisma/client'

import { useMutatePortfolio } from '@/hooks/useMutatePortfolio'

type Props = {
  portfolio?: Pick<
    Portfolio,
    'title' | 'description' | 'serviceUrl' | 'githubUrl'
  >
}

const useHooks = ({ portfolio }: Props) => {
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

  return {
    isNew,
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
