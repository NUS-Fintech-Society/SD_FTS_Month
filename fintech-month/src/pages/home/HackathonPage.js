import React from 'react';
import { Box} from '@material-ui/core';
import BottomBar from '../../components/BottomBar.js';
import FMLogo from '../../images/FM_logo.png';
import OpeningTimeline from '../../images/openingtimeline.png';
import ClosingTimeline from '../../images/closingtimeline.png';
import Backbutton from '../../components/Backbutton';
import { useStyles } from './styles'
import './HackathonPage.css';

export default function Hackathon() {

    const classes = useStyles();

    return (
        <>
            <Box className={classes.backButton}>
                <Backbutton />
            </Box>
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