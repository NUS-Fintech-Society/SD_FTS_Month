import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  bar: {
    height: '56px',
    width: '100%',
    position: 'fixed',
    backgroundColor: theme.palette.background.secondary,
    top: '0',
    left: '0',
    textDecoration: 'none',
    fontStyle: theme.typography.body1,
  },

  navBarLogo: {
    paddingLeft: '4rem',
  },

  spacer: {
    flex: '1',
  },

  dropdownContent: {
    display: 'none',
    position: 'absolute',
    backgroundColor: theme.palette.background.secondary,
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    '& :link': {
      textDecoration: 'none',
      color: 'inherit',
      padding: '12px',
      display: 'flex',
      '& :hover': {
        color: 'white',
      },
    },
    '& :hover': {
      color: 'white',
    },
  },
  dropdownLink: {
    '& :hover': {
      backgroundColor: 'red',
    },
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
    padding: '0 1rem',
  },
  navbarItem: {
    padding: '0 1rem',
    fontStyle: theme.typography.body1,
    listStyle: 'none',
    textDecoration: 'none',
    underline: 'none',
    display: 'flex',
    flexDirection: 'row',
    '& :visited': {
      textDecoration: 'none',
      color: 'inherit',
    },
    '& :link': {
      textDecoration: 'none',
      color: 'inherit',
    },
    '& li': {
      padding: '0 1rem',
    },
    '& :hover': {
      '& $dropdownContent': {
        display: 'block',
      },
    },
    '& $dropdownContent': {
      '& :hover': {
        backgroundColor: '#cdcdcd',
      },
    },
  },

  navbarNavigation: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    padding: '0 1rem',
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

const NavBar = () => {
  const classes = useStyles()

  return (
    <Box className={classes.bar}>
      <nav className={classes.navbarNavigation}>
        <div className={classes.navBarLogo}>
          <img src="FTS-Logo-Transparent.png" alt="NUS FTS" width="100px" />
        </div>
        <div className={classes.spacer}></div>
        <div className={classes.navbarItem}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/timeline">Timeline</Link>
          </li>
          <div className={classes.dropdown}>
            <Link className={classes.navbarItem} href="/workshop">
              Workshop
            </Link>
            <div className={classes.dropdownContent}>
              <a href="/workshop/blockchain">Blockchain</a>
              <a
                className={classes.dropdownLink}
                href="/workshop/machinelearning"
              >
                Machine Learning
              </a>
            </div>
          </div>
          <li>
            <Link href="/contactus">Contact Us</Link>
          </li>
        </div>
      </nav>
    </Box>
  )
}

export default NavBar
