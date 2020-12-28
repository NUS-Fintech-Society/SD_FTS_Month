import React, {useEffect} from 'react';
import {useStyles} from './styles';
import {Box, Typography} from '@material-ui/core';
import Template from './components/Template';
import Dateblock from './components/Dateblock';
import Backbutton from '../../../components/Backbutton.js';
import Aos from 'aos';
import "aos/dist/aos.css";
import {MachineLearning, BlockChain, ExternalWorkshop} from './Data.js';
import BottomBar from '../../../components/BottomBar';
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
 

const theme = createMuiTheme({
    typography: {
      fontFamily: "'Montserrat', 'Nunito', 'Roboto', 'sans-serif'"
    },
  });


function Workshopdetail({match}){
    const classes = useStyles(theme)
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
    }
   
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
   
    
    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.workshopdetailroot}>
                <Box className={classes.backbutton}>
                    <Backbutton/>
                </Box>
                <Box className={classes.marginTop}></Box>
                <Box className={classes.paragraph}>
                {texts.map((text) =>{   
                    return (
                    <Box className={classes.container1}>
                        <Box data-aos="fade-right" className={classes.container2}>
                            <Box className={classes.heading}>
                                <Typography className={classes.headertext}>{text.title}</Typography>
                            </Box>
                            <Box className={classes.imagewrapper}>
                                <Box className={classes.dateblock}>
                                    <Dateblock color="#FFF" title={text.date}/>
                                </Box>
                                <img className={classes.image} src={text.image} alt="faces"/>
                            </Box>
                        </Box>
                        <Box data-aos="fade-left" className={classes.container3}>
                            <Template content={text.content} author={text.author} className={classes.template}/>                
                        </Box>
                    </Box>
                    )
                    })}
                </Box>
                <Box className={classes.bottombar}>
                    <BottomBar children={tag} externalurl={link}/>
                </Box>
            </Box>
        </ThemeProvider>

    )
}


export default Workshopdetail;