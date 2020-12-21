import React from 'react';
import { Grid } from '@material-ui/core';
import SideNav from './components/SponsorsLegend';
import GenpingPhoto from '../../images/genpingphoto.jpg';
import './SponsorsPage.css';

function Genping() {
    const link = <a target="_blank" rel='noreferrer noopener' href='https://www.vertexventures.sg/'>Vertex Ventures</a>
    return (
        <>
            <SideNav />
            <Grid class='main' justify='center'>
                <h1>
                    <a target="_blank" rel='noreferrer noopener' href='https://www.linkedin.com/in/liugenping/'>
                        Mr Liu Genping
                    </a>
                </h1>
                <img class='profile' src={GenpingPhoto} alt='LiuGenping' />
                <h5 class='desc'>Partner at {link}, a Venture Capital Firm.</h5>
            </Grid>
        </>
    );
}

export default Genping;