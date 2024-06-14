import { Container, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import Carousel from './Carousel';

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url('./banner2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 400,
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
    [theme.breakpoints.down('xs')]: {
      height: 200,
    },
  },
  bannerContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around',
  },
  tagline: {
    display: 'flex',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

const Banner = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 601px)');

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 15,
              fontFamily: 'Montserrat',
            }}
          >
            DigiLedger
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: 'beige',
              textTransform: 'capitalize',
              fontFamily: 'Montserrat',
            }}
          >
            Your All-in-One Crypto Companion – Track, Compare, Succeed!
          </Typography>
        </div>
        {isDesktop && <Carousel />}
      </Container>
    </div>
  );
};

export default Banner;
