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
        <div className={classes.bgImg}>

            <Grid container spacing={0} >

                <Box className={classes.backButton}>
                    <BlackBackbutton />
                </Box>

                <Grid item xs={12} justify="center" >

                    {/* <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            11 Jan 2020
                        </Box>
                    </Grid> */}

                    {/* <h3 className="eventOverviewHeaders">Welcome email</h3>

                    <div class="centerAlign">
                    
                
                        <h5 class="imgTextChildWelcome"> As the starting point of NUS Fintech Month, this event includes:</h5>
                        
                        <div class="imgTextChildWelcomeDescription">
                            <li>Introduction to NUS Fintech Society</li>
                            <li>Briefing of the overview of NUS  Fintech Month:</li>
                        </div>

                        <div class="imgTextChildWelcomeDescriptionSub">
                            <li>Beginner &amp; external workshops</li>
                            <li>Hackathon (release of problem statement, grading criteria etc)</li>
                        </div>

                        <div class="imgTextChildWelcomeDescription">
                            <li>Sponsor talk by FinTech Lab</li>
                        </div>
                    </div> */}

                    {/* <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            12 Jan 2020
                        </Box>
                    </Grid> */}
                    <h3 className="eventOverviewHeaders">Hackathon</h3>

                    <div class="content2">
                
                        <div className="imgContent" justify="center">
                            <img className={classes.imgClass} src={hackathonImg} />
                        </div>
        
                        <div class="imgText">
                            <h5 class="imgTextChild"> Experienced in coding? Passionate about software development? Sign up now to be a part 
                            of the first hackathon run by NUS FinTech Society!</h5>
                        </div>
                    </div>

                    {/* <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            13 Jan 2020
                        </Box>
                    </Grid> */}
                    <h3 className="eventOverviewHeaders">Machine Learning Workshops</h3>

                    <div class="content">
                
                        <div className="imgContent" justify="center">
                            <img className={classes.imgClass} src={mlWorkshops} />
                        </div>
        
                        <div class="imgText">
                            <h5 class="imgTextChild"> Ever wondered where to start learning the basics of machine learning? Fret not!
                                All is covered by our workshops! We offer topics such as stock market prediction and news headlines sentiment analysis. 
                                Join us to learn and find out more!
                            </h5>
                        </div>
                    </div>
                    {/* <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            15 Jan 2020
                        </Box>
                    </Grid> */}
                    <h3 className="eventOverviewHeaders">Blockchain Workshops</h3>

                    <div class="content2">
                
                        <div className="imgContent" justify="center">
                            <img className={classes.imgClass} src={bcWorkshops} />
                        </div>
        
                        <div class="imgText">
                            <h5 class="imgTextChild"> Focusing on cryptocurrencies’ technology and their impact, these workshops are suitable for all 
                            the blockchain enthusiasts! Join us to learn and find out more!</h5>
                        </div>
                    </div>

                    {/* <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            16 Jan 2020
                        </Box>
                    </Grid> */}
                    <h3 className="eventOverviewHeaders">External Workshops</h3>

                    <div class="content">
                
                        <div class="imgContent">
                            <img className={classes.imgClass} src={extWorkshops} />
                        </div>
        
                        <div class="imgText">
                            <h5 class="imgTextChild">Learn more about live data streams,
                             crowdfunding and decentralised finance from the experts themselves!</h5>
                        </div>
                    </div>

                    {/* <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            24 Jan 2020
                        </Box>
                    </Grid>
                    <h3 className="eventOverviewHeaders">Hackathon Submission Deadline</h3>

                    <div class="content2">
                
                        <div className="imgContent" justify="center">
                            <img className={classes.imgClass} src={bcWorkshops} />
                        </div>
        
                        <div class="imgText">
                            <h5 class="imgTextChild"> Text</h5>
                        </div>
                    </div> */}
                    {/* <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            29 Jan 2020
                        </Box>
                    </Grid> */}
                    <h3 className="eventOverviewHeaders">Release of Finalists</h3>

                    <div class="content2">
                
                        <div className="imgContent" justify="center">
                            <img className={classes.imgClass} src={finalists} />
                        </div>
        
                        <div class="imgText">
                            <h5 class="imgTextChild">Release of Finalists</h5>
                        </div>
                    </div>
                    {/* <Grid container justify="flex-end">
                        <Box className={classes.dateStyle}>
                            30 Jan 2020
                        </Box>
                    </Grid> */}

                    <h3 className="eventOverviewHeaders">Closing Ceremony</h3>
                    <div class="content">
                
                        <div className="imgContent" justify="center">
                            <img className={classes.imgClass} src={closingCeremony} />
                        </div>
        
                        <div class="imgText">
                            <h5 class="imgTextChild">At last, we conclude our NUS Fintech Month with:</h5>
                                <div class = "imgTextChild2">
                                    <li >Top 8 Finalists’ Pitch</li>
                                    <li class = "">Prize Presentation</li>
                                    <li class = "">Lucky Draw</li>
                                </div>
                        </div>
                    </div>

                </Grid>
            </Grid>
        </div>
    )

}

export default EventOverviewPage; 