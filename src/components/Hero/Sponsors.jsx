import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '0px 10vw 110px 10vw',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '60px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '40px',
      paddingRight: '40px',
    },
  },
  sponsorTitle: {
    textAlign: 'center',
  },
  sponsorLogoWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '48px',
    textAlign: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '24px',
    },
  },
  header: {
    fontWeight: 700,
    marginBottom: '48px',
    textAlign: 'center',
    paddingTop: '100px',
  },
  bodyWrapper: {
    marginTop: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
  bybitLogodiv: {
    borderRadius: '9px',
    flex: '0 1 110px',
    marginRight: '2%',
  },
  rippleLogodiv: {
    border: '0px',
    flex: '0 1 223px',
    marginRight: '2%',
  },
  stellarLogodiv: {
    flex: '0 1 111px',
  },
  partnersLogoWrapperTop: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
  },
  partnersLogoWrapperBot: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
  },
  shopeeLogoWrapper: {
    flex: '0 1 305px',
    marginRight: '2vw',
    padding: '0',
  },
  nusLogodiv: {
    backgroundColor: theme.palette.background.primary,
    flex: '0 1 270px',
    borderRadius: '20px',
    marginRight: '16px',
    padding: '16px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '10px',
      marginRight: '2vw',
      padding: '2vw',
    },
  },
  ftsLogo: {
    backgroundColor: theme.palette.background.primary,
    flex: '0 1 228px',
    borderRadius: '20px',
    padding: '0 16px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '10px',
      marginRight: '2vw',
      padding: '2vw',
    },
  },
  nusftsLogodiv: {
    flex: '0 1 438px',
    backgroundColor: theme.palette.background.primary,
    borderRadius: '20px',
    padding: '4px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '10px',
      marginRight: '2vw',
      padding: '2vw',
    },
  },
}))

const Sponsors = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.sponsorLogoWrapper}>
        <div className={classes.bybitLogodiv}>
          <img
            src="bybit-logo.png"
            alt="ByBit"
            width="100%"
            onClick={() => window.open('https://www.bybit.com/en-US/', 'ByBit')}
          />
        </div>
        <div className={classes.rippleLogodiv}>
          <img
            src="ripple-logo.png"
            alt="Ripple"
            width="100%"
            onClick={() => window.open('https://ripple.com/', '_blank')}
          />
        </div>
        <div className={classes.stellarLogodiv}>
          <img
            src="stellar-logo.png"
            alt="Stellar"
            onClick={() => window.open('https://www.stellar.org/', '_blank')}
            width="100%"
          />
        </div>
      </Box>
      <Box className={classes.partnersLogoWrapperTop}>
        <div className={classes.nusLogodiv}>
          <img
            src="nus-logo.png"
            alt="NUS"
            width="100%"
            onClick={() => window.open('https://www.nus.edu.sg/', '_blank')}
          />
        </div>
        <Box className={classes.ftsLogo}>
          <img src="FTS-Logo-Transparent.png" alt="NUS FTS" width="100%" />
        </Box>
      </Box>
      <Box className={classes.partnersLogoWrapperBot}>
        <div className={classes.shopeeLogoWrapper}>
          <img
            src="shopee_logo.png"
            alt="Shopee"
            width="100%"
            justifyContent="center"
            margin="auto"
          />
        </div>
        <div className={classes.nusftsLogodiv}>
          <img
            src="nus_ftl_logo.png"
            alt="NUS FTL"
            width="100%"
            justifyContent="center"
            margin="auto"
          />
        </div>
      </Box>
    </Box>
  )
}

export default Sponsors
