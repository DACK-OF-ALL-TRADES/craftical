import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: 345,
    margin: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CraftedItems() {
  const classes = useStyles();

  return (
    <Grid item md>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title="John Doe"
          subheader="July 14, 2021"
        />
        <CardMedia
          className={classes.media}
          image={require(`../../assets/bracelet.jpg`).default}
          title="Bracelet"
        />
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            Decorative Bracelet
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon /> 12
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon /> 5
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
