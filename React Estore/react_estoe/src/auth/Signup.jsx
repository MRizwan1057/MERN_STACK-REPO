import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { toast } from "react-toastify";
import userService from "../services/UserService";
const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = () => {
    userService
      .signup(name, email, password)
      .then((res) => {
        toast.success("Signup Successfully");
        props.history.push("/login");
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <form
            action=""
            style={{
              textAlign: "center",
              backgroundColor: "pink",
              borderRadius: "33px",
              margin: "3%",
              width: "100%",
            }}
          >
            <br />
            <h1>Signup</h1>
            <br />
            <TextField
              label="Enter Name"
              fullWidth
              variant="filled"
              color="inherit"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              label="Enter Email"
              fullWidth
              variant="filled"
              color="inherit"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              label="Type Password"
              type="password"
              fullWidth
              variant="filled"
              color="inherit"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <br />
            <br />
            <Button
              variant="contained"
              // color="inherit"
              style={{
                margin: "5px",
                borderRadius: "22px",
                fontWeight: "bold",
              }}
              onClick={handleSignup}
            >
              Signup
            </Button>{" "}
            <br /> <br />
          </form>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default Signup;
