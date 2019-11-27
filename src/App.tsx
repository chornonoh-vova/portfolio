import React, { Component } from 'react';

import Main from './containers/main/Main';

import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

/**
 * Global application theme.
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      // defines exact color for primary color
      main: '#645beb',
    },
  },
});

/**
 * Entry point for application.
 */
export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    );
  }
}
