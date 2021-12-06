import React from 'react'
import Layout from '../../components/Layout'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import WorkshopRenderer from './WorkshopRenderer'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Workshops = () => {
  const classes = useStyles()
  const renderedWorkshops = WorkshopRenderer()
  return (
    <Layout>
      <Box className={classes.root}>{renderedWorkshops}</Box>
    </Layout>
  )
}

export default Workshops
