import React from 'react'
import Layout from '../../components/Layout'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import WorkshopRenderer from './WorkshopRenderer'

const useStyles = makeStyles((theme) => ({
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
    maxWidth: '960px',
    paddingBottom: '35px',
    paddingTop: '60px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      justifyContent: 'center',
    },
  },
  overview: {
    textAlign: 'justify',
    margin: 'auto',
    width: '100%',
    maxWidth: '960px',
    paddingBottom: '45px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      maxWidth: '460px',
      justifyContent: 'center',
    },
  },
}))

const Workshops = () => {
  const classes = useStyles()
  const renderedWorkshops = WorkshopRenderer()
  return (
    <Layout>
      <Box
        display="flex"
        textAlign="left"
        margin="auto"
        width="100%"
        flexDirection="row"
      >
        <Box width="30%"></Box>
      </Box>
      <Box className={classes.root}>
        <Typography className={classes.title} variant="h5">
          General Workshop Details:
        </Typography>
        <Typography className={classes.overview}>
          <ul>
            <li>
              Participants will earn a verifiable certificate of participation
              when participating in each workshop.
            </li>
            <li>
              Attendace will be taken during the workshops. A full attendance is
              required in order to receive the certificates.
            </li>
          </ul>
        </Typography>

        {renderedWorkshops}
      </Box>
    </Layout>
  )
}

export default Workshops
