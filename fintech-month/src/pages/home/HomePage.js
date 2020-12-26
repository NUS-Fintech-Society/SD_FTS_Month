import React from 'react';
import Countdown from './Countdown.js';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import logo from './images/Logo.png';
import vid from './images/homeVideoV2.mp4'
import {useStyles} from './styles'
import './HomePage.css';


function HomePage(){ 

    const classes = useStyles();

    return (
    
        <div className={classes.homePage}>
            <Grid container spacing={0}>
                <Grid item xs={12} justify="center" >
                    
                    <h3 className="subHeader">Join our very first</h3>
                    <img className = "logo" src={logo} />
                    <div className="headerAlignment">
                        <h1 className='FintechMonthHeader' >NUS Fintech Month 2021</h1>
                    </div>
                    
                </Grid>

                <Grid item xs={12}>
                    
                    <Countdown/>
                    
                </Grid>

                <Grid md={2} lg={3} xl={4}></Grid>

                <Grid container xs={12} md={8} lg={6} xl={4} justify="center" >
                    <CardMedia 
                    component="video"
                    image= {vid}
                    type='video/mp4'
                    title='NUS Fintech Month 2021'
                    controls
                    />  
                </Grid>

                <Grid md={2} lg={3} xl={4}></Grid>
                    
                <Grid container spacing={0} justify="center">
                    <Grid xs={12}>
                        <h2 className="aboutHeader">About</h2>
                    </Grid>
                    <h5 className="HomePageAbout">NUS FinTech month is a series of workshops and panel discussions designed to give university and polytechnic students an insight into the world of Fintech.
                    There will be workshops ranging from beginner levels to more advanced levels allowing everyone, no matter their background, to participate in this. 
                    There will also be a hackathon where a real world problem will be tackled using Fintech demonstrating the usefulness of this technology in a real world context.
                    <br></br>
                    <br></br>
                    We are anticipating about 150 participants for the hackathon, consisting of teams of 2-4 people. Team members need not be from the same school. 
                    </h5>

            
                </Grid>

                <Grid container className="">

                    <Grid item xs={0} md={3} lg={4} xl={4}></Grid>


                    <Grid container xs={12} md={3} lg={2} xl={2} alignItems="center" justify="center" direction="column" >
                        <Button className={classes.buttonStyle} variant="contained" href="/eventoverview" ><h3>Event Overview</h3></Button>
                    </Grid>
                    <Grid container xs={12} md={3} lg={2} xl={2} alignItems="center" justify="center" direction="column" >
                        <Button className={classes.buttonStyle} variant="contained" href="/registrationdates" ><h3>Registration Dates</h3></Button>
                    </Grid>
                    <Grid item xs={0} md={3} lg={4} xl={4}></Grid>

                    <Grid item xs={0} md={3} lg={4} xl={4} ></Grid>

                    <Grid container xs={12} md={3} lg={2} xl={2} alignItems="center" justify="center" direction="column" >
                        <Button className={classes.buttonStyle} variant="contained" href="/hackathon"><h3>Hackathon</h3></Button>
                    </Grid>
                    <Grid container xs={12} md={3} lg={2} xl={2} alignItems="center" justify="center" direction="column" >
                        <Button className={classes.buttonStyle} variant="contained" href="/workshop"><h3>Workshop</h3></Button>
                    </Grid>
                    <Grid item xs={0} md={3} lg={4} xl={4}></Grid>
                    
                </Grid>

            </Grid>


        </div>
    )

}

export default HomePage; 