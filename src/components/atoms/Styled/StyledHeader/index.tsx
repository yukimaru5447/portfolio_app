import { styled } from '@mui/system'

const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(16),
  },
}))

export default StyledHeader
