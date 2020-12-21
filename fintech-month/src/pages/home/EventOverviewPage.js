import React from 'react';
import { Box } from '@material-ui/core';
import {useStyles} from './styles'
import Grid from '@material-ui/core/Grid';
import BlackBackbutton from '../../components/BlackBackbutton';
import './HomePage.css';



function EventOverviewPage(){

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>

                <Box className={classes.backButton}>
                    <BlackBackbutton />
                </Box>

                <Grid item xs={12} justify="center">
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            11 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">Opening Ceremony</h3>
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            12 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">Beginner Workshops</h3>
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            15 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">External Workshops</h3>
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            24 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">Hackathon Submission Deadline</h3>
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            29 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">Release of Finalists</h3>
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
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