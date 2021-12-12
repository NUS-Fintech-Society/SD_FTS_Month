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
    flexDirection: 'column',
    backgroundColor: theme.palette.background.primary,
    padding: '0px 8px',
    paddingTop: 80,
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
      date: '5 Jan',
      title: 'Commencement of Internal workshops',
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
      date: '3 Jan',
      title: 'Commencement of Hackthon First Round',
      link: '#',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      date: '17 Jan',
      title: 'First Round Submissions',
      link: '#',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      date: '24 Jan',
      title: 'Commencement of Hackathon Second Round',
      link: '#',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      date: '28 Jan',
      title: 'Second Round Submissions',
      link: '#',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
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
