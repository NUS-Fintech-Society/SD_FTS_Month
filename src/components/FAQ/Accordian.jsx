/* eslint-disable prettier/prettier */
import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'
import Accordion from '@material-ui/core/ExpansionPanel'
import AccordionSummary from '@material-ui/core/ExpansionPanelSummary'
import AccordionDetails from '@material-ui/core/ExpansionPanelDetails'
import AddCircle from '@material-ui/icons/AddCircle'
import RemoveCircle from '@material-ui/icons/RemoveCircle'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.secondary,
    flexDirection: 'column',
    position: 'relative',
  },
  contentWrapper: {
    padding: '48px 0px',
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
  },
  header: {
    fontWeight: 700,
  },
  bodyWrapper: {
    backgroundColor: '#F5F5F5',
  },

  title: {
    position: 'absolute',
    top: '5vh',
    width: '80vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: '3rem',
    color: '#101F40',
  },
}))

export default function CustomizedAccordion() {
  const classes = useStyles()
  const [expandPanel1, setExpandPanel1] = React.useState('')
  const [expandPanel2, setExpandPanel2] = React.useState('')
  const [expandPanel3, setExpandPanel3] = React.useState('')
  const [expandPanel4, setExpandPanel4] = React.useState('')
  const [expandPanel5, setExpandPanel5] = React.useState('')

  const expandHandler = (panel) => () => {
    if (panel === 'panel1') {
      panel === expandPanel1 ? setExpandPanel1('') : setExpandPanel1(panel)
    } else if (panel === 'panel2') {
      panel === expandPanel2 ? setExpandPanel2('') : setExpandPanel2(panel)
    } else if (panel === 'panel3') {
      panel === expandPanel3 ? setExpandPanel3('') : setExpandPanel3(panel)
    } else if (panel === 'panel4') {
      panel === expandPanel4 ? setExpandPanel4('') : setExpandPanel4(panel)
    } else {
      panel === expandPanel5 ? setExpandPanel5('') : setExpandPanel5(panel)
    }
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h2" className={classes.header}>
          Frequently Asked Questions
        </Typography>
      </Box>
      <Container>
        <Accordion className={classes.bodyWrapper}>
          <AccordionSummary
            expandIcon={
              expandPanel1 === 'panel1' ? (
                <RemoveCircle className={classes.icon} />
              ) : (
                <AddCircle className={classes.icon} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={expandHandler('panel1')}
          >
            <Typography variant="subtitle2">
              <strong>Question: </strong> What are the requirements of forming a
              team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              <strong> Answer: </strong> We do not know either. Will let you
              know later!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.bodyWrapper}>
          <AccordionSummary
            expandIcon={
              expandPanel2 === 'panel2' ? (
                <RemoveCircle className={classes.icon} />
              ) : (
                <AddCircle className={classes.icon} />
              )
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
            onClick={expandHandler('panel2')}
          >
            <Typography variant="subtitle2">
              <strong>Question: </strong> Insert question here, What are the
              requirements of forming a team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              <strong> Answer: </strong> We do not know either. Will let you
              know later!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.bodyWrapper}>
          <AccordionSummary
            expandIcon={
              expandPanel3 === 'panel3' ? (
                <RemoveCircle className={classes.icon} />
              ) : (
                <AddCircle className={classes.icon} />
              )
            }
            aria-controls="panel3a-content"
            id="panel3a-header"
            onClick={expandHandler('panel3')}
          >
            <Typography variant="subtitle2">
              <strong>Question: </strong> Insert question here, What are the
              requirements of forming a team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              <strong> Answer: </strong> We do not know either. Will let you
              know later!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.bodyWrapper}>
          <AccordionSummary
            expandIcon={
              expandPanel4 === 'panel4' ? (
                <RemoveCircle className={classes.icon} />
              ) : (
                <AddCircle className={classes.icon} />
              )
            }
            aria-controls="panel4a-content"
            id="panel4a-header"
            onClick={expandHandler('panel4')}
          >
            <Typography variant="subtitle2">
              <strong>Question: </strong> Insert question here, What are the
              requirements of forming a team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              <strong> Answer: </strong> We do not know either. Will let you
              know later!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.bodyWrapper}>
          <AccordionSummary
            expandIcon={
              expandPanel5 === 'panel5' ? (
                <RemoveCircle className={classes.icon} />
              ) : (
                <AddCircle className={classes.icon} />
              )
            }
            aria-controls="panel5a-content"
            id="panel5a-header"
            onClick={expandHandler('panel5')}
          >
            <Typography variant="subtitle2">
              <strong>Question: </strong> Insert question here, What are the
              requirements of forming a team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              <strong> Answer: </strong> We do not know either. Will let you
              know later!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  )
}
