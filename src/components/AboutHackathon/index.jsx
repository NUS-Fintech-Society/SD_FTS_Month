import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid } from '@material-ui/core'
import StarsIcon from '@material-ui/icons/Stars'
import PersonIcon from '@material-ui/icons/Person'
import HelpIcon from '@material-ui/icons/HelpOutline'
import ChartIcon from '@material-ui/icons/InsertChart'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    flexDirection: 'column',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    fontWeight: 700,
  },
  textWrapper: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
    boxShadow: '4px 24px 60px rgba(109, 141, 173, 0.25);',
    textAlign: 'left',
    margin: 20,
  },
  box: {
    height: '20vh',
  },
  captionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    gap: '10px',
  },
  paragraphText: {
    fontSize: '18px',
    color: 'rgb(0,0,0,0.6)',
  },
}))

export default function AboutHackathon() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10} md={5}>
          <Box padding={3} className={classes.textWrapper}>
            <Box className={classes.captionWrapper}>
              <ChartIcon fontSize="large" color="primary" />
              <Typography variant="subtitle1">About the hackathon</Typography>
            </Box>
            <Typography
              className={classes.paragraphText}
              paragraph={true}
              variant="body1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              accumsan, nulla et vestibulum porttitor, diam nisi maximus tortor,
              quis sagittis ante nibh sit amet sapien. Nunc maximus felis ut
              sapien
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} md={5}>
          <Box padding={3} className={classes.textWrapper}>
            <Box className={classes.captionWrapper}>
              <StarsIcon fontSize="large" color="primary" />
              <Typography variant="subtitle1">Objective</Typography>
            </Box>
            <Typography
              className={classes.paragraphText}
              paragraph={true}
              variant="body1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              accumsan, nulla et vestibulum porttitor, diam nisi maximus tortor,
              quis sagittis ante nibh sit amet sapien. Nunc maximus felis ut
              sapien
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10} md={5}>
          <Box padding={3} className={classes.textWrapper}>
            <Box className={classes.captionWrapper}>
              <PersonIcon fontSize="large" color="primary" />
              <Typography variant="subtitle1">Who can join?</Typography>
            </Box>
            <Typography
              className={classes.paragraphText}
              paragraph={true}
              variant="body1"
            >
              All students from tertiary education institutes around the world
              are welcome to sign up for the hackathon. You don’t necessarily
              have to be from NUS!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} md={5}>
          <Box padding={3} className={classes.textWrapper}>
            <Box className={classes.captionWrapper}>
              <HelpIcon fontSize="large" color="primary" />
              <Typography variant="subtitle1">Why should YOU join</Typography>
            </Box>
            <Typography
              className={classes.paragraphText}
              paragraph={true}
              variant="body1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              accumsan, nulla et vestibulum porttitor, diam nisi maximus tortor,
              quis sagittis ante nibh sit amet sapien. Nunc maximus felis ut
              sapien
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
