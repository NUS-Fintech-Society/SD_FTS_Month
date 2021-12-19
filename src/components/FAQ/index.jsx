import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'
import AddCircle from '@material-ui/icons/AddCircle'
import RemoveCircle from '@material-ui/icons/RemoveCircle'
import DUMMY_QA from '../../data/FAQ'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.secondary,
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
  },
  bodyWrapper: {
    backgroundColor: theme.palette.background.secondary,
  },
  title: {
    width: '80vw',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15vh',
    marginBottom: '7vh',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5vh',
      marginBottom: '5vh',
    },
    textAlign: 'center',
  },
  icon: {
    fontSize: '3rem',
    color: theme.palette.secondary.main,
  },
  typo: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 17,
    },
  },
}))

export default function FAQ() {
  const classes = useStyles()

  const initialState = Array(DUMMY_QA.length).fill(false)

  const [expandedState, setExpandedState] = React.useState(initialState)

  const expandHandler = (id) => () => {
    const newList = [...expandedState]
    if (expandedState[id]) {
      newList[id] = false
      setExpandedState(newList)
    } else {
      newList[id] = true
      setExpandedState(newList)
    }
  }

  return (
    <Box className={classes.root}>
      <Container className={classes.title}>
        <Typography variant="h3" className={classes.header}>
          FREQUENTLY ASKED QUESTIONS
        </Typography>
      </Container>
      <Container style={{ paddingBottom: '10rem' }}>
        {DUMMY_QA.map((qa) => {
          return (
            <Accordion key={qa.id} className={classes.bodyWrapper}>
              <AccordionSummary
                expandIcon={
                  expandedState[qa.id] ? (
                    <RemoveCircle className={classes.icon} />
                  ) : (
                    <AddCircle className={classes.icon} />
                  )
                }
                onClick={expandHandler(qa.id)}
              >
                <Typography className={classes.typo}>
                  <strong>Question: </strong> {qa.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.typo}>
                  {qa.answer.split('\n').map((paragraph, idx) => {
                    const strToBold = 'nusfintech.ops@gmail.com'
                    const textArray = paragraph.split(strToBold)
                    return (
                      <Typography
                        className={classes.typo}
                        key={idx}
                        paragraph={true}
                      >
                        {idx === 0 && <strong> Answer: </strong>}
                        {textArray.map((item, index) => (
                          <>
                            {item}
                            {index !== textArray.length - 1 && (
                              <b>{strToBold}</b>
                            )}
                          </>
                        ))}
                      </Typography>
                    )
                  })}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Container>
    </Box>
  )
}
