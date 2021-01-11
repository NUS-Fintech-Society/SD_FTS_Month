import React, {useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {useStyles} from './styles.js';

function Counter() {

    const classes = useStyles();

    const difference = new Date(`${2021}-01-11`) - new Date();

    const [seconds, setSeconds] = useState(Math.floor((difference / 1000) % 60))
    const [minutes, setMinutes] = useState(Math.floor((difference / 1000 / 60) % 60))
    const [hours, setHours] = useState(Math.floor((difference / (1000 * 60 * 60)) % 24))
    const [days, setDays] = useState(Math.floor(difference / (1000 * 60 * 60 * 24)))
  
    function updateTime() {

        if (days== 0 && hours == 0 && minutes == 0 && seconds == 0) {

        }
        else {
            if (hours == 0 && minutes == 0 && seconds == 0) {
                setDays(days => days - 1);
                setHours(23)
                setMinutes(59);
                setSeconds(59);
            } else if (minutes == 0 && seconds == 0) {
                setHours(hours => hours - 1);
                setMinutes(59);
                setSeconds(59);
            } else if (seconds == 0) {
                setMinutes(minutes => minutes - 1);
                setSeconds(59);
            } else{
            setSeconds(seconds => seconds - 1);
            }
        }
    }
     
    useEffect(() => {
        if (difference<0){
            setDays(0);
            setHours(0)
            setMinutes(0);
            setSeconds(0);
            return;
        } 
        
        const token = setTimeout(updateTime, 1000)
    
        return () => clearTimeout(token);
        
    })

    function minTwoDigits(n) {
        return (n < 10 ? '0' : '') + n;
    }
    

    const hoursRounded = minTwoDigits(hours);
    const minutesRounded = minTwoDigits(minutes);
    const secondsRounded = minTwoDigits(seconds);
    const daysRounded = minTwoDigits(days);


    return (<div className={classes.root}>
 
            <Grid className={classes.timeGrid} container spacing={0} justify="center">

                <Box>
                    <Grid item className={classes.timeBox}>
                        <div className={classes.timeNumber}>
                        {daysRounded} 
                        </div> 
                    </Grid>
                    <Grid item className={classes.numBox}>
                        <span className={classes.timeWords}>Days</span> 
                    </Grid>

                </Box>

                <Box>
                    <Grid item className={classes.timeBox}>
                        <div className={classes.timeNumber}>
                        {hoursRounded} 
                        </div> 
                    </Grid>
                    <Grid item className={classes.numBox}>
                        <span className={classes.timeWords}>Hours</span> 
                    </Grid>

                </Box>
                <Box>
                    <Grid item className={classes.timeBox}>
                        <div className={classes.timeNumber}>
                        {minutesRounded} 
                        </div> 
                    </Grid>
                    <Grid item className={classes.numBox}>
                        <span className={classes.timeWords}>Mins</span> 
                    </Grid>

                </Box>
                <Box>
                    <Grid item className={classes.timeBox}>
                        <div className={classes.timeNumber}>
                        {secondsRounded} 
                        </div> 
                    </Grid>
                    <Grid item className={classes.numBox}>
                        <span className={classes.timeWords}>Sec</span> 
                    </Grid>

                </Box>
            </Grid>
        
    </div>);
  }

  export default Counter;