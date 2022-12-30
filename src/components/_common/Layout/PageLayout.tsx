import { FC, ReactNode } from 'react'
import { styled } from '@mui/system'

import Header from '@/components/_common/Header/Header'
import Footer from '@/components/_common/Footer'

type Props = {
  children: ReactNode
}

const StyledMainLayout = styled('main')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}))

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMainLayout>{children}</StyledMainLayout>
      <Footer />
    </>
  )
}

export default PageLayout
