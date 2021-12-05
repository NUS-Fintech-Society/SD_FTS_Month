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
    margin: 20,
  },
  box: {
    height: '20vh',
  },
}))

export default function OtherPrizes() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Other Prizes
      </Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle1">Most Creative</Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle1">Best Business Case</Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle1">Easy Domain Application</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle1">Public Favourite</Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle1">Judges Award</Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle1">Applicable for Bybit</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle1">BiDAO-Worthy</Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle1">Best Code Design</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.box}></Box>
    </div>
  )
}
