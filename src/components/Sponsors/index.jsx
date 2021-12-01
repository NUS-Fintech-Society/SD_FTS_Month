import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Typography } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: theme.palette.background.secondary,
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#123123',
  },
  sectionTitle: {
    position: 'absolute',
    top: '10%',
    height: '43px',
    width: '279px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    position: 'absolute',
    top: '20%',
    height: '21px',
    width: '1000px',
    textAlign: 'center',
  },
  sponsorTitle: {
    position: 'absolute',
    top: '27%',
    width: '953px',
    height: '40px',
    textAlign: 'center',
  },
  sponsorLogoWrapper: {
    position: 'absolute',
    top: '37%',
    height: '240px',
    alignItems: 'center',
  },

  header: {
    fontWeight: 700,
  },
  bodyWrapper: {
    marginTop: 16,
    textAlign: 'center',
  },
  iconWrapper: {
    marginTop: 16,
    '& :not(:first-child)': {
      marginLeft: 12,
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
      fontSize: 32,
    },
  },
  buttonWrapper: {
    marginTop: 16,
    '& :not(:first-child)': {
      marginLeft: 12,
    },
  },
}))

const Sponsors = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.sectionTitle}>
        <Typography variant="h3" className={classes.header}>
          OUR SPONSORS
        </Typography>
      </Box>
      <Box className={classes.description}>
        <Typography>
          Thank you to our sponsors, Bybit, Ripple and Stellar for making this
          event possible!
        </Typography>
      </Box>
      <Box className={classes.sponsorTitle}>
        <Typography variant="h3" className={classes.header}>
          Supported By:
        </Typography>
      </Box>
      <Box className={classes.sponsorLogoWrapper}>
        <Button variant="contained"></Button>
      </Box>
    </Box>
  )
}

export default Sponsors
