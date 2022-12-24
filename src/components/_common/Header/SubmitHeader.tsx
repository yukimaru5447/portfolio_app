import { FC, ReactNode } from 'react'

import Logo from '@/components/atoms/Logo'
import StyledHeader from '@/components/atoms/Styled/StyledHeader'

const SubmitHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledHeader sx={{ borderBottom: `1px solid #9dabb1` }}>
      <Logo />
      {children}
    </StyledHeader>
  )
}

export default SubmitHeader
