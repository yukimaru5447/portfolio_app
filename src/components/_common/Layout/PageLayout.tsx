import { FC, ReactNode } from 'react'
import { SearchBlock } from '@/components/organisms'
import { Footer, Header } from '@/components/_common'

type Props = {
  children: ReactNode
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className='bg-slate-100'>
      <Header />
      <SearchBlock />
      {children}
      <Footer />
    </div>
  )
}
