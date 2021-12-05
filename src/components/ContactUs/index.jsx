import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Container, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.secondary,
  },
  contentWrapper: {
    padding: '48px 0px',
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
  },
  header: {
    height: '36px',
    left: '244px',
    fontweight: 'bold',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontsize: '36px',
    lineheight: '43px',
    textAlign: 'center',
    marginBottom: '80px',
  },
  bodyWrapper: {
    marginTop: 16,
  },
  iconWrapper: {
    marginTop: 30,
    '& :not(:first-child)': {
      marginLeft: 12,
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
      fontSize: 32,
    },
  },
  buttonWrapper: {
    marginTop: 16,
    '& :not(:first-child)': {
      marginLeft: 12,
    },
  },

  button: {
    width: 55,
    height: 55,
    marginright: '10px',
    cursor: 'pointer',
  },
}))

const ContactUs = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container className={classes.contentWrapper} maxWidth="md">
        <Typography variant="h6" className={classes.header}>
          CONTACT US
        </Typography>
        <Box className={classes.bodyWrapper}>
          <Typography>
            If you have any questions about this event, or would like to work
            with us in the future?
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography>Feel free to reach out to us at</Typography>

            <Typography style={{ fontWeight: 'bold', paddingLeft: '6px' }}>
              nusfintech.ops@gmail.com
            </Typography>
          </div>
        </Box>
        <Box className={classes.iconWrapper}>
          <FacebookIcon
            onClick={() => window.open('https://www.facebook.com/NUSfintech/')}
            className={classes.button}
          />

          <LinkedInIcon
            onClick={() =>
              window.open(
                'https://www.linkedin.com/company/nus-fintech-society/'
              )
            }
            className={classes.button}
          />

          <InstagramIcon
            onClick={() =>
              window.open('https://www.instagram.com/nusfintech/?hl=en')
            }
            className={classes.button}
          />
        </Box>
        <Box className={classes.buttonWrapper}>
          <Button
            color="primary"
            variant="contained"
            style={{
              width: '325.42px',
              height: '80px',
              top: '60px',
              borderRadius: '50px',
              fontSize: 30,
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default ContactUs
