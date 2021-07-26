import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel/index.js";
import TopCategories from "../components/TopCategories";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../assets/art-transparent.png";
import img2 from "../assets/fun-transparent.png";
import CraftedItems from "../components/CraftedItems";
import Items from "../components/Items";
//
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
    minHeight: "33rem",
    margin: "1rem",
  },
  paperh3: {
    color: "black",
    margin: "0.5rem 0",
    fontSize: "200%",
    fontFamily: "Fredericka the Great, cursive",
  },
  paperp: {
    lineHeight: "150%",
    fontSize: "100%",
    letterSpacing: "0.6px",
    textAlign: "left",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <div className="home-header">
        <h1>Home</h1>
      </div>
      <div className={classes.root}>
        <Grid container>
          <Grid item md>
            <Paper className={classes.paper}>
              {/* <Share style={{ fontSize: 80 }} /> */}
              <img
                src={img1}
                width="100%"
                height="auto"
                style={{ maxWidth: "300px", minHeight: "300px" }}
              ></img>
              <h3 className={classes.paperh3}>Share your craft</h3>
              <p className={classes.paperp}>
                &#8618;Craftical allows users to share their work, keep a record
                of it and to discover new handicrafts.
                <br />
                &#8618;Explore many crafts made from people like you, with a
                variety of categories and so much more!
              </p>
            </Paper>
          </Grid>
          <Grid item md>
            <Paper className={classes.paper}>
              {/* <CloudQueue style={{ fontSize: 80 }} /> */}
              <img
                src={img2}
                width="100%"
                height="auto"
                style={{ maxWidth: "300px", minHeight: "300px" }}
              ></img>
              <h3 className={classes.paperh3}>Discover new people</h3>
              <p className={classes.paperp}>
                &#8618;Whatever your skills and craftings are, there are many
                people to connect within the platfrom.
                <br />
                &#8618;Find out others with-in your area; support, meet and
                share moments.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="carousel-container">
        <Carousel name="Popular Posts" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ fontFamily: '"Fredericka the Great", cursive' }}>
          Top Categories
        </h2>
      </div>
      <div className="home-top-categories">
        <div>
          <Grid container>
            <Grid item md>
              <TopCategories
                title="Wood Working"
                desc="Toys, Coat Racks, Fruit Bowls, Picture Frames..."
                img="wood"
              />
            </Grid>
            <Grid item md>
              <TopCategories
                title="Candles"
                desc="Palm Wax, Lavender, Paraffin Wax, Liquid Wax..."
                img="candle"
              />
            </Grid>
            <Grid item md>
              <TopCategories
                title="Jewellery"
                desc="Fashion, Bridal, Antique, Kundan, Bead..."
                img="jewellery"
              />
            </Grid>
            <Grid item md>
              <TopCategories
                title="Painting"
                desc="Acrylic, Oil, Pencil, Charcoal, Spray..."
                img="paint"
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontFamily: '"Fredericka the Great", cursive' }}>
          All Posts
        </h1>
      </div>
      <div className="home-items">
        <div>
          <Grid container>
            <CraftedItems />
            <CraftedItems />
            <CraftedItems />
            <CraftedItems />
          </Grid>
        </div>
      </div>
      {/* <Items /> */}
      <Footer />
    </div>
  );
};

export default Home;
