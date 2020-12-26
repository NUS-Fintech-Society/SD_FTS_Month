import React from 'react';
import {useStyles} from './styles';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import registrationTimeline from './images/regTimeline.png';
import BlackBackbutton from '../../components/BlackBackbutton';
import './HomePage.css';


function RegDatePage(){

    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Box className={classes.backButtonRegDate}>
                    <BlackBackbutton />
            </Box>
            <Grid container spacing={0} className={classes.bgImg}>
                <Grid item xs={12} justify="center">
                    <h2 className="whiteHeading">Registration Dates</h2>
                    <CardMedia className="regImg" justify="center">
                        <img src={registrationTimeline} />
                    </CardMedia>
                </Grid>
            </Grid>
        </div>
    )

}

export default RegDatePage; 