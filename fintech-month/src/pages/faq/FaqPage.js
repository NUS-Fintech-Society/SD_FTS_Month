import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Box,Container} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';



const Accordion = withStyles({
  root: {
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  details : {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#FFFFFF',
    
  },
  questions: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
    padding: '10px 0',
  },
  answers: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium,
    padding: '0 16px'
  
  },
  accordionSummary:{
    backgroundColor: "#000080",
  },
  
}));

export default function FaqPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.accordionSummary}
        >
          <Typography className={classes.heading}>Hackathon</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.questions}>
            Who is eligible to take part in the hacakthon?
          </Typography>
          <Typography className={classes.answers}>
            All university and polytechnic students in Singapore are welcome to sign up for the hackathon!
          </Typography>
          <Typography className={classes.questions}>
            Are there any requirements for the hackathon team formation?
          </Typography>
          <Typography className={classes.answers}>
            The team should be made up of 2-4 members. Team members need not be from the same school. Please appoint a team leader to be the main point of contact.
          </Typography>
          <Typography className={classes.questions}>
            How do we sign up?
          </Typography>
          <Typography className={classes.answers}>
            Sign-up links will be made available when registration opens. You may retrieve links from our social media (Instagram, Telegram, LinkedIn).
          </Typography>
          <br/>
          <Typography className={classes.answers}>
            Each team should only sign up once. Please appoint a team leader and fill up all team members' particulars as stated in the form.
          </Typography>
          <Typography className={classes.questions}>
            How many rounds are there in the hackathon?
          </Typography>
          <Typography className={classes.answers}>
            There are total of 2 rounds.
          </Typography>
          <br/>
          <Typography className={classes.answers}>
            Following the first round, our internal judges from Fintech Society will be selecting the top 8 finalist teams.
          </Typography>
          <br/>
          <Typography className={classes.answers}>
            These 8 finalist teams will then be invited to attend our closing ceremony held at (venue) where they will be pitching their proposals to a panel of distinguished external judges. After which, the judges will pick the top 3 teams as well as the team with the most outstanding pitch to win attractive prizes.
          </Typography>
          <Typography className={classes.questions}>
            Will the hackathon be conducted remotely?
          </Typography>
          <Typography className={classes.answers}>
            Yes, the first round will be conducted remotely for all participants.
          </Typography>
          <br/>
          <Typography className={classes.answers}>
            However, the final round will be conducted physically at (venue) for the top 8 finalist teams. For the teams that did not make it to the final round, we will be conducting a Live Stream event via (platform) for you.
          </Typography>
          <Typography className={classes.questions}>
            What should format of the file be for the hackathon submission?
          </Typography>
          <Typography className={classes.answers}>
            TBC
          </Typography>
          <Typography className={classes.questions}>
            Where do we submit our files for the hackathon?
          </Typography>
          <Typography className={classes.answers}>
            TBC
          </Typography>
          <Typography className={classes.questions}>
            What are the judging criterias?
          </Typography>
          <Typography className={classes.answers}>
            TBC
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.accordionSummary}
        >
          <Typography className={classes.heading}>Opening ceremony</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.questions}>
            Will the opening ceremony be conducted virtually?
          </Typography>
          <Typography className={classes.answers}>
            Yes, the opening ceremony will be conducted virtually via (platform). We will be sending out the link via email to all hackathon participants 2-3 days before the opening ceremony.
          </Typography>
          <Typography className={classes.questions}>
            Is it compulsory for all hackathon participants to be present during the opening ceremony?
          </Typography>
          <Typography className={classes.answers}>
            Yes, all hackathon participants must be present during the opening ceremony as  we will be revealing the problem statement
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.accordionSummary}
        >
          <Typography className={classes.heading}>Workshops</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.questions}>
            How do we sign-up?
          </Typography>
          <Typography className={classes.answers}>
            Sign-up links will be made available when registration opens. You may retrieve the links from our social media (Instagram, Telegram, LinkedIn).
          </Typography>
          <br/>
          <Typography className={classes.answers}>
            There will be 2 separate forms, one for beginner workshops and another for external workshops. Under each form, please indicate all the sessions that you are keen in attending. Due to limited slots, we would like everyone to fully commit to the sessions that they have signed up for. Hence, if you fail to attend any 2 sessions that you have signed up for, you will be banned from attending future sessions and your slot will be given to the others. 
          </Typography>
          <br/>
          <Typography className={classes.answers}>
            Please sign up individually and only submit each of the forms once.
          </Typography>
          <Typography className={classes.questions}>
            Will the workshops be conducted virtually?
          </Typography>
          <Typography className={classes.answers}>
            Yes, both the beginner and external workshops will be conducted virually via Zoom.
          </Typography>
          <Typography className={classes.questions}>
            Are the workshops compulsory for hackathon participants?
          </Typography>
          <Typography className={classes.answers}>
            No. The workshops are meant to better equip all participants, regardless of their background, for the hackathon. If you do not require any additional help/guidance, you need not sign up for the workshops.
          </Typography>
          <Typography className={classes.questions}>
            If I am not participating in the hackathon, can I still sign up for any of the workshops?
          </Typography>
          <Typography className={classes.answers}>
            Non-hackathon participants may still sign up for any of the workshops but please note that you'll not be guaranteed a slot as priority will be given to hackathon participants. In the event that we have leftover slots for any of the workshops, we will be opening them up to non-hackathon participants on FCFS basis.
          </Typography>
          <Typography className={classes.questions}>
            How many workshops can I sign up for?
          </Typography>
          <Typography className={classes.answers}>
            There is no limit to the maximum number of workshops you can sign up for.
          </Typography>
        </AccordionDetails>
      </Accordion>
      

      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.accordionSummary}
        >
          <Typography className={classes.heading}>Closing ceremony</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.questions}>
            Will all hackathon participants be physically present at the venue?
          </Typography>
          <Typography className={classes.answers}>
            No, in view of COVID-19 restrictions, only the top 8 finalist teams will be invited down to the venue. However, a Live Stream event will be made available to the rest of the participants. 
          </Typography>
          <Typography className={classes.questions}>
            Is it compulsory for all hackathon participants to join in the Live Stream?
          </Typography>
          <Typography className={classes.answers}>
            Yes. Come join us for an exciting lineup of pitches made by our top 8 finalist teams to a panel of external judges and get to claim your e-vouchers from us at the end of the session!
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      </div>
    
    
      
  
  );
}