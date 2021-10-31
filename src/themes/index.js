import { createMuiTheme } from '@material-ui/core/styles'
import typography from './typography'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E13766',
    },
    secondary: {
      main: '#101F40',
    },
    success: {
      main: '#4BB543',
    },
    error: {
      main: '#B33A3A',
    },
    text: {
      main: '#000000',
      contrast: '#FFFFFF',
      divider: '#888888',
    },
    background: {
      main: '#FFFFFF',
      secondary: '#F5F5F5',
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: typography,
})

export default theme
