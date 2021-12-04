import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vh',
    '@media (width: 414px) and (height: 628px)': {
      backgroundImage: `url(${'/prizes-bg.png'})`,
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vh',
    },
  },
}))

const Prizes = () => {
  const classes = useStyles()

  return <Box className={classes.root}></Box>
}

export default Prizes
