import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom';

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
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xm")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Grid container justifyContent="center" className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column">
                        <Grid component={Link} to="/" className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/services" className={classes.link}>
                            Services
                        </Grid>
                        <Grid item component={Link} to="/ai" className={classes.link}>
                            Artificial Inteligence
                        </Grid>
                        <Grid item component={Link} to="/ml" className={classes.link}>
                            Machine Learning
                        </Grid>
                        <Grid item component={Link} to="/gd" className={classes.link}>
                            Graphic Design
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/about" className={classes.link}>
                            About us
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/contact" className={classes.link}>
                            Contact us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img src={footerAdornment} alt="black decorative slash" className={classes.adornment} />
        </footer>
    )
}

export default Footer
