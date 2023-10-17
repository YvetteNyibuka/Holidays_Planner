import React from "react";
import "../styles/Login.css";
import login from '../../public/images/login.jpg'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
const Login = () => {
  return (
    <div className="loginContt">
      <div className="loginFormm">
        <form id="loginFormm" action="">
          <h1 style={{color: '#C29D59'}}>Login</h1>
          <p>Doesn't have an account yet?</p>
          <div className="emaill" id="infosecc">
            <label id="inputlabell" htmlFor="email">Email Address</label>
            <input type="email" placeholder="you@example.com" id="loginInputt" />
          </div>
          <div className="password" id="infosecc">
            <label id="inputlabell" htmlFor="password">Password</label>{" "}
            <input type="password" placeholder="Enter 6 characters or more"  id="loginInputt"/>
          </div>
          
          <input type="checkbox" /> <span id="inputlabell" >Remember me</span> <br />
          <button className="loginBtnn">Login</button>
        </form>
        <div className="secAlternative">
          <button className="googleBtnn">
            <FcGoogle style={{paddingRight: '1rem', fontSize: '1.5rem'}}/>
            Google</button>
          <button className="facebookBtnn">
            <FaFacebookF style={{paddingRight: '1rem', fontSize: '1.5rem', color: 'blue'}}/>
            Facebook</button>
        </div>
      </div>
      <div className="loginPicture">
          <img src={login} alt="" style={{width: '80%', height: '30rem'}} />
      </div>
    </div>
  );
};

export default Login;
