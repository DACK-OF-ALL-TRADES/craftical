/* eslint-disable react-hooks/rules-of-hooks */
//import React from "react";
import Auth from "../utils/auth";
import { Link, Redirect } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
//import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";

import loginImg from "../assets/tlogo.png";
import "./style.scss";


const Enter = () => {
  function showNavigation() {
    const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    
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
        <div className="container">
         
          <div className="content">
    
            <h2 className='header'>Login</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="image">
                <img src={loginImg} alt='dp' />
              </div>
              <div className="form">
                <div className='form-group'>
                  <label htmlFor="email">Email:</label>
                  <input
                    placeholder="email@test.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    placeholder="******"
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {error ? (
                <div>
                  <p className="error-text">The provided credentials are incorrect</p>
                </div>
              ) : null}
    
              <div className="footer">
                <button type="submit">Submit</button>
                <h4>New to Craftical?<Link to="/signup"> Signup here</Link></h4>
              </div>
             
            </form>
          </div>
    
        </div>
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
      
    </div>
  );
};

export default Enter;