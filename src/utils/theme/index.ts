import { createTheme, Theme } from '@mui/material/styles'
import { cyan, grey, purple, common } from '@mui/material/colors'

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      dark: purple[900],
      light: purple[50],
    },
    secondary: {
      main: cyan[300],
      dark: cyan[700],
      light: cyan[200],
    },
    grey,
    background: {
      default: purple[50],
      paper: common.white,
    },
  },
})

export default theme
