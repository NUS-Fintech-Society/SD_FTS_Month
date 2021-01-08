import React from 'react';
import {Box,Container,AccordionDetails} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useStyles, CustomizedAccordionSummary, CustomizedAccordion} from './styles.js';
import {items} from './items.js'
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
 

const theme = createMuiTheme({
    typography: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight:400,
    }
  });


export default function FaqPage() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
      <Typography className={classes.faq}>Frequently Asked Questions (FAQs)</Typography>
      {items.map((item) =>{
        return (
        <Box>  
          <CustomizedAccordion>
            <CustomizedAccordionSummary expandIcon={<ArrowDropDownIcon/>}>
              <Typography className={classes.heading}>
                {item.heading}
              </Typography>
            </CustomizedAccordionSummary>
            <AccordionDetails className={classes.details}>
              {item.qnas.map((qna) => {
                return(
                  <Container className={classes.qnacontainer}>
                    <Typography className={classes.questions}>{qna.question}</Typography>
                    <Box>
                    {qna.answers.map((answer) =>{  
                      return(
                        <Typography className={classes.answers} display="inline">{answer}</Typography>
                      )
                    })}
                    </Box>
                  </Container>
                )
              })}
            </AccordionDetails>
          </CustomizedAccordion>
        </Box>)
        })}
     </Box>
    </ThemeProvider>
    
    
    
      
  
  );
}