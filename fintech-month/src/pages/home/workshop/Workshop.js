import React from 'react';
import {Box,Typography} from '@material-ui/core'
import logo from '../../../images/FM_logo.png'
import {useStyles} from './styles'
import Complexbutton from './components/Complexbutton';
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
 

const theme = createMuiTheme({
    typography: {
        fontFamily: "'Montserrat', 'Nunito', 'Roboto', 'sans-serif'"
    }
  });


function Workshop(){
    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.root}>
                <Box className={classes.workshopbanner}>
                    <img src={logo} alt="logo" className={classes.logo}/>
                    <Typography className={classes.workshop}>
                        Workshops   
                    </Typography>            
                </Box>
                <Box className={classes.beginnerworkshop}>
                    <Typography className={classes.titleheading}>
                        Beginners Workshops
                    </Typography>
                </Box>
                <Complexbutton title="Machine Learning" bgImage = "linear-gradient(#131d47,80%,#ffffff)" href="workshop/machinelearning"/>
                <Complexbutton title="Blockchain" bgImage = "linear-gradient(#131d47,80%,#ffffff)" href="workshop/blockchain"/>
                <Box className={classes.beginnerworkshop}>
                    <Typography className={classes.titleheading}>
                        External Workshops
                    </Typography>
                </Box>
                <Complexbutton title="Workshop A" bgImage = "linear-gradient(#131d47,80%,#ffffff)" href="workshop/externalworkshop"/>
            </Box>
        </ThemeProvider>

        
    )
}

export default Workshop;