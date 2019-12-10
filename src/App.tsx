import React, { Component } from 'react';
import Main from './containers/main/Main';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './data/api';

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
        <ApolloProvider client={client}>
          <Main />
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}
