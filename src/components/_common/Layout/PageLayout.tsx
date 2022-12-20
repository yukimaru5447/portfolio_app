import { FC, ReactNode } from 'react'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'

import { Footer, Header } from '@/components/_common'

type Props = {
  children: ReactNode
}

const StyledLayout = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}))

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  )
}
