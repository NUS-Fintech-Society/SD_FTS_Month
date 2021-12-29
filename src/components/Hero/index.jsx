import React from 'react'
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Container, Typography } from '@material-ui/core'
import { Link } from 'react-scroll'
import Sponsors from './Sponsors.jsx'

const calculateTimeLeft = () => {
  let year = 2022
  let difference = +new Date(`01/01/${year}`) - +new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((difference / 1000 / 60) % 60),
      Seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

const useStyles = makeStyles((theme) => ({
  countdown: {
    position: 'relative',
    display: 'flex',
    width: 'min-content',
    left: '50%',
    transform: 'translate(-50%, 0)',
    marginTop: '40px',
    zIndex: 1,
    '& > div:not(:first-child)': {
      marginLeft: 36,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '40px',
      '& > div:not(:first-child)': {
        marginLeft: '4vw',
      },
    },
  },
  countdownUnit: {
    display: 'flex',
    width: 'min-content',
    flexGrow: 0,
    '& > div:not(:first-child)': {
      marginLeft: 8,

      [theme.breakpoints.down('sm')]: {
        marginLeft: '1vw',
      },
    },
  },
  countdownUnitLabel: {
    color: theme.palette.text.contrast,
    fontWeight: 700,
    marginTop: 8,
  },
  digit: {
    position: 'relative',
    backgroundColor: theme.palette.background.secondary,
    borderRadius: '20px',
    width: '80px',
    height: '100px',

    [theme.breakpoints.down('sm')]: {
      borderRadius: '2.5vw',
      width: '10vw',
      height: '12.5vw',
    },

    '& *': {
      margin: 'auto',
      color: theme.palette.error.main,
      fontSize: '50px',
      lineHeight: '100px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '6vw',
        lineHeight: '12.5vw',
      },
    },
  },
  SVG: {
    position: 'absolute',
    left: '50%',
    padding: 'None',
    minWidth: '100%',
    minHeight: '30%',
    top: '100%',
    transform: 'translate(-50%, -100%)',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      height: '50%',
      width: 'auto',
    },
  },
  SVGWrapper: {
    zIndex: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  titletext: {
    position: 'relative',
    marginTop: '120px',
    fontWeight: 400,
    color: theme.palette.text.contrast,
    zIndex: 1,
  },
  titleemphasis: {
    position: 'relative',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main,
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  contentWrapper: {
    padding: '48px 0px',
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      padding: '4px',
    },
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
    borderRadius: '50px',
    height: '70px',
    width: '200px',
    '&:not(:first-child)': {
      marginLeft: 24,
    },
    [theme.breakpoints.down('xs')]: {
      width: '150px',
      height: '40px',
      '& *': {
        fontSize: '1em',
      },
    },
    zIndex: 1,
  },
  sponsors: {
    zIndex: 1,
    position: 'relative',
  },
  prizeTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '48px',
    },
  },
  prizeSubtitle: {
    [theme.breakpoints.up('md')]: {
      fontSize: '28px',
    },
    [theme.breakpoints.up('xs')]: {
      fontSize: '24px',
    },
  },
}))

const Hero = () => {
  const classes = useStyles()

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  })

  return (
    <Box className={classes.root}>
      <Container className={classes.contentWrapper} maxWidth="md">
        <div className={classes.SVGWrapper}>
          <img src="sprite-back.svg" className={classes.SVG} />
          <img src="sprite-front.svg" className={classes.SVG} />
        </div>
        <Typography variant="h2" className={classes.titletext}>
          NUS Fintech Month
        </Typography>
        <Typography variant="h2" className={classes.titleemphasis}>
          2022
        </Typography>
        <div className={classes.countdown}>
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((x, i) => (
            <div key={i}>
              <div className={classes.countdownUnit}>
                <div className={classes.digit}>
                  <Typography variant="h2">
                    {Math.floor(timeLeft[x] / 10)}
                  </Typography>
                </div>
                <div className={classes.digit}>
                  <Typography variant="h2">{timeLeft[x] % 10}</Typography>
                </div>
              </div>
              <Typography
                variant="body2"
                className={classes.countdownUnitLabel}
              >
                {x}
              </Typography>
            </div>
          ))}
        </div>

        <Box style={{ position: 'relative', marginTop: '10px' }}>
          <Box
            style={{
              position: 'relative',
              zIndex: 1,
              marginTop: '20px',
            }}
          >
            <Typography
              variant="h1"
              className={classes.prizeTitle}
              style={{ color: '#FFF' }}
            >
              $50,000
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.prizeSubtitle}
              style={{ color: '#FFF' }}
            >
              cash prizes to be won
            </Typography>
          </Box>
          <img
            style={{
              position: 'relative',
              width: '80%',
              maxWidth: '400px',
              zIndex: 1,
            }}
            src="hero-trophy.png"
          />
          <img
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '700px',
              width: '90%',
              zIndex: 0,
            }}
            src="hero-confetti.png"
          />
        </Box>

        <Box display="flex" justifyContent="center">
          <Button
            color="primary"
            variant="contained"
            className={classes.buttonWrapper}
          >
            <Typography variant="subtitle1" className={classes.buttontext}>
              <Link to="hackathon" smooth={true} duration={500}>
                Hackathon
              </Link>
            </Typography>
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={classes.buttonWrapper}
          >
            <Typography variant="subtitle1" className={classes.buttontext}>
              <Link to="workshops" smooth={true} duration={500}>
                Workshops
              </Link>
            </Typography>
          </Button>
        </Box>
        <div className={classes.sponsors}>
          <Sponsors />
        </div>
      </Container>
    </Box>
  )
}

export default Hero
