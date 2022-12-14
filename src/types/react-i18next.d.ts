import { resources, defaultNS } from '@/utils/constant/i18n'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources['ja']
  }
}
