import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Container, Typography } from '@material-ui/core'
import WorkshopCard from './WorkshopCard'
import WORKSHOPS from '../../data/workshops'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 48,
    minHeight: '100vh',
    [theme.breakpoints.down('xs')]: {
      padding: '24px 4px',
      textAlign: 'center',
    },
  },
  bodyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    marginTop: 48,
    marginBottom: 24,
    fontWeight: 600,
  },
  button: {
    fontSize: 20,
    borderRadius: '50px',
    height: '60px',
    width: '200px',
    marginBottom: 8,
    '& .MuiTypography-root': {
      color: theme.palette.text.contrast,
    },
  },
  sectionWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '100%',
    '& .MuiCard-root': {
      margin: 16,
    },
    [theme.breakpoints.down('xs')]: {
      '& .MuiCard-root': {
        margin: '16px 4px',
      },
    },
  },
}))

const Workshops = () => {
  const classes = useStyles()

  const { INTRO_WORKSHOPS, INDUSTRY_WORKSHOPS, SYMPOSIUMS } = WORKSHOPS

  const renderWorkshops = (data) => {
    return data.map((ws) => {
      return <WorkshopCard key={ws.key} workshop={ws} />
    })
  }

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" className={classes.bodyWrapper}>
        <Typography variant="h3" className={classes.title}>
          WORKSHOP DETAILS
        </Typography>
        <ul>
          <Typography component="li">
            Participants will earn a verifiable certificate of participation
            when participating in each workshop.
          </Typography>
          <Typography component="li">
            Attendance will be taken during the workshops. A full attendance is
            required in order to receive the certificates.
          </Typography>
        </ul>

        <Typography variant="h5" className={classes.header}>
          Introductory Workshops
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          <Typography variant="subtitle1">Register Now</Typography>
        </Button>
        <Box className={classes.sectionWrapper}>
          {renderWorkshops(INTRO_WORKSHOPS)}
        </Box>

        <Typography variant="h5" className={classes.header}>
          Industry Workshops
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          <Typography variant="subtitle1">Register Now</Typography>
        </Button>
        <Box className={classes.sectionWrapper}>
          {renderWorkshops(INDUSTRY_WORKSHOPS)}
        </Box>

        <Typography variant="h5" className={classes.header}>
          Symposiums
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          <Typography variant="subtitle1">Register Now</Typography>
        </Button>
        <Box className={classes.sectionWrapper}>
          {renderWorkshops(SYMPOSIUMS)}
        </Box>
      </Container>
    </Box>
  )
}

export default Workshops
