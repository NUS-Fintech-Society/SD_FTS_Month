import React from 'react';
import {Box, Typography, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
 

const theme = createMuiTheme({
    typography: {
        fontFamily: "'Montserrat', 'Nunito', 'Roboto', 'sans-serif'"
    }
  });

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        width:'45vw',
        height:'80vh',
        borderRadius:'10px',
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
        justifyContent:'space-around',
        alignItems:'center',
        padding:'20px',
        height:'100%',
    },
    ulbox:{
        display:'flex',
        marginBottom:'5px',
    },
    text:{
        fontSize:'clamp(1rem, 0.4643rem + 2.8571vw, 2.25rem)'
    },
    imagebox:{
        width:'132.28px',
        height:'170.08px'
    }
}))

function Externalworkshoptemplate({description,content,author, speakerImage}){
    const classes = useStyles()


    return(
        <ThemeProvider theme={theme}>
            <Paper elevation={3} className={classes.root}>
                <Box className={classes.container}>        
                    <Box className={classes.content}>
                        <ul className={classes.ul}>
                            {content.map((text) =>{
                                return (
                                    <li className={classes.li}>
                                        <Box className={classes.ulbox}>
                                            <Typography className={classes.text} align="left">{text}</Typography>
                                        </Box>
                                    </li>
                                )
                            })}
                        </ul>
                    </Box>
                    <Box className={classes.box}>
                        <Box className={classes.imagebox}>
                            <img src={speakerImage} alt="speakerimage"/>
                        </Box>
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
        </ThemeProvider>

    )
}

export default Externalworkshoptemplate;