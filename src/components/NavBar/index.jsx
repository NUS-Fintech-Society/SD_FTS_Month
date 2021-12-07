import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Menu } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'

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
    alignItems: 'center',
    justifyContent: 'center',
  },

  navBarLogo: {
    paddingLeft: '4rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1rem',
    },
  },

  logoImage: {
    maxWidth: '100px',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
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

  dropdown: {
    position: 'relative',
    display: 'inline-block',
    padding: '0 1rem',
    /*'& :hover': {
      '$dropdownContent': {
        display: 'block',
      }
    }*/
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
    '& ul': {
      listStyle: 'none',
      margin: '0',
      padding: '0',
      display: 'flex',
    },
    '& :hover': {
      '& $dropdown $dropdownContent': {
        display: 'block',
      },
    },

    /*'& $dropdown': {
      '& :hover': {
        '$dropdownContent': {
          display: 'block',
        }
      }
    },*/

    '& $dropdownContent': {
      '& :hover': {
        backgroundColor: '#cdcdcd',
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  navbarNavigation: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    padding: '0 1rem',
  },

  navButton: {
    fontSize: '14px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '8px',
    },
  },

  menuToggleButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
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
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box className={classes.bar}>
      <nav className={classes.navbarNavigation}>
        <Box
          className={classes.menuToggleButton}
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem component="a" href="/" onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Home</Typography>
            </MenuItem>
            <MenuItem
              component="a"
              href="/timeline"
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">Timeline</Typography>
            </MenuItem>
            <MenuItem
              component="a"
              href="/#workshop"
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">Workshop</Typography>
            </MenuItem>
            <MenuItem
              component="a"
              href="/contactus"
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">Contact Us</Typography>
            </MenuItem>
          </Menu>
        </Box>

        <div className={classes.navBarLogo}>
          <img
            className={classes.logoImage}
            src="FTS-Logo-Transparent.png"
            alt="NUS FTS"
          />
        </div>
        <div className={classes.spacer}></div>

        <div className={classes.navbarItem}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/timeline">Timeline</Link>
            </li>
            <div className={classes.dropdown}>
              <Link href="/#workshop">Workshop</Link>
              <div className={classes.dropdownContent}>
                <a href="/workshop/blockchain">Blockchain</a>
                <a href="/workshop/machinelearning">Machine Learning</a>
              </div>
            </div>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>

        <Button
          className={classes.navButton}
          color="primary"
          variant="contained"
          href="https://fintechsociety.comp.nus.edu.sg/"
        >
          Visit NUS Fintech Website
        </Button>
      </nav>
    </Box>
  )
}

export default NavBar
