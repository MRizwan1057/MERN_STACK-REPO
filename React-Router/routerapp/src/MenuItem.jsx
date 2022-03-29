import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <div>
      <ul>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/products">Products</Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/contact-us">Contact us</Link>{" "}
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
