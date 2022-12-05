import { Logo } from '@/components/atoms'
import { FC, ReactNode } from 'react'

export const SubmitHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <header className='fixed z-10 flex w-screen justify-between border-b-2 border-gray-200 bg-slate-100 md:px-32'>
      <Logo />

      {children}
    </header>
  )
}
