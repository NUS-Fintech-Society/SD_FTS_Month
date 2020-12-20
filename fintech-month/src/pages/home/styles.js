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
            backgroundColor: "white",
            color:"black",
            borderColor: 'white',
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

    }
}));