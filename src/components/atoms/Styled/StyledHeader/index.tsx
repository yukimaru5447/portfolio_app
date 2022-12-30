import { styled } from '@mui/system'

const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
  },
}))

export default StyledHeader
