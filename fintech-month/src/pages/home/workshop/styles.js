import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Background from '../../../images/backgroundimage.png'
import { Hidden } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>({
    root:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
    },
    header:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'150px',
        backgroundColor:'#52B9FF',
    },
    workshopbanner:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        minHeight:'300px',
        flexDirection:'column',
        backgroundImage: 'linear-gradient(#131d47,80%,#ffffff)',
        
    },
    beginnerworkshop:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'150px',
        backgroundColor:'#FFFFFF',
    },
    machinelearning:{
        borderTop:'1px solid #FFFFFF',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'150px',
        backgroundColor:'#52B9FF',
    },
    blockchain:{
        borderTop:'1px solid #FFFFFF',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'150px',
        backgroundColor:'#52B9FF',
    },
    title:{
        fontSize: theme.typography.pxToRem(30),
        fontWeight: theme.typography.fontWeightMedium,
        color:'#FFFFFF',
        justifyContent:'center',
    },
    titleheading: {
        fontSize: theme.typography.pxToRem(30),
        fontWeight: theme.typography.fontWeightMedium,
        color:'#000000',
        justifyContent:'center',
    },
    workshop: {
        fontSize: theme.typography.pxToRem(40),
        fontWeight: theme.typography.fontWeightMedium,
        color:'#FFFFFF',
        flexBasis:'33.33%',
        justifyContent:'center',
    },
    logo:{
        flexBasis:'66.67%',
        justifyContent:'center',
        width:'150px',
        height:'150px',
    },
    container2:{
        height:'80vh',
        width:'45vw',
        marginTop:'100px',
        borderRadius:'10px',
        display:'flex',
        flexDirection:'column',
    },
    heading:{
        display:'flex',
        minHeight:'10%',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#52B9FF',
        borderBottom:'3px solid #131D47',
        flexGrow:2,
    },
    imagewrapper:{
        width:'100%',
        display:'flex',
        height:'80%',
        flexDirection:'column',
        flexGrow:1,
        position:'relative',
    },
    headertext:{
        fontSize:'clamp(1rem, 0.5000rem + 1.6000vw, 1.5rem)',
        fontWeight:'bold',
        textAlign:'center',
    },
    image:{
        width: '100%',
        height:'100%',
        borderBottomLeftRadius:'10px',
        borderBottomRightRadius:'10px',
        flexGrow:1,
    },
    paper:{
        marginTop:'100px',
        height:'80vh',
        width:'45vw',
    },
    dynamicroot:{
        width:'100%',
        display:'flex',
    },
    paragraph:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    bottombar:{
        marginTop:'100px',
    },
    overlay:{
        position:'absolute',
        display:'flex',
        width:'100%',
    },
    workshopdetailroot:{
        backgroundImage:`url(${Background})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%', 
        height:'100%',
        width:'100%',
    },
    hide:{
        display:'none'
    },
    container1:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    backbutton:{
        position:'fixed',
        left:'1%',
        top:'13%',
        zIndex:3,
    },
    dateblock:{
        position:'absolute',
        left:0,
        bottom:0,
        borderBottomLeftRadius:'10px',
    },
    margintop:{
        marginTop:'30px',
    }
}))