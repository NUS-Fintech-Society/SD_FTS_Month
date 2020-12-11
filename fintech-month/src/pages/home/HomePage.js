import React, { useRef } from 'react';
import ScrollIndicator from './ScrollIndicator.js';
import Countdown from './Countdown.js';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import eventTimeline from './eventTimeline.png';
import registrationTimeline from './registrationTimeline.png';
import mlTimeline from './mlTimeline.png';
import bcTimeline from './bcTimeline.png';
import openingCeremony from './openingCeremony.png';
import closingCeremony from './closingCeremony.png';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
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
            <ScrollIndicator />
            <Grid container direction="row" spacing={0}>

                <Hidden only={['xs','sm']}>
                    <Grid item xs={0} md={3} justify="center" >

                        <h5 className="legend" onClick={gotoEventOverviewSection}>
                            Event Overview
                        </h5>
                        <h5 className="legend" onClick={gotoTimelinesSection}>
                            Timelines                                                                      
                        </h5>
                        <h5 className="legend" onClick={gotoRegistrationSection}>
                            - Registration  
                        </h5>
                        <h5 className="legend" onClick={gotoHackathonSection}>
                            - Hackathon
                        </h5>
                        <h5 className="legend" onClick={gotoWorkshopsSection}>
                            - Workshops
                        </h5>

                    </Grid>
                </Hidden>

 
                <Grid item xs={12} md={6} justify="center"                                                                                                                                                                                                                                                                                                                                                                                                                                       className="" >
                    
                    <h3 className="centerTextAlign">NUS FinTech Society proudly presents to you...</h3>
                    <h1 className='FintechMonthHeader' >FinTech Month 2021</h1>
                    <div className ="Countdown">
                        <Countdown/>
                    </div>
                    <pre className="CountdownText">  Days    Hours    Min     Sec</pre>
                    <h2 className="underline">About</h2>
                    <h5 className="HomePageAbout">NUS FinTech month is a series of workshops and panel discussions designed to give university and polytechnic students an insight into the world of Fintech.
                    There will be workshops ranging from beginner levels to more advanced levels allowing everyone, no matter their background, to participate in this. 
                    There will also be a hackathon where a real world problem will be tackled using Fintech demonstrating the usefulness of this technology in a real world context.
                    </h5>
                    <h5 className="HomePageAbout">
                    We are anticipating about 150 participants for the hackathon, consisting of teams of 2-4 people. Team members need not be from the same school. 
                    </h5>

                    <h2 className="underline" ref={eventOverviewSection}>Event Overview</h2>
                    <img className = "center" src={eventTimeline} />
                    <h2 className="underline" ref={timelinesSection} >Timelines</h2>
                    <h3 className="underline" ref={registrationSection}>Registration</h3>
                    <img className = "center" src={registrationTimeline} />
                    <h2 className="underline" ref={hackathonSection}>Hackathon</h2>
                </Grid>

                <Grid item xs={0} md={3} justify="center" className="" ></Grid>

                <Grid container justify="center" direction="row" className="" >
                    <Grid item xs={12} md={6} lg={4} xl={3} justify="center" className="">
                        <h3 className='padding20'>Opening Ceremony</h3>
                        <img className = "center" src={openingCeremony} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} xl={3} justify="center" className="" >
                        <h3 className='padding20'>Closing Ceremony</h3>
                        <img className = "center" src={closingCeremony} />
                    </Grid>
                </Grid> 

                <Grid container justify="center" direction="row" className="" >
                    <div className="Button">
                        <Button  style={{
                        backgroundColor: "#000000",
                        color:"#FFFFFF"
                        }} variant="contained" color="disabled" href="https://tinyurl.com/y6bk3khb">Register now</Button>
                    </div>
                </Grid>

                <Grid item xs={12} container justify="center" className="" >
                    <h2 className="underline" ref={workshopsSection} >Workshops</h2>
                </Grid> 

                <Grid container justify="center" direction="row" className="" >
                    <Grid item xs={12} md={12} lg={5} xl={4} justify="center" className="">
                        <h3 className="padding20">Beginner - Machine Learning</h3>
                        <img className = "center" src={mlTimeline}/>
                        <div className="Button">
                            <Button style={{
                            backgroundColor: "#000000",
                            color:"#FFFFFF"
                            }} variant="outlined" color="black" href="https://tinyurl.com/y3opnwol">Register now</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={5} xl={4} justify="center" className="" >
                        <h3 className="padding20">Beginner - Blockchain</h3>
                        <img className = "center" src={bcTimeline}/>
                        <div className="Button">
                            <Button style={{
                            backgroundColor: "#000000",
                            color:"#FFFFFF"
                            }} variant="outlined" color="primary" href="https://tinyurl.com/y3opnwol">Register now</Button>
                        </div>
                    </Grid>
                </Grid> 

                <Grid item xs={12} container justify="center" className="">
                    <h3 className="padding20">External</h3> 
                </Grid>

                <Grid container justify="center" direction="row" className="" >
                    <div className="Button">
                        <Button  style={{
                        backgroundColor: "#000000",
                        color:"#FFFFFF"
                        }} variant="contained" color="disabled" href="https://tinyurl.com/yy2ggyc8">Register now</Button>
                    </div>
                </Grid>

            </Grid>


        </div>
    )

}

export default HomePage; 