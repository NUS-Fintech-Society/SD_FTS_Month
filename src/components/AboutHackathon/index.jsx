import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid, Button } from '@material-ui/core'
import StarsIcon from '@material-ui/icons/Stars'
import PersonIcon from '@material-ui/icons/Person'
import HelpIcon from '@material-ui/icons/HelpOutline'
import ChartIcon from '@material-ui/icons/InsertChart'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '48px 0px',
  },
  header: {
    marginBottom: 16,
  },
  title: {
    textAlign: 'center',
    fontWeight: 700,
  },
  textWrapper: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
    boxShadow: '4px 24px 60px rgba(109, 141, 173, 0.25);',
    margin: 20,
    [theme.breakpoints.down('xs')]: {
      height: 350,
    },
  },
  box: {
    height: '20vh',
  },
  captionWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  paragraphText: {
    fontSize: '18px',
    color: 'rgb(0,0,0,0.6)',
  },
  buttonWrapper: {
    borderRadius: '50px',
    height: '70px',
    width: '300px',
    marginTop: 24,
    [theme.breakpoints.down('xs')]: {
      width: '250px',
      height: '60px',
      '& *': {
        fontSize: '1.2em',
      },
    },
  },
  buttontext: {
    fontWeight: 500,
    color: theme.palette.text.contrast,
  },
  caption: {
    maxWidth: 400,
    marginTop: 16,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 250,
    },
  },
  textLink: {
    fontWeight: 600,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}))

export default function AboutHackathon() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.header}>
        HACKATHON
      </Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10} md={5}>
          <Box padding={3} className={classes.textWrapper}>
            <Box className={classes.captionWrapper}>
              <ChartIcon fontSize="large" color="primary" />
              <Typography variant="subtitle1">About</Typography>
            </Box>
            <Typography
              className={classes.paragraphText}
              paragraph={true}
              variant="body1"
            >
              The theme for this upcoming hackathon is all about
              &quot;Next-Generation Decentralized Applications&quot;, such as
              DeFi, wallets, cross-chain applications, or even introducing
              decentralized technologies to different industries
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} md={5}>
          <Box padding={3} className={classes.textWrapper}>
            <Box className={classes.captionWrapper}>
              <StarsIcon fontSize="large" color="primary" />
              <Typography variant="subtitle1">Objective</Typography>
            </Box>
            <Typography
              className={classes.paragraphText}
              paragraph={true}
              variant="body1"
            >
              Promote the development of the world&apos;s blockchain. Explore
              and push ideas to their fullest potential, and may the best team
              win!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10} md={5}>
          <Box padding={3} className={classes.textWrapper}>
            <Box className={classes.captionWrapper}>
              <PersonIcon fontSize="large" color="primary" />
              <Typography variant="subtitle1">Who can join?</Typography>
            </Box>
            <Typography
              className={classes.paragraphText}
              paragraph={true}
              variant="body1"
            >
              All students from tertiary education institutes around the world
              are welcome to sign up for the hackathon. You don&apos;t
              necessarily have to be from NUS!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} md={5}>
          <Box padding={3} className={classes.textWrapper}>
            <Box className={classes.captionWrapper}>
              <HelpIcon fontSize="large" color="primary" />
              <Typography variant="subtitle1">Why join us?</Typography>
            </Box>
            <Typography
              className={classes.paragraphText}
              paragraph={true}
              variant="body1"
            >
              You will have the opportunity to work on real-world challenges,
              gain invaluable exposure to the Fintech industry and work closely
              with your team in the spirit of creativity and learning.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Button
        color="primary"
        variant="contained"
        className={classes.buttonWrapper}
        onClick={() =>
          window.open('https://forms.gle/i6TeXTfES6wVj2NBA', '_blank')
        }
      >
        <Typography variant="h6" className={classes.buttontext}>
          Register Now
        </Typography>
      </Button>
      <Typography variant="caption" className={classes.caption}>
        *If you require help in finding team members, feel free to join this{' '}
        <Typography
          variant="caption"
          color="primary"
          className={classes.textLink}
          onClick={() =>
            window.open('https://t.me/+d2wPI2kEHOBlZTk1', '_blank')
          }
        >
          Telegram group
        </Typography>
      </Typography>
    </div>
  )
}
