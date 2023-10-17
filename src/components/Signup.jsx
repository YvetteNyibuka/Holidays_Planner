import React from "react";
import "../styles/Signup.css";
import signup from '../../public/images/signup.jpg'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="loginContt">
      <div className="loginFormm">
        <form id="loginFormm" action="">
          <h1 style={{color: '#C29D59'}}>Sign Up</h1>
          <p>Already have an account?</p>
          <div className="namess" id="infosecc">
            <label id="inputlabell" htmlFor="email">Email Address</label>
            <input type="text" placeholder="Your Names" id="loginInputt" />
          </div>
          <div className="emaill" id="infosecc">
            <label id="inputlabell" htmlFor="email">Email Address</label>
            <input type="email" placeholder="you@example.com" id="loginInputt" />
          </div>
          <div className="password" id="infosecc">
            <label id="inputlabell" htmlFor="password">Password</label>{" "}
            <input type="password" placeholder="Enter 6 characters or more"  id="loginInputt"/>
          </div>
          <div className="password" id="infosecc">
            <label id="inputlabell" htmlFor="password">Confirm Password</label>{" "}
            <input type="password" placeholder="Enter 6 characters or more"  id="loginInputt"/>
          </div>
          
          <button className="loginBtnn">SignUp</button>
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
          <img src={signup} alt="" style={{width: '90%', height: '40rem'}} />
      </div>
    </div>
  );
};

export default Signup;
