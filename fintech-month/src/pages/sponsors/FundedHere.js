import React from 'react';
import { Grid } from '@material-ui/core';
import SideNav from './components/SponsorsLegend';
import StanleyTanPhoto from '../../images/stanleytanphoto.jpg';
import './SponsorsPage.css';

function FundedHere() {
    const link = <a target="_blank" rel='noreferrer noopener' href='https://fundedhere.com/'>FundedHere</a>
    return (
        <>
            <SideNav />
            <Grid class='main' justify='center'>
                <h1>
                    <a
                        target="_blank"
                        rel='noreferrer noopener'
                        href='https://linkedin.com/in/stanley-tan'>
                        Mr Stanley Tan
                    </a>
                </h1>
                <img class='profile' src={StanleyTanPhoto} alt='Stanley Tan' />
                <h5 class='desc'>Senior portfolio manager at {link}</h5>
            </Grid>
        </>
    );
}

export default FundedHere;