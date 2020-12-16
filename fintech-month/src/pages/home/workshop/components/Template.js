import React from 'react';
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        width:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:'40px',
        fontWeight:'bold',
    },
    content:{
        fontSize:'25px',
    },
    author:{
        fontSize:'25px',
    },
}))

function Template({title,content,author}){
    const classes = useStyles()


    return(
        <Box className={classes.root}>
            <Typography className={classes.title}>
                {title}
            </Typography>
            <Typography className={classes.content}>
                {content}
            </Typography>
            <Typography className={classes.author}>
                By {author}
            </Typography>
        </Box>
    )
}

export default Template;