import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import {
  tutorialSteps1,
  tutorialSteps2,
  tutorialSteps3,
  tutorialSteps4,
} from "./images";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  mainRoot: {
    backgroundColor: "#fff",
  },
  root: {
    maxWidth: "80vw",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    backgroundColor: "#fff",
    fontSize: "200%",
  },
  img: {
    height: 255,
    maxWidth: 600,
    overflow: "hidden",
    width: "100%",
  },
  imgContainer: {
    display: "flex",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgMedia4: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  imgMedia3: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  imgMedia2: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Carousel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps1.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.mainRoot}>
      <div className={classes.root}>
        <div className={classes.imgContainer}>
          <span className={classes.imgMedia1}>
            <Link to="/#">
              <img
                className={classes.img}
                src={tutorialSteps1[activeStep].imgPath}
                alt={tutorialSteps1[activeStep].label}
              />
            </Link>
          </span>
          <span className={classes.imgMedia2}>
            <Link to="/#">
              <img
                className={classes.img}
                src={tutorialSteps2[activeStep].imgPath}
                alt={tutorialSteps2[activeStep].label}
              />
            </Link>
          </span>
          <span className={classes.imgMedia3}>
            <Link to="/#">
              <img
                className={classes.img}
                src={tutorialSteps3[activeStep].imgPath}
                alt={tutorialSteps3[activeStep].label}
              />
            </Link>
          </span>
          <span className={classes.imgMedia4}>
            <Link to="/#">
              <img
                className={classes.img}
                src={tutorialSteps4[activeStep].imgPath}
                alt={tutorialSteps4[activeStep].label}
              />
            </Link>
          </span>
        </div>
        <div className={classes.title}>
          <p className={classes.header}>{props.name}</p>
        </div>

        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    </div>
  );
}
