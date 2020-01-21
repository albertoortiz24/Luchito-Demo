import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#6ec7c1',
        main: '#3a9691',
        dark: '#006864',
        contrastText: ' #4e342e',
      },
      secondary: {
        light: '#ffa040',
        main: '#ff6f00',
        dark: '#c43e00',
        contrastText: '#4e342e',
      },
    },
  });

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
  </BrowserRouter>
    , document.getElementById('root'));


serviceWorker.unregister();
