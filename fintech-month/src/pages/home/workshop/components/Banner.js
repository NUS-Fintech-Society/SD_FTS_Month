import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Typography} from '@material-ui/core';
import Placeholder from '../../../../images/placeholder.png';
import Register from '../../../../components/Register';

const useStyles = makeStyles((theme) =>({
    root:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        minHeight:'200px',
        height:'25%',
        width:'100%',
        backgroundImage:'linear-gradient(#fff,30%,#131d47)',
        marginTop:'100px',
    },
    externalworkshop:{
        fontWeight:'bold',
        fontSize:'40px',
        color:'#FFF',
    },
    image:{
        width:'100px',
        height:'100px',
    },
    box:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    }
}))

function Banner(){
    const classes = useStyles()

    return(
        <Box className={classes.root}>
            <Box className={classes.box}>
                <img src={Placeholder} alt="Logo" className={classes.image}/>
                <Typography className={classes.externalworkshop}>
                    External 
                    <br/>
                    Workshops
                </Typography>
            </Box>
            <Register className={classes.register}/>
        </Box>
    )
}


export default Banner;