import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'
import ImageComponent from './image'
import Vector from './vector'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    flexDirection: 'column',
    position: 'relative',
    zIndex: '-10',
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

  span: {
    color: theme.palette.primary.main,
  },
  contentWrapper: {
    maxWidth: '1046.33px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
    boxShadow: '4px 24px 60px rgba(0, 0, 0, 0.25);',
  },
  imgBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },

  vector: {
    position: 'absolute',
    top: '14rem',
    left: '0',
    zIndex: '-1',
  },
}))

export default function About() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h2" className={classes.header}>
          About Fintech Month
        </Typography>
      </Box>
      <Container>
        <div className={classes.imgBox}>
          <ImageComponent />
        </div>
      </Container>
      <div className={classes.vector}>
        <Vector />
      </div>
      <Container className={classes.contentWrapper} maxWidth="md">
        <Box className={classes.bodyWrapper}>
          <Typography paragraph={true}>
            NUS Fintech Month is a series of workshops and panel discussions
            designed to give university and polytechnic students an insight into
            the world of FIntech. There will be workshops ranging from beginner
            levels to more advanced levels allowing everyone, no matter their
            background, to participate in this. There will also be a hackathon
            where a real-world problem will be tackled using Fintech, thus
            demonstrating the usefulness of this technology in a real world
            context.
          </Typography>

          <Typography paragraph={true}>
            We are anticipating about{' '}
            <span className={classes.span}> 150 </span> participants for the
            hackathon, consisting of teams of 2-4 people. Team members need not
            be from the same school.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
