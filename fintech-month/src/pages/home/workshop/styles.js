import { makeStyles } from '@material-ui/core/styles'
import Background from '../../../images/backgroundimage.png'

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '150px',
        backgroundColor: '#52B9FF',
    },
    workshopbanner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        minHeight: '300px',
        flexDirection: 'column',
        backgroundImage: 'linear-gradient(#131d47,80%,#ffffff)',

    },
    beginnerworkshop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '150px',
        backgroundColor: '#FFFFFF',
    },
    machinelearning: {
        borderTop: '1px solid #FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '150px',
        backgroundColor: '#52B9FF',
    },
    blockchain: {
        borderTop: '1px solid #FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '150px',
        backgroundColor: '#52B9FF',
    },
    title: {
        fontSize: theme.typography.pxToRem(30),
        fontWeight: theme.typography.fontWeightMedium,
        color: '#FFFFFF',
        justifyContent: 'center',
    },
    titleheading: {
        fontSize: theme.typography.pxToRem(30),
        fontWeight: theme.typography.fontWeightMedium,
        color: '#000000',
        justifyContent: 'center',
    },
    workshop: {
        fontSize: theme.typography.pxToRem(40),
        fontWeight: theme.typography.fontWeightMedium,
        color: '#FFFFFF',
        flexBasis: '33.33%',
        justifyContent: 'center',
    },
    logo: {
        flexBasis: '66.67%',
        justifyContent: 'center',
        width: '150px',
        height: '150px',
    },
    image: {
        borderRadius: '10px',
        marginTop: '100px',
        width: '45vw',
        height: '80vh',
    },
    paper: {
        marginTop: '100px',
        height: '80vh',
        width: '45vw',
    },
    dynamicroot: {
        width: '100%',
        display: 'flex',
    },
    paragraph: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    register: {
        marginTop: '100px',
        height: '100px',
        width: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        position: 'absolute',
        display: 'flex',
        width: '100%',
    },
    backbutton: {
        position: 'fixed',
        left: 0,
        top: '100px',
    },
    workshopdetailroot: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    },
    hide: {
        display: 'none'
    },
    container1: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    imagewrapper: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
    },
    tag: {
        position: 'absolute',
        bottom: '0px',
        left: '16px',
    }
}))