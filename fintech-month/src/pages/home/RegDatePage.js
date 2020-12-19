import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import registrationTimeline from './regTimeline.png';
import './HomePage.css';
import backgroundImg from '../../images/backgroundimage.png';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        minHeight: 900
        
    },
    bgImg: {
        backgroundImage: `url(${backgroundImg})`,
        justify: 'center',
        minHeight: 1400,
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

}));

function RegDatePage(){

    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Grid container spacing={0} className={classes.bgImg}>
                <Grid item xs={12} justify="center">
                    <h2 className="whiteHeading">Registration Dates</h2>
                    <img className = "regImg" src={registrationTimeline} />
                </Grid>
            </Grid>
        </div>
    )

}

export default RegDatePage; 