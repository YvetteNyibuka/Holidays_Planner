import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Header1 = () => {
  return (
    <div className="header1">
      <div className="social_medias">
        <div  className="part1">
          <div className="email" id="social">
            <MdEmail className="iconSocial" />
            <p>izanyibukayvette@gmail.com</p>
          </div>
          <div className="phone" id="social">
            <BsFillTelephoneFill className="iconSocial" />
            <p>(+250)-787615313</p>
          </div>
        </div>
        <div  className="part2">
        <div className="facebook" id="social">
          <FaFacebookF className="iconSocial" />
        </div>
        <div className="instagram" id="social">
          <FaInstagram className="iconSocial" />
        </div>
        <div className="twitter" id="social">
          <FaTwitter className="iconSocial" />
        </div>
        </div>
      </div>
    
    </div>
  );
};

export default Header1;
