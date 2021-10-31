import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    width: '100%',
  },
}))

const Layout = (props) => {
  const classes = useStyles()
  const { children } = props

  return (
    <Container className={classes.root} disableGutters maxWidth="xl">
      {/* TODO: Add navbar component here */}
      <Box>{children}</Box>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
