import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, ButtonBase } from '@material-ui/core';
import HackathonImage from '../../../images/hackathonimage.JPG';
import StocksImage from '../../../images/stocksworkshop.jpg';
import NewsImage from '../../../images/newsworkshop.jpg';
import BlockchainImage from '../../../images/blockchainworkshop.jpg';
import CryptoImage from '../../../images/cryptocurrencyworkshop.jpg';
import AnatolyPhoto from '../../../images/anatolyphoto.jpg';
import DanielPhoto from '../../../images/danielphoto.jpg';
import '../BlogPage.css';

const images = [
  {
    backgroundImage: "url(" + HackathonImage + ")", // currently placeholder image
    href: '/hackathon',
    title: 'Hackathon',
    width: '379px',
    description: 'Sign up for our Hackathon and stand to win prizes',
  },
  {
    backgroundImage: "url(" + StocksImage + ")", // currently placeholder image
    href: '/machinelearning', // currently no workshop page
    title: 'Machine Learning',
    width: '379px',
    description: 'Predict stock market prices using Machine Learning and learn Natural Language Processing',
  },
  {
    backgroundImage: "url(" + BlockchainImage + ")", // currently placeholder image
    href: '/blockchain', // currently no workshop page
    title: 'Blockchain',
    width: '379px',
    description: 'Understand how peer-to-peer transactions of value happen and learn about public and private key cryptography, the components of a block, and the consensus of mechanisms.',
  },
  {
    backgroundImage: "url(" + DanielPhoto + ")", // currently placeholder image
    href: '/externalworkshop', // currently no workshop page
    title: 'External Workshops',
    width: '379px',
    description: 'Learn from industry experts from ParsiQL, Fundedhere, BNPP, and more',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    justifyContent: 'center',
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
    fontSize: '28px',
    textAlign: 'center',
    fontWeight: 'bold',
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
              height: '70vh',
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