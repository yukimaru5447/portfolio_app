import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'
import type { AppType } from 'next/app'

import '@/styles/globals.css'
import '@/utils/constant/i18n'
import { trpc } from '@/utils/trpc'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
