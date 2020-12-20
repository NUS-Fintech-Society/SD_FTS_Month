import React from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Backbutton from '../../components/Backbutton';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    buttonStyle: {
        minWidth: 245,
        borderRadius: 25 
    },
    dateStyle: {
        backgroundColor: 'cornflowerblue',
        color:'white',
        padding: 10,
        borderRadius: 8,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        fontWeight: 'bold'
    }

}));

function EventOverviewPage(){

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Box className={classes.backbutton}>
                    <Backbutton/>
                </Box>

                <Grid item xs={12} justify="center">
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle} mr={5}>
                            11 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">Opening Ceremony</h3>
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle} mr={5}>
                            12 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">Beginner Workshops</h3>
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle} mr={5}>
                            15 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">External Workshops</h3>
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle} mr={5}>
                            24 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">Hackathon Submission Deadline</h3>
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle} mr={5}>
                            29 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">Release of Finalists</h3>
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle} mr={5}>
                            30 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">Closing Ceremony</h3>
                </Grid>
            </Grid>
        </div>
    )

}

export default EventOverviewPage; 