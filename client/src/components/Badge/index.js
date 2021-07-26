import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  badge: {
    backgroundColor: "#ff82c7",
    borderRadius: "3px",
    padding: "5px",
    fontWeight: "bold",
  },
  container: {
    position: "fixed",
    zIndex: 10,
  },
}));

const Badge = ({ name }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <small className={classes.badge}>{name}</small>
    </div>
  );
};

export default Badge;
