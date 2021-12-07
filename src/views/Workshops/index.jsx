import React from 'react'
import Layout from '../../components/Layout'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import WorkshopRenderer from './WorkshopRenderer'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'left',
    fontWeight: 700,
    margin: 'auto',
    width: '100%',
  },
  overview: {
    textAlign: 'left',
  },
}))

const Workshops = () => {
  const classes = useStyles()
  const renderedWorkshops = WorkshopRenderer()
  return (
    <Layout>
      <Typography className={classes.title} variant="h5" textAlign="left">
        General Workshop Details:
      </Typography>
      <Box className={classes.root}>{renderedWorkshops}</Box>
    </Layout>
  )
}

export default Workshops
