import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel.js";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Share from "@material-ui/icons/Share";
import CloudQueue from "@material-ui/icons/CloudQueue";
//

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "2rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    backgroundColor: "#eee",
    fontSize: "120%",
    minHeight: "20rem",
    margin: "1rem",
  },
  paperh3: {
    color: "black",
    margin: "0.5rem 0",
    fontSize: "200%",
  },
  paperp: {
    lineHeight: "150%",
    letterSpacing: "0.8px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <div className={classes.root}>
        <Grid container>
          <Grid item md>
            <Paper className={classes.paper}>
              <Share style={{ fontSize: 80 }} />
              <h3 className={classes.paperh3}>Share your handicraft</h3>
              <p className={classes.paperp}>
                Some more text about Craftical Some more text about Some more
                text about Craftical Some more text about Craftical Some more
                text about Craftical Some more text about Craftical MAYbe some
                icons and small pciture anything more interactive
              </p>
            </Paper>
          </Grid>
          <Grid item md>
            <Paper className={classes.paper}>
              <CloudQueue style={{ fontSize: 80 }} />
              <h3 className={classes.paperh3}>Keep a record of it!</h3>
              <p className={classes.paperp}>
                Here you can find all sorts of items! Here you can find all
                sorts of items! Here you can find all sorts of items! Here you
                can find all sorts of items! Here you can find all sorts of
                items! Here you can find all sorts of items! same here some more
                icons and such
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="home-header">
        <h1>Homepage</h1>
      </div>
      <div className="carousel-container">
        <Carousel name="Popular Items" />
      </div>
      <div className="carousel-container">
        <Carousel name="Popular Categories" />
      </div>
      <div className="carousel-container">
        <Carousel name="Popular Users" />
      </div>
      <div className="home-container"></div>
      <Footer />
    </div>
  );
};

export default Home;
