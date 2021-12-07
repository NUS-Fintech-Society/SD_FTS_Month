import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import CompetitionTimeline from '../../components/CompetitionTimeline'
import MyTimeline from '../../components/MyTimeline'

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

  const timelineContent = [
    {
      date: '16 Jan',
      title: 'This is the Timeline page',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      date: '17 Jan',
      title: 'This is the Timeline page',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      date: '18 Jan',
      title: 'This is the Timeline page',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
  ]

  return (
    <Box>
      <MyTimeline title="COMPETITION TIMELINE" content={timelineContent} />
      <MyTimeline title="WORKSHOP TIMELINE" content={timelineContent} />
    </Box>
  )
}

export default Timeline
