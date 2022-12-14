import { styled } from '@mui/system'

const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottomWidth: '2px',
  [theme.breakpoints.up('md')]: {
    paddingLeft: '8rem',
    paddingRight: '8rem',
  },
}))

export default StyledHeader
