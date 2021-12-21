import React from 'react'
import bg from '../../assets/bg.jpg'
// import $ from 'jquery';
import Grid from "@material-ui/core/Grid"
import ButtonArrow from '../ui/ButtonArrow'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import AI_Real_World_png from "../../assets/AI_Real_World.png"
import Machine_Learning_png from "../../assets/Machine_Learning.png"
import Graphics_Designing_png from "../../assets/Graphics_Designing.png"
import Basic_Python_png from "../../assets/Basic_Python.png"


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
    // ...theme.typography.learnButton,
    borderColor: "blue",
    color: "blue",
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    margin: "1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  mainContainer: {
    paddingTop: "9em",
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
    fontFamily: "Cursive",
    color: "orange"
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
  },
  serviceImg: {
    width: "12em",
    margin: "0.5em"
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
    marginBottom: "4rem",
    // marginTop: "-14px"
  }
  return (
    <div>
      <div style={myStyle}
      //  className="top-container"
      >
        <Grid container direction="column" className={classes.mainContainer}>
          <Grid item sm item> {/*----- Hero Block -----*/}
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item>
                <Typography align="center" variant="h2">
                  Bringing AI technology<br />
                  amoung the kids
                </Typography>
                <Grid container justifyContent="center" className={classes.buttonContainer}>
                  <Grid item>
                    <Button variant="contained" className={classes.estimateButton}>
                      Free Trail
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button className={classes.learnButton} variant="contained" className={classes.learnButtonHero}>
                      <span style={{ marginRight: 10 }}>
                        Learn More
                      </span>
                      <ButtonArrow width={15} height={15} fill="red" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid item> {/* Services Block */}
        <Grid container direction="row">
          <Grid item style={{ "marginLeft": "10em" }}>
            <Typography variant="h4"> 
            {/* className={classes.specialText} */}
              Artificial Intelligence
            </Typography>
            <Typography variant="subtitle1">
              Learn to detect & recognize human faces.
            </Typography>
            <Typography variant="subtitle1">
              Learn to recognize objects.
            </Typography>
            <Typography variant="subtitle1">
              Learn to recognize color & many more.
            </Typography>
            <Button className={classes.learnButton} variant="outlined">
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill="blue" />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.serviceImg} src={AI_Real_World_png} alt="AI Real World image" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item> {/* Services Block */}
        <Grid container direction="row" justifyContent="flex-end">
          <Grid item>
            <Typography variant="h4">
              Machine Learning
            </Typography>
            <Typography variant="subtitle1">
              Learn to detect & recognize human faces.
            </Typography>
            <Typography variant="subtitle1">
              Learn to recognize objects.
            </Typography>
            <Typography variant="subtitle1">
              Learn to recognize color & many more.
            </Typography>
            <Button className={classes.learnButton} variant="outlined">
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill="blue" />
            </Button>
          </Grid>
          <Grid item style={{ "marginRight": "10em" }}>
            <img className={classes.serviceImg} src={Machine_Learning_png} alt="Machine Learning image" />
          </Grid>
        </Grid>
      </Grid>


      <Grid item> {/* Services Block */}
        <Grid container direction="row">
          <Grid item style={{ "marginLeft": "10em" }}>
            <Typography variant="h4">
              Graphic Design
            </Typography>
            <Typography variant="subtitle1">
              Learn to detect & recognize human faces.
            </Typography>
            <Typography variant="subtitle1">
              Learn to recognize objects.
            </Typography>
            <Typography variant="subtitle1">
              Learn to recognize color & many more.
            </Typography>
            <Button className={classes.learnButton} variant="outlined">
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill="blue" />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.serviceImg} src={Graphics_Designing_png} alt="Graphics Designing image" />
          </Grid>
        </Grid>
      </Grid>


      <Grid item style={{ "marginBottom": "5rem" }}> {/* Services Block */}
        <Grid container direction="row" justifyContent="flex-end">
          <Grid item>
            <Typography variant="h4">
              Python Learning
            </Typography>
            <Typography variant="subtitle1">
              Learn to detect & recognize human faces.
            </Typography>
            <Typography variant="subtitle1">
              Learn to recognize objects.
            </Typography>
            <Typography variant="subtitle1">
              Learn to recognize color & many more.
            </Typography>
            <Button className={classes.learnButton} variant="outlined">
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill="blue" />
            </Button>
          </Grid>
          <Grid item style={{ "marginRight": "10em" }}>
            <img className={classes.serviceImg} src={Basic_Python_png} alt="Basic Python image" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default LandingPage
