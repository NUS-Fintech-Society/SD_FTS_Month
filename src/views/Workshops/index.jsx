import React from 'react'
import Layout from '../../components/Layout'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import WorkshopRenderer from './WorkshopRenderer'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '250vh', // to be adjusted based on number of workshops
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: '400vh', // to be adjusted based on number of workshops
      display: 'flex',
      margin: 'auto',
    },
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
