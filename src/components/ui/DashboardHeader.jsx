
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
import { IconButton } from '@material-ui/core';
import { SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/logo.svg'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { classExpression } from '@babel/types';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        // ...theme.mixins.toolbar,
        marginBottom: "7em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "5em",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "4em",
        }
    },
    logo: {
        height: "7em",
        [theme.breakpoints.down("md")]: {
            height: "5em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "3em"
        }
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
    },
    drawerIcon: {
        height: "50px",
        width: "50px",
        [theme.breakpoints.down("xs")]: {
            height: "30px",
            width: "30px",
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        background: "#6ba6ce"
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: "0.7"
    },
    drawerItemSelected: {
        opacity: "1"
    },
    drawerItemEstimate: {
        backgroundColor: "orange"
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


const DashboardHeader = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles()
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        }
        else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1)
        }
    }, [value])

    useEffect(() => {
        if (window.location.pathname == "/" && value != 0) {
            setValue(0)
        }
        else if (window.location.pathname == "/serives" && value != 1) {
            setValue(1)
        }
        else if (window.location.pathname == "/about" && value != 2) {
            setValue(2)
        }
        else if (window.location.pathname == "/contact" && value != 3) {
            setValue(3)
        }

    }, [value]);

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }


    const tabs = (
        <React.Fragment>
            <Tabs
                value={value}
                className={classes.tabContainer}
                onChange={handleChange}
                indicatorColor="primary"
            >
                {/* <Tab className={classes.tab}
                    component={Link} to="/"
                    label="Home"></Tab> */}
                <Tab
                    className={classes.tab}
                    // component={Link} to="contact"
                    label="user@emil.com"></Tab>
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>
                Log Out
            </Button>
            {/* <Menu id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                MenuListProps={{ onMouseLeave: handleClose }}
                elevation={0}
            >
                {menuOptions.map((option, i) => (
                    <MenuItem key={option}
                        component={Link}
                        to={option.link}
                        classes={{ root: classes.menuItem }}
                        onClick={(event) => { handleMenuItemClick(event, i); setValue(1); handleClose() }}
                        selected={i === selectedIndex && value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu> */}
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
                            <img alt="comp logo" src={logo} className={classes.logo} />
                        </Button>
                        {tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            DashBoard Header PlaceHolder
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}



export default DashboardHeader
