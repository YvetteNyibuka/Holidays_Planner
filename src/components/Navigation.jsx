import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import Logo2 from '../../public/images/whitelogo.png';
import footerlogo from '../../public/images/footerlogo1.svg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Navigation = ({ onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose(); // Call the onClose function passed from parent component
    }
  };
  


  return (
    <div className="modal-container">
    <div className="modalOverlay">
      <div className="navContainer">
        <div className="left">
          <div className="navLogo">
            <img src={Logo2} alt="" />
          </div>
          <div className='navbar'>
  <Link className='link' to={'/'}>Home</Link>
  <Link className='link' to={'/about'}>About</Link>
  <div className='dropdown'>
    <span className='link' id='tourDropdown'>Tour</span>
    <div className='dropdown-content'>
      <Link to={'/tour'}>Tour</Link>
      <Link to={'/tour-details'}>Tour Details</Link>
    </div>
  </div>
  <Link className='link' to={'/blog'}>Blogs</Link>
  <Link className='link' to={'/login'}>Login</Link>
  <Link className='link' to={'/signup'}>Sign Up</Link>
  <Link className='link' to={'/contact'}>Contact Us</Link>
</div>

        </div>
        <div className="right">
        <div className="closeBtn" onClick={handleClose}>
            <AiOutlineCloseCircle style={{ fontSize: '4rem', marginLeft: '60%', marginTop: '2rem', color: 'white' }} />
          </div>
          <div className="small_Logo">
            <span>
              <div className="socialcycles">
                <div className="socialcycle"> <FaFacebookF className="iconSocial" style={{color: 'black'}} /></div>
                <div className="socialcycle"><FaInstagram className="iconSocial" style={{color: 'black'}}/></div>
                <div className="socialcycle">  <FaTwitter className="iconSocial" style={{color: 'black'}}/></div>
              </div>
            </span>
            <div className="logo3">
              <img src={footerlogo} alt="" style={{ width: '50%', height: '50%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
    
};

export default Navigation;
