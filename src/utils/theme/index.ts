import { createTheme, Theme } from '@mui/material/styles'
import { grey, purple } from '@mui/material/colors'

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: grey[100],
    },
  },
})

export default theme
