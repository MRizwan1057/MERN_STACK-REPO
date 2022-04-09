import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const MenuItem = (props) => {
  const useStyles = makeStyles((theme) => ({
    menuItem: {
      paddingRight: "1rem",
      color: "white",
      textDecoration: "none",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.menuItem}>
            <Typography variant="h6">Home</Typography>
          </Link>
          <Link to="/products" className={classes.menuItem}>
            <Typography variant="h6">Products</Typography>
          </Link>
          <Link to="/signup" className={classes.menuItem}>
            <Typography variant="h6">Signup</Typography>
          </Link>
          <Link to="/login" className={classes.menuItem}>
            <Typography variant="h6">Login</Typography>
          </Link>
          {/* <Link to="/not-found" className={classes.menuItem}>
            <Typography variant="h6">Not Found</Typography>
          </Link> */}
          {/* <Typography variant="h6">News</Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuItem;
