import React from 'react';
import { Grid } from '@material-ui/core';
import SideNav from './components/SponsorsLegend';
import LabPhoto from '../../images/fintechlabphoto.png';
import './SponsorsPage.css';

function Genping() {
    const link1 = <a target="_blank" rel='noreferrer noopener' href='https://fintechlab.nus.edu.sg/'>Fintech Lab</a>
    const link2 = <a target="_blank" rel='noreferrer noopener' href='https://www.fintechsociety.comp.nus.edu.sg/'>NUS Fintech Society</a>
    return (
        <>
            <SideNav />
            <Grid class='main' justify='center'>
                <h1>
                    <a target="_blank" rel='noreferrer noopener' href='https://sg.linkedin.com/company/nus-fintech-lab'>
                        FinTech Lab
                    </a>
                </h1>
                <img class='profile' src={LabPhoto} alt='FinTechLab' />
                <h5 class='desc'>
                    The lab carries out education initiatives to move the FinTech projects from 
                    Proof of Concepts to enterprise and generate value from data through actionable intelligence. 
                    The lab also aims to build a virtual banking ecosystem on campus to simulate the real world practice 
                    in order to provide deep experiential learning to students and members of the public. 
                    The {link1} also supports the newly created {link2}, managed by a group of undergrad and masters students who are passionate about FinTech, Algo-Trading and Blockchain.
                </h5>
            </Grid>
        </>
    );
}

export default Genping;