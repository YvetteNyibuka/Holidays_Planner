import React, { useState } from "react";
import axios from "axios"; // Don't forget to import axios if you are using it
import "../styles/Login.css";
import login from "../../public/images/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
        loginData
      );
      console.log(res.data);
      localStorage.setItem("isLogin", JSON.stringify(res.data.access_token)); 
      alert("login success");
     location.reload(navigate("/dashboard"));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="loginContt">
      <div className="loginFormm">
        <form id="loginFormm" action="" onSubmit={handleLogin}>
          <h1 style={{ color: "#C29D59" }}>Login</h1>
          <p>Doesn't have an account yet?</p>
          <div className="emaill" id="infosecc">
            <label id="inputlabell" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              id="loginInputt"
              name="email"
              onChange={handleChange}
              value={loginData.email}
            />
          </div>
          <div className="password" id="infosecc">
            <label id="inputlabell" htmlFor="password">
              Password
            </label>{" "}
            <input
              type="password"
              placeholder="Enter 6 characters or more"
              id="loginInputt"
              name="password"
              onChange={handleChange}
              value={loginData.password}
            />
          </div>
          <input type="checkbox" /> <span id="inputlabell">Remember me</span>{" "}
          <br />
          <button type="submit" className="loginBtnn">
            Login
          </button>
        </form>
        <div className="secAlternative">
          <button className="googleBtnn">
            <FcGoogle style={{ paddingRight: "1rem", fontSize: "1.5rem" }} />
            Google
          </button>
          <button className="facebookBtnn">
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
        <img src={login} alt="" style={{ width: "80%", height: "30rem" }} />
      </div>
    </div>
  );
};

export default Login;
