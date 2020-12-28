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
        minWidth:'45vw',
        borderRadius:'1rem',
        [theme.breakpoints.down('xs')]:{
            width:'80vw',
        }
    },
    container:{
        margin:'0 2rem',
        display:'flex',
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        height:'100%',
        [theme.breakpoints.down('xs')]:{
            flexDirection:'row',
        }
    },
    content:{
        display:'flex',
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('xs')]:{
            marginRight:'1rem',
        }
    },
    bycontainer:{
        display:'flex',
        width:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        flexGrow:1,
        [theme.breakpoints.down('xs')]:{
            height:'100%',
            paddingLeft:'2rem',
            borderLeft:'0.25rem solid #52B9FF',
            borderRadius:'0.1rem',
        }
    },
    ulbox:{
        display:'flex',
        marginBottom:'5px',
    },
    ul:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
    },
    li:{
        fontSize:'clamp(0.7rem, 0.2059rem + 2.4706vw, 1.75rem)'
    },
    text:{
        fontSize:'clamp(0.7rem, 0.2059rem + 2.4706vw, 1.75rem)'
    },
    authorbox:{
        margin:'10px 0',
        borderTop:'0.15rem solid #52B9FF',
        textAlign:'center',
        width:'100%',
        [theme.breakpoints.down('xs')]:{
            borderTop:'0.15rem solid #52B9FF',
        }
    },
    authorfont:{
        fontWeight:'bold',
        fontSize:'clamp(1rem, 0.7647rem + 1.1765vw, 1.5rem)',
    },
    imagebox:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:'8rem',
        borderRadius:'50%',
    },
    descriptionbox:{
        textAlign:'center',
    },
    descriptionfont:{
        fontSize:'clamp(0.75rem, 0.5147rem + 1.1765vw, 1.25rem)',
    },
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
                                            <Typography className={classes.text}>{text}</Typography>
                                        </Box>
                                    </li>
                                )
                            })}
                        </ul>
                    </Box>
                    <Box className={classes.bycontainer}>
                        <Box className={classes.imagebox}>
                                <img src={speakerImage} alt="speakerimage" className={classes.image}/>
                        </Box>
                        <Box className={classes.authorbox}>
                            <Typography className={classes.authorfont}>
                                By {author}
                            </Typography>
                        </Box>
                        <Box className={classes.descriptionbox}>
                            <Typography className={classes.descriptionfont}>
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