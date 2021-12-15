import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '96px 48px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      padding: '48px',
    },
  },
  sponsorTitle: {
    textAlign: 'center',
  },
  sponsorLogoWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '48px',
    maxWidth: '1400px',
    textAlign: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 700,
    marginTop: '56px',
    marginBottom: '24px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  bodyWrapper: {
    marginTop: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
  bybitLogoButton: {
    cursor: 'pointer',
    border: '0px',
    backgroundColor: theme.palette.background.primary,
    width: '30%',
  },
  rippleLogoButton: {
    cursor: 'pointer',
    border: '0px',
    backgroundColor: theme.palette.background.primary,
    width: '25%',
  },
  stellarLogoButton: {
    cursor: 'pointer',
    border: '0px',
    backgroundColor: theme.palette.background.primary,
    width: '25%',
  },
  partnersLogoWrapper: {
    display: 'flex',
    width: '100%',
    maxWidth: '1150px',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
  },
  shopeeLogoWrapper: {
    cursor: 'pointer',
    display: 'flex',
    width: '100%',
    maxWidth: '900px',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
    paddingBottom: '50px',
  },
  ftsLogo: {
    cursor: 'pointer',
    backgroundColor: theme.palette.background.primary,
    width: '50%',
  },
}))

const Sponsors = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h3">CREDITS</Typography>
      <Typography variant="h5" className={classes.header}>
        Event Sponsors
      </Typography>
      <Box className={classes.sponsorLogoWrapper}>
        <button className={classes.bybitLogoButton}>
          <img
            src="/credits/bybit-logo-trans.png"
            alt="ByBit"
            width="100%"
            onClick={() => window.open('https://www.bybit.com/en-US/', 'ByBit')}
          />
        </button>
        <button className={classes.rippleLogoButton}>
          <img
            src="/credits/ripple-logo.png"
            alt="Ripple"
            width="100%"
            onClick={() => window.open('https://ripple.com/', '_blank')}
          />
        </button>
        <button className={classes.stellarLogoButton} position="right">
          <img
            src="/credits/stellar-logo.png"
            alt="Stellar"
            onClick={() => window.open('https://www.stellar.org/', '_blank')}
            width="100%"
          />
        </button>
      </Box>
      <Typography variant="h5" className={classes.header}>
        Event Organisers
      </Typography>
      <Box className={classes.partnersLogoWrapper}>
        <Box className={classes.ftsLogo}>
          <img
            src="/credits/FTS-Logo-Transparent.png"
            alt="NUS FTS"
            width="70%"
            onClick={() =>
              window.open('https://fintechsociety.comp.nus.edu.sg/', '_blank')
            }
          />
        </Box>
        <Box className={classes.ftsLogo}>
          <img
            src="/credits/nus_ftl_logo.png"
            alt="NUS FTL"
            width="100%"
            onClick={() =>
              window.open('https://fintechlab.nus.edu.sg/', '_blank')
            }
          />
        </Box>
      </Box>
      <Typography variant="h5" className={classes.header}>
        Event Partners
      </Typography>
      <Box
        className={classes.shopeeLogoWrapper}
        justifyContent="center"
        margin="auto"
      >
        <img
          src="/credits/shopee_logo.png"
          alt="Shopee"
          width="40%"
          justifyContent="center"
          margin="auto"
        />
      </Box>
    </Box>
  )
}

export default Sponsors
