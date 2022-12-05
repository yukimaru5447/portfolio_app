import { ReactElement } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'

import '@/styles/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import '@/utils/constant/i18n'
import { trpc } from '@/utils/trpc'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => ReactElement<any, any> | null
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  session: Session | null
}

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>,
  )
}

export default trpc.withTRPC(MyApp)
