import { FC, ReactNode } from 'react'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'

import Header from '@/components/_common/Header/Header'
import Footer from '@/components/_common/Footer'

type Props = {
  children: ReactNode
}

const StyledLayout = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}))

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  )
}

export default PageLayout
