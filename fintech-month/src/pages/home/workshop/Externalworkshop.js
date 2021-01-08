import React, {useEffect} from 'react';
import {useStyles} from './styles';
import {Box, Typography} from '@material-ui/core';
import Externalworkshoptemplate from './components/Externalworkshoptemplate';
import Dateblock from './components/Dateblock';
import Backbutton from '../../../components/Backbutton.js';
import Aos from 'aos';
import "aos/dist/aos.css";
import {ExternalWorkshop} from './Data.js';
import BottomBar from '../../../components/BottomBar';
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
 

const theme = createMuiTheme({
    typography: {
      fontFamily: "'Montserrat', 'Nunito', 'Roboto', 'sans-serif'"
    }
  });


function Externalworkshop(){
    const classes = useStyles()

    var texts = ExternalWorkshop
    var tag = 'External Workshops'
    var link = "https://tinyurl.com/yy2ggyc8"
    
   
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
                                    <Dateblock color={text.title.slice(0,3) === 'Inn' ? 'rgb(82,185,255,0.8)' : 'rgb(255,255,255,0.9)'} title={text.date}/>
                                </Box>
                                <img className={classes.image} src={text.leftImage} alt="faces"/>
                            </Box>
                        </Box>
                        <Box data-aos="fade-left" className={classes.container3}>
                            <Externalworkshoptemplate description={text.description} content={text.content} author={text.author} speakerImage={text.speakerImage}/>                
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

export default Externalworkshop;