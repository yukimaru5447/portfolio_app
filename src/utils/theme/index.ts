import { createTheme, Theme } from '@mui/material/styles'
import { blueGrey, grey, purple } from '@mui/material/colors'

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    grey,
    background: {
      default: blueGrey[50],
    },
  },
})

export default theme
