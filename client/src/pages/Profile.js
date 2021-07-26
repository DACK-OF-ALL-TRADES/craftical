import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Avatar, Grid } from "@material-ui/core";
import ProfileTabs from "../components/ProfileTabs";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <div className="profile-container">
        <div>
          <Grid container>
            <Grid item md>
              <div className="profile-info-subcontainer">
                <Avatar
                  alt="Remy Sharp"
                  src={require(`../assets/profile-pic.jpg`).default}
                  className={classes.large}
                />
              </div>
            </Grid>
            <Grid item md>
              <div className="profile-header">
                <h1>John Doe</h1>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<EditIcon />}
                >
                  Edit Profile
                </Button>
              </div>
              <Grid item>
                <div className="profile-header-fluid">
                  <h4>13 Items</h4>
                  <h4>481 Likes</h4>
                  <h4>22 Saved</h4>
                </div>
              </Grid>
              <div className="profile-header2">
                <h4>Ottawa, ON</h4>
                <p>johndoe22</p>
                <p>Joined August 2021</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="create-item-profile-container">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
        >
          Create Post
        </Button>
      </div>
      <div className="profile-tabs-container">
        <ProfileTabs />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
