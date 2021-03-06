import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import loginImg from "../assets/tlogo.png";
import "./style.scss";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
  
      <div className="content">

        <h2 className='header'>Signup</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="image">
            <img src={loginImg} alt='dp' />
          </div>
          <div className="form">
            <div className='form-group'>
              <label htmlFor="firstName">First Name:</label>
              <input
                placeholder="First"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                placeholder="Last"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
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
            <div className="footer">
              <button type="submit">Submit</button>
              <h4>Need to login?<Link to="/login"> Click here</Link></h4>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}

export default Signup;
