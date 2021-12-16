import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'
import ImageComponent from './image'
import Vector from './vector'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    flexDirection: 'column',
    position: 'relative',
    zIndex: '-10',
    padding: '32px 8px',
    overflow: 'hidden',
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
  bold: {
    color: theme.palette.primary.main,
    fontWeight: 600,
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
    top: '25vh',
    zIndex: '-1',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '50%',
      width: 'auto',
    },
  },
}))

export default function About() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h3" className={classes.header}>
          ABOUT FINTECH MONTH
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
            NUS Fintech Month constitutes a{' '}
            <span className={classes.bold}>
              series of workshops and panel discussions{' '}
            </span>
            designed to give university and polytechnic students an insight into
            the world of Fintech. The workshops range from beginner to advance
            levels, allowing everyone to participate regardless of background.
          </Typography>

          <Typography paragraph={true}>
            Additionally, there will be a{' '}
            <span className={classes.bold}>hackathon </span>
            where a real-world problem will be tackled using Fintech, thus
            demonstrating the usefulness of this technology in a real world
            context. We are anticipating rapid sign ups, with more than{' '}
            <span className={classes.bold}>300 </span> students participating,
            so be sure to register early with your{' '}
            <span className={classes.bold}>team of 2 - 5 </span> to ensure your
            slot is reserved!
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
