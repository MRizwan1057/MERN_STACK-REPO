import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { toast } from "react-toastify";
import userService from "./services/UserService";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    userService
      .login(email, password)
      .then((res) => {
        toast.success("You are Logged in.");
        props.history.push("/normalUser");

        // {userService.isAdmin() ? {props.history.push("/normalUser");}:{props.history.push("/adminUser");};
        window.location.reload();

        // console.log(res);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <form
            action=""
            style={{
              textAlign: "center",
              backgroundColor: "lightblue",
              borderRadius: "33px",
              margin: "50px",
            }}
          >
            <br />
            <h1>Login</h1>
            <TextField
              label="Email"
              fullWidth
              variant="filled"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <br /> <br />
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="filled"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />{" "}
            <br /> <br />
            <Button
              variant="contained"
              style={{
                margin: "5px",
                borderRadius: "22px",
                fontWeight: "bold",
              }}
              color="inherit"
              onClick={handleLogin}
            >
              Login
            </Button>
            <br /> <br />
          </form>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default Login;
