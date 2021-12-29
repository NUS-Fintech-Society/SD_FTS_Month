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

const WorkshopTimeline = () => {
  const classes = useStyles()
  const workshopTimelineContent = [
    {
      date: '5 Jan',
      title: 'Commencement of Internal workshops',
      link: '',
      content: '',
    },
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
      content: '',
    },
  ]

  return (
    <Box className={classes.root}>
      <MyTimeline title="WORKSHOP TIMELINE" content={workshopTimelineContent} />
    </Box>
  )
}

export default WorkshopTimeline
