import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

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
        justifyContent:'center',
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
    template: {
        flexBasis:'50%',
    },
    image:{
        height:'400px',
    },
    imagewrapper:{
        position:'fixed',
        left:'2%',
        top:'22%',
        display:'flex',
    },
    box:{
        marginTop:'100px',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        height:'360px',
        padding:'20px 0',
    },
    dynamicroot:{
        width:'100%',
        display:'flex',
        justifyContent:'flex-end',
        height:'75%',
    },
    paragraph:{
        flexBasis:'60%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    register:{
        marginTop:'100px',
        height:'100px',
        width:'250px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    overlay:{
        position:'absolute',
        display:'flex',
        width:'100%',
    },
    backbutton:{
        position:'fixed',
        left:'1.5%',
        top:'15%',
    },
    backButton: {
        position: 'absolute',
        // borderColor: 'black',
        // borderStyle: 'solid',
    },
}))