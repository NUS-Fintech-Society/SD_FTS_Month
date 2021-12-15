import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 16,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 32,
    },
  },
  sectionWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 24,
  },
  sectionHeader: {
    color: theme.palette.text.contrast,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  bybitImageWrapper: {
    cursor: 'pointer',
    height: 150,
    width: 450,
    backgroundColor: theme.palette.background.primary,
    borderRadius: 20,
    padding: 16,
    [theme.breakpoints.down('xs')]: {
      height: 100,
      width: 300,
    },
  },
  rowWrapper: {
    display: 'flex',
    marginTop: 24,
  },
  rippleImageWrapper: {
    cursor: 'pointer',
    height: 150,
    width: 250,
    backgroundColor: theme.palette.background.primary,
    borderRadius: 20,
    padding: 16,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 75,
      width: 120,
    },
  },
  stellarImageWrapper: {
    cursor: 'pointer',
    height: 150,
    width: 300,
    backgroundColor: theme.palette.background.primary,
    borderRadius: 20,
    padding: 16,
    [theme.breakpoints.down('xs')]: {
      height: 75,
      width: 170,
    },
  },
  ftsImageWrapper: {
    cursor: 'pointer',
    height: 150,
    width: 250,
    backgroundColor: theme.palette.background.primary,
    borderRadius: 20,
    padding: 16,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 75,
      width: 120,
    },
  },
  ftlImageWrapper: {
    cursor: 'pointer',
    height: 150,
    width: 300,
    backgroundColor: theme.palette.background.primary,
    borderRadius: 20,
    padding: '16px 0px',
    [theme.breakpoints.down('xs')]: {
      height: 75,
      width: 170,
    },
  },
}))

const Sponsors = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h6" className={classes.sectionHeader}>
          Sponsors
        </Typography>
        <Box className={classes.rowWrapper}>
          <Box className={classes.bybitImageWrapper}>
            <img
              src="bybit-logo-trans.png"
              alt="ByBit"
              height="100%"
              width="100%"
              onClick={() =>
                window.open('https://www.bybit.com/en-US/', '_blank')
              }
            />
          </Box>
        </Box>
        <Box className={classes.rowWrapper}>
          <div className={classes.rippleImageWrapper}>
            <img
              src="ripple-logo.png"
              alt="Ripple"
              height="100%"
              width="100%"
              onClick={() => window.open('https://ripple.com/', '_blank')}
            />
          </div>
          <div className={classes.stellarImageWrapper}>
            <img
              src="stellar-logo.png"
              alt="Stellar"
              onClick={() => window.open('https://www.stellar.org/', '_blank')}
              height="100%"
              width="100%"
            />
          </div>
        </Box>
      </Box>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h6" className={classes.sectionHeader}>
          Organisers
        </Typography>
        <Box className={classes.rowWrapper}>
          <div className={classes.ftsImageWrapper}>
            <img
              src="FTS-Logo-Transparent.png"
              alt="NUS FTS"
              height="100%"
              width="100%"
              onClick={() =>
                window.open('https://fintechsociety.comp.nus.edu.sg/', '_blank')
              }
            />
          </div>
          <div className={classes.ftlImageWrapper}>
            <img
              src="nus_ftl_logo.png"
              alt="NUS FTL"
              height="100%"
              width="100%"
              onClick={() =>
                window.open('https://fintechlab.nus.edu.sg/', '_blank')
              }
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default Sponsors
