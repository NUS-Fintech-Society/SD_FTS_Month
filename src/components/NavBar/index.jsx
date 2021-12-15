import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, IconButton, Menu } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-scroll'

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
    zIndex: '2',
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
      cursor: 'pointer',
    },
    '& ul': {
      listStyle: 'none',
      margin: '0',
      padding: '0',
      display: 'flex',
    },
    '& :hover > div:hover > div': {
      display: 'block',
    },
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
}))

const NavBar = () => {
  const classes = useStyles()
  const [anchorElNav, setAnchorElNav] = useState(null)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  const scrollDuration = 500

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
            <MenuItem>
              <Link
                to="hero"
                smooth={true}
                duration={scrollDuration}
                onClick={handleCloseNavMenu}
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="hackathon"
                smooth={true}
                duration={scrollDuration}
                onClick={handleCloseNavMenu}
              >
                Hackathon
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="workshops"
                smooth={true}
                duration={scrollDuration}
                onClick={handleCloseNavMenu}
              >
                Workshops
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="faq"
                smooth={true}
                duration={scrollDuration}
                onClick={handleCloseNavMenu}
              >
                FAQ
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="contact"
                smooth={true}
                duration={scrollDuration}
                onClick={handleCloseNavMenu}
              >
                Contact Us
              </Link>
            </MenuItem>
          </Menu>
        </Box>

        <div className={classes.navBarLogo}>
          <img
            className={classes.logoImage}
            src="/credits/FTS-Logo-Transparent.png"
            alt="NUS FTS"
          />
        </div>
        <div className={classes.spacer}></div>

        <div className={classes.navbarItem}>
          <ul>
            <li>
              <Link to="hero" smooth={true} duration={scrollDuration}>
                Home
              </Link>
            </li>
            <li>
              <Link to="hackathon" smooth={true} duration={scrollDuration}>
                Hackathon
              </Link>
            </li>
            <li>
              <Link to="workshops" smooth={true} duration={scrollDuration}>
                Workshops
              </Link>
            </li>
            <li>
              <Link to="faq" smooth={true} duration={scrollDuration}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={scrollDuration}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Box>
  )
}

export default NavBar
