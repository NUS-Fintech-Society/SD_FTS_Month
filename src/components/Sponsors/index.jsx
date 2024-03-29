import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '96px 48px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      padding: '48px',
    },
  },
  title: {
    marginBottom: 24,
  },
  sectionWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 88,
    [theme.breakpoints.down('xs')]: {
      marginTop: 32,
    },
  },
  sectionHeader: {
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  rowWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    '& .MuiGrid-item': {
      cursor: 'pointer',
    },
  },
}))

const Sponsors = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        CREDITS
      </Typography>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h5" className={classes.sectionHeader}>
          Sponsors
        </Typography>
        <Grid
          container
          className={classes.rowWrapper}
          spacing={4}
          style={{ maxWidth: '600px' }}
        >
          <Grid item xs={12}>
            <img
              src="/credits/bybit-logo-trans.png"
              alt="Bybit"
              width="100%"
              onClick={() =>
                window.open('https://www.bybit.com/en-US/', '_blank')
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/credits/ripple-logo.png"
              alt="Ripple"
              width="100%"
              onClick={() => window.open('https://ripple.com/', '_blank')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/credits/stellar-logo.png"
              alt="Stellar"
              onClick={() => window.open('https://www.stellar.org/', '_blank')}
              width="100%"
            />
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h5" className={classes.sectionHeader}>
          Organisers
        </Typography>
        <Grid
          container
          className={classes.rowWrapper}
          spacing={4}
          style={{ maxWidth: '600px' }}
        >
          <Grid item xs={6}>
            <img
              src="/credits/SocietyLogo.png"
              alt="NUS FTS"
              width="100%"
              onClick={() =>
                window.open('https://fintechsociety.comp.nus.edu.sg/', '_blank')
              }
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src="/credits/nus_ftl_logo.png"
              alt="NUS FTL"
              width="100%"
              onClick={() =>
                window.open('https://fintechlab.nus.edu.sg/', '_blank')
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h5" className={classes.sectionHeader}>
          Partners
        </Typography>
        <Grid
          container
          className={classes.rowWrapper}
          spacing={4}
          style={{ maxWidth: '900px' }}
        >
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/alphalab-logo.png"
              alt="AlphaLab Capital"
              width="100%"
              onClick={() =>
                window.open('https://www.alphalab.capital/', '_blank')
              }
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/defiance-capital-logo.png"
              alt="DeFiance Capital"
              width="100%"
              onClick={() =>
                window.open('https://www.defiance.capital/', '_blank')
              }
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/futu-singapore-logo.png"
              alt="Futu Singapore"
              width="100%"
              onClick={() => window.open('https://www.futusg.com/', '_blank')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/helicap-logo.png"
              alt="Helicap"
              width="100%"
              onClick={() => window.open('https://heli-cap.com/', '_blank')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/messari-logo.png"
              alt="Messari"
              width="100%"
              onClick={() => window.open('https://messari.io/', '_blank')}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            style={{ paddingLeft: '48px', paddingRight: '48px' }}
          >
            <img
              src="/credits/octava-logo.png"
              alt="Octava"
              width="100%"
              onClick={() => window.open('https://www.octava.sg/', '_blank')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/revolut-logo.png"
              alt="Revolut"
              width="100%"
              onClick={() =>
                window.open('https://www.revolut.com/en-SG', '_blank')
              }
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/spenmo-logo.png"
              alt="Spenmo"
              width="100%"
              onClick={() => window.open('https://spenmo.com/', '_blank')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/stashaway-logo.png"
              alt="Stashaway"
              width="100%"
              onClick={() => window.open('https://www.stashaway.sg/', '_blank')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/seamoney-logo.png"
              alt="SeaMoney"
              width="100%"
              onClick={() => window.open('https://www.seamoney.com/', '_blank')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/oio-logo.png"
              alt="OIO"
              width="100%"
              onClick={() => window.open('https://oio.holdings/', '_blank')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/startbahn-logo.png"
              alt="Startbahn"
              width="100%"
              onClick={() => window.open('https://startbahn.jp/en/', '_blank')}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            style={{ paddingLeft: '48px', paddingRight: '48px' }}
          >
            <img
              src="/credits/moledao-logo.jpg"
              alt="Moledao"
              width="100%"
              onClick={() => window.open('https://www.moledao.io/', '_blank')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src="/credits/hg-exchange-logo.webp"
              alt="HG Exchange"
              width="100%"
              onClick={() => window.open('https://hg.exchange/', '_blank')}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Sponsors
