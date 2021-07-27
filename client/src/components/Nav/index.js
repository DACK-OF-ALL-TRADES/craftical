import React from "react";
import logo from "../../assets/tlogo.png";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="topnav">
        <li>
          <Link to="/" className="active">
            <img src={logo} width="135" height="55"></img>
          </Link>
        </li>
        <li className="right logout">
          <Link to="/" onClick={() => Auth.logout()}>
            LOGOUT
          </Link>
        </li>
        <li className="right">
          <Link to="/search">SEARCH</Link>
        </li>
        <li className="right">
          <Link to="/profile">PROFILE</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
