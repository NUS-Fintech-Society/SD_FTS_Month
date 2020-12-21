import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';

export const CustomizedAccordion = withStyles({
    root: {
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
  
export const CustomizedAccordionSummary = withStyles({
    root: {
      backgroundColor: '#131D47',
      borderBottom: '3px solid #52B9FF',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
      justifyContent:'flex-start',
    },
    content: {
      flexDirection:'row',
      flexGrow:0,
      '&$expanded': {
        margin: '12px 0',
      },
      order:1,
      flexBasis:'28%',
    },
    expanded: {
      borderBottom:'0px',
    },
    expandIcon: {
      color:'#FD8329',
      '& svg':{
        fontSize:48,
      },
      '&$expanded': {
        transform: 'rotate(-90deg)',
      },
      order:2,
    }
  })(MuiAccordionSummary);
  
export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    details : {
      display: 'flex',
      flexDirection: 'column',
    },
    heading: {
      fontSize: 'clamp(1.25rem, 1.0000rem + 0.8000vw, 1.5rem)',
      fontWeight: theme.typography.fontWeightRegular,
      color: '#FFFFFF',
    },
    questions: {
      display:'flex',
      fontSize: 'clamp(1rem, 0.7500rem + 0.8000vw, 1.25rem)',
      fontWeight: theme.typography.fontWeightBold,
      padding: '10px 0',
    },
    answers: {
      display:'flex',
      fontSize: 'clamp(0.75rem, 0.5000rem + 0.8000vw, 1rem)',
      fontWeight: theme.typography.fontWeightMedium,
    },
    
    faq:{
      height: '25%',
      fontSize: 'clamp(1.5rem, 1.0000rem + 1.6000vw, 2rem)',
      margin:'40px 0',
      marginLeft: '20px',
      justifyContent: 'left',
      fontWeight: theme.typography.fontWeightBold,
    },
    qnacontainer:{
      marginBottom: '20px',
    },
    underlinedanswers:{
      marginLeft: '3px'
    },
    lastAccordionSummary:{
      borderBottom:'0px',
    },
    answerbox:{
      display:'flex',
    }
  }));