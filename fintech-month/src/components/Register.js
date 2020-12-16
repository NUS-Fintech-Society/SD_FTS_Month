import React from 'react';
import {Box, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>({
    box:{
        display:'flex',
        height:'50px',
        width:'200px',
        backgroundImage: 'linear-gradient(#131d47,80%,#ffffff)',
        justifyContent:'center',
        alignItems:'center',
        padding:'5px',
    },
    register:{
        fontWeight:'600',
        fontSize:'20px',
        color:'#FD8329',
    },
}))

function Register({externalurl}){
    const classes = useStyles()

    return(
        <Box className={classes.box}>
            <Button className={classes.register} href={externalurl}>
                Register now!
            </Button>
        </Box>
    )
}

export default Register