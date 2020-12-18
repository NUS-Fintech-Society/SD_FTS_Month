import React from 'react';
import { Grid } from '@material-ui/core';
import StanleyPhoto from '../../images/stanleyphoto.png';
import SideNav from './components/SponsorsLegend';
import './SponsorsPage.css';

function Stanley() {
    return (
        <>
            <SideNav />
            <Grid class='main' justify='center'>
                <h1>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/stanley-kok-7226136/'>
                        Prof Stanley Kok
                    </a>
                </h1>
                <img class='profile' src={StanleyPhoto} alt='StanleyKok' />
                <h5 class='desc'>Singapore</h5>
            </Grid>
        </>
    );
}

export default Stanley;