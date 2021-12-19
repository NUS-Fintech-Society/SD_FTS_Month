import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography, Grid } from '@material-ui/core'
import DATA from '../../data/speakers'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '54px 16px',
    backgroundImage: `url(${'WorkshopBanner.svg'})`,
    backgroundSize: 'cover',
  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  header: {
    marginBottom: 16,
    color: theme.palette.text.contrast,
  },

  textWrapper: {
    marginTop: 16,
  },

  text: {
    color: theme.palette.text.contrast,
  },

  textHighlight: {
    color: theme.palette.primary.main,
    fontStyle: 'italic',
  },

  image: {
    borderRadius: '50%',
    width: 150,
    height: 150,
    objectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      width: 120,
      height: 120,
    },
  },

  speakerText: {
    marginTop: 8,
    color: theme.palette.primary.main,
    fontWeight: 600,
  },

  roleText: {
    color: theme.palette.text.contrast,
    fontWeight: 600,
  },

  companyText: {
    color: theme.palette.text.contrast,
    fontStyle: 'italic',
  },

  gridBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40,
    [theme.breakpoints.down('xs')]: {
      padding: 16,
    },
  },
}))

export default function WorkshopBanner() {
  const classes = useStyles()

  const renderSpeakers = () => {
    return DATA.map((speaker, index) => {
      return (
        <Grid item xs={6} md={3} key={index}>
          <Box className={classes.gridBox}>
            <img
              className={classes.image}
              src={speaker.image}
              alt={speaker.name}
            />
            <Typography className={classes.speakerText}>
              {speaker.name}
            </Typography>
            <Typography className={classes.roleText}>{speaker.role}</Typography>
            <Typography className={classes.companyText}>
              {speaker.company}
            </Typography>
          </Box>
        </Grid>
      )
    })
  }

  return (
    <Box className={classes.root}>
      <Container className={classes.contentWrapper} maxWidth="md">
        <Typography variant="h3" className={classes.header}>
          WORKSHOPS & SYMPOSIUMS
        </Typography>
        <Box className={classes.textWrapper}>
          <Typography className={classes.text}>
            Acquire your knowledge from experienced speakers in the industry.
          </Typography>

          <Typography className={classes.text}>
            Enrol now to earn your verifiable certificates of participation!
          </Typography>

          <Typography className={classes.textHighlight}>
            *Attendance would be taken during the workshops
          </Typography>

          <Grid container>{renderSpeakers()}</Grid>
          <Pagination count={10} color="primary" />
        </Box>
      </Container>
    </Box>
  )
}
