import React, { useState } from "react";
import "../styles/Signup.css";
import signup from "../../public/images/signup.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const Navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
        data
      );
      alert("Registered successfully");
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="loginContt">
      <div className="loginFormm">
        <form id="loginFormm" action="" onSubmit={handleFormSubmit}>
          <h1 style={{ color: "#C29D59" }}>Sign Up</h1>
          <p>Already have an account?</p>
          <div className="namess" id="infosecc">
            <label id="inputlabell" htmlFor="email">
              Full names
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Names"
              id="loginInputt"
              value={data.name}
              onChange={handleData}
            />
          </div>
          <div className="emaill" id="infosecc">
            <label id="inputlabell" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              id="loginInputt"
              value={data.email}
              onChange={handleData}
            />
          </div>
          <div className="password" id="infosecc">
            <label id="inputlabell" htmlFor="password">
              Password
            </label>{" "}
            <input
              type="password"
              name="password"
              placeholder="Enter 6 characters or more"
              id="loginInputt"
              value={data.password}
              onChange={handleData}
            />
          </div>
          <div className="password" id="infosecc">
            <label id="inputlabell" htmlFor="password">
              Confirm Password
            </label>{" "}
            <input
              type="password"
              placeholder="Enter 6 characters or more"
              id="loginInputt"
            />
          </div>

          <button className="loginBtnn">SignUp</button>
        </form>
        <div className="secAlternative">
          <button className="googleBtnn">
            <FcGoogle style={{ paddingRight: "1rem", fontSize: "1.5rem" }} />
            Google
          </button>
          <button type="submit" className="facebookBtnn">
            <FaFacebookF
              style={{
                paddingRight: "1rem",
                fontSize: "1.5rem",
                color: "blue",
              }}
            />
            Facebook
          </button>
        </div>
      </div>
      <div className="loginPicture">
        <img src={signup} alt="" style={{ width: "90%", height: "40rem" }} />
      </div>
    </div>
  );
};

export default Signup;
