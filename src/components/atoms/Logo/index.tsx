import { FC } from 'react'
import Link from 'next/link'
import { Link as MuiLink } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledLogo = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginLeft: theme.spacing(2),
  padding: '1rem',
  fontSize: '1.5rem',
  lineHeight: '2rem',
  fontWeight: 700,
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}))

// underline消したい
const Logo: FC = () => {
  return (
    <Link href='/' passHref>
      <StyledLogo underline='none'>PortfolioApp</StyledLogo>
    </Link>
  )
}
export default Logo
