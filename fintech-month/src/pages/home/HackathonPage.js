import React from 'react';
import FMLogo from '../../images/FM_logo.png';
import OpeningTimeline from '../../images/openingtimeline.png';
import ClosingTimeline from '../../images/closingtimeline.png';
import './HackathonPage.css';

export default function Hackathon() {
    return (
        <>
            <div class='grad'>
                <img className="logo" src={FMLogo} />
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
        </>
    );
}