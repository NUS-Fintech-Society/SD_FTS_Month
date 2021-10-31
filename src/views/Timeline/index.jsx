import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Timeline = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h1">This is the Timeline page</Typography>
      <Typography variant="h2">This is the Timeline page</Typography>
      <Typography variant="h3">This is the Timeline page</Typography>
      <Typography variant="h4">This is the Timeline page</Typography>
      <Typography variant="h5">This is the Timeline page</Typography>
      <Typography variant="h6">This is the Timeline page</Typography>
      <Typography variant="subtitle1">This is the Timeline page</Typography>
      <Typography variant="subtitle2">This is the Timeline page</Typography>
      <Typography>This is the Timeline page</Typography>
      <Typography variant="body2">This is the Timeline page</Typography>
    </Box>
  )
}

export default Timeline
