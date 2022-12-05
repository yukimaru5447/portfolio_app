import { useTranslation } from 'react-i18next'

const useHooks = () => {
  const { t } = useTranslation(['common', 'portfolio'])
  return { t }
}

export default useHooks
