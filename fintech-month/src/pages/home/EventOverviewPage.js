import React from 'react';
import Countdown from './Countdown.js';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    buttonStyle: {
        minWidth: 245,
        borderRadius: 25 
    }
}));

function EventOverviewPage(){

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} justify="center">
                    <h3 className="eventOverviewHeaders">Opening Ceremony</h3>
                    <h3 className="eventOverviewHeaders">Beginner Workshops</h3>
                    <h3 className="eventOverviewHeaders">External Workshops</h3>
                    <h3 className="eventOverviewHeaders">Hackathon Submission Deadline</h3>
                    <h3 className="eventOverviewHeaders">Release of Finalists</h3>
                    <h3 className="eventOverviewHeaders">Closing Ceremony</h3>
                </Grid>
            </Grid>
        </div>
    )

}

export default EventOverviewPage; 