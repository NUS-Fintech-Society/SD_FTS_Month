import React from 'react';
import { Grid } from '@material-ui/core';
import EddiePhoto from '../../images/eddiephoto.jpg';
import SideNav from './components/SponsorsLegend';
import './SponsorsPage.css';

function RaiCapital() {
    
    const seedlink = <a target='_blank' rel='noreferrer' href='https://brdge.tech/'>SeedIn</a>
    const railink = <a target='_blank' rel='noreferrer' href='http://www.rai.capital/'>Rai Capital</a>
    const pilonlink = <a target='_blank' rel='noreferrer' href='http://www.pilon.sg/'>Pilon Pte Ltd</a>
    return (
        <>
            <SideNav />
            <Grid class='main' justify='center'>
                <h1>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/eddie79/'>
                        Mr Eddie Lee
                    </a>
                </h1>
                <img class='profile' src={EddiePhoto} alt='EddieLee' />
                <h5 class='desc'> Founder of {seedlink} (BRDGE), {railink}, {pilonlink}, 
                    and specialises in P2P lending and crowdfunding. 
                    Nominated as the most inspiring entrepreneur by the Spirit of Enterprise Singapore 
                    and awarded the 2012 Promising SME 500 Award by the Small Medium Business Association Singapore.
                </h5>
            </Grid>
        </>
    );
}

export default RaiCapital;