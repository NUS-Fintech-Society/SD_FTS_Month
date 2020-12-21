import React, {useEffect} from 'react';
import {useStyles} from './styles';
import {Box} from '@material-ui/core';
import Register from '../../../components/Register';
import Template from './components/Template';
import Dateblock from './components/Dateblock';
import Backbutton from '../../../components/Backbutton.js';
import Banner from './components/Banner';
import Aos from 'aos';
import "aos/dist/aos.css";
import {MachineLearning, BlockChain, ExternalWorkshop} from './Data.js';
import BottomBar from '../../../components/BottomBar';
 

function Workshopdetail({match}){
    const classes = useStyles()
    const {
        params: {whichWorkshop}
    } = match

    if (whichWorkshop === 'machinelearning'){
        var texts = MachineLearning
        var tag = 'Machine Learning'
        var link = 'https://tinyurl.com/y3opnwol'
    }else if (whichWorkshop === 'blockchain'){
        var texts = BlockChain
        var tag = 'Blockchain'
        var link = 'https://tinyurl.com/y26gnu29'
    }else if(whichWorkshop === 'externalworkshop'){
        var texts = ExternalWorkshop
        var tag = 'External Workshops'
        var link = "https://tinyurl.com/yy2ggyc8"
    }
   
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
   
    
    return (
        <Box className={classes.workshopdetailroot}>
            <Box className={classes.backbutton}>
                <Backbutton/>
            </Box>
            <Box className={classes.paragraph}>
            {texts.map((text) =>{   
                return (
                <Box className={classes.container1}>
                    <Box data-aos="fade-right">
                        <img className={classes.image} src={text.image} alt="faces"/>
                    </Box>
                    <Box  data-aos="fade-left">
                    <Template title={text.title} content={text.content} author={text.author} className={classes.template}/>                
                    </Box>
                </Box>
                )
                })}
            </Box>
            <Box className={classes.bottombar}>
                 <BottomBar children={tag} externalurl={link}/>
            </Box>
            
        </Box>
    )
}


export default Workshopdetail;