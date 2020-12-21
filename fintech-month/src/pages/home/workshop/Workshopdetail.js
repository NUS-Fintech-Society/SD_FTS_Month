import React, {useEffect, useState} from 'react';
import {useStyles} from './styles';
import {Box, Paper} from '@material-ui/core';
import Register from '../../../components/Register';
import Template from './components/Template';
import Dateblock from './components/Dateblock';
import Backbutton from '../../../components/Backbutton';
import Banner from './components/Banner';
import {texts} from './Data.js'
import handleViewport from 'react-in-viewport';
import Aos from 'aos';
import "aos/dist/aos.css";
 

function Workshopdetail(){
    const classes = useStyles()
   
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
   
    
    return (
        <Box className={classes.workshopdetailroot}>
            <Box className={classes.paragraph}>
            {texts.map((text) =>{
                if (text.title === 'Register'){
                    return(
                        <Box className={classes.register}>
                            <Register externalurl={text.content[0]}/>
                        </Box>
                    )   
                }
                return (
                <Box className={classes.container1}>
                    <img className={classes.image} src={text.image} alt="faces" data-aos="fade-right"/>
                    <Box  data-aos="fade-left">
                    <Template title={text.title} content={text.content} author={text.author} className={classes.template}/>                
                    </Box>
                </Box>
                )
                })}
            </Box>
            <Banner/>
        </Box>
    )
}


export default Workshopdetail;