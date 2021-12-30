import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import TelegramIcon from '@material-ui/icons/Telegram'
import Vector from './vector'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
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
    marginBottom: 32,
  },
  textWrapper: {
    marginTop: 24,
  },
  boldText: {
    fontWeight: 600,
  },
  teleWrapper: {
    marginTop: 32,
    display: 'flex',
    justifyContent: 'center',
  },
  iconWrapper: {
    position: 'relative',
    zIndex: 1,
    marginTop: 16,
    '& :not(:first-child)': {
      marginLeft: 12,
    },
  },
  vector: {
    zIndex: 0,
    position: 'absolute',
    display: 'flex',
    bottom: '0',
    left: '0',
    right: '0',
  },
  button: {
    cursor: 'pointer',
    fontSize: 40,
    color: theme.palette.primary.main,
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
          <Typography className={classes.boldText}>
            Event Queries and Potential Partnerships:
          </Typography>
          <Typography
            style={{
              fontWeight: 'bold',
            }}
            color="primary"
          >
            nusfintech.ops@gmail.com
          </Typography>
        </Box>
        <Box className={classes.teleWrapper}>
          <Box>
            <Typography className={classes.boldText}>
              Quick Event Updates:
            </Typography>
            <TelegramIcon
              className={classes.button}
              onClick={() =>
                window.open('https://t.me/+RJpVfJ1IVZcxYWNl', '_blank')
              }
            />
          </Box>
          <Box style={{ marginLeft: 24 }}>
            <Typography className={classes.boldText}>
              Team Formation:
            </Typography>
            <TelegramIcon
              className={classes.button}
              onClick={() =>
                window.open('https://t.me/+d2wPI2kEHOBlZTk1', '_blank')
              }
            />
          </Box>
        </Box>
        <Box className={classes.iconWrapper}>
          <Typography className={classes.boldText}>Socials:</Typography>
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
