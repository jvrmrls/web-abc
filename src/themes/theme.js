import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#283350',
    },
    secondary: {
      main: grey[100],
    },
    text: {
      primary: '#f6f6f6',
      secondary: '#ffffff',
    },
  },
});
