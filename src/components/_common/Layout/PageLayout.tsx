import { FC, ReactNode } from 'react'
import { Footer, Header } from '@/components/_common'

type Props = {
  children: ReactNode
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className='bg-slate-100'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
