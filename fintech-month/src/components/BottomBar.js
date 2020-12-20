import React from 'react';
import { Typography, Button } from '@material-ui/core';
import FMLogo from '../images/FM_logo.png';
import './BottomBar.css';

export default function Bottombar({ externalurl }) {
    return (
        <div class='bottom-bar'>
            <img className="bottom-logo" src={FMLogo} alt='FMLogo' />
            <Typography class='bottom-bar-text'>Hackathon</Typography>
            <Button
                class='register-button'
                href={externalurl}
                target="_blank" rel='noreferrer noopener'>
                Register here!
            </Button>
        </div>
    );
}