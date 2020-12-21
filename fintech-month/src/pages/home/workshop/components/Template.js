import React from 'react';
import {Box, Typography, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:'100px',
        display:'flex',
        width:'45vw',
        height:'80vh',
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
        marginBottom:'10px',
    },
    ul:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
    },
    container:{
        display:'flex',
        width:'100%',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:'20px',
        height:'100%',
    }
}))

function Template({title,content,author}){
    const classes = useStyles()


    return(
        <Paper elevation={3} className={classes.root}>
            <Box className={classes.container}>
                <Box className={classes.box}>
                    <Typography className={classes.title}>
                        {title}
                    </Typography>
                </Box>
                
                <Box className={classes.content}>
                    <ul className={classes.ul}>
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
        </Paper>
    )
}

export default Template;