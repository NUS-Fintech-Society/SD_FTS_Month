import React from 'react'
import {useStyles} from './styles'
import {Box} from '@material-ui/core'
import Register from '../../../components/Register'
import Template from './components/Template'
import Placeholder from '../../../images/placeholder.png'

function Dynamicpage(){
    const classes = useStyles()
    
    return (
        <Box className={classes.dynamicroot}>
            <Box className={classes.priceprediction}>
                <img src={Placeholder} className={classes.image} />
                <Template title="Hey" content="Hii" author="Bryan" className={classes.template}/>
            </Box>
        </Box>
    )
}


export default Dynamicpage;