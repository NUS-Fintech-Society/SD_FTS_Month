import React, {useState} from 'react';
import {useStyles} from './styles';
import {Box, Paper,Button} from '@material-ui/core';
import Register from '../../../components/Register';
import Template from './components/Template';
import Backbutton from './components/Backbutton';
import Machine12 from './images/ml12jan.png';
import Machine13 from './images/ml13jan.png';
import Blockchain12 from './images/blockchain12jan.png';
import Blockchain13 from './images/blockchain13jan.png';
import Eddie from './images/mreddie.jpg';
import Mranatoly from './images/Mranatoly.jpg';
import Dateblock from './components/Dateblock';
import Banner from './components/Banner';

const texts=[
    {
        tag:'Machine Learning',
        title:'Stock Price Prediction',
        content:[
            'Understand the stock market',
            'Methods to predict prices using Machine Learning',
        ],
        author:'pss',
    },
    {
        tag:'Machine Learning',
        title:'News Headline Sentiment Analysis',
        content:[
            'Understand how news can impact the market',
            'Natural Language Programming',
        ],
        author:'sdsds',
    },
    {
        tag:'Machine Learning',
        title:'Register',
        content:[],
        author:'',
    },
    {
        tag:'Blockchain',
        title:'Understanding Blockchain: Technology Behind Cryptocurrencies',
        content:[
            'Understanding peer to peer transactions of value',
            'Public and private key cryptography',
            'Components of a block',
            'Consensus of mechanisms',
        ],
        author:'sds',
    },
    {
        tag:'Blockchain',
        title:'Understanding Cryptocurrencies and Their Impacts on Current Financial System',
        content:[
            'Understanding flat money',
            "Cryptocurrency's rise in recent times",
            'Fundraising using cryptocurrencies (ICOs and IEOs)',
            'Is Bitcoin a means of exchange?',
            'Is Bitcoin a store of value?',
        ],
        author:'sdsds',
    },
    {
        tag:'Blockchain',
        title:'Register',
        content:[],
        author:'',
    },
    {
        tag:'External Workshop',
        title:'',
        content:[],
        author:'Mr Eddie Lee',
    },
    {
        tag:'External Workshop',
        title:'BSC Stream Transformations with ParsiQL',
        content:[
            'What are data streams?',
            'How do live data streams function in blockchains?',
            "How to transform live data streams using PARSIQ's manipulation language?"
        ],
        author:'Anatoly Ressin',
    },
    {
        tag:'External Workshop',
        title:'',
        content:[],
        author:'Mr Daniel Lin',
    },
    {
        tag:'External Workshop',
        title:'',
        content:[],
        author:'Mr Hon Kok Wai',
    },
]

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
                                <Register/>
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