import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import CompetitionTimeline from '../../components/CompetitionTimeline'
import WorkshopTimeline from '../../components/WorkshopTimeline'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Timeline = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <CompetitionTimeline />
      <WorkshopTimeline />
    </Box>
  )
}

export default Timeline
