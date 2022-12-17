import { createTheme, Theme } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
})

export default theme
