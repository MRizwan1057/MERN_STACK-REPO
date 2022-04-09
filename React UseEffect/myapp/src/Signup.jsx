import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";
import userService from "./services/UserService";
// import userService from "./services/UserService";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      // width: "50ch",
      color: "green",
    },
  },
}));

const Signup = (props) => {
  const classes = useStyles();

  const [userReg, setUserReg] = useState({
    username: "",
    useremail: "",
    userpswd: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserReg({ ...userReg, [name]: value });
  };

  const handleClick = () => {
    userService
      .registerUser({
        name: userReg.username,
        email: userReg.useremail,
        password: userReg.userpswd,
      })
      .then((res) => {
        console.log(res.data);
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // setUserReg({
  //   username: "sss",
  //   useremail: "sss",
  //   userpswd: "sss",
  // });
  // <div>
  //   {records.map((currentElement) => {
  //     return (
  //       <div>
  //         <p>{currentElement.username}</p>
  //         <p>{currentElement.useremail}</p>
  //         <p>{currentElement.userpswd}</p>
  //       </div>
  //     );
  //   })}
  // </div>;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userReg, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);

    setUserReg({
      username: "",
      useremail: "",
      userpswd: "",
    });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          {" "}
          <form action="" onSubmit={handleSubmit} className={classes.root}>
            <TextField
              id="username"
              name="username"
              value={userReg.username}
              onChange={handleInput}
              label="Write Name"
              color="secondary"
              variant="filled"
              fullWidth
            />
            <br />
            <TextField
              id="useremail"
              name="useremail"
              value={userReg.useremail}
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
              value={userReg.userpswd}
              onChange={handleInput}
              label="Type Password"
              color="secondary"
              type="password"
              variant="filled"
              fullWidth
            />
            <br />
            <Button variant="contained" fullWidth onClick={handleClick}>
              Register
            </Button>
          </form>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>

      <div>
        {records.map((currentElement) => {
          return (
            <div>
              <p>{currentElement.username}</p>
              <p>{currentElement.useremail}</p>
              <p>{currentElement.userpswd}</p>
            </div>
          );
        })}
      </div>
      {userReg.username}
      {userReg.useremail}
      {userReg.userpswd}
    </>
  );
};
export default Signup;
