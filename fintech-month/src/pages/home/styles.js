import { makeStyles, withTheme } from '@material-ui/core/styles';
import backgroundImg from '../../images/backgroundimage.png';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    homePage: {
        flexGrow: 1,
        backgroundImage: "linear-gradient(#131d47,55%,#ffffff)",

        
    },
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
        
    },
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
    timeGrid: {
        // borderStyle:"solid",
        // borderColor:"black",
        paddingTop:10,
        paddingBottom:15,
    },
    timeBox: {
        backgroundColor:"#FFF",
        color:"black",
        // borderColor:"#ffccbc",
        // borderStyle:"solid",
        justifyContent:'center',
        padding:20,
        margin:20,
        minWidth:96.82,
        maxWidth:96.82,
        alignItems:"center",
        alignContent:"center",
        textAlign: 'center',
        opacity:0.5,
        
    },
    timeNumber: {
        fontSize:28,
        fontWeight:"bold",
        paddingBottom:5,
    },
    timeWords: {
        fontSize: 14,
        // fontWeight:"bold",
    }
}));