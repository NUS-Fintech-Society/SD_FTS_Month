import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.secondary,
    textAlign: 'center',
  },
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.secondary,
    minHeight: '100vh',
    height: 'min-content',
    '& > *': {
      boxSizing: 'border-box',
    },
  },
  image: {
    borderRadius: '20px',
    boxShadow: '4px 24px 60px rgb(109 141 173 / 25%)',
    width: '100%',
  },
  header: {
    fontWeight: 700,
  },
  bodyWrapper: {
    marginTop: 16,
  },
  title: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5vh',
    textAlign: 'center',
  },
}))

const HackathonTimeline = () => {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Box className={classes.title}>
        <Typography variant="h3" className={classes.header}>
          TIMELINE
        </Typography>
      </Box>
      <Container className={classes.root} maxWidth="md">
        <img className={classes.image} src="timeline.jpeg" />
      </Container>
    </Box>
  )
}

export default HackathonTimeline
