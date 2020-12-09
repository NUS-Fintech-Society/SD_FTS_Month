import React from 'react';
import Countdown from './Countdown.js';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
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

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
 
                <Grid item xs={12} justify="center" className="" >
                    
                    <h3>NUS FinTech Society proudly presents to you...</h3>
                    <h1 className='FintechMonthHeader' >FinTech Month 2021</h1>
                    <h3 className="">Fintech Hackathon coming soon (2nd Jan 2021):</h3>
                    <div className ="Countdown">
                        <Countdown/>
                    </div>
                    <h2 className="underline">About</h2>
                    <h5 className="HomePageAbout">NUS FinTech month is a series of workshops and panel discussions designed to give university and polytechnic students an insight into the world of Fintech.
                    There will be workshops ranging from beginner levels to more advanced levels allowing everyone, no matter their background, to participate in this. 
                    There will also be a hackathon where a real world problem will be tackled using Fintech demonstrating the usefulness of this technology in a real world context.
                    We are anticipating about 150 participants for the hackathon, consisting of teams of 2-4 people. Team members need not be from the same school. 
                    </h5>
                    <h2 className="underline">Event Overview</h2>
                    <img className = "center" src={eventTimeline} />
                    <h2 className="underline">Timelines</h2>
                    <h3 className="underline">Registration</h3>
                    <img className = "center" src={registrationTimeline} />
                    <h2 className="underline">Hackathon</h2>
                </Grid>

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
                    <h2 className="underline">Workshops</h2>
                </Grid> 

                <Grid container justify="center" direction="row" className="" >
                    <Grid item xs={12} md={12} lg={5} xl={4} justify="center" className="">
                        <h3 className="padding20">Beginner - Machine Learning</h3>
                        <img className = "center" src={mlTimeline} />
                        <div className="Button">
                            <Button style={{
                            backgroundColor: "#000000",
                            color:"#FFFFFF"
                            }} variant="outlined" color="black" href="https://tinyurl.com/y3opnwol">Register now</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={5} xl={4} justify="center" className="" >
                        <h3 className="padding20">Beginner - Blockchain</h3>
                        <img className = "center" src={bcTimeline} />
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