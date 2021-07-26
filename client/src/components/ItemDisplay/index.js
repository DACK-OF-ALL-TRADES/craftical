import React from "react";
import img from "../../assets/candle.jpg";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Badge from "../Badge";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "1rem",
    width: "min-content",
    margin: "0.25rem",
    backgroundColor: "#e9e9e9",
  },
  img: {
    maxWidth: "280px",
    maxHeight: "280px",
    marginTop: "15px",
    border: "2px solid #ff82c7",
    borderRadius: "5px",
    "&:hover": {
      opacity: 0.75,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "225px",
      maxHeight: "225px",
    },
  },
  status: {
    float: "right",
    color: "#ff82c7",
    textDecoration: "underline",
  },
}));

const ItemDisplay = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Badge name="Candles and Decorations" />
        <Link to="#">
          <img src={img} className={classes.img}></img>
        </Link>
        <br />
        <h1>Lavender Candles</h1>
        <p>
          Creating these candels are very easy! I spend 4 hours to make 10
          different kinds and they all smell very nice!
        </p>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> 12
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon /> 5
        </IconButton>
        <small className={classes.status}>In progress</small>
      </Paper>
    </div>
  );
};

export default ItemDisplay;
