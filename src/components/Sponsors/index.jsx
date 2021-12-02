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
    width: '953px',
    height: '40px',
    textAlign: 'center',
    paddingTop: '77px',
  },
  partnersTitle: {
    textAlign: 'center',
    paddingTop: '80px',
  },
  sponsorLogoWrapper: {
    display: 'flex',
    width: '1074px',
    alignItems: 'center',
    paddingTop: '80px',
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
    paddingLeft: '24px',
    paddingRight: '24px',
    backgroundColor: theme.palette.background.secondary,
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
    paddingLeft: '24px',
    paddingRight: '24px',
    backgroundColor: theme.palette.background.secondary,
  },
  partnersLogoWrapper: {
    display: 'flex',
    height: '360px',
    paddingTop: '20px',
    width: '1000px',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
  },
  nusLogoButton: {
    border: '0px',
    backgroundColor: theme.palette.background.secondary,
    width: '360px',
  },
  ftsLogo: {
    backgroundColor: theme.palette.background.secondary,
    width: '360px',
    paddingLeft: '60px',
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
            src="https://res.cloudinary.com/jianoway/image/upload/v1638360412/bybit-logo_svetqo.png"
            alt="ByBit"
            onClick={() => window.open('https://www.bybit.com/en-US/', 'ByBit')}
          />
        </button>
        <button className={classes.rippleLogoButton}>
          <img
            src="https://res.cloudinary.com/jianoway/image/upload/v1638360411/ripple-logo_zmlfxh.png"
            alt="Ripple"
            onClick={() => window.open('https://ripple.com/', '_blank')}
          />
        </button>
        <button className={classes.stellarLogoButton} position="right">
          <img
            src="https://res.cloudinary.com/jianoway/image/upload/v1638360412/stellar-logo_dnsjor.png"
            alt="Stellar"
            onClick={() => window.open('https://www.stellar.org/', '_blank')}
            height="100%"
            width="240px"
          />
        </button>
      </Box>
      <Box className={classes.partnersTitle}>
        <Typography variant="h3">Schools and University Partners:</Typography>
      </Box>
      <Box className={classes.partnersLogoWrapper}>
        <button className={classes.nusLogoButton}>
          <img
            src="https://res.cloudinary.com/jianoway/image/upload/c_scale,w_362/v1638365359/nus-logo_vxbv5m.png"
            alt="NUS"
            onClick={() => window.open('https://www.nus.edu.sg/', '_blank')}
          />
        </button>
        <Box className={classes.ftsLogo}>
          <img
            src="https://res.cloudinary.com/jianoway/image/upload/c_scale,w_300/v1638367592/FTS-Logo-Transparent_k8gkbs.png"
            alt="NUS FTS"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Sponsors
