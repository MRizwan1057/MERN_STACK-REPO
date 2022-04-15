import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import userService from "../services/UserService";
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

          {!userService.isUserLoggedIn() ? (
            <>
              <Link to="/login" className={classes.menuItem}>
                <Typography variant="h6">Login</Typography>
              </Link>
              <Link to="/signup" className={classes.menuItem}>
                <Typography variant="h6">SignUp</Typography>
              </Link>
            </>
          ) : (
            <>
              <Button
                style={{ color: "white" }}
                onClick={() => {
                  userService.signout();
                  window.location.reload();
                }}
              >
                <Typography variant="h6">Signout</Typography>
              </Button>
            </>
          )}

          {userService.isAdmin() ? (
            <>
              <Link to="/products/add" className={classes.menuItem}>
                <Typography variant="h6">Add New Product</Typography>
              </Link>
              <Link to="/products/update/:id" className={classes.menuItem}>
                <Typography variant="h6">Update Product</Typography>
              </Link>

              <Link to="/detailedProduct" className={classes.menuItem}>
                <Typography variant="h6">Detailed Product</Typography>
              </Link>
            </>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuItem;
