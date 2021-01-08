import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    box:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background: props => props.color,
        minHeight:'4vw',
        minWidth:'14vw',
        padding:'5px',
        borderBottomLeftRadius:'10px',
        borderTopRightRadius:'10px',
    },
    
    text:{
        fontWeight:'bold',
        fontSize:'clamp(0.25rem, -0.2857rem + 2.8571vw, 1.5rem)'
    }
}))


function Dateblock({title,...props}){
    const classes = useStyles(props)

    return(
        <Box className={classes.box}>
            <Typography className={classes.text}>
                {title}
            </Typography>
        </Box>
    )
}

export default Dateblock;