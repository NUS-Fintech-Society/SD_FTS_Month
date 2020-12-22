import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Box } from '@material-ui/core';
import Register from '../../../components/Register';
import Template from './components/Template';
import BottomBar from '../../../components/BottomBar.js';
import { texts } from './Data.js';
import Aos from 'aos';
import "aos/dist/aos.css";


function Workshopdetail() {
    const classes = useStyles()

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <Box className={classes.workshopdetailroot}>
            <Box className={classes.paragraph}>
                {texts.map((text) => {
                    if (text.title === 'Register') {
                        return (
                            <Box className={classes.register}>
                                <Register externalurl={text.content[0]} />
                            </Box>
                        )
                    }
                    return (
                        <Box className={classes.container1}>
                            <div className={classes.imagewrapper} data-aos="fade-right">
                                <img className={classes.image} src={text.image} alt="faces" />
                                <h1 className={classes.tag}>{text.tag}</h1>
                            </div>

                            <Box data-aos="fade-left">
                                <Template title={text.title} content={text.content} author={text.author} className={classes.template} />
                            </Box>
                        </Box>
                    )
                })}
            </Box>
            <BottomBar externalurl='https://tinyurl.com/yy2ggyc8'>
                External
                <br />
                Workshops
            </BottomBar>
        </Box>
    )
}


export default Workshopdetail;