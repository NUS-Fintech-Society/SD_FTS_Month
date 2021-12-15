import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, CssBaseline, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    minheight: '144vh',
    width: '100%',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.background.primary,
    backgroundImage: `url(${'/prizes-bg.png'})`,
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    backgroundPosition: 'center right',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 700,
    marginTop: '25vh',
    textAlign: 'center',
  },
  firstPrize: {
    borderRadius: theme.shape.borderRadius,
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 1), rgba(255, 239, 215, 1))',
    boxShadow: '4px 24px 60px rgba(109, 141, 173, 0.25);',
    textAlign: 'center',
    margin: 20,
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  secondPrize: {
    borderRadius: theme.shape.borderRadius,
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 1), rgba(237, 235, 232, 1))',
    boxShadow: '4px 24px 60px rgba(109, 141, 173, 0.25);',
    textAlign: 'center',
    margin: 20,
  },
  thirdPrize: {
    borderRadius: theme.shape.borderRadius,
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 1), rgba(234, 210, 175, 1))',
    boxShadow: '4px 24px 60px rgba(109, 141, 173, 0.25);',
    textAlign: 'center',
    margin: 20,
  },
  firstPrizeText: {
    color: theme.palette.text.firstPrize,
    fontWeight: 700,
    fontSize: '36px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  secondPrizeText: {
    color: theme.palette.text.secondPrize,
    fontWeight: 700,
    fontSize: '36px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  thirdPrizeText: {
    color: theme.palette.text.thirdPrize,
    fontWeight: 700,
    fontSize: '36px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  coinAmtText: {
    fontWeight: 700,
    fontSize: '3vw',
    marginRight: '2.5vh',
    [theme.breakpoints.down('sm')]: {
      marginRight: '2vh',
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: '0.2vh',
    },
  },
  boxWrapper: {
    marginBottom: '6vh',
  },
  box: {
    height: '10vh',
  },
  header: {
    fontWeight: 700,
    fontSize: '64px',
    color: theme.palette.text.prizeHeader,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
  },
  description: {
    fontWeight: 400,
    fontSize: '48px',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  cryptoImage: {
    maxWidth: '70%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '30%',
    },
  },
}))

const Prizes = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        PRIZES
      </Typography>
      <CssBaseline></CssBaseline>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8} md={4}>
          <Box
            padding={2}
            justify="center"
            display="flex"
            flexDirection="column"
          >
            <Typography className={classes.header}>Hackathon Prizes</Typography>
            <Typography className={classes.description}>
              Stand a chance to win highly attractive cash prizes!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={4}>
          <Box
            padding={2}
            justify="center"
            alignItems="center"
            display="flex"
            flexDirection="column"
          >
            <img className={classes.image} alt="prizes" src="prizes.png"></img>
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={4} md={3}>
          <Box
            padding={1.5}
            justify="center"
            alignItems="center"
            display="flex"
            flexDirection="column"
            className={classes.firstPrize}
          >
            <Box
              flexDirection="row"
              display="flex"
              justify="center"
              alignItems="center"
              className={classes.boxWrapper}
            >
              <Typography className={classes.coinAmtText}>$15000</Typography>
            </Box>
            <Typography className={classes.firstPrizeText}>
              1st Prize
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} md={3}>
          <Box
            padding={1.5}
            justify="center"
            alignItems="center"
            display="flex"
            flexDirection="column"
            className={classes.secondPrize}
          >
            <Box
              flexDirection="row"
              display="flex"
              justify="center"
              alignItems="center"
              className={classes.boxWrapper}
            >
              <Typography className={classes.coinAmtText}>$10000</Typography>
            </Box>
            <Typography className={classes.secondPrizeText}>
              2nd Prize
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} md={3}>
          <Box
            padding={1.5}
            justify="center"
            alignItems="center"
            display="flex"
            flexDirection="column"
            className={classes.thirdPrize}
          >
            <Box
              flexDirection="row"
              display="flex"
              justify="center"
              alignItems="center"
              className={classes.boxWrapper}
            >
              <Typography className={classes.coinAmtText}>$5000</Typography>
            </Box>
            <Typography className={classes.thirdPrizeText}>
              3rd Prize
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.box}></Box>
    </div>
  )
}

export default Prizes
