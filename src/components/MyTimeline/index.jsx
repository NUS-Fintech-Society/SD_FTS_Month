import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import MyTimeline from './mytimeline.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    padding: '0px 8px',
    paddingTop: 80,
    paddingBottom: 80,
    minHeight: '100vh',
    height: 'min-content',
    '& > *': {
      boxSizing: 'border-box',
    },
  },
}))

const Timeline = () => {
  const classes = useStyles()
  const workshopTimelineContent = [
    {
      date: '10 Jan',
      title: 'Symposium 1',
      link: '',
      content: '',
    },
    {
      date: '14 Jan',
      title: 'Symposium 2 and 3',
      link: '',
      content: 'Symposium 2: 4pm-5.30pm | Symposium 3: 8pm-9.30pm',
    },
  ]

  const compTimelineContent = [
    {
      date: '3 Jan',
      title: 'Start of Hackathon',
      link: '',
      content: '',
    },
    {
      date: '17 Jan',
      title: 'First Round of Submissions',
      link: '',
      content: '',
    },
    {
      date: '24 Jan',
      title: 'Second Round Starts (Finals)',
      link: '',
      content: '',
    },
    {
      date: '28 Jan',
      title: 'Second Round Submissions (Finals)',
      link: '',
      content: '',
    },
  ]

  return (
    <Box className={classes.root}>
      <MyTimeline title="COMPETITION TIMELINE" content={compTimelineContent} />
      <MyTimeline title="WORKSHOP TIMELINE" content={workshopTimelineContent} />
    </Box>
  )
}

export default Timeline
