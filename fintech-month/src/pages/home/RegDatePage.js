import React from 'react';
import Countdown from './Countdown.js';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import registrationTimeline from './regTimeline.png';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    buttonStyle: {
        minWidth: 245,
        borderRadius: 25 
    }
}));

function RegDatePage(){

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} justify="center">
                    <h2 className="">Registration Dates</h2>
                    <img className = "center" src={registrationTimeline} />
                    
                </Grid>
            </Grid>
        </div>
    )

}

export default RegDatePage; 