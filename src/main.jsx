import ReactDOM from 'react-dom/client';
import App from '#/App.jsx';
import '#/index.css';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import theme from '#/theme/index.js';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </ThemeProvider>
);
