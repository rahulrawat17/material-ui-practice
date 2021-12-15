import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "blue",
        width: "100%",
        zIndex: 1320,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]:{
            width: "21em"
        },
        [theme.breakpoints.down("xm")]: {
            width: "15em"
        }
    }
}))

const Footer = () => {
    const classes = useStyles()
    
    return (
        <footer className={classes.footer}><img src={footerAdornment} alt="black decorative slash" className={classes.adornment} /></footer>
    )
}

export default Footer
