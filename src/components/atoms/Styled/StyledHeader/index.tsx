import { Theme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import { styled } from '@mui/system'

type Props = {
  theme?: Theme
}

const StyledHeader = styled('header')<Props>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottomWidth: '2px',
  borderBottomColor: grey[300],
  [theme.breakpoints.up('md')]: {
    paddingLeft: '8rem',
    paddingRight: '8rem',
  },
}))

export default StyledHeader
