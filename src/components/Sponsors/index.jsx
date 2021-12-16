import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
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
  bybitImageWrapper: {
    cursor: 'pointer',
    height: 120,
    width: 480,
    [theme.breakpoints.down('xs')]: {
      height: 70,
      width: 250,
    },
  },
  rowWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 32,
  },
  rippleImageWrapper: {
    cursor: 'pointer',
    height: 120,
    width: 250,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 65,
      width: 120,
    },
  },
  stellarImageWrapper: {
    cursor: 'pointer',
    height: 120,
    width: 300,
    [theme.breakpoints.down('xs')]: {
      height: 70,
      width: 170,
    },
  },
  ftsImageWrapper: {
    cursor: 'pointer',
    height: 120,
    width: 200,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 75,
      width: 120,
    },
  },
  ftlImageWrapper: {
    cursor: 'pointer',
    height: 110,
    width: 350,
    [theme.breakpoints.down('xs')]: {
      height: 55,
      width: 170,
    },
  },
  alcImageWrapper: {
    cursor: 'pointer',
    height: 80,
    width: 150,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 40,
      width: 80,
    },
  },
  dfcImageWrapper: {
    cursor: 'pointer',
    height: 80,
    width: 200,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 30,
      width: 80,
    },
  },
  futuImageWrapper: {
    cursor: 'pointer',
    height: 80,
    width: 150,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 40,
      width: 80,
    },
  },
  hlcImageWrapper: {
    cursor: 'pointer',
    height: 50,
    width: 200,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 25,
      width: 80,
    },
  },
  cpiImageWrapper: {
    cursor: 'pointer',
    height: 50,
    width: 200,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 20,
      width: 80,
    },
  },
  msrImageWrapper: {
    cursor: 'pointer',
    height: 35,
    width: 220,
    [theme.breakpoints.down('xs')]: {
      height: 15,
      width: 80,
    },
  },
  otvImageWrapper: {
    cursor: 'pointer',
    height: 80,
    width: 110,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 40,
      width: 70,
    },
  },
  ptmImageWrapper: {
    cursor: 'pointer',
    height: 100,
    width: 100,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 50,
      width: 50,
    },
  },
  spmImageWrapper: {
    cursor: 'pointer',
    height: 50,
    width: 220,
    [theme.breakpoints.down('xs')]: {
      height: 20,
      width: 80,
    },
  },
  stwImageWrapper: {
    cursor: 'pointer',
    height: 50,
    width: 220,
    marginRight: 24,
    [theme.breakpoints.down('xs')]: {
      height: 25,
      width: 100,
    },
  },
  shpImageWrapper: {
    cursor: 'pointer',
    height: 70,
    width: 220,
    [theme.breakpoints.down('xs')]: {
      height: 30,
      width: 80,
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
        <Box className={classes.rowWrapper}>
          <Box className={classes.bybitImageWrapper}>
            <img
              src="/credits/bybit-logo-trans.png"
              alt="ByBit"
              height="100%"
              width="100%"
              onClick={() =>
                window.open('https://www.bybit.com/en-US/', '_blank')
              }
            />
          </Box>
        </Box>
        <Box className={classes.rowWrapper}>
          <div className={classes.rippleImageWrapper}>
            <img
              src="/credits/ripple-logo.png"
              alt="Ripple"
              height="100%"
              width="100%"
              onClick={() => window.open('https://ripple.com/', '_blank')}
            />
          </div>
          <div className={classes.stellarImageWrapper}>
            <img
              src="/credits/stellar-logo.png"
              alt="Stellar"
              onClick={() => window.open('https://www.stellar.org/', '_blank')}
              height="100%"
              width="100%"
            />
          </div>
        </Box>
      </Box>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h5" className={classes.sectionHeader}>
          Organisers
        </Typography>
        <Box className={classes.rowWrapper}>
          <div className={classes.ftsImageWrapper}>
            <img
              src="/credits/FTS-Logo-Transparent.png"
              alt="NUS FTS"
              height="100%"
              width="100%"
              onClick={() =>
                window.open('https://fintechsociety.comp.nus.edu.sg/', '_blank')
              }
            />
          </div>
          <div className={classes.ftlImageWrapper}>
            <img
              src="/credits/nus_ftl_logo.png"
              alt="NUS FTL"
              height="100%"
              width="100%"
              onClick={() =>
                window.open('https://fintechlab.nus.edu.sg/', '_blank')
              }
            />
          </div>
        </Box>
      </Box>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h5" className={classes.sectionHeader}>
          Partners
        </Typography>
        <Box className={classes.rowWrapper}>
          <div className={classes.alcImageWrapper}>
            <img
              src="/credits/alphalab-logo.png"
              alt="AlphaLab Capital"
              height="100%"
              width="100%"
              onClick={() =>
                window.open('https://www.alphalab.capital/', '_blank')
              }
            />
          </div>
          <div className={classes.dfcImageWrapper}>
            <img
              src="/credits/defiance-capital-logo.png"
              alt="DeFiance Capital"
              height="100%"
              width="100%"
              onClick={() =>
                window.open('https://www.defiance.capital/', '_blank')
              }
            />
          </div>
          <div className={classes.futuImageWrapper}>
            <img
              src="/credits/futu-singapore-logo.png"
              alt="Futu Singapore"
              height="100%"
              width="100%"
              onClick={() => window.open('https://www.futusg.com/', '_blank')}
            />
          </div>
        </Box>
        <Box className={classes.rowWrapper}>
          <div className={classes.hlcImageWrapper}>
            <img
              src="/credits/helicap-logo.png"
              alt="Helicap"
              height="100%"
              width="100%"
              onClick={() => window.open('https://heli-cap.com/', '_blank')}
            />
          </div>
          <div className={classes.cpiImageWrapper}>
            <img
              src="/credits/index-coop.png"
              alt="Index Coop"
              height="100%"
              width="100%"
              onClick={() =>
                window.open('https://www.indexcoop.com/', '_blank')
              }
            />
          </div>
          <div className={classes.msrImageWrapper}>
            <img
              src="/credits/messari-logo.png"
              alt="Messari"
              height="100%"
              width="100%"
              onClick={() => window.open('https://messari.io/', '_blank')}
            />
          </div>
        </Box>
        <Box className={classes.rowWrapper}>
          <div className={classes.otvImageWrapper}>
            <img
              src="/credits/octava-logo.png"
              alt="Octava"
              height="100%"
              width="100%"
              onClick={() => window.open('https://www.octava.sg/', '_blank')}
            />
          </div>
          <div className={classes.ptmImageWrapper}>
            <img
              src="/credits/platus-mazu-logo.png"
              alt="Platus Mazu"
              height="100%"
              width="100%"
              onClick={() =>
                window.open('https://www.plutusmazu.com/', '_blank')
              }
            />
          </div>
          <div className={classes.spmImageWrapper}>
            <img
              src="/credits/spenmo-logo.png"
              alt="Spenmo"
              height="100%"
              width="100%"
              onClick={() => window.open('https://spenmo.com/', '_blank')}
            />
          </div>
        </Box>
        <Box className={classes.rowWrapper}>
          <div className={classes.stwImageWrapper}>
            <img
              src="/credits/stashaway-logo.png"
              alt="Stashaway"
              height="100%"
              width="100%"
              onClick={() => window.open('https://www.stashaway.sg/', '_blank')}
            />
          </div>
          <div className={classes.shpImageWrapper}>
            <img
              src="/credits/shopee_logo.png"
              alt="Shopee"
              height="100%"
              width="100%"
              onClick={() => window.open('https://shopee.sg/', '_blank')}
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default Sponsors

// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import { Box, Typography } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     padding: '96px 48px',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: theme.palette.background.primary,
//     flexDirection: 'column',
//     [theme.breakpoints.down('xs')]: {
//       padding: '48px',
//     },
//   },
//   sponsorTitle: {
//     textAlign: 'center',
//   },
//   sponsorLogoWrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '48px',
//     maxWidth: '1400px',
//     textAlign: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     fontWeight: 700,
//     marginTop: '56px',
//     marginBottom: '24px',
//     textAlign: 'center',
//     [theme.breakpoints.down('xs')]: {
//       fontSize: 24,
//     },
//   },
//   bodyWrapper: {
//     marginTop: 16,
//     textAlign: 'center',
//     justifyContent: 'center',
//   },
//   bybitLogoButton: {
//     cursor: 'pointer',
//     border: '0px',
//     backgroundColor: theme.palette.background.primary,
//     width: '30%',
//   },
//   rippleLogoButton: {
//     cursor: 'pointer',
//     border: '0px',
//     backgroundColor: theme.palette.background.primary,
//     width: '25%',
//   },
//   stellarLogoButton: {
//     cursor: 'pointer',
//     border: '0px',
//     backgroundColor: theme.palette.background.primary,
//     width: '25%',
//   },
//   partnersLogoWrapper: {
//     display: 'flex',
//     width: '100%',
//     maxWidth: '1150px',
//     alignItems: 'center',
//     textAlign: 'center',
//     justifyContent: 'center',
//     verticalAlign: 'center',
//   },
//   shopeeLogoWrapper: {
//     cursor: 'pointer',
//     display: 'flex',
//     width: '100%',
//     maxWidth: '900px',
//     alignItems: 'center',
//     textAlign: 'center',
//     justifyContent: 'center',
//     verticalAlign: 'center',
//     paddingBottom: '50px',
//   },
//   ftsLogo: {
//     cursor: 'pointer',
//     backgroundColor: theme.palette.background.primary,
//     width: '50%',
//   },
// }))

// const Sponsors = () => {
//   const classes = useStyles()

//   return (
//     <Box className={classes.root}>
//       <Typography variant="h3">CREDITS</Typography>
//       <Typography variant="h5" className={classes.header}>
//         Event Sponsors
//       </Typography>
//       <Box className={classes.sponsorLogoWrapper}>
//         <button className={classes.bybitLogoButton}>
//           <img
//             src="/credits/bybit-logo-trans.png"
//             alt="ByBit"
//             width="100%"
//             onClick={() => window.open('https://www.bybit.com/en-US/', 'ByBit')}
//           />
//         </button>
//         <button className={classes.rippleLogoButton}>
//           <img
//             src="/credits/ripple-logo.png"
//             alt="Ripple"
//             width="100%"
//             onClick={() => window.open('https://ripple.com/', '_blank')}
//           />
//         </button>
//         <button className={classes.stellarLogoButton} position="right">
//           <img
//             src="/credits/stellar-logo.png"
//             alt="Stellar"
//             onClick={() => window.open('https://www.stellar.org/', '_blank')}
//             width="100%"
//           />
//         </button>
//       </Box>
//       <Typography variant="h5" className={classes.header}>
//         Event Organisers
//       </Typography>
//       <Box className={classes.partnersLogoWrapper}>
//         <Box className={classes.ftsLogo}>
//           <img
//             src="/credits/FTS-Logo-Transparent.png"
//             alt="NUS FTS"
//             width="70%"
//             onClick={() =>
//               window.open('https://fintechsociety.comp.nus.edu.sg/', '_blank')
//             }
//           />
//         </Box>
//         <Box className={classes.ftsLogo}>
//           <img
//             src="/credits/nus_ftl_logo.png"
//             alt="NUS FTL"
//             width="100%"
//             onClick={() =>
//               window.open('https://fintechlab.nus.edu.sg/', '_blank')
//             }
//           />
//         </Box>
//       </Box>
//       <Typography variant="h5" className={classes.header}>
//         Event Partners
//       </Typography>
//       <Box
//         className={classes.shopeeLogoWrapper}
//         justifyContent="center"
//         margin="auto"
//       >
//         <img
//           src="/credits/shopee_logo.png"
//           alt="Shopee"
//           width="40%"
//           justifyContent="center"
//           margin="auto"
//         />
//       </Box>
//     </Box>
//   )
// }

// export default Sponsors
