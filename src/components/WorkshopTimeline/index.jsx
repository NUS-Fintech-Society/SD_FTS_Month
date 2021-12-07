import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Container, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    padding: '0px 8px',
  },
  contentWrapper: {
    padding: '48px 0px',
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
    width: '100vw',
    flexShrink: 0,
  },
  line: {
    borderLeft: 'solid 18px #101F40',
    position: 'relative',
    height: '500px',
  },
  date: {
    position: 'absolute',
    top: 0,
    left: '64px',
    color: theme.palette.error.main,
    fontSize: '24px',
    transform: 'translateY(-100%)',
  },
  triangle: {
    position: 'absolute',
    top: '100%',
    left: '0%',
    transform: 'translateX(-9px) translate(-50%, -50%)',
    color: '#101F40',
    fontSize: '50px',
  },
  data: {
    position: 'relative',
    top: '100px',
    '&:not(:first-child)': {
      marginTop: '100px',
    },
  },
  dot: {
    width: '64px',
    height: '64px',
    borderRadius: '100%',
    border: 'solid 18px #101F40',
    backgroundColor: theme.palette.background.primary,
    transform: 'translateX(-9px) translate(-50%,-50%)',
  },
  longline: {
    position: 'absolute',
    width: '160px',
    border: 'solid 4px #101F40',
    transform: 'translateY(-50%)',
  },
  content: {
    position: 'absolute',
    width: '800px',
    height: '152px',
    border: 'solid 2px #101F40',
    backgroundColor: theme.palette.background.primary,
    borderRadius: '76px',
    left: '160px',
    top: 0,
    transform: 'translateY(-50%)',
    padding: '14px',
    fontSize: '24px',
    lineHeight: '30px',
    '& .title': {
      color: theme.palette.error.main,
    },
  },
}))

const WorkshopTimeline = () => {
  const classes = useStyles()

  // Put content here
  // The height of the line might need to be adjusted
  const content = [
    {
      date: '16 Jan',
      title: 'This is the Timeline page',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      date: '17 Jan',
      title: 'This is the Timeline page',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      date: '18 Jan',
      title: 'This is the Timeline page',
      content:
        'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
  ]

  return (
    <Box className={classes.root}>
      <Container className={classes.contentWrapper} maxWidth="100vw">
        <Typography variant="h3">WORKSHOP TIMELINE</Typography>
      </Container>
      <Container className={classes.contentWrapper} maxWidth="md">
        <div className="timeline">
          <div className={classes.line}>
            {content.map((x, i) => (
              <div className={classes.data} key={i}>
                <div className={classes.longline}></div>
                <div className={classes.dot}></div>
                <div className={classes.date}>{x.date}</div>
                <div className={classes.content}>
                  <Typography variant="p" className="title">
                    {x.title}
                  </Typography>
                  <br />
                  <Typography variant="p">{x.content}</Typography>
                </div>
              </div>
            ))}

            <div className={classes.triangle}>▼</div>
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default WorkshopTimeline
