import React, { useState, useEffect } from 'react'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "7em"
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    },
    logoContainer: {
        padding: "0",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    menu: {
        backgroundColor: "#6babce",
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    }
}))

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

// ElevationScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };




const Header = () => {

    const [value, setValue] = useState(0);

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }
    const handleClose = (e) => {
        setAnchorEl(null)
        setOpen(false)
    }

    const handleChange = (e, value) => {
        setValue(value)
    }

    const classes = useStyles()
    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        }
        else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1)
        }
    }, [value])

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
                            <img alt="comp logo" src={logo} className={classes.logo} />
                        </Button>
                        {/* <Typography variant="h3" color="">
                            Test
                        </Typography> */}
                        <Tabs
                            value={value}
                            className={classes.tabContainer}
                            onChange={handleChange}
                            indicatorColor="primary"
                        >
                            <Tab className={classes.tab}
                                component={Link} to="/"
                                label="Home"></Tab>
                            {/* <Tab className={classes.tab} component={Link} to="/services" label="Sevices"></Tab> */}
                            <Tab aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? "true" : undefined}
                                onMouseOver={e => handleClick(e)}
                                className={classes.tab}
                                component={Link} to="services"
                                label="Services"></Tab>
                            <Tab className={classes.tab}
                                component={Link} to="about"
                                label="About Us"></Tab>
                            <Tab
                                className={classes.tab}
                                component={Link} to="contact"
                                label="Contact Us"></Tab>
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Sign Up
                        </Button>
                        <Menu id="simple-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            classes={{ paper: classes.menu }}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            elevation={0}
                        >
                            <MenuItem onClick={() => { handleClose(); setValue(1) }}
                                component={Link}
                                classes={{root: classes.menuItem}}
                                to="/services">All Services
                            </MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }}
                                component={Link}
                                classes={{root: classes.menuItem}}
                                to="/ai">Artificial Inteligence
                            </MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }}
                                component={Link}
                                classes={{root: classes.menuItem}}
                                to="/ml">Machine Learning
                            </MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }}
                                component={Link}
                                classes={{root: classes.menuItem}}
                                to="/gd">Graphic Design
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}

export default Header
