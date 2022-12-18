import { styled } from '@mui/system'

const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottomWidth: theme.spacing(0.25),
  borderBottomColor: theme.palette.grey[300],
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(16),
  },
}))

export default StyledHeader
