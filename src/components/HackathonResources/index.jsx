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
    backgroundColor: theme.palette.background.secondary,
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: `url(${'notebook.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10% 90%',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: '0% 60%',
      backgroundSize: '30%',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '50% 95%',
      backgroundSize: '35%',
    },
  },
  title: {
    marginTop: '150px',
    textAlign: 'center',
    marginBottom: '100px',
    padding: '0 10px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '30px',
      marginBottom: '15px',
    },
  },
  header: {
    marginBottom: 16,
  },
  vector: {
    position: 'absolute',
    zIndex: '0',
    right: '0%',
    width: '10%',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  row: {
    display: 'flex',
  },
  linkStyle: {
    fontSize: '18px',
    fontWeight: '600',
    color: theme.palette.secondary.main,
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  leftVector: {
    position: 'absolute',
    zIndex: '0',
    left: '-6em',
    width: '30%',
    [theme.breakpoints.down('md')]: {
      left: '-10em',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
      height: '10%',
      right: '90%',
    },
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
            rel="noopener noreferrer"
            target="_blank"
            className={classes.linkStyle}
            href="https://www.youtube.com/watch?v=M576WGiDBdQ"
          >
            Solidity, Blockchain, and Smart Contracts FREE course
          </Link>
        </div>
        <div className={classes.row}>
          <ChevronRightIcon className={classes.icon} />
          <Link
            className={classes.linkStyle}
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.chain.link/docs/hackathon-resources/?_ga=2.125184714.1306684740.1639755306-594479753.1639755306"
          >
            Boilerplate, Starter Kits, and Tutorials
          </Link>
        </div>
        <div className={classes.row}>
          <ChevronRightIcon className={classes.icon} />
          <Link
            className={classes.linkStyle}
            rel="noopener noreferrer"
            target="_blank"
            href="https://chain.link/bootcamp/bootcamp-2021-on-demand"
          >
            Smart Contract Developer Bootcamp On-Demand
          </Link>
        </div>
      </ul>
      <div className={classes.leftVector}>
        <LeftVector />
      </div>
    </Box>
  )
}
