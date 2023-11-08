import React, { useContext, useState } from "react";
import axios from "axios"; 
import "../styles/Login.css";
import login from "../../public/images/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usestatecontext } from "../context/ContextProvider";

const Login = () => {
  const {loginMutation} = usestatecontext()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  // const {isPending: loginLoading} = loginMutation;

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(loginData);
    // try {
    //   const res = await axios.post(
    //     "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
    //     loginData
    //   );
    //   console.log(res.data);
    //   localStorage.setItem("isLogin", JSON.stringify(res.data.access_token)); 
    //   alert("login success");
    //  location.reload(navigate("/dashboard"));
    // } catch (error) {
    //   console.log(error);
    // }
    loginMutation.mutate(loginData);
  };
  //  console.log(loginMutation);
  return (
    <div className="loginContt">
      <div className="loginFormmm">
        <form id="loginFormmm" action="" onSubmit={handleLogin}>
          <h1 style={{ color: "#C29D59" }}>Login</h1>
          <p>Doesn't have an account yet?</p>
          <div className="emaill" id="infosecc">
            <label id="inputlabell" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              id="loginInputtt"
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
              id="loginInputtt"
              name="password"
              onChange={handleChange}
              value={loginData.password}
            />
          </div>
          <input type="checkbox" /> <span id="inputlabell">Remember me</span>{" "}
          <br />
          <button type="submit" className="loginBtnn">
            {loginMutation.isPending? "Loading...": "Login"}
          </button>
        </form>
        
        <div className="secAlternativee">
          <button className="googleBtnnn">
            <FcGoogle id="logicons"/>
            Google
          </button>
          <button className="facebookBtnnn">
            <FaFacebookF
              style={{
                color: "blue",
              }}
              id="logicons"/>
            Facebook
          </button>
        </div>
      </div>
      <div className="loginPicturee">
        <img src={login} alt="" id="loginperson" />
      </div>
    </div>
  );
};

export default Login;
