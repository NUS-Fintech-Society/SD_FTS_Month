import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.secondary,
    flexDirection: 'column',
  },
  description: {
    textAlign: 'center',
    paddingTop: '77px',
    paddingBottom: '80px',
  },
  sponsorTitle: {
    textAlign: 'center',
    padding: '30px',
  },
  partnersTitle: {
    textAlign: 'center',
    paddingTop: '80px',
    paddingBottom: '10px',
    padding: '30px',
  },
  sponsorLogoWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '80px',
    width: '100%',
    maxWidth: '1000px',
    textAlign: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 700,
  },
  bodyWrapper: {
    marginTop: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
  bybitLogoButton: {
    border: '0px',
    backgroundColor: theme.palette.background.secondary,
    width: '20%',
  },
  rippleLogoButton: {
    border: '0px',
    paddingLeft: '24px',
    paddingRight: '24px',
    backgroundColor: theme.palette.background.secondary,
    width: '40%',
  },
  stellarLogoButton: {
    border: '0px',
    backgroundColor: theme.palette.background.secondary,
    width: '20%',
  },
  partnersLogoWrapper: {
    display: 'flex',
    width: '100%',
    maxWidth: '800px',
    paddingTop: '40px',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
  },
  nusLogoButton: {
    border: '0px',
    backgroundColor: theme.palette.background.secondary,
    width: '50%',
  },
  ftsLogo: {
    backgroundColor: theme.palette.background.secondary,
    paddingLeft: '40px',
    width: '50%',
  },
}))

const Sponsors = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h3">OUR SPONSORS</Typography>
      <Box className={classes.description}>
        <Typography>
          Thank you to our sponsors, Bybit, Ripple and Stellar for making this
          event possible!
        </Typography>
      </Box>
      <Typography variant="h3" className={classes.header}>
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
      <Box className={classes.partnersTitle}>
        <Typography variant="h3">Schools and University Partners:</Typography>
      </Box>
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
