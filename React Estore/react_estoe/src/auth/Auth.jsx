import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import userService from "../services/UserService";
const Auth = (props) => {
  useEffect(() => {
    if (!userService.isUserLoggedIn()) {
      props.history.push("/login");
    }
  }, []);
  return props.children;
};

export default withRouter(Auth);
