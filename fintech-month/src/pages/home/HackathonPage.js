import React from 'react';
import BottomBar from '../../components/BottomBar.js';
import FMLogo from '../../images/FM_logo.png';
import OpeningTimeline from '../../images/openingtimeline.png';
import ClosingTimeline from '../../images/closingtimeline.png';
import './HackathonPage.css';

export default function Hackathon() {
    return (
        <>
            <div class='grad'>
                <img className="top-logo" src={FMLogo} alt='FMLogo'/>
                <div className="headerAlignment">
                    <h1 className='FintechMonthHeader' >Hackathon</h1>
                </div>
            </div>

            <div>
                <h2 class='opening'>Opening Ceremony</h2>
                <img class='image' src={OpeningTimeline} alt='OpeningTimeline' />
                <h2 class='closing'>Closing Ceremony</h2>
                <img class='image' src={ClosingTimeline} alt='ClosingTimeline' />
            </div>

            <BottomBar externalurl='https://tinyurl.com/y6bk3khb'>Hackathon</BottomBar>
        </>
    );
}