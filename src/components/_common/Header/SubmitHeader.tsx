import { FC, ReactNode } from 'react'

import { Logo } from '@/components/atoms'
import StyledHeader from '@/components/atoms/Styled/StyledHeader'

export const SubmitHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledHeader className='border-gray-200 bg-slate-100'>
      <Logo />
      {children}
    </StyledHeader>
  )
}
