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
  },
  secondPrizeText: {
    color: theme.palette.text.secondPrize,
    fontWeight: 700,
    fontSize: '36px',
  },
  thirdPrizeText: {
    color: theme.palette.text.thirdPrize,
    fontWeight: 700,
    fontSize: '36px',
  },
  coinAmtText: {
    fontWeight: 700,
    fontSize: '48px',
    marginRight: '3vh',
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
  },
  description: {
    fontWeight: 400,
    fontSize: '48px',
    textAlign: 'left',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
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
            alignItems="center"
            display="flex"
            flexDirection="column"
          >
            <Typography className={classes.header}>Hackathon Prizes</Typography>
            <Typography className={classes.description}>
              Stand a chance to win BTC and more!
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
        <Grid item xs={8} md={3}>
          <Box
            padding={2}
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
              <Typography className={classes.coinAmtText}>0.5</Typography>
              <img alt="cryptocurrency" src="crypto.png"></img>
            </Box>
            <Typography className={classes.firstPrizeText}>
              1st Prize
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box
            padding={2}
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
              <Typography className={classes.coinAmtText}>0.25</Typography>
              <img alt="cryptocurrency" src="crypto.png"></img>
            </Box>
            <Typography className={classes.secondPrizeText}>
              2nd Prize
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box
            padding={2}
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
              <Typography className={classes.coinAmtText}>0.1</Typography>
              <img alt="cryptocurrency" src="crypto.png"></img>
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
