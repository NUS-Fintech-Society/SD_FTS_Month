import React from 'react';
import {Box, Typography, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:'100px',
        display:'flex',
        width:'45vw',
        height:'80vh',
        borderRadius:'10px',
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
        fontSize:'clamp(0.5rem, 0.0000rem + 1.6000vw, 1rem)',
        fontWeight:'bold',
    },
    description:{
        fontSize:'clamp(0.5rem, 0.0000rem + 1.6000vw, 1rem)'
    },
    ul:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
    },
    box:{
        width:'100%',
        textAlign:'justify',
        display:'flex',
        flexDirection:'column',
        alignItems:'space-evenly',
        borderTop:'5px solid #52B9FF'
    },
    container:{
        display:'flex',
        width:'100%',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        padding:'20px',
        height:'100%',
    },
    authorbox:{
        margin:'10px 0',
    },
    descriptionbox:{

    },
}))

function Template({description,content,author}){
    const classes = useStyles()


    return(
        <Paper elevation={3} className={classes.root}>
            <Box className={classes.container}>        
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
                    <Box className={classes.authorbox}>
                        <Typography className={classes.author}>
                            By {author}
                        </Typography>
                    </Box>
                    <Box className={classes.descriptionbox}>
                        <Typography className={classes.description}>
                            {description}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default Template;