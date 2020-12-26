import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    box:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background:'rgb(255,255,255,0.9)',
        height:'4vw',
        width:'14vw',
        borderBottomLeftRadius:'10px',
        borderTopRightRadius:'10px',
    },
    text:{
        fontWeight:'bold',
        fontSize:'1.7vw'
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