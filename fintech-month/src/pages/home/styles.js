import { makeStyles, withTheme } from '@material-ui/core/styles';
import backgroundImg from '../../images/backgroundimage.png';

export const useStyles = makeStyles(theme => ({

    // Home Section 

    root: {
        flexGrow: 1
    },
    homePage: {
        flexGrow: 1,
        backgroundImage: "linear-gradient(#131d47,55%,#ffffff)",
    },


    //  Event Overview Page Section


    dateStyle: {
        backgroundColor: '#2b43a1',
        color:'white',
        marginTop: 12,
        marginRight: 12,
        padding: 10,
        borderRadius: 8,
        fontSize: 12,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        fontWeight: 'bold',
        position: 'absolute',
        
    },
    imgClass: {
        // height: 250,
        // right: "auto",
        // bottom: 0,
        // borderColor: 'pink',
        // borderStyle: 'solid',
        // width: "auto",
    },
    textSize: {
        fontSize:12,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        // borderColor: 'pink',
        // borderStyle: 'solid',
    },
    gridHeight: {
        minHeight:500,
    },


    // Reg Page Section


    bgImg: {
        backgroundImage: `url(${backgroundImg})`,
        justify: 'center',
        minHeight: 1400,
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    backButtonRegDate: {
        position: 'absolute',
        backgroundColor: "white !important",
        borderRadius:25,

    },


    // Button Section 


    buttonStyle: {
        minWidth: 200,
        margin: 15,
        backgroundColor: "#2b43a1",
        color: "white",
        textTransform: "none",
        fontSize: 12,
        "&:hover":{
            // backgroundColor: "white",
            color:"black",
        }
        
    },
    backButton: {
        position: 'absolute',
        // borderColor: 'black',
        // borderStyle: 'solid',
    },
    

    // Timer Section


    timeGrid: {
        // borderStyle:"solid",
        // borderColor:"black",
        paddingTop:10,
        paddingBottom:0,
    },
    numGrid: {
        paddingTop:0,
        paddingBottom:0,
        // borderStyle:"solid",
        // borderColor:"pink",
    },
    timeBox: {
        backgroundColor:"#FFF",
        color:"black",
        justifyContent:'center',
        padding:20,
        margin:20,
        marginBottom:10,
        minWidth:77.73,
        maxWidth:77.73,
        alignItems:"center",
        alignContent:"center",
        textAlign: 'center',
        opacity:0.5,
        
    },
    numBox: {
        color:"white",
        justifyContent:'center',
        padding:0,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
        minWidth:77.73,
        maxWidth:77.73,
        alignItems:"center",
        alignContent:"center",
        textAlign: 'center',
        
    },
    timeNumber: {
        fontSize:28,
        fontWeight:"bold",
        paddingBottom:5,
    },
    timeWords: {
        fontSize: 14,
    }
}));