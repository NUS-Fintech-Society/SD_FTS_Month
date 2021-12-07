import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
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

  const workshopTimelineContent = [
    {
      date: '16 Jan',
      title: 'This is the Workshop Timeline',
      link: '#',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      date: '17 Jan',
      title: 'This is the Timeline page',
      link: '#',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      date: '18 Jan',
      title: 'This is the Timeline page',
      link: '#',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
  ]

  const compTimelineContent = [
    {
      date: '15 Jan',
      title: 'This is the Start of the Competition',
      link: '#',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      date: '17 Jan',
      title: 'This is the Timeline page',
      link: '#',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      date: '18 Jan',
      title: 'This is the Timeline page',
      link: '#',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
  ]

  return (
    <Box>
      <MyTimeline title="COMPETITION TIMELINE" content={compTimelineContent} />
      <MyTimeline title="WORKSHOP TIMELINE" content={workshopTimelineContent} />
    </Box>
  )
}

export default Timeline
