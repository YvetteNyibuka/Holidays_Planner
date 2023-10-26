import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import Logo2 from '../../public/images/whitelogo.png';
import footerlogo from '../../public/images/footerlogo1.svg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Navigation = ({ onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`modal-container ${isDropdownOpen ? 'open' : ''}`}>
      <div className="modalOverlay">
        <div className="navContainer">
          <div className="left">
            <div className="navLogo">
              <img src={Logo2} alt="" />
            </div>
            <div className='navbar'>
              <Link className='link' to={'/'} onClick={handleClose}>Home</Link>

              <div className='dropdown'>
                <div className='link' onClick={handleDropdownClick}>
                  Tour {isDropdownOpen ? '▲' : '▼'}
                </div>
                {isDropdownOpen && (
                  <div className='dropdown-content'>
                    <Link to={'/tour'} onClick={handleClose}>Tour</Link>
                    <Link to={'/tour-details'} onClick={handleClose}>Tour Details</Link>
                  </div>
                )}
              </div>

              <Link className='link' to={'/login'} onClick={handleClose}>Login</Link>
              <Link className='link' to={'/signup'} onClick={handleClose}>Sign Up</Link>
              <Link className='link' to={'/contact'} onClick={handleClose}>Contact Us</Link>
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
