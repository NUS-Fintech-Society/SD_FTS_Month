import React from 'react';
import { Box, Card, CardActions, Typography } from '@material-ui/core';
import {useStyles} from './styles'
import Grid from '@material-ui/core/Grid';
import BlackBackbutton from '../../components/BlackBackbutton';
import './HomePage.css';
import CardMedia from '@material-ui/core/CardMedia';
import bcWorkshops from './images/bcWorkshops.jpg';
import closingCeremony from './images/closingCeremony.jpg';
import extWorkshops from './images/extWorkshops.jpg';
import mlWorkshops from './images/mlWorkshops.jpg';
import hackathonImg from './images/hackathon.jpg';
import finalists from './images/finalists.jpg';




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
                    
                    <Grid container spacing={0} justify = "center">

                        <Grid xs={12} md={3} lg={2}> 
                            <CardMedia className="outline" justify="center">
                                <img className={classes.imgClass} src={bcWorkshops} />
                            </CardMedia>
                        </Grid>

                        <Grid xs={12} md={3} lg={2}>
                            <Typography className={classes.textSize} variant="h5" xs={6}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                        </Grid>
                    
                    </Grid>

                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            12 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">Hackathon</h3>
                    <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            13 Jan 2020
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