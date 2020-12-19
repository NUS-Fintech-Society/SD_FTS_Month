import React from 'react';
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        width:'100%',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:'100%',
        padding:'10px',
    },
    title:{
        fontSize:'clamp(1rem, 0.5000rem + 1.6000vw, 1.5rem)',
        fontWeight:'bold',
        textAlign:'center',
    },
    content:{
        fontSize:'clamp(0.75rem, 0.2500rem + 1.6000vw, 1.25rem)',
    },
    author:{
        fontSize:'clamp(0.75rem, 0.2500rem + 1.6000vw, 1.25rem)',
    },
    box:{
    }
}))

function Template({title,content,author}){
    const classes = useStyles()


    return(
        <Box className={classes.root}>
            <Box className={classes.box}>
                <Typography className={classes.title}>
                    {title}
                </Typography>
            </Box>
            
            <Box className={classes.content}>
                <ul>
                    {content.map((text) =>{
                        return (
                            <li>{text}</li>
                        )
                    })}
                </ul>
            </Box>
            <Box className={classes.box}>
                <Typography className={classes.author}>
                    By {author}
                </Typography>
            </Box>
        </Box>
    )
}

export default Template;