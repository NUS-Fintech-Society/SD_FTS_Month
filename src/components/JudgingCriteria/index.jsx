import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid, Container } from '@material-ui/core'
import { DUMMY_CRITERIA } from '../../data/Criteria'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.secondary,
    flexDirection: 'column',
    minHeight: '100vh',
  },
  title: {
    marginTop: '15vh',
    textAlign: 'center',
    marginBottom: '10vh',
    padding: '0 10px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10vh',
      marginBottom: '5vh',
    },
  },
  listTitle: {
    color: theme.palette.primary.main,
    fontSize: 20,
  },
}))

export default function JudgingCriteria() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h3" className={classes.header}>
          JUDGING CRITERIA
        </Typography>
      </Box>
      {/* <Container className={classes.contentWrapper} maxWidth="100vw">
        <Typography variant="h3" className={classes.title}>
          JUDGING CRITERIA
        </Typography>
      </Container> */}

      <Container>
        <Grid
          container
          columnSpacing={{ sm: 1, md: 2, lg: 3 }}
          spacing={1}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {DUMMY_CRITERIA.map((c, idx) => {
            return (
              <Grid key={idx} item xs={12} sm={6}>
                <ul>
                  <li className={classes.listTitle}>
                    <Typography
                      variant="subtitle1"
                      className={classes.listTitle}
                    >
                      {c.criteria}
                    </Typography>
                  </li>
                </ul>
                <Box>
                  <ul>
                    {c.description.map((d, i) => {
                      return (
                        <li key={i}>
                          <Typography variant="body1">{d}</Typography>
                        </li>
                      )
                    })}
                  </ul>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
