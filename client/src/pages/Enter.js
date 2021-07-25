import React from "react";
import Auth from "../utils/auth";
import { Link, Redirect } from "react-router-dom";

const Enter = () => {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <ul className="flex-row">
            <li className="mx-1">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
          <Redirect to="/home" />;
        </div>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <div>
      <header className="flex-row px-1">
        {/* <h1>
          <Link to="/">Craftical</Link>
        </h1> */}
        <nav>{showNavigation()}</nav>
      </header>
      <h1>Sign in / Log in Page</h1>
    </div>
  );
};

export default Enter;
