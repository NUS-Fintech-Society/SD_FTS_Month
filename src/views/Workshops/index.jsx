import React from 'react'
import Layout from '../../components/Layout'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import useWindowDimensions from './WindowDimensions'
import WorkshopRenderer from './WorkshopRenderer'

const useStyles = makeStyles(() => ({
  root: {
    height: '200vh', // to be adjusted based on number of workshops
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallRoot: {
    height: '320vh', // to be adjusted based on number of workshops
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Workshops = () => {
  const classes = useStyles()
  const isSmallWindow = useWindowDimensions().width < 800
  const renderedWorkshops = WorkshopRenderer()
  return (
    <Layout>
      <Box className={isSmallWindow ? classes.smallRoot : classes.root}>
        {renderedWorkshops}
      </Box>
    </Layout>
  )
}

export default Workshops
