import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <>
    <div classNameName="login-wrapper">
    </div>
    <div classNameName="container">
    <div classNameName="screen">
      <div className="screen__content">
        <form className="login">
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
            <input type="text" className="login__input" placeholder="User name / Email" onChange={e => setUserName(e.target.value)}/>
          </div>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input type="password" className="login__input" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          </div>
          <button className="button login__submit">
            <span className="button__text">Log In Now</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>				
        </form>
      </div>
      <div className="screen__background">
        <span className="screen__background__shape screen__background__shape4"></span>
        <span className="screen__background__shape screen__background__shape3"></span>		
        <span className="screen__background__shape screen__background__shape2"></span>
        <span className="screen__background__shape screen__background__shape1"></span>
      </div>		
    </div>
  </div>
  </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};