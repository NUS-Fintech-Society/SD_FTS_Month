import { createMuiTheme } from '@material-ui/core/styles';
import typography from './typography';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#059BE5',
    },
    secondary: {
      main: '#FFCB2B',
    },
    tertiary: {
      main: '#FFA611',
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
      secondary: '#F0F0F0',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: typography,
});

export default theme;
