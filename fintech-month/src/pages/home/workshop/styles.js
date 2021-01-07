import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Background from '../../../images/backgroundimage.png'
import {createMuiTheme} from '@material-ui/core/styles'


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
    container1:{
        marginTop:'100px',
        display:'flex',
        width:'100%',
        minHeight:'80vh',
        justifyContent:'space-around',
        [theme.breakpoints.down('xs')]:{
            flexWrap:'wrap'
        }
    },
    container2:{
        display:'flex',
        width:'45vw',
        flexDirection:'column',
        [theme.breakpoints.down('xs')]:{
            width:'80vw',
            marginBottom:'2rem',
        }
    },
    container3:{
        width:'45vw',
        display:'flex',
        [theme.breakpoints.down('xs')]:{
            width:'80vw',
        }
    },
    heading:{
        display:'flex',
        borderTopLeftRadius:'1rem',
        borderTopRightRadius:'1rem',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#52B9FF',
        flexGrow:1,
    },
    imagewrapper:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        position:'relative',
        flexGrow:4,
    },
    headertext:{
        fontSize:'clamp(1rem, 0.5294rem + 2.3529vw, 2rem)',
        fontWeight:'bold',
        textAlign:'center',
    },
    image:{
        width: '100%',
        height:'100%',
        borderBottomLeftRadius:'1rem',
        borderBottomRightRadius:'1rem',
        flexGrow:1,
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
        overflow:'hidden',
    },
    hide:{
        display:'none'
    },
    backbutton:{
        position:'fixed',
        left:'1%',
        top:'13%',
        zIndex:3,
        [theme.breakpoints.down('xs')]:{
            top:'15%',
        }
    },
    dateblock:{
        position:'absolute',
        left:0,
        bottom:0,
        borderBottomLeftRadius:'10px',
    },
    backButton: {
        position: 'absolute',
    },
    marginTop:{
        marginTop:'2rem',
    },
}))