import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Box,Button,Typography} from '@material-ui/core'
import logo from '../../../images/placeholder.png'
import {useStyles} from './styles'
import Dynamicpage from './Dynamicpage'


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
            <Box className={classes.machinelearning}>
                <Typography className={classes.title}>
                    Machine Learning
                </Typography>
            </Box>
            <Box className={classes.blockchain}>
                <Typography className={classes.title}>
                   Blockchain
                </Typography>
            </Box>
            <Box>
                <Dynamicpage/>
            </Box>
        </Box>
        
    )
}

export default Workshop;