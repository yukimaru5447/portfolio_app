import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'
import type { AppType } from 'next/app'

import '@/styles/globals.css'
import '@/utils/constant/i18n'
import { trpc } from '@/utils/trpc'
import { PageLayout } from '@/components/_common'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <PageLayout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </PageLayout>
  )
}

export default trpc.withTRPC(MyApp)
