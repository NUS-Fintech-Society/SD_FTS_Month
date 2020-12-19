import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
    box:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FD8329',
        height:'50px',
        width:'150px',
    },
    text:{
        fontWeight:'bold',
        fontSize:'20px'
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