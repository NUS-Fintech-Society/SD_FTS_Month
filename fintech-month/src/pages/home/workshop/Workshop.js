import React from 'react';
import {Box,Typography, ButtonBase} from '@material-ui/core'
import logo from '../../../images/placeholder.png'
import {useStyles} from './styles'
import Complexbutton from './components/Complexbutton';


function Workshop(){
    const classes = useStyles()

    return (
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
            <Complexbutton title="Machine Learning" bgImage = "linear-gradient(#131d47,80%,#ffffff)" href="workshop/workshopdetail/" width="100%" />
            <Complexbutton title="Blockchain" bgImage = "linear-gradient(#131d47,80%,#ffffff)" href="workshop/workshopdetail/" width="100%" />
            <Box className={classes.beginnerworkshop}>
                <Typography className={classes.titleheading}>
                    External Workshops
                </Typography>
            </Box>
            <Complexbutton title="Workshop A" bgImage = "linear-gradient(#131d47,80%,#ffffff)" href="workshop/workshopdetail/" width="100%" />
        </Box>
        
    )
}

export default Workshop;