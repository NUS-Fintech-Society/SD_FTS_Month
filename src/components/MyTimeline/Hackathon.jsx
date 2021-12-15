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
    paddingBottom: 80,
    minHeight: '100vh',
    height: 'min-content',
    '& > *': {
      boxSizing: 'border-box',
    },
  },
}))

const HackathonTimeline = () => {
  const classes = useStyles()
  const hackTimelineContent = [
    {
      date: '3 Jan',
      title: 'Commencement of Hackthon First Round',
      link: '',
      content: '',
    },
    {
      date: '17 Jan',
      title: 'First Round Submissions',
      link: '',
      content: '',
    },
    {
      date: '24 Jan',
      title: 'Commencement of Hackathon Second Round',
      link: '',
      content: '',
    },
    {
      date: '28 Jan',
      title: 'Second Round Submissions',
      link: '',
      content: '',
    },
  ]

  return (
    <Box className={classes.root}>
      <MyTimeline title="COMPETITION TIMELINE" content={hackTimelineContent} />
    </Box>
  )
}

export default HackathonTimeline
