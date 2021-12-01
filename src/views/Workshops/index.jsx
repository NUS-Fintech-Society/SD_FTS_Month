import React from 'react'
import Layout from '../../components/Layout'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    height: '180vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  workshopWrapper: {
    width: '760px',
    display: 'flex',
    height: '450px',
    flexDirection: 'column',
    padding: '10px',
  },
  workshopBodyWrapper: {
    // body consists of image and description
    width: '760px',
    display: 'flex',
    flexDirection: 'row',
  },
  workshopTag: {
    textAlign: 'left',
    positon: 'relative',
    top: '0px',
  },
  workshopTitle: {
    paddingTop: '4px',
    textAlign: 'left',
    width: '360px',
  },
  workshopDescription: {
    width: '360px',
    height: '209px',
    textAlign: 'left',
    paddingTop: '30px',
    alignSelf: 'left',
  },
  workshopImageWrapper: {
    align: 'right',
    height: '240px',
    width: '320px',
    position: 'relative',
    paddingLeft: '80px',
    paddingTop: '20px',
  },
  workshopRegisterLink: {
    align: 'left',
    paddingTop: '25px',
  },
  tagText: {
    fontWeight: '400',
    color: '#E13766',
  },
  registerText: {
    fontWeight: '400',
    color: '#E13766',
    textDecoration: 'none',
  },
  workshopImage: {
    borderRadius: '20px',
  },
}))

const Workshops = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Box className={classes.root}>
        <Box className={classes.workshopWrapper}>
          <Box className={classes.workshopTag}>
            <Typography variant="body1" className={classes.tagText}>
              #Machine Learning
            </Typography>
          </Box>
          <Box className={classes.workshopTitle}>
            <Typography variant="h3">Stock Price Prediction</Typography>
          </Box>
          <Box className={classes.workshopBodyWrapper}>
            <Box className={classes.workshopDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              iaculis viverra laoreet. Nam pretium purus diam, eu lacinia nisi
              consequat et. Mauris sollicitudin eget nulla vitae ultrices. Donec
              sed orci enim. In consectetur nisi non rhoncus aliquet. Proin nec
              tortor et nunc laoreet ornare at vel justo. Vivamus consectetur
              nec leo ac tincidunt. Mauris elementum magna sed mattis laoreet.
              Vestibulum convallis blandit tincidunt. Integer laoreet tempus
              eros.
            </Box>
            <Box className={classes.workshopImageWrapper}>
              <img
                src="https://res.cloudinary.com/jianoway/image/upload/c_crop,h_240,w_320,y_15/v1638371309/placeholder-workshop-image_ubabpx.png"
                alt="placeholder"
                className={classes.workshopImage}
              />
            </Box>
          </Box>
          <Box className={classes.workshopRegisterLink}>
            <Typography variant="body1">
              <a
                href={'https://www.google.com/'}
                target="_blank"
                className={classes.registerText}
                rel="noreferrer"
              >
                Register {'>'}
              </a>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.workshopWrapper}>
          <Box className={classes.workshopTag}>
            <Typography variant="body1" className={classes.tagText}>
              #Machine Learning
            </Typography>
          </Box>
          <Box className={classes.workshopTitle}>
            <Typography variant="h3">
              News Headline Sentiment Analysis
            </Typography>
          </Box>
          <Box className={classes.workshopBodyWrapper}>
            <Box className={classes.workshopDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              iaculis viverra laoreet. Nam pretium purus diam, eu lacinia nisi
              consequat et. Mauris sollicitudin eget nulla vitae ultrices. Donec
              sed orci enim. In consectetur nisi non rhoncus aliquet. Proin nec
              tortor et nunc laoreet ornare at vel justo. Vivamus consectetur
              nec leo ac tincidunt. Mauris elementum magna sed mattis laoreet.
              Vestibulum convallis blandit tincidunt. Integer laoreet tempus
              eros.
            </Box>
            <Box className={classes.workshopImageWrapper}>
              <img
                src="https://res.cloudinary.com/jianoway/image/upload/c_crop,h_240,w_320,y_15/v1638371309/placeholder-workshop-image_ubabpx.png"
                alt="placeholder"
                className={classes.workshopImage}
              />
            </Box>
          </Box>
          <Box className={classes.workshopRegisterLink}>
            <Typography variant="body1">
              <a
                href={'https://www.google.com/'}
                target="_blank"
                className={classes.registerText}
                rel="noreferrer"
              >
                Register {'>'}
              </a>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.workshopWrapper}>
          <Box className={classes.workshopTag}>
            <Typography variant="body1" className={classes.tagText}>
              #Machine Learning
            </Typography>
          </Box>
          <Box className={classes.workshopTitle}>
            <Typography variant="h3">Stock Price Prediction</Typography>
          </Box>
          <Box className={classes.workshopBodyWrapper}>
            <Box className={classes.workshopDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              iaculis viverra laoreet. Nam pretium purus diam, eu lacinia nisi
              consequat et. Mauris sollicitudin eget nulla vitae ultrices. Donec
              sed orci enim. In consectetur nisi non rhoncus aliquet. Proin nec
              tortor et nunc laoreet ornare at vel justo. Vivamus consectetur
              nec leo ac tincidunt. Mauris elementum magna sed mattis laoreet.
              Vestibulum convallis blandit tincidunt. Integer laoreet tempus
              eros.
            </Box>
            <Box className={classes.workshopImageWrapper}>
              <img
                src="https://res.cloudinary.com/jianoway/image/upload/c_crop,h_240,w_320,y_15/v1638371309/placeholder-workshop-image_ubabpx.png"
                alt="placeholder"
                className={classes.workshopImage}
              />
            </Box>
          </Box>
          <Box className={classes.workshopRegisterLink}>
            <Typography variant="body1">
              <a
                href={'https://www.google.com/'}
                target="_blank"
                className={classes.registerText}
                rel="noreferrer"
              >
                Register {'>'}
              </a>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.workshopWrapper}>
          <Box className={classes.workshopTag}>
            <Typography variant="body1" className={classes.tagText}>
              #Machine Learning
            </Typography>
          </Box>
          <Box className={classes.workshopTitle}>
            <Typography variant="h3">
              News Headline Sentiment Analysis
            </Typography>
          </Box>
          <Box className={classes.workshopBodyWrapper}>
            <Box className={classes.workshopDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              iaculis viverra laoreet. Nam pretium purus diam, eu lacinia nisi
              consequat et. Mauris sollicitudin eget nulla vitae ultrices. Donec
              sed orci enim. In consectetur nisi non rhoncus aliquet. Proin nec
              tortor et nunc laoreet ornare at vel justo. Vivamus consectetur
              nec leo ac tincidunt. Mauris elementum magna sed mattis laoreet.
              Vestibulum convallis blandit tincidunt. Integer laoreet tempus
              eros.
            </Box>
            <Box className={classes.workshopImageWrapper}>
              <img
                src="https://res.cloudinary.com/jianoway/image/upload/c_crop,h_240,w_320,y_15/v1638371309/placeholder-workshop-image_ubabpx.png"
                alt="placeholder"
                className={classes.workshopImage}
              />
            </Box>
          </Box>
          <Box className={classes.workshopRegisterLink}>
            <Typography variant="body1">
              <a
                href={'https://www.google.com/'}
                target="_blank"
                className={classes.registerText}
                rel="noreferrer"
              >
                Register {'>'}
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Workshops
