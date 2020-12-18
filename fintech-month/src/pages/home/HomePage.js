import React from 'react';
import Countdown from './Countdown.js';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import logo from './Logo.png';
import eventTimeline from './eventTimeline.png';
import registrationTimeline from './registrationTimeline.png';
import mlTimeline from './mlTimeline.png';
import bcTimeline from './bcTimeline.png';
import openingCeremony from './openingCeremony.png';
import closingCeremony from './closingCeremony.png';
import vid from './homeVideoV2.mp4'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    buttonStyle: {
        minWidth: 245,
        borderRadius: 25,
        variant: "outlined"
    }
}));


function HomePage(){

    const classes = useStyles();

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

                <Grid container className="grad2">

                    <Grid item xs={0} md={3} lg={3} xl={4}></Grid>

                    <Grid container xs={12} md={3} lg={3} xl={2} alignItems="center" justify="center" direction="column" >
                        <Button className={classes.buttonStyle} href="/eventoverview" variant="" size='large'><h3>Event Overview</h3></Button>
                    </Grid>
                    <Grid container xs={12} md={3} lg={3} xl={2} alignItems="center" justify="center" direction="column" >
                        <Button className={classes.buttonStyle} href="/registrationdates" variant="" size='large'><h3>Registration Dates</h3></Button>
                    </Grid>
                    <Grid item xs={0} md={3} lg={3} xl={4}></Grid>

                    <Grid item xs={0} md={3} lg={3} xl={4} ></Grid>

                    <Grid container xs={12} md={3} lg={3} xl={2} alignItems="center" justify="center" direction="column" >
                        <Button className={classes.buttonStyle} variant="" size='large' href="/hackathon"><h3>Hackathon</h3></Button>
                    </Grid>
                    <Grid container xs={12} md={3} lg={3} xl={2} alignItems="center" justify="center" direction="column" >
                        <Button className={classes.buttonStyle} variant="" size='large'><h3>Workshop</h3></Button>
                    </Grid>
                    <Grid item xs={0} md={3} lg={3} xl={4}></Grid>
                    
                </Grid>

            </Grid>


        </div>
    )

}

export default HomePage; 


{/* <h2 className="underline">Event Overview</h2>
                    <img className = "center" src={eventTimeline} />
                    <h2 className="underline">Timelines</h2>
                    <h3 className="underline">Registration</h3>
                    <img className = "center" src={registrationTimeline} />
                    <h2 className="underline">Hackathon</h2>

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
                </Grid> */}