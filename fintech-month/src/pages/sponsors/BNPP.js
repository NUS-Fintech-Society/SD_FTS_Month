import React from 'react';
import { Grid } from '@material-ui/core';
import SideNav from './components/SponsorsLegend';
import WaiKokPhoto from '../../images/waikokphoto.jpg';
import './SponsorsPage.css';

function FundedHere() {
    const link = 
        <a 
        target="_blank" 
        rel='noreferrer' 
        href='https://www.bnpparibas.com.sg/en/'>
            BNP Paribas
        </a>
    return (
        <>
            <SideNav />
            <Grid class='main' justify='center'>
                <h1>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/kok-wai-hon-3269632b/'>
                        Mr Hon Kok Wai
                    </a>
                </h1>
                <img class='profile' src={WaiKokPhoto} alt='WaiKok' />
                <h5 class='desc'>
                    Runs market management, pricing and billing functions 
                    for the APAC region within {link} Transaction Banking. 
                    Responsibilities include assessment and development of onshore capabilities 
                    through platform up-tiering, bank partnership; 
                    business development in supporting client conversations 
                    and propositions in pitching to treasury hubs in APAC. 
                    His current professional interests are Foreign Exchange Payments, 
                    Mobile Money and Alternate payments. 
                    He also specialises in Payments and Collections Product Management, 
                    and Process Improvement and Revenue Optimization.
                </h5>
            </Grid>
        </>
    );
}

export default FundedHere;