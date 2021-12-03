import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'
import Accordion from '@material-ui/core/ExpansionPanel'
import AccordionSummary from '@material-ui/core/ExpansionPanelSummary'
import AccordionDetails from '@material-ui/core/ExpansionPanelDetails'
import AddCircle from '@material-ui/icons/AddCircle'
import RemoveCircle from '@material-ui/icons/RemoveCircle'
import DUMMY_QA from '../../data/FAQ'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.secondary,
    flexDirection: 'column',
  },
  header: {
    fontWeight: 700,
    textAlign: 'center',
  },
  bodyWrapper: {
    backgroundColor: theme.palette.background.secondary,
  },
  title: {
    width: '80vw',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10vh',
    textAlign: 'center',
  },
  icon: {
    fontSize: '3rem',
    color: theme.palette.secondary.main,
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
      <Box className={classes.title}>
        <Typography variant="h3" className={classes.header}>
          FREQUENTLY ASKED QUESTIONS
        </Typography>
      </Box>
      <Container>
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
                <Typography variant="subtitle2">
                  <strong>Question: </strong> {qa.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong> Answer: </strong> {qa.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Container>
    </Box>
  )
}
