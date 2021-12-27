import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import Vector from './vector'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.secondary,
    padding: '0px 16px',
    position: 'relative',
  },
  contentWrapper: {
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: 40,
  },
  textWrapper: {
    marginTop: 40,
  },
  iconWrapper: {
    marginTop: 40,
    '& :not(:first-child)': {
      marginLeft: 12,
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
      fontSize: 48,
    },
  },
  vector: {
    position: 'absolute',
    display: 'flex',
    bottom: '0',
    left: '0',
    right: '0',
  },
  button: {
    cursor: 'pointer',
  },
}))

const ContactUs = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container className={classes.contentWrapper} maxWidth="md">
        <Typography variant="h3" className={classes.header}>
          CONTACT US
        </Typography>
        <Box className={classes.textWrapper}>
          <Typography>
            If you have any questions about the event, or would like to work
            with us in the future:
          </Typography>
          <Typography style={{ display: 'inline', fontStyle: 'italic' }}>
            Feel free to reach out to us at{' '}
          </Typography>
          <Typography
            style={{
              display: 'inline',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
            color="primary"
          >
            nusfintech.ops@gmail.com
          </Typography>
        </Box>
        <Box className={classes.textWrapper}>
          <Typography>
            If you would like to join our Telegram group to receive quick
            updates and find team members:
          </Typography>
          <Typography style={{ display: 'inline', fontStyle: 'italic' }}>
            Feel free to do so{' '}
          </Typography>
          <Typography
            style={{
              display: 'inline',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontStyle: 'italic',
            }}
            color="primary"
            onClick={() =>
              window.open('https://t.me/+RJpVfJ1IVZcxYWNl', '_blank')
            }
          >
            here
          </Typography>
        </Box>
        <Box className={classes.iconWrapper}>
          <FacebookIcon
            onClick={() =>
              window.open('https://www.facebook.com/NUSfintech/', '_blank')
            }
            className={classes.button}
          />
          <LinkedInIcon
            onClick={() =>
              window.open(
                'https://www.linkedin.com/company/nus-fintech-society/',
                '_blank'
              )
            }
            className={classes.button}
          />
          <InstagramIcon
            onClick={() =>
              window.open(
                'https://www.instagram.com/nusfintech/?hl=en',
                '_blank'
              )
            }
            className={classes.button}
          />
        </Box>
      </Container>
      <Box className={classes.vector}>
        <Vector />
      </Box>
    </Box>
  )
}

export default ContactUs
