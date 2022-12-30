import { FC } from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import Link from '@/components/atoms/Link'
import theme from '@/utils/theme'

const StyledLogo = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}))

const Logo: FC = () => {
  return (
    <StyledLogo>
      <Link
        href='/'
        sx={{
          color: theme.palette.primary.main,
          fontWeight: 700,
          fontSize: '1.5rem',
          lineHeight: '2rem',
          '&:hover': {
            color: theme.palette.primary.dark,
          },
        }}
      >
        🚀PortfolioApp
      </Link>
    </StyledLogo>
  )
}
export default Logo
