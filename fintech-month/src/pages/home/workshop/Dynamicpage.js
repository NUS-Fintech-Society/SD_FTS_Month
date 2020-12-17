import React, {useState} from 'react'
import {useStyles} from './styles'
import {Box, Typography} from '@material-ui/core'
import Register from '../../../components/Register'
import Template from './components/Template'
import Backbutton from './components/Backbutton'
import Placeholder from '../../../images/placeholder.png'
import Machine12 from './images/ml12jan.png'
import Machine13 from './images/ml13jan.png'
import Blockchain12 from './images/blockchain12jan.png'
import Blockchain13 from './images/blockchain13jan.png'

const texts=[
    {
        tag:'Machine Learning',
        title:'Stock Price Prediction',
        content:'sdfdfd',
        author:'pss',
    },
    {
        tag:'Machine Learning',
        title:'News Headline Sentiment Analysis',
        content:'sdsd',
        author:'sdsds',
    },
    {
        tag:'Machine Learning',
        title:'',
        content:'',
        author:'',
    },
    {
        tag:'Blockchain',
        title:'Understanding Blockchain: Technology Behind Cryptocurrencies',
        content:'sdsds',
        author:'sds',
    },
    {
        tag:'Blockchain',
        title:'Understanding Cryptocurrencies and Their Impacts on Current Financial System',
        content:'sdss',
        author:'sdsds',
    },
    {
        tag:'Blockchain',
        title:'',
        content:'',
        author:'',
    },
    {
        tag:'External Workshop',
        title:'',
        content:'',
        author:'',
    },
]

function Dynamicpage(){
    const classes = useStyles()
    const [Image,setImage] = useState(Machine12)

    const changeImage = () => {
        if(window.scrollY <= 300){
            setImage(Machine12);
        }else if(window.scrollY <= 800){
            setImage(Machine13);
        }else if(window.scrollY <= 1150){
            setImage(Blockchain12);
        }else if(window.scrollY <= 1500){
            setImage(Blockchain13);
        }
    };   

    window.addEventListener('scroll', changeImage);
    
    
    return (
        
        <Box className={classes.dynamicroot}>
            <Box className={classes.image}>
                <img src={Image} className={classes.image} alt="placeholder"/>
                <Backbutton/>
            </Box>
            <Box className={classes.paragraph}>
                {texts.map((text) =>{
                    if (text.title === ''){
                        return(
                            <Box className={classes.register}>
                                <Register/>
                            </Box>
                        )   
                    }
                    return (
                    <Box className={classes.box}>
                        <Template title={text.title} content={text.content} author={text.author} className={classes.template}/>
                    </Box>
                    )
                    })}
            </Box>
        </Box>
    )
}


export default Dynamicpage;