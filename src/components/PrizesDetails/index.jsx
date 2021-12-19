import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography, Grid } from '@material-ui/core'
import { PRIZES_DETAILS } from '../../data/Prizes'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.primary,
    flexDirection: 'column',
    minHeight: '80vh',
  },
  title: {
    padding: '0 10px',
    fontWeight: 700,
    fontSize: '24px',
  },
  listTitle: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: '24px',
  },
}))

const PrizesDetails = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.title}>Details on Prizes</Typography>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </Container>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {PRIZES_DETAILS.map((p, index) => {
            return (
              <Grid key={index} item xs={12} sm={6}>
                <ul>
                  <li className={classes.listTitle}>
                    <Typography className={classes.listTitle}>
                      {p.prize}
                    </Typography>
                  </li>
                  <div>
                    <Typography variant="body1">{p.description}</Typography>
                  </div>
                </ul>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default PrizesDetails
