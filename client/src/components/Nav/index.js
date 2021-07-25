import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Toolbar,
  AppBar,
  MenuItem,
} from "@material-ui/core";
import logo from "../../assets/tlogo.png";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  menuButton2: {
    background: "#1d2622",
    borderRadius: 3,
    border: 0,
    height: 38,
    padding: "0 16px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:hover": {
      background: "#efefef",
    },
    "&:hover $link2": {
      color: "#1d2622",
    },
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    fontSize: "140%",
    color: "#1d2622",
  },
  link2: {
    textDecoration: "none",
    fontSize: "140%",
    color: "white",
  },
  nav: {
    boxShadow: "none",
    backgroundColor: "#10d48e",
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function Nav() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.nav}>
          <Toolbar>
            <Typography className={classes.title}>
              <Link to="/home">
                <img src={logo} width="160" height="60"></img>
              </Link>
            </Typography>
            <ButtonAppBarCollapse>
              <MenuItem>
                <Link to="/profile" className={classes.link}>
                  Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/search" className={classes.link}>
                  Search
                </Link>
              </MenuItem>
              <MenuItem>
                <a
                  href="/"
                  className={classes.link}
                  onClick={() => Auth.logout()}
                >
                  Logout
                </a>
              </MenuItem>
            </ButtonAppBarCollapse>
            <div className={classes.buttonBar} id="appbar-collapse">
              <Button className={classes.menuButton}>
                <Link to="/profile" className={classes.link}>
                  Profile
                </Link>
              </Button>
              <Button className={classes.menuButton}>
                <Link to="/search" className={classes.link}>
                  Search
                </Link>
              </Button>
              <Button className={classes.menuButton2}>
                <a
                  href="/"
                  className={classes.link2}
                  onClick={() => Auth.logout()}
                >
                  Logout
                </a>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Nav;
