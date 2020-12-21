import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
    box:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FD8329',
        height:'4vw',
        width:'14vw',
    },
    text:{
        fontWeight:'bold',
        fontSize:'clamp(0.75rem, 0.2500rem + 1.6000vw, 1.25rem)'
    }
}))

function Dateblock({title}){
    const classes = useStyles()

    return(
        <Box className={classes.box}>
            <Typography className={classes.text}>
                {title}
            </Typography>
        </Box>
    )
}

export default Dateblock;