import React from 'react'
import { Box } from '@material-ui/core'
import MyTimeline from '../../components/MyTimeline'
import Layout from '../../components/Layout'

const Timeline = () => {
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
    <Layout>
      <Box>
        <MyTimeline
          title="COMPETITION TIMELINE"
          content={compTimelineContent}
        />
        <MyTimeline
          title="WORKSHOP TIMELINE"
          content={workshopTimelineContent}
        />
      </Box>
    </Layout>
  )
}

export default Timeline
