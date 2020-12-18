import React from 'react';
import { Grid } from '@material-ui/core';
import SideNav from './components/SponsorsLegend';
import DanielPhoto from '../../images/danielphoto.jpg';
import './SponsorsPage.css';

function FundedHere() {
    const link = <a target="_blank" rel='noreferrer' href='https://fundedhere.com/'>FundedHere</a>
    return (
        <>
            <SideNav />
            <Grid class='main' justify='center'>
                <h1>Mr Daniel Lin</h1>
                <img class='profile' src={DanielPhoto} alt='DanielLin' />
                <h5 class='desc'>Founder of {link}, startup and SMEs crowdfinding platform</h5>
            </Grid>
        </>
    );
}

export default FundedHere;