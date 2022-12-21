import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

const useHooks = () => {
  const { t } = useTranslation(['common', 'home', 'portfolio'])
  const router = useRouter()

  const moveToPage = (url: string) => {
    router.push(url)
  }

  return { t, moveToPage }
}
export default useHooks
