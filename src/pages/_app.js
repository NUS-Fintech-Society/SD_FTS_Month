import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../themes'

export default function MyApp(props) {
  const { Component, pageProps } = props

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>NUS Fintech Month</title>
        <meta
          name="description"
          content="Official website for the annual Fintech Month, proudly hosted by NUS Fintech Society"
        />
        <meta property="og:title" content="NUS Fintech Month" />
        <meta
          property="og:description"
          content="Official website for the annual Fintech Month, proudly hosted by NUS Fintech Society"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/sVzM7J2/og-image.png"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}
