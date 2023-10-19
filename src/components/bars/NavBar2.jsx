import React, { useEffect, useState } from "react";
import Logo from "../../../public/images/logo.png";
import { ImSearch } from "react-icons/im";
import { BiMenuAltRight } from "react-icons/bi";
import Navigation from '../Navigation';
import { useNavigate } from "react-router-dom";

const NavBar2 = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY !== 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate  = useNavigate();
  const handleNavigate = () => {
    navigate('/login');
  };
  

  const navBarClass = isFixed ? "nav2 fixed" : "nav2";

  return (
    <div className={navBarClass} id="nav2">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="part3">
        <div className="reserve">
          <button className="reserveBtn" onClick={handleNavigate}>LOGIN</button>
        </div>
        <div className="search">
          <ImSearch style={{ fontSize: "2rem", color: 'black' }} />
        </div>
        <div className="menu" onClick={toggleNav}>
          <BiMenuAltRight style={{ fontSize: "2rem", padding: '1rem' }} />
        </div>
      </div>
      {isNavVisible && <Navigation onClose={toggleNav} />}
    </div>
  );
};

export default NavBar2;
