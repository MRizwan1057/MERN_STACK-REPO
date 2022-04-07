import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "55ch",
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "pink",
      marginLeft: "55ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="useremail"
        label="Enter Email"
        color="secondary"
        variant="filled"
      />
      <br />
      <TextField
        id="userpswd"
        label="Type Password"
        color="secondary"
        variant="filled"
      />
      <br />
      <Button variant="contained" color="info">
        Log in
      </Button>
    </form>
  );
}
