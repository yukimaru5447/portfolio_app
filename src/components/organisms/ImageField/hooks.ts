import { useCallback, useState } from 'react'

const useHooks = () => {
  const [portfolioImage, setPortfolioImage] = useState<File | null>(null)

  const handleSetImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget?.files && e.currentTarget.files[0]) {
        setPortfolioImage(e.currentTarget.files[0])
      }
    },
    [],
  )

  const handleResetImage = useCallback(() => {
    setPortfolioImage(null)
  }, [])

  return { portfolioImage, handleSetImage, handleResetImage }
}

export default useHooks
