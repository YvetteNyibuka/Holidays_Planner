import React, { useEffect, useState } from "react";
import Logo from "../../../public/images/logo.png";
import { ImSearch } from "react-icons/im";
import { BiMenuAltRight } from "react-icons/bi";

const NavBar2 = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarClass = isFixed ? "nav2 fixed" : "nav2";

  return (
    <div className={navBarClass} id="nav2">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="part3">
        <div className="reserve">
          <button className="reserveBtn">RESERVE</button>
        </div>
        <div className="search">
          <ImSearch style={{ fontSize: "2rem", color: 'black' }} />
        </div>
        <div className="menu">
          <BiMenuAltRight style={{ fontSize: "2rem", padding: '1rem' }} />
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
