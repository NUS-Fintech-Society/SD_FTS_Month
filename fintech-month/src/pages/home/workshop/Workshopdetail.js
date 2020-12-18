import React, {useState} from 'react';
import {useStyles} from './styles';
import {Box, Paper,Button} from '@material-ui/core';
import Register from '../../../components/Register';
import Template from './components/Template';
import Backbutton from '../../../components/Backbutton';
import Machine12 from './images/ml12jan.png';
import Machine13 from './images/ml13jan.png';
import Blockchain12 from './images/blockchain12jan.png';
import Blockchain13 from './images/blockchain13jan.png';
import Eddie from './images/mreddie.jpg';
import Mranatoly from './images/Mranatoly.jpg';
import Dateblock from './components/Dateblock';
import Banner from './components/Banner';
import {texts} from './Data.js'

function Workshopdetail(){
    const classes = useStyles()
    const [Image,setImage] = useState(Machine12)
    const [Title,setTitle] = useState("12 Jan 2020")
    const [ImgWidth,setImgWidth] = useState('550px')
    const [Leftbox, setLeftbox] = useState(true)

    const changeImage = () => {
        if(window.scrollY <= 400){
            setImage(Machine12);
            setTitle("12 Jan 2020");
        }else if(window.scrollY <= 1100){
            setImage(Machine13);
            setTitle("13 Jan 2020");
        }else if(window.scrollY <= 1600){
            setImage(Blockchain12);
            setTitle("12 Jan 2020");
        }else if(window.scrollY <= 2300){
            setImage(Blockchain13);
            setTitle("13 Jan 2020");
        }else if(window.scrollY <= 2800){
            setImage(Eddie)
            setTitle("15 Jan 2020");
            setImgWidth("550px")
        }else if(window.scrollY <= 3200){
            setImage(Mranatoly)
            setTitle("12 Jan 2020")
            setImgWidth("400px")
            setLeftbox(true)
        }else{
            setLeftbox(false)
        }
    };   

    window.addEventListener('scroll', changeImage);
    
    return (
        <Box>
        <Box className={classes.dynamicroot}>
            <Box className={classes.backbutton}>
                <Backbutton/>
            </Box>
            {
                Leftbox && (
                    <Box className={classes.imagewrapper}>
                        <img src={Image} width={ImgWidth} className={classes.image} alt="placeholder"/>
                        <Box className={classes.overlay}>
                            <Dateblock title={Title} className={classes.dateblock}/>    
                        </Box>
                    </Box>
                )
            }
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
                    <Paper elevation={3} className={classes.box}>
                        <Template title={text.title} content={text.content} author={text.author} className={classes.template}/>
                    </Paper>
                    )
                    })}
            </Box>
        </Box>
        <Banner/>
        </Box>
    )
}


export default Workshopdetail;