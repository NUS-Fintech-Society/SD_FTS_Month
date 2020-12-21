import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, ButtonBase } from '@material-ui/core';
import '../BlogPage.css';

const images = [
  {
    backgroundImage: "url(" + "," + ")", // currently placeholder image
    href: '/hackathon',
    title: 'Hackathon',
    width: '25%',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis leo at erat cursus tempus eu sed mauris. In dapibus dolor vel accumsan consequat.',
  },
  {
    backgroundImage: "url(" + "," + ")", // currently placeholder image
    href: '/', // currently no workshop page
    title: 'Workshop 1',
    width: '25%',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis leo at erat cursus tempus eu sed mauris. In dapibus dolor vel accumsan consequat.',

  },
  {
    backgroundImage: "url(" + "," + ")", // currently placeholder image
    href: '/', // currently no workshop page
    title: 'Workshop 2',
    width: '25%',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis leo at erat cursus tempus eu sed mauris. In dapibus dolor vel accumsan consequat.',
  },
  {
    backgroundImage: "url(" + "," + ")", // currently placeholder image
    href: '/', // currently no workshop page
    title: 'Workshop 3',
    width: '25%',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis leo at erat cursus tempus eu sed mauris. In dapibus dolor vel accumsan consequat.',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    top: '10%',
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    fontSize: '200%',

  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function EventButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <>
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            href={image.href}
            style={{
              width: image.width,
              height: '60vh',
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: image.backgroundImage,
                height: '80%',
              }}
            />
            <span class='button-grad' />
            <span class='desc-bar'>
              {image.description}
            </span>
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
              </Typography>
            </span>

          </ButtonBase>

        </>
      ))}

    </div>
  );
}