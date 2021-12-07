import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import workshops from '../../data/workshops'

const useStyles = makeStyles((theme) => ({
  workshopWrapper: {
    width: '100%',
    maxWidth: '760px',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '25px',
    paddingBottom: '25px',
  },
  workshopBodyWrapper: {
    // body consists of image and description
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      paddingTop: '20px',
    },
  },
  workshopTitle: {
    paddingTop: '4px',
    textAlign: 'left',
    width: '60%',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      maxWidth: '80%',
      margin: 'auto',
    },
  },
  workshopDescription: {
    width: '50%',
    textAlign: 'justify',
    paddingTop: '40px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'justify',
      width: '360px',
      paddingTop: '40px',
      justifyContent: 'center',
      margin: 'auto',
    },
  },
  workshopImageWrapper: {
    width: '40%',
    paddingLeft: '10%',
    paddingTop: '40px',
    verticalAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '15px',
      textAlign: 'center',
      justifyContent: 'center',
      margin: 'auto',
      width: '100%',
      paddingLeft: '0',
    },
  },
  workshopRegisterLink: {
    align: 'left',
    paddingTop: '25px',
    [theme.breakpoints.down('sm')]: {
      align: 'center',
      margin: 'auto',
    },
  },
  tagText: {
    fontWeight: '400',
    color: theme.palette.text.workshopTag,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  registerText: {
    fontWeight: '400',
    color: theme.palette.text.link,
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      margin: 'auto',
    },
  },
  workshopImage: {
    borderRadius: '20px',
  },
}))

const WorkshopRenderer = () => {
  const classes = useStyles()
  const tagsList = formatTags()

  const workshopArray = []

  for (var i = 0; i < workshops.length; i++) {
    workshopArray.push(
      <Box key={i} className={classes.workshopWrapper}>
        <Typography className={classes.tagText}>{tagsList[i]}</Typography>
        <Typography variant="h5" className={classes.workshopTitle}>
          {workshops[i]['title']}
        </Typography>
        <Box className={classes.workshopBodyWrapper}>
          <Box className={classes.workshopDescription}>
            <Typography>{workshops[i]['description']}</Typography>
          </Box>
          <Box className={classes.workshopImageWrapper}>
            <img
              src={workshops[i]['image']}
              alt={workshops[i]['title']}
              className={classes.workshopImage}
            />
          </Box>
        </Box>
        <Typography className={classes.workshopRegisterLink}>
          <a
            href={workshops[i]['link']}
            target="_blank"
            rel="noreferrer"
            className={classes.registerText}
          >
            Register {'>'}
          </a>
        </Typography>
      </Box>
    )
  }
  return workshopArray
}

const formatTags = () => {
  //2d loop not optimized
  const tagsList = []
  for (var i = 0; i < workshops.length; i++) {
    var tagString = ''
    for (var j = 0; j < workshops[i]['tags'].length; j++) {
      if (tagString == '') {
        tagString += '#' + workshops[i]['tags'][j]
      } else {
        tagString += ' #' + workshops[i]['tags'][j]
      }
    }
    tagsList.push(tagString)
  }
  return tagsList
}

export default WorkshopRenderer
