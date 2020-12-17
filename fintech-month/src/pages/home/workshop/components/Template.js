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
        height:'100%',
    },
    title:{
        fontSize:'30px',
        fontWeight:'bold',
        textAlign:'center',
        height:'25%',
    },
    content:{
        margin:'30px 0',
        fontSize:'25px',
        height:'50%',
    },
    author:{
        fontSize:'25px',
        height:'25%',
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