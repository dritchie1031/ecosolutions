import React from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#126300'
    },
    secondary: {
      main: '#0086ab'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
