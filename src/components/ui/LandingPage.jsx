import React from 'react'
import bg from '../../assets/bg.jpg'
import $ from 'jquery';
import Grid from "@material-ui/core/Grid"

import ButtonArrow from '../ui/ButtonArrow'



import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles(theme => ({

  estimateButton: {
    // ...theme.typography.estimate,
    fontFamily: "curssive",
    backgroundColor: "orange",
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: "white"
    }
  },
  buttonContainer: {
    marginTop: "1em"
  },
  learnButtonHero: {
    // ...theme.typography.learnButton,
    borderColor: "blue",
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    height: 45,
    width: 145,
    color: "blue"
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  mainContainer: {
    // marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    }
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: "1em"
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  let myStyle = {
    // width: "65%",
    // float: "left",
    backgroundImage: `url(${bg})`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginBottom: "1000px",
    // marginTop: "-14px"
  }
  return (
    <div>
      <div style={myStyle}
      //  className="top-container"
      >
        <Grid container direction="column" className={classes.mainContainer}>
          <Grid item sm item>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item>
                <Typography align="center" variant="h2">
                  Bringing AI technology<br /> amoung the kids
                </Typography>
                <Grid container justifyContent="center" className={classes.buttonContainer}>
                  <Grid item>
                    <Button variant="contained" className={classes.estimateButton}>
                      Free Trail
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" className={classes.learnButtonHero}>
                      <span style={{marginRight: 10}}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill="red" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item>
                      
                    </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        {/* <h1 className="top-heading" style={{ textAlign: "center" }}>Coding For Kids</h1> */}
      </div>
    </div>
  )
}

export default LandingPage
