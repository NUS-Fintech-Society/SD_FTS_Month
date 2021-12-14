import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography, Link } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    padding: '0px 8px',
    '& > *': {
      boxSizing: 'border-box',
    },
  },
  contentWrapper: {
    padding: '48px 0px',
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
    width: '100%',
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      padding: '24px 24px',
    },
  },
  line: {
    borderLeft: `solid 18px ${theme.palette.secondary.main}`,
    position: 'relative',
    height: '800px',
    [theme.breakpoints.down('sm')]: {
      borderLeft: `solid 9px ${theme.palette.secondary.main}`,
      height: '600px',
      maxWidth: '100%',
    },
    [theme.breakpoints.up('md')]: {
      height: '600px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '800px',
    },
  },
  date: {
    position: 'absolute',
    top: 0,
    left: '64px',
    color: theme.palette.error.main,
    fontSize: '24px',
    transform: 'translateY(-100%)',
    [theme.breakpoints.down('sm')]: {
      left: '24px',
      fontSize: '16px',
    },
  },
  triangle: {
    position: 'absolute',
    top: '100%',
    left: '0%',
    transform: 'translateX(-9px) translate(-50%, -50%)',
    color: theme.palette.secondary.main,
    fontSize: '50px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      transform: 'translateX(-4.5px) translate(-50%, -50%)',
    },
  },
  data: {
    position: 'relative',
    height: 'max-content',
    '&:not(:first-child)': {
      marginTop: '10px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '20px',
      },
      [theme.breakpoints.up('md')]: {
        marginTop: '40px',
      },
    },
  },
  dot: {
    position: 'relative',
    width: '64px',
    height: '64px',
    borderRadius: '100%',
    border: `solid 18px ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.background.primary,
    transform: 'translateX(-9px) translate(-50%,-50%)',
    [theme.breakpoints.down('sm')]: {
      width: '32px',
      height: '32px',
      border: `solid 9px ${theme.palette.secondary.main}`,
      transform: 'translateX(-4.5px) translate(-50%,-50%)',
    },
  },
  longline: {
    position: 'absolute',
    width: '160px',
    border: `solid 4px ${theme.palette.secondary.main}`,
    transform: 'translateY(-50%)',
    [theme.breakpoints.down('sm')]: {
      border: `solid 2px ${theme.palette.secondary.main}`,
      width: '80px',
    },
  },
  content: {
    position: 'absolute',
    width: 'calc(100% - 144px)',
    height: 'max-content',
    border: `solid 2px ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.background.primary,
    borderRadius: '76px',
    left: '160px',
    top: 0,
    padding: '14px',
    fontSize: '1.2em',
    lineHeight: '1.2em',
    '& .title': {
      color: theme.palette.error.main,
      textDecoration: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      left: '80px',
      width: 'calc(100% - 96px)',
      height: 'max-content',
      maxHeight: '300px',
      borderRadius: '40px',
      border: `solid 2px ${theme.palette.secondary.main}`,
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
  timeline: {
    paddingLeft: '64px',
    paddingRight: '64px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
  title: {
    fontSize: '45px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },
  },
}))

const MyTimeline = (props) => {
  const classes = useStyles()
  const { title, content } = props

  const [timelineItemHeight, setTimelineItemHeight] = useState(0)
  const [margin, setMargin] = useState()
  const itemsRef = useRef([])

  const [width, setWidth] = React.useState()

  useEffect(() => {
    if (timelineItemHeight == undefined) {
      setTimelineItemHeight(0)
    }
    itemsRef.current?.map((x) => {
      if (timelineItemHeight < x.clientHeight) {
        setTimelineItemHeight(x.clientHeight)
      }
      console.log(itemsRef.current?.map((x) => x.clientHeight))
    })
  }, [timelineItemHeight, itemsRef.current])

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if (width > 960) {
      setMargin(40)
    } else {
      setMargin(20)
    }
  }, [width])

  return (
    <Box className={classes.root}>
      <Container className={classes.contentWrapper} maxWidth="100vw">
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
      </Container>
      <Container className={classes.contentWrapper} maxWidth="md">
        <Box className={classes.timeline}>
          <Box
            className={classes.line}
            style={{
              height:
                itemsRef.current
                  ?.map((x) => (x?.clientHeight ? x.clientHeight : 0))
                  .reduce((a, b) => a + b + margin, 0) + margin,
            }}
          >
            {content
              ? content.map((x, i) => (
                  <Box
                    className={classes.data}
                    key={i}
                    style={{ height: itemsRef.current[i]?.clientHeight }}
                  >
                    <Box
                      className={classes.longline}
                      style={{ top: itemsRef.current[i]?.clientHeight * 0.5 }}
                    ></Box>
                    <Box
                      className={classes.dot}
                      style={{ top: itemsRef.current[i]?.clientHeight * 0.5 }}
                    ></Box>
                    <Box
                      className={classes.date}
                      style={{ top: itemsRef.current[i]?.clientHeight * 0.5 }}
                    >
                      {x.date}
                    </Box>
                    <Box
                      className={classes.content}
                      ref={(el) => (itemsRef.current[i] = el)}
                    >
                      <Link href={x.link}>
                        <Typography variant="p" className="title">
                          {x.title}
                        </Typography>
                      </Link>
                      <br />
                      <Typography variant="p" sx={{ whiteSpace: 'pre-line' }}>
                        {x.content.split('\n').join('\n')}
                      </Typography>
                    </Box>
                  </Box>
                ))
              : ''}

            <Box className={classes.triangle}>▼</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

MyTimeline.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
}

export default MyTimeline
