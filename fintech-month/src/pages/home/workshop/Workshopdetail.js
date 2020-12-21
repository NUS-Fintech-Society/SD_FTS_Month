import React, {useEffect} from 'react';
import {useStyles} from './styles';
import {Box} from '@material-ui/core';
import Register from '../../../components/Register';
import Template from './components/Template';
import Dateblock from './components/Dateblock';
import Backbutton from '../../../components/Backbutton';
import Banner from './components/Banner';
import Aos from 'aos';
import "aos/dist/aos.css";
import {MachineLearning, BlockChain, ExternalWorkshop} from './Data.js';
 

function Workshopdetail({match}){
    const classes = useStyles()
    const {
        params: {whichWorkshop}
    } = match

    if (whichWorkshop === 'machinelearning'){
        var texts = MachineLearning
    }else if (whichWorkshop === 'blockchain'){
        var texts = BlockChain
    }else if(whichWorkshop === 'externalworkshop'){
        var texts = ExternalWorkshop
    }
   
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
   
    
    return (
        <Box className={classes.workshopdetailroot}>
            <Backbutton className={classes.backbutton}/>
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
            <Banner/>
        </Box>
    )
}


export default Workshopdetail;