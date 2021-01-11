import React from 'react';
import {Box} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button, Typography} from '@material-ui/core'
import BottomBar from '../../components/BottomBar.js';
import FMLogo from '../../images/FM_logo.png';
import OpeningTimeline from '../../images/openingtimeline.png';
import ClosingTimeline from '../../images/closingtimeline.png';
import Backbutton from '../../components/Backbutton';
import { useStyles } from './styles'
import './HackathonPage.css';
import problemStatement from './images/problem_statement.png';
import hackathonIntro from './images/hackathon_intro.png';
import hackathonJudges from './images/hackathon_judges.png';
import hackathonTimeline from './images/Closing_timeline_edited.png';
import hackathonWorkshop from './images/hackathon_workshop.png';
import hackathonSubmission from './images/hackathon_submission.png';
import hackathonClosing from './images/hackathon_closing.png';


export default function Hackathon() {

    const classes = useStyles();

    const items = [
        {image: hackathonTimeline},
        {image: hackathonIntro},
        {image: problemStatement},
        {image: hackathonWorkshop},
        {image: hackathonSubmission},
        {image: hackathonClosing},
        {image: hackathonJudges},
    ]   
 

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

            <Carousel className="carouselCSS" justify="center" autoPlay="false" navButtonsAlwaysVisibl="true" animation="slide">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>

            <div>
                {/* <h2 class='opening'>Opening Ceremony</h2>
                <img class='image' src={OpeningTimeline} alt='OpeningTimeline' /> */}
                <Typography class='closing'>Closing Ceremony</Typography>
                <img class='image' src={ClosingTimeline} alt='ClosingTimeline' />
            </div>

            <BottomBar externalurl='https://tinyurl.com/y6bk3khb'>Hackathon</BottomBar>
        </>
    );
}


function Item(props)
{
    return (
        <img class="carouselHeight" src={props.item.image}/>

    )
}