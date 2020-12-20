import React, { useRef } from 'react';
import ScrollIndicator from './ScrollIndicator.js';
import Countdown from './Countdown.js';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import logo from './Logo.png';
import vid from './homeVideoV2.mp4'
import './HomePage.css';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    buttonStyle: {
        minWidth: 245,
        borderRadius: 25,
        variant: "outlined",
        margin: 15
    }
}));


function HomePage(){ 

    const classes = useStyles();

    const eventOverviewSection = useRef(null);
    const timelinesSection = useRef(null);
    const registrationSection = useRef(null);
    const hackathonSection = useRef(null);
    const workshopsSection = useRef(null);

    const gotoEventOverviewSection = () =>
        window.scrollTo({
            top: eventOverviewSection.current.offsetTop,
            behavior: "smooth"
        });
    const gotoTimelinesSection = () =>
    window.scrollTo({
        top: timelinesSection.current.offsetTop,
        behavior: "smooth"
    });

    const gotoRegistrationSection = () =>
    window.scrollTo({
        top: registrationSection.current.offsetTop,
        behavior: "smooth"
    });

    const gotoHackathonSection = () =>
    window.scrollTo({
        top: hackathonSection.current.offsetTop,
        behavior: "smooth"
    });

    const gotoWorkshopsSection = () =>
    window.scrollTo({
        top: workshopsSection.current.offsetTop,
        behavior: "smooth"
    });

    return (
    
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} justify="center" className="grad" >
                    
                    <h3 className="subHeader">Join our very first</h3>
                    <img className = "logo" src={logo} />
                    <div className="headerAlignment">
                        <h1 className='FintechMonthHeader' >NUS Fintech Month 2020</h1>
                    </div>
                    
                </Grid>

                <Grid item xs={12} justify="center" >
                    <div className ="Countdown">
                        <Countdown/>
                    </div>
                    <pre className="CountdownText">  Days    Hours    Min     Sec</pre>
                    
                    <p></p>
                </Grid>

                <Grid md={2} lg={3} xl={4}></Grid>

                <Grid container xs={12} md={8} lg={6} xl={4} justify="center" >
                    <CardMedia 
                    component="video"
                    image= {vid}
                    type='video/mp4'
                    title='NUS Fintech Month 2020'
                    controls
                    />  
                </Grid>

                <Grid md={2} lg={3} xl={4}></Grid>
                    
                <Grid item xs={12} justify="center" >
                    <h2 className="about">About</h2>
                    <h5 className="HomePageAbout">NUS FinTech month is a series of workshops and panel discussions designed to give university and polytechnic students an insight into the world of Fintech.
                    There will be workshops ranging from beginner levels to more advanced levels allowing everyone, no matter their background, to participate in this. 
                    There will also be a hackathon where a real world problem will be tackled using Fintech demonstrating the usefulness of this technology in a real world context.
                    </h5>
                    
                    <h5 className="HomePageAbout">
                    We are anticipating about 150 participants for the hackathon, consisting of teams of 2-4 people. Team members need not be from the same school. 
                    </h5>
                    <p></p>
                    
                </Grid>

                <Grid container className="">

                    <Grid item xs={0} md={3} lg={3} xl={4}></Grid>


                    <Grid container xs={12} md={3} lg={3} xl={2} alignItems="center" justify="center" direction="column" >
                        
                        <Button className={classes.buttonStyle} href="/eventoverview" variant="outlined" size=''><h3>Event Overview</h3></Button>
                    </Grid>
                    <Grid container xs={12} md={3} lg={3} xl={2} alignItems="center" justify="center" direction="column" >
                        <Button className={classes.buttonStyle} href="/registrationdates" variant="outlined" size=''><h3>Registration Dates</h3></Button>
                    </Grid>
                    <Grid item xs={0} md={3} lg={3} xl={4}></Grid>

                    <Grid item xs={0} md={3} lg={3} xl={4} ></Grid>

                    <Grid container xs={12} md={3} lg={3} xl={2} alignItems="center" justify="center" direction="column" >
                        <Button className={classes.buttonStyle} variant="outlined" size='' href="/hackathon"><h3>Hackathon</h3></Button>
                    </Grid>
                    <Grid container xs={12} md={3} lg={3} xl={2} alignItems="center" justify="center" direction="column" >
                        <Button className={classes.buttonStyle} variant="outlined" size='' href="/workshop"><h3>Workshop</h3></Button>
                    </Grid>
                    <Grid item xs={0} md={3} lg={3} xl={4}></Grid>
                    
                </Grid>

            </Grid>


        </div>
    )

}

export default HomePage; 