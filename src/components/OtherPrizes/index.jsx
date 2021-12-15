import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    fontWeight: 700,
  },
  textWrapper: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
    boxShadow: '4px 24px 60px rgba(109, 141, 173, 0.25);',
    textAlign: 'center',
    margin: 30,
    [theme.breakpoints.down('sm')]: {
      margin: 16,
    },
  },
  box: {
    height: '20vh',
  },
  text: {
    fontSize: '26px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  boldedText: {
    fontSize: '24px',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
  gridContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
}))

export default function OtherPrizes() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        OTHER PRIZES
      </Typography>
      <Grid
        container
        className={classes.gridContainer}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6} md={4}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography className={classes.text}>Most Creative</Typography>
            <Typography className={classes.boldedText}>$2500</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography className={classes.text}>Best Business Case</Typography>
            <Typography className={classes.boldedText}>$2500</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography className={classes.text}>
              Easy Domain Application
            </Typography>
            <Typography className={classes.boldedText}>$2500</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography className={classes.text}>Public Favourite</Typography>
            <Typography className={classes.boldedText}>$2500</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography className={classes.text}>Judges Award</Typography>
            <Typography className={classes.boldedText}>$2500</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography className={classes.text}>
              Applicable for Bybit
            </Typography>
            <Typography className={classes.boldedText}>$2500</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.gridContainer}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6} md={4}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography className={classes.text}>BitDAO-Worthy</Typography>
            <Typography className={classes.boldedText}>$2500</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography className={classes.text}>Best Code Design</Typography>
            <Typography className={classes.boldedText}>$2500</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.box}></Box>
    </div>
  )
}
