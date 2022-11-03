import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { ja } from './dict'

export const resources = { ja } as const

i18n.use(initReactI18next).init({
  resources,
  defaultNS: 'common',
  lng: 'ja',
  fallbackLng: ['ja'],
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
