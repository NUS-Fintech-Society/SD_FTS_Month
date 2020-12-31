import React from 'react';
import {Box} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
import BottomBar from '../../components/BottomBar.js';
import FMLogo from '../../images/FM_logo.png';
import OpeningTimeline from '../../images/openingtimeline.png';
import ClosingTimeline from '../../images/closingtimeline.png';
import Backbutton from '../../components/Backbutton';
import { useStyles } from './styles'
import './HackathonPage.css';
import hackathonImg1 from './images/HackathonPage.jpg';
import hackathonImg2 from './images/HackathonPage2.jpg';
import hackathonImg3 from './images/HackathonPage3.jpg';
import hackathonImg4 from './images/HackathonPage4.jpg';
import hackathonImg5 from './images/HackathonPage5.jpg';
import hackathonImg6 from './images/HackathonPage6.jpg';


export default function Hackathon() {

    const classes = useStyles();

    const items = [
        {image: hackathonImg1},
        {image: hackathonImg2},
        {image: hackathonImg3},
        {image: hackathonImg4},
        {image: hackathonImg5},
        {image: hackathonImg6},
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

            <Carousel justify="center" autoPlay="false" navButtonsAlwaysVisibl="true" animation="slide">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>

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


function Item(props)
{
    return (
        <img class="carouselHeight" src={props.item.image}/>

    )
}