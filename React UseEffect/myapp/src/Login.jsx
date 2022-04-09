import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";
import userService from "./services/UserService";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "pink",
      AlignItem: "center",
      // marginLeft: "55ch",
    },
  },
}));

export default function Login(props) {
  const classes = useStyles();

  const [userLogin, setuserLogin] = useState({
    useremail: "",
    userpswd: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserLogin({ ...userLogin, [name]: value });
  };

  const handleClick = () => {
    userService
      .loginUser({
        email: userLogin.useremail,
        password: userLogin.userpswd,
      })
      .then((res) => {
        console.log(res.data);
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userLogin, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);

    setuserLogin({
      useremail: "",
      userpswd: "",
    });
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <form action="" onSubmit={handleSubmit} className={classes.root}>
          <TextField
            id="useremail"
            name="useremail"
            value={userLogin.useremail}
            onChange={handleInput}
            label="Enter Email"
            color="secondary"
            type="email"
            variant="filled"
            fullWidth
          />
          <br />
          <TextField
            id="userpswd"
            name="userpswd"
            value={userLogin.userpswd}
            onChange={handleInput}
            label="Type Password"
            color="secondary"
            type="password"
            variant="filled"
            fullWidth
          />
          <br />
          <Button variant="contained" fullWidth onClick={handleClick}>
            Login
          </Button>
        </form>
        {/* <form className={classes.root}>
          <TextField
            id="useremail"
            label="Enter Email"
            color="primary"
            variant="filled"
            fullWidth
          />
          <br />
          <TextField
            id="userpswd"
            label="Type Password"
            color="primary"
            variant="filled"
            fullWidth
          />
          <br />
          <Button variant="contained" color="success" fullWidth>
            Log in
          </Button>
        </form>{" "} */}
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}
