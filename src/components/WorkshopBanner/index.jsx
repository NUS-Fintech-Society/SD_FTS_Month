import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography, Grid } from '@material-ui/core'
import SPEAKERS from '../../data/speakers'
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
  sponsorImage: {
    borderRadius: '50%',
    width: 175,
    height: 175,
    objectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      width: 130,
      height: 130,
    },
  },
  guestImage: {
    borderRadius: '50%',
    width: 140,
    height: 140,
    objectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      width: 110,
      height: 110,
    },
  },
  sectionHeader: {
    color: theme.palette.text.contrast,
    fontWeight: 600,
    marginTop: 32,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 16,
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
  pagination: {
    '& .MuiPagination-ul': {
      justifyContent: 'center',
    },
    '& button': {
      color: theme.palette.text.contrast,
    },
  },
}))

export default function WorkshopBanner() {
  const classes = useStyles()
  const { SPONSOR_SPEAKERS, GUEST_SPEAKERS } = SPEAKERS
  const [page, setPage] = useState(1)
  const guestSpeakersPerPage = 8
  const totalPages = Math.ceil(GUEST_SPEAKERS.length / guestSpeakersPerPage)

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const renderSponsorSpeakers = () => {
    return SPONSOR_SPEAKERS.map((speaker, index) => {
      return (
        <Grid item xs={6} md={3} key={index}>
          <Box className={classes.gridBox}>
            <img
              className={classes.sponsorImage}
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
  const renderGuestSpeakers = () => {
    const start = (page - 1) * guestSpeakersPerPage
    const end = start + guestSpeakersPerPage
    return GUEST_SPEAKERS.slice(start, end).map((speaker, index) => {
      return (
        <Grid item xs={6} md={3} key={index}>
          <Box className={classes.gridBox}>
            <img
              className={classes.guestImage}
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
          <Typography className={classes.sectionHeader} variant="subtitle1">
            SPONSOR SPEAKERS
          </Typography>
          <Grid container>{renderSponsorSpeakers()}</Grid>
          <Typography className={classes.sectionHeader} variant="subtitle1">
            GUEST SPEAKERS
          </Typography>
          <Grid container>{renderGuestSpeakers()}</Grid>
          <Pagination
            count={totalPages}
            page={page}
            color="primary"
            className={classes.pagination}
            onChange={handlePageChange}
          />
        </Box>
      </Container>
    </Box>
  )
}
