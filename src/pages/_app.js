import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider as StyledComponentProvider } from 'styled-components';
import { ThemeProvider as MaterialUiProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../themes/';

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Upskill</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Raleway:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <StyledComponentProvider theme={theme}>
          <MaterialUiProvider theme={theme}>
            <StylesProvider injectFirst>
              <CssBaseline />
              <Component {...pageProps} />
            </StylesProvider>
          </MaterialUiProvider>
        </StyledComponentProvider>
      </>
    );
  }
}
