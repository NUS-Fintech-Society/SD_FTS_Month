import React,{useState} from 'react';
import {Typography} from '@material-ui/core'
import './Accordion.css'

function Accordion({title,questions}){
    const [isOpen,setIsOpen] = useState(false);

  return(
    <div className="accordion">
      <div 
      onClick={() => setIsOpen(!isOpen)} 
      className="accordion-header"
      >
        <Typography variant="h5" align="left">{title}</Typography>
        <div className="accordion-indicator">
          {isOpen ? '-' : '+'}
        </div>
      </div>
      {isOpen && (
      <div className="accordion-body">
        {questions.map((question) =>{
          return (
          <div>
            <Typography className="questions">{question.question}</Typography>
            {question.answer.map((ans) => {
              if(ans === ''){
                return (<br/>)
              }

              return (<Typography className="answers">{ans}</Typography>);
            }
              
            )}
          
          </div>)
        })}
      </div>
      )}
    </div>
  )
}

export default Accordion;