import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    buttonStyle: {
        minWidth: 230,
        borderRadius: 25,
        margin: 15,
        backgroundColor: "#2b43a1",
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        color: "white",
        textTransform: "none",
        fontSize: 12,
        "&:hover":{
            backgroundColor: "transparent",
            color:"black"
        }
        
    }
}));