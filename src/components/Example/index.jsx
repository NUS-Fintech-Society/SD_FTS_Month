/* eslint-disable prettier/prettier */
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
    fontWeight: 700,
  },
  bodyWrapper: {
    marginTop: 16,
  },
  iconWrapper: {
    marginTop: 16,
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
}))

const Example = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container className={classes.contentWrapper} maxWidth="md">
        <Typography variant="h6" className={classes.header}>
          Example Component
        </Typography>
        <Box className={classes.bodyWrapper}>
          <Typography>
            If you have any questions about this event, or would like to work
            with us in the future?
          </Typography>
          <Typography>
            Feel free to reach out to us at nusfintech.ops@gmail.com
          </Typography>
        </Box>
        <Box className={classes.iconWrapper}>
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </Box>
        <Box className={classes.buttonWrapper}>
          <Button color="primary" variant="contained">
            Contact Us
          </Button>
          <Button color="secondary" variant="contained">
            Back To Home
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Example
