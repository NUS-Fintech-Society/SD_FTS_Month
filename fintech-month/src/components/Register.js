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

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

function Register({externalurl}){
    const classes = useStyles()

    return(
        <Box className={classes.box}>
            <Button className={classes.register} onClick={() => openInNewTab(`${externalurl}`)}>
                Register now!
            </Button>
        </Box>
    )
}

export default Register