import React from "react";
import { Outlet, Link } from "react-router-dom";
const Form = () => {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/">Registration</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/signup">sign up</Link>
        </li>
      </ol>
    </nav>
  );
};
