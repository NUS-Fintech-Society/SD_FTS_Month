import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography, Grid } from '@material-ui/core'
import { Directions } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 70,
  },
  title: {
    textAlign: 'center',
  },
  textWrapper: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
    boxShadow: '4px 24px 60px rgba(0, 0, 0, 0.15);',
    textAlign: 'center',
    margin: 20,
  },
}))

export default function OtherPrizes() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Other Prizes
      </Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle2">Most Creative</Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle2">Best Business Case</Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle2">Easy Domain Application</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle2">Public Favourite</Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle2">Judges Award</Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle2">Applicable for Bybit</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle2">BiDAO-Worthy</Typography>
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box padding={2} className={classes.textWrapper}>
            <Typography variant="subtitle2">Best Code Design</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
