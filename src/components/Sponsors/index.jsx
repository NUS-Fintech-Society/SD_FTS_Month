import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '48px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    flexDirection: 'column',
  },
  description: {
    textAlign: 'center',
    marginTop: '48px',
    marginBottom: '48px',
  },
  sponsorTitle: {
    textAlign: 'center',
  },
  sponsorLogoWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '48px',
    width: '100%',
    maxWidth: '1000px',
    textAlign: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 700,
    marginBottom: '48px',
    textAlign: 'center',
  },
  bodyWrapper: {
    marginTop: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
  bybitLogoButton: {
    border: '0px',
    backgroundColor: theme.palette.background.primary,
    width: '20%',
    cursor: 'pointer',
  },
  rippleLogoButton: {
    border: '0px',
    backgroundColor: theme.palette.background.primary,
    width: '40%',
    cursor: 'pointer',
  },
  stellarLogoButton: {
    border: '0px',
    backgroundColor: theme.palette.background.primary,
    width: '20%',
    cursor: 'pointer',
  },
  partnersLogoWrapper: {
    display: 'flex',
    width: '100%',
    maxWidth: '800px',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
  },
  nusLogoButton: {
    border: '0px',
    backgroundColor: theme.palette.background.primary,
    width: '50%',
    cursor: 'pointer',
  },
  ftsLogo: {
    backgroundColor: theme.palette.background.primary,
    width: '50%',
  },
}))

const Sponsors = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h3" align="center">
        OUR SPONSORS
      </Typography>
      <Box className={classes.description}>
        <Typography>
          Thank you to our sponsors, Bybit, Ripple and Stellar for making this
          event possible!
        </Typography>
      </Box>
      <Typography variant="h5" className={classes.header}>
        Supported By:
      </Typography>
      <Box className={classes.sponsorLogoWrapper}>
        <button className={classes.bybitLogoButton}>
          <img
            src="bybit-logo.png"
            alt="ByBit"
            width="100%"
            onClick={() => window.open('https://www.bybit.com/en-US/', 'ByBit')}
          />
        </button>
        <button className={classes.rippleLogoButton}>
          <img
            src="ripple-logo.png"
            alt="Ripple"
            width="100%"
            onClick={() => window.open('https://ripple.com/', '_blank')}
          />
        </button>
        <button className={classes.stellarLogoButton} position="right">
          <img
            src="stellar-logo.png"
            alt="Stellar"
            onClick={() => window.open('https://www.stellar.org/', '_blank')}
            width="100%"
          />
        </button>
      </Box>
      <Typography variant="h5" className={classes.header}>
        Schools and University Partners:
      </Typography>
      <Box className={classes.partnersLogoWrapper}>
        <button className={classes.nusLogoButton}>
          <img
            src="nus-logo.png"
            alt="NUS"
            width="100%"
            onClick={() => window.open('https://www.nus.edu.sg/', '_blank')}
          />
        </button>
        <Box className={classes.ftsLogo}>
          <img src="FTS-Logo-Transparent.png" alt="NUS FTS" width="100%" />
        </Box>
      </Box>
    </Box>
  )
}

export default Sponsors
