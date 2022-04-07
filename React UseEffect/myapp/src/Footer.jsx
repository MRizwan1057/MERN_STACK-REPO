import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const Footer = (props) => {
  const useStyles = makeStyles((theme) => ({
    footeritem: {
      paddingRight: "1rem",

      // justifyContent: "center",
      color: "white",
      text: "center",
      textDecoration: "none",
      // backgroundColor: "green",
    },
    footer: {
      position: "static",
      top: theme.spacing(3),
      // justifyContent: "center",
      // color: "white",
      // text: "center",
      // textDecoration: "none",
      // backgroundColor: "green",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.footer}>
        <Toolbar>
          <Typography variant="p" className={classes.footeritem}>
            All Right Reserved
          </Typography>

          {/* <Typography variant="h6">News</Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
