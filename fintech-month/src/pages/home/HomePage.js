import React from 'react';
import Countdown from './Countdown.js';
import { Button } from '@material-ui/core';
import timeline from './timeline.png';



function HomePage(){
    //const currentDate = new Date();
    //const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
        <div>
            <h3>NUS FinTech Society proudly presents to you...</h3>

            <h1 className='FintechMonthHeader' >FinTech Month 2021</h1>

            <h3 className="title">Fintech Hackathon coming soon (2nd Jan 2021):</h3>
            
            <div className ="Countdown">
                <Countdown/>
            </div>

            <h2>About</h2>
            <h5 className="HomePageAbout">NUS FinTech month is a series of workshops and panel discussions designed to give university and polytechnic students an insight into the world of Fintech.
             There will be workshops ranging from beginner levels to more advanced levels allowing everyone, no matter their background, to participate in this. 
             There will also be a hackathon where a real world problem will be tackled using Fintech demonstrating the usefulness of this technology in a real world context.
             We are anticipating about 150 participants for the hackathon, consisting of teams of 2-4 people. Team members need not be from the same school. 
            </h5>

            <h2>Event Overview</h2>
            <img className = "center" src={timeline} />

            <h2>Timelines</h2>
            <h3>Registration</h3>
            <img className = "center" src={timeline} />


            <h2>Hackathon</h2>

            <div className="inlineBlock">
                <h3 className='padding20'>Open Ceremony</h3>
                <h3 className='padding20'>Closing Ceremony</h3>
            </div>

            <div className="Button">
                <Button  variant="outlined" color="primary" href="http://www.google.com/">Register now</Button>
            </div>


            <h2>Workshops</h2>
            <div className = "inlineBlock">
                <div className = "Grp">

                    <h3 className="padding20">Beginner - Machine Learning</h3>

                    <div className="Button">
                            <Button variant="outlined" color="primary" href="http://www.google.com/">Register now</Button>
                    </div>

                </div>

                <div className = "Grp">

                    <h3 className="padding20">Beginner - Blockchain</h3>
                    
                    <div className="Button">
                            <Button variant="outlined" color="primary" href="http://www.google.com/">Register now</Button>
                    </div>

                </div>
            </div>

            <h3 className="padding20">External</h3>
            <div className="Button">
                <Button  variant="outlined" color="primary" href="http://www.google.com/">Register now</Button>
            </div>

        </div>
    )

}

export default HomePage; 