import React from 'react';
import { Typography, Toolbar, Button } from '@material-ui/core';
import FMLogo from '../../images/FM_logo.png';
import OpeningTimeline from '../../images/openingtimeline.png';
import ClosingTimeline from '../../images/closingtimeline.png';
import './HackathonPage.css';

export default function Hackathon() {
    return (
        <>
            <div class='grad'>
                <img className="top-logo" src={FMLogo} />
                <div className="headerAlignment">
                    <h1 className='FintechMonthHeader' >Hackathon</h1>
                </div>
            </div>
            <div>
                <h1>Opening Ceremony</h1>
                <img class='image' src={OpeningTimeline} alt='OpeningTimeline' />
                <h1>Closing Ceremony</h1>
                <img class='image' src={ClosingTimeline} alt='ClosingTimeline' />
            </div>
            <div class='reverse-grad'>
                <Toolbar variant='dense'>
                    <div class='empty'/>
                    <img className="bottom-logo" src={FMLogo} />
                    <Typography class='bottom-bar-text'>Hackathon</Typography>
                    <div class='empty' />
                    <div class='empty' />
                    <div class='empty' />
                    <Button 
                    class='register-button' 
                    href='https://tinyurl.com/y6bk3khb'
                    target="_blank" 
                    rel='noreferrer'>Register here!</Button>
                    <div class='empty' />
                </Toolbar>   
            </div>
        </>
    );
}