import React from "react";
import logo4 from "../../public/images/whitelogo.png";
import payment from "../../public/images/payment-campanies.png";
import "../styles/Fouter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div id="left-elem" className="logo">
          <img src={logo4} alt="" />
        </div>
        <div id="left-elem" className="content">
          <p>
            Holiday Planners sit amet consectetur adipisicing elit. Perferendis
            sapiente tenetur officiis explicabo fugit, sit mollitia eum atque
            excepturi quaerat autem.
          </p>
        </div>
        <div id="left-elem" className="email">
          <input
            type="email"
            id="email"
            style={{ width: "90%" }}
            placeholder="Enter your email"
          />
          <button className="sub">Submit</button>
        </div>
        <div id="left-elem" className="partnership">
          <img src={payment} alt="" style={{ width: "50%", height: "50%" }} />
        </div>
      </div>
      <div className="footer-center">
        <h1>Navigation <hr /></h1> 
        <div className="navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Destination</a>
          <a href="#services">Tour</a>
          <a href="#services">Blogs</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-item">
          <h2>Need Help ?</h2>
          <hr />
        </div>
        <div className="contact-item">
          <div className="contact-info">
            <p>Call Us</p>
            <p>+123 456 7890</p>
          </div>
          <div className="contact-info">
            <p>Email for Us</p>
            <p>holidayplanners@gmail.com</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-info">
            <p>Location</p>
            <p>Main Street, Victoria 8007.</p>
          </div>
          <div className="contact-info">
            <p>Follow us</p>
            <p>Social Media Links Here</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
