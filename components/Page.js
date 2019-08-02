import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './Header';
import Meta from './Meta';
import Error from '../pages/_error.js';

const theTheme = {};

const Inner = styled.div`
  margin: 0 auto;
`;

class Home extends Component {
  render() {
    return (
      <ThemeProvider theme={theTheme}>
        <>
          <GlobalStyles />
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </>
      </ThemeProvider>
    );
  }
}

export default Home;
