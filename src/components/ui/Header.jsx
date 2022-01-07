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
import logo from '../../assets/logo.svg';
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

// ElevationScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };


const Header = () => {

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }
    const handleClose = (e) => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null)
        setOpenMenu(false)
        setSelectedIndex(i)
    }

    const menuOptions = [
        { name: "Services", link: "/services" },
        { name: "Artificial Intelligence", link: "/ai" },
        { name: "Machine Learning", link: "/ml" },
        { name: "Graphic Design", link: "/gd" },
    ]

    const handleChange = (e, newValue) => {
        setValue(newValue)
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


    useEffect(()=>{
        if (window.location.pathname == "/" && value != 0){
            setValue(0)
        }
        else if (window.location.pathname == "/serives" && value != 1){
            setValue(1)
        }
        else if (window.location.pathname == "/about" && value != 2){
            setValue(2)
        }
        else if (window.location.pathname == "/contact" && value != 3){
            setValue(3)
        }

    }, [value]);

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}>
                <List disablePadding>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to="/"
                        onClick={() => { setOpenDrawer(false); setValue(0) }}
                        selected={value === 0}
                    >
                        <ListItemText
                            className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            disableTypography
                        >
                            Home
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to="/services"
                        onClick={() => { setOpenDrawer(false); setValue(1) }}
                        selected={value === 1}
                    >
                        <ListItemText
                            className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            disableTypography>
                            Services
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to="/about"
                        onClick={() => { setOpenDrawer(false); setValue(2) }}
                        selected={value === 2}
                    >
                        <ListItemText
                            className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            disableTypography>
                            About Us
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to="/contact"
                        onClick={() => { setOpenDrawer(false); setValue(3) }}
                        selected={value === 3}
                    >
                        <ListItemText
                            className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            disableTypography>
                            Contact Us
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        className={classes.drawerItemEstimate}
                        divider
                        button
                        component={Link}
                        to="/"
                        onClick={() => { setOpenDrawer(false); setValue(4) }}
                        selected={value === 4}
                    >
                        <ListItemText
                            className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            disableTypography>
                            Sign Up
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} onClick={() => setOpenDrawer(!openDrawer)} />
            </IconButton>
        </React.Fragment>
    )

    const tabs = (
        <React.Fragment>
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
                        onClick={(event) => {handleMenuItemClick(event, i); setValue(1); handleClose()}}
                        selected={i === selectedIndex && value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
                {/* <MenuItem onClick={() => { handleClose(); setValue(1) }}
                    component={Link}
                    classes={{ root: classes.menuItem }}
                    to="/services">All Services
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); setValue(1) }}
                    component={Link}
                    classes={{ root: classes.menuItem }}
                    to="/ai">Artificial Intelligence
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); setValue(1) }}
                    component={Link}
                    classes={{ root: classes.menuItem }}
                    to="/ml">Machine Learning
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); setValue(1) }}
                    component={Link}
                    classes={{ root: classes.menuItem }}
                    to="/gd">Graphic Design
                </MenuItem> */}
            </Menu>
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
                        {/* <Typography variant="h3" color="">
                            Test
                        </Typography> */}
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/* <div className={classes.toolbarMargin} /> */}
        </React.Fragment>
    )
}

export default Header
