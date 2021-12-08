import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Container, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.secondary,
    padding: '0px 16px',
    position: 'relative',
  },

  SVG: {
    position: 'absolute',
    left: '50%',
    padding: 'None',
    minWidth: '100%',
    minHeight: '30%',
    top: '100%',
    transform: 'translate(-50%, -95%)',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      height: '105.5%',
      width: 'auto',
    },
  },

  contentWrapper: {
    textAlign: 'center',
  },

  header: {
    textAlign: 'center',
    marginBottom: 40,
    position: 'relative',
    color: theme.palette.text.contrast,
  },

  textWrapper: {
    marginTop: 16,
  },

  text: {
    color: theme.palette.text.contrast,
    position: 'relative',
    textAlign: 'center',
  },

  textHighlight: {
    position: 'relative',
    textAlign: 'center',
    color: '#EC255A',
  },

  buttonWrapper: {
    marginTop: 50,
    marginBottom: '100px',
    borderRadius: '50px',
    height: '80px',
    width: '320px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '60vw',
      height: '40px',
      '& *': {
        fontSize: '1em',
      },
    },

    '& :not(:first-child)': {
      marginLeft: 12,
    },
  },

  buttontext: {
    fontWeight: 500,
    color: theme.palette.text.contrast,
  },

  image: {
    alignself: 'center',
    maxWidth: '100%',
    height: 'auto',
    position: 'relative',
  },

  speakerText: {
    color: theme.palette.text.contrast,
    position: 'relative',
    textAlign: 'center',
  },

  gridBox: {
    padding: 40,
    margin: 20,
  },
}))

export default function WorkshopBanner() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container className={classes.contentWrapper} maxWidth="md">
        <img src="WorkshopBanner.svg" className={classes.SVG} />
        <Typography variant="h6" className={classes.header}>
          WORKSHOPS
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

          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} md={3}>
                <Box className={classes.gridBox}>
                  <img className={classes.image} src="speaker1.png" alt="" />
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lorem Ipsum{' '}
                  </Typography>
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lead Data Scientist, Analytics
                  </Typography>
                  <Typography className={classes.speakerText}> Grab</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box className={classes.gridBox}>
                  <img className={classes.image} src="speaker1.png" alt="" />
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lorem Ipsum{' '}
                  </Typography>
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lead Data Scientist, Analytics
                  </Typography>
                  <Typography className={classes.speakerText}> Grab</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box className={classes.gridBox}>
                  <img className={classes.image} src="speaker1.png" alt="" />
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lorem Ipsum{' '}
                  </Typography>
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lead Data Scientist, Analytics
                  </Typography>
                  <Typography className={classes.speakerText}> Grab</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box className={classes.gridBox}>
                  <img className={classes.image} src="speaker1.png" alt="" />
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lorem Ipsum{' '}
                  </Typography>
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lead Data Scientist, Analytics
                  </Typography>
                  <Typography className={classes.speakerText}> Grab</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box className={classes.gridBox}>
                  <img className={classes.image} src="speaker1.png" alt="" />
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lorem Ipsum{' '}
                  </Typography>
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lead Data Scientist, Analytics
                  </Typography>
                  <Typography className={classes.speakerText}> Grab</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box className={classes.gridBox}>
                  <img className={classes.image} src="speaker1.png" alt="" />
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lorem Ipsum{' '}
                  </Typography>
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lead Data Scientist, Analytics
                  </Typography>
                  <Typography className={classes.speakerText}> Grab</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box className={classes.gridBox}>
                  <img className={classes.image} src="speaker1.png" alt="" />
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lorem Ipsum{' '}
                  </Typography>
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lead Data Scientist, Analytics
                  </Typography>
                  <Typography className={classes.speakerText}> Grab</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box className={classes.gridBox}>
                  <img className={classes.image} src="speaker1.png" alt="" />
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lorem Ipsum{' '}
                  </Typography>
                  <Typography className={classes.speakerText}>
                    {' '}
                    Lead Data Scientist, Analytics
                  </Typography>
                  <Typography className={classes.speakerText}> Grab</Typography>
                </Box>
              </Grid>
            </Grid>
          </div>

          <Button
            color="primary"
            variant="contained"
            className={classes.buttonWrapper}
          >
            <Typography variant="h5" className={classes.buttontext}>
              Register Now
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
