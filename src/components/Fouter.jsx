import React from 'react'
import '../styles/Fouter.css';
import logowhite from '../../public/images/whitelogo.png';

import paymment from '../../public/images/payment-campanies.png';
import {LiaFacebookF} from'react-icons/lia';
import {FaInstagram} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai'
function Footer() {
  return (
    <div className="tooter">
      <div className="allcontain_foot">
        <div className="container1">
          <div>
            <img src= {logowhite} className="footerpic" />
          </div>
          <div className="wod1hold">
            <p>Holiday Planners sit amet consectetur adipisicing elit.</p>
            <p>
              Perferendis sapiente tenetur officiis explicabo fugit, sit
              mollitia
            </p>
            <p>eum atque excepturi quaerat autem.</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your Email"
              className="place"
            />
            <input type="submit" className="sbbutto" value="submit" />
          </div>
          <div>
            <img src={paymment} className="pic" />
          </div>
        </div>
        <div className="container2">
          <div>
            <div className="hlinecontainer">
              <h4 className="textt">Navigation</h4>
            </div>
            <div className="hline"></div>
          </div>
    <div className="textt2">
          <ul >
            <li>Home</li>
            <li>About</li>
            <li>Destination</li>
            <li>Tour</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul></div>
        </div>
        <div className="container3">
          <div className="linetext">
            <div className="hline2">
              <div>
                <h4>Need Help ?</h4>
              </div>
              <div className="line_t"></div>
            </div>
            <div className="contohold">
              <div className="conto1">
                <p>Call Us</p>
                <p>+123 456 7890</p>
              </div>
              <div className="conto2">
                <p>Email for Us</p>
                <p>holidayplanners@gmail.com</p>
              </div>
              <div className="conto3">
                <p>Location</p>
                <p>Main Street, Victoria 8007.</p>
              </div>
              <div className="conto4">
                <p>Flow Us</p>
                <p className="footsocial">
                  <LiaFacebookF /> &nbsp;
                  <FaInstagram />
                  &nbsp;
                  <AiOutlineTwitter />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <hr className="hol" />
      </div><br></br>
             <div className='endfoot'>
      <div><h6>Copyright © 2021 Geek Code Lab. All Rights Reserved.</h6></div>
      <div><h6>Privacy Policy |Terms of Use |Cookie Policy</h6></div></div>
    </div>
  );
}
export default Footer