import React, {useEffect, useState} from 'react';
import {useStyles} from './styles';
import {Box, Paper, Button} from '@material-ui/core';
import Register from '../../../components/Register';
import Template from './components/Template';
import Backbutton from '../../../components/Backbutton';
import Machine12 from '../../../images/stocksworkshop.jpg';
import Machine13 from '../../../images/newsworkshop.jpg';
import Blockchain12 from '../../../images/blockchainworkshop.jpg';
import Blockchain13 from '../../../images/cryptocurrencyworkshop.jpg';
import Eddie from '../../../images/eddiephoto.jpg';
import Mranatoly from './images/Mranatoly.jpg';
import {Box, Paper} from '@material-ui/core';
import Register from '../../../components/Register';
import Template from './components/Template';
import Dateblock from './components/Dateblock';
import Backbutton from '../../../components/Backbutton';
import Banner from './components/Banner';
import {texts} from './Data.js'
import Background from '../../../images/backgroundimage.png';
import handleViewport from 'react-in-viewport';
import Aos from 'aos';
import "aos/dist/aos.css";
 

function Workshopdetail(){
    const classes = useStyles()
   
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
   
    
    return (
        <Box style={{ 
            backgroundImage: "url(" + Background + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: '100% 100%',
            
        }}>
        <Box className={classes.dynamicroot}>
            <Box className={classes.backbutton}>
                <Backbutton/>
            </Box>
            {
                Leftbox && (
                    <Box className={classes.imagewrapper}>
                        <img src={Image} width={ImgWidth} height={ImgHeight} className={classes.image} alt="placeholder"/>
                        <Box className={classes.overlay}>
                            <Dateblock title={Title} className={classes.dateblock}/>    
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