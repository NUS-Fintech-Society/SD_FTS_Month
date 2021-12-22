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
    justifyContent: 'center',
    padding: 16,
    backgroundColor: theme.palette.background.secondary,
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: `url(${'notebook.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10% 90%',
    backgroundSize: '25%',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '50% 95%',
      backgroundSize: '50%',
    },
  },
  leftVector: {
    position: 'absolute',
    left: '-6em',
    [theme.breakpoints.down('md')]: {
      top: '0%',
    },
    [theme.breakpoints.down('xs')]: {
      left: '-40%',
    },
  },
  rightVector: {
    position: 'absolute',
    right: '0%',
    width: '10%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      bottom: '0%',
    },
  },
  title: {
    marginBottom: '160px',
    textAlign: 'center',
    padding: '0 10px',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      marginBottom: '48px',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '16px',
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
}))

export default function HackathonResources() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        HACKATHON RESOURCES
      </Typography>
      <div className={classes.rightVector}>
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
