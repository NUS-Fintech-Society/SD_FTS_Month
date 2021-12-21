import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Box, Typography, Link } from '@material-ui/core'
import Vector from './vector'
import LeftVector from './leftVector'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.primary,
    flexDirection: 'column',
    minHeight: '70vh',
    zIndex: '1',
    backgroundImage: `url(${'notebook.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10% 90%',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: '0% 50%',
      backgroundSize: '30%',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'none',
    },
  },
  title: {
    position: 'relative',
    marginTop: '15vh',
    textAlign: 'center',
    marginBottom: '10vh',
    padding: '0 10px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10vh',
      marginBottom: '5vh',
    },
  },
  listTitle: {
    color: theme.palette.primary.main,
    fontSize: 20,
  },
  vector: {
    position: 'absolute',
    zIndex: '0',
    left: '90%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  linkStyle: {
    fontSize: '18px',
    fontWeight: '700',
    fontFamily: 'Lato',
    color: theme.palette.secondary.main,
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  leftVector: {
    position: 'absolute',
    zIndex: '0',
    left: '-3em',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  icon: {
    marginRight: '10px',
  },
  book: {
    width: '90%',
    display: 'absolute',
  },
  notebook: {
    left: '-200px',
  },
}))

export default function HackathonResources() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h1" className={classes.header}>
          Hackathon Resources
        </Typography>
      </Box>
      <div className={classes.vector}>
        <Vector />
      </div>
      <ul>
        <div className={classes.row}>
          <ChevronRightIcon className={classes.icon} />
          <Link
            className={classes.linkStyle}
            href="https://www.youtube.com/watch?v=M576WGiDBdQ"
          >
            {' '}
            Solidity, Blockchain, and Smart Contracts FREE course{' '}
          </Link>
        </div>
        <div className={classes.row}>
          <ChevronRightIcon className={classes.icon} />
          <Link
            className={classes.linkStyle}
            href="https://docs.chain.link/docs/hackathon-resources/?_ga=2.125184714.1306684740.1639755306-594479753.1639755306"
          >
            {' '}
            Boilerplate, Starter Kits, and Tutorials{' '}
          </Link>
        </div>
        <div className={classes.row}>
          <ChevronRightIcon className={classes.icon} />
          <Link
            className={classes.linkStyle}
            href="https://chain.link/bootcamp/bootcamp-2021-on-demand"
          >
            {' '}
            Smart Contract Developer Bootcamp On-Demand{' '}
          </Link>
        </div>
      </ul>
      <div className={classes.leftVector}>
        <LeftVector />
      </div>
    </Box>
  )
}
