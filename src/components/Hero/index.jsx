import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  countdown: {
    marginTop: '40px',
    position: 'relative',
    display: 'flex',
    width: 'min-content',
    '& > div:not(:first-child)': {
      marginLeft: 36,
    },
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  countdownUnit: {
    display: 'flex',
    width: 'min-content',
    flexGrow: 0,
    '& > div:not(:first-child)': {
      marginLeft: 8,
    },
  },
  countdownUnitLabel: {
    color: theme.palette.text.contrast,
    fontWeight: 700,
    paddingTop: '8px',
  },
  digit: {
    position: 'relative',
    backgroundColor: theme.palette.background.secondary,
    borderRadius: '20px',
    width: '80px',
    height: '100px',

    '& *': {
      margin: 'auto',
      color: theme.palette.error.main,
      lineHeight: '100px',
    },
  },
  SVG: {
    position: 'absolute',
    left: '0px',
    padding: 'None',
    width: '100%',
    top: '100%',
    transform: 'translateY(-100%)',
    zIndex: 0,
  },
  titletext: {
    marginTop: '120px',
    fontWeight: 400,
    color: theme.palette.text.contrast,
    zIndex: 1,
  },
  titleemphasis: {
    marginTop: '20px',
    fontWeight: 700,
    color: theme.palette.error.main,
    zIndex: 1,
  },
  buttontext: {
    fontWeight: 400,
    color: theme.palette.text.contrast,
    zIndex: 1,
  },
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main,
    position: 'relative',
  },
  contentWrapper: {
    padding: '48px 0px',
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
  },
  header: {
    fontWeight: 700,
  },
  bodyWrapper: {
    marginTop: 16,
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
    marginTop: '40px',
    marginBottom: '100px',
    borderRadius: '50px',
    height: '80px',
    width: '320px',
    '& :not(:first-child)': {
      marginLeft: 12,
    },
    zIndex: 1,
  },
}))

const Hero = () => {
  const classes = useStyles()

  const timeUnits = ['Days', 'Hours', 'Minutes', 'Seconds']

  return (
    <Box className={classes.root}>
      <Container className={classes.contentWrapper} maxWidth="md">
        <img src="sprite-back.svg" className={classes.SVG} />
        <img src="sprite-front.svg" className={classes.SVG} />
        <Typography variant="h2" className={classes.titletext}>
          NUS Fintech Month
          <br />
          X
          <br />
          ByBit Hackathon
        </Typography>
        <Typography variant="h2" className={classes.titleemphasis}>
          2022
        </Typography>
        <div className={classes.countdown}>
          {[11, 22, 23, 50].map((x, i) => (
            <div key={i}>
              <div className={classes.countdownUnit}>
                <div className={classes.digit}>
                  <Typography variant="h2">{Math.floor(x / 10)}</Typography>
                </div>
                <div className={classes.digit}>
                  <Typography variant="h2">{x % 10}</Typography>
                </div>
              </div>
              <div className={classes.countdownUnitLabel}>
                <Typography variant="p">{timeUnits[i]}</Typography>
              </div>
            </div>
          ))}
        </div>
        <Button
          color="primary"
          variant="contained"
          className={classes.buttonWrapper}
        >
          <Typography variant="h5" className={classes.buttontext}>
            Apply Now
          </Typography>
        </Button>
      </Container>
    </Box>
  )
}

export default Hero
