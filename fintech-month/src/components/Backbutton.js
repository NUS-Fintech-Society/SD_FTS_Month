import React from 'react';
import {useHistory} from 'react-router-dom';
import {IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    icon:{
        width:'60px',
        height:'60px',
        color:'#FD8329',
    },
    arrow:{
        fontSize:'60px',
    }
}))

function Backbutton(){
    const history = useHistory()
    const classes = useStyles()

    return(
        <IconButton 
        aria-label="backarrow"  
        onClick={() => {
            history.goBack();
        }}
        className={classes.icon}
        >
            <ArrowBackIcon className={classes.arrow}/>
        </IconButton>
    )
}

export default Backbutton;