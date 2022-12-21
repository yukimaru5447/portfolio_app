import { FC } from 'react'
import { styled } from '@mui/system'

const StyledFooter = styled('footer')(({ theme }) => ({
  height: '160px',
  backgroundColor: theme.palette.grey[300],
}))

const Footer: FC = () => <StyledFooter />

export default Footer
