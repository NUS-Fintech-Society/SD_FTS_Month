import React, { useState } from 'react';
import { useStyles } from './styles';
import { Box, Paper } from '@material-ui/core';
import Template from './components/Template';
import Machine12 from '../../../images/stocksworkshop.jpg';
import Machine13 from '../../../images/newsworkshop.jpg';
import Blockchain12 from '../../../images/blockchainworkshop.jpg';
import Blockchain13 from '../../../images/cryptocurrencyworkshop.jpg';
import Eddie from '../../../images/eddiephoto.jpg';
import Mranatoly from './images/Mranatoly.jpg';
import Dateblock from './components/Dateblock';
import BottomBar from '../../../components/BottomBar.js';
import { texts } from './Data.js'
import Background from '../../../images/backgroundimage.png';
import handleViewport from 'react-in-viewport';
import Aos from 'aos';
import "aos/dist/aos.css";


function Workshopdetail() {
    const classes = useStyles()

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    const [Image, setImage] = useState(Machine12)
    const [Title, setTitle] = useState("12 Jan 2020")
    const [ImgWidth, setImgWidth] = useState('400px')
    const [ImgHeight, setImgHeight] = useState('400px')
    const [Leftbox, setLeftbox] = useState(true)

    const changeImage = () => {
        if (window.scrollY <= 400) {
            setImage(Machine12);
            setTitle("12 Jan 2020");
        } else if (window.scrollY <= 1100) {
            setImage(Machine13);
            setTitle("13 Jan 2020");
        } else if (window.scrollY <= 1600) {
            setImage(Blockchain12);
            setTitle("12 Jan 2020");
        } else if (window.scrollY <= 2300) {
            setImage(Blockchain13);
            setTitle("13 Jan 2020");
        } else if (window.scrollY <= 2800) {
            setImage(Eddie)
            setTitle("15 Jan 2020");
            setImgWidth("550px")
        } else if (window.scrollY <= 3200) {
            setImage(Mranatoly)
            setTitle("12 Jan 2020")
            setImgWidth("400px")
            setLeftbox(true)
        } else {
            setLeftbox(false)
        }
    };

    window.addEventListener('scroll', changeImage);

    return (
        <Box style={{
            backgroundImage: "url(" + Background + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: '100% 100%',

        }}>
            <Box className={classes.dynamicroot}>
                <Box className={classes.backbutton}>
                    <Backbutton />
                </Box>
                {
                    Leftbox && (
                        <Box className={classes.imagewrapper}>
                            <img src={Image} width={ImgWidth} height={ImgHeight} className={classes.image} alt="placeholder" />
                            <Box className={classes.overlay}>
                                <Dateblock title={Title} className={classes.dateblock} />
                            </Box>
                        </Box>
                    )
                }
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
                            <Paper elevation={3} className={classes.box}>
                                <Template title={text.title} content={text.content} author={text.author} className={classes.template} />
                            </Paper>
                        )
                    })}
                </Box>
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