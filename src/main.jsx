import ReactDOM from 'react-dom/client';
import App from '#/App.jsx';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '#/theme/index.js';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
