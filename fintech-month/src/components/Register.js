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
        fontSize:'23px',
        color:'#FD8329',
        fontWeight:'600',
        textTransform:'none',
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