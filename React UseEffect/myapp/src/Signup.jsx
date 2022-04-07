import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "75ch",
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
    alert("clicked");
    setUserReg({
      username: "sss",
      useremail: "sss",
      userpswd: "sss",
    });
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
  };

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
      <form
        action=""
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="username"
          name="username"
          value={userReg.username}
          onChange={handleInput}
          label="Write Name"
          color="secondary"
          variant="filled"
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
        />
        <br />
        <Button variant="contained" onClick={handleClick}>
          Register
        </Button>
      </form>

      <div>
        {records.map((currentElement) => {
          return (
            <div>
              <h5>hello</h5>

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
