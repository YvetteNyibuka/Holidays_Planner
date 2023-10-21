import React, { useState } from "react";
import "../styles/TourDetail.css";
import destinatio from "../../public/images/destination-img2.jpg";
import { BsCheckLg } from "react-icons/bs";
import ToorUse from "./ToorUse";
const TourDetail = () => {
  const [isCheck, setIsCheck] = useState(false);

  const handleIsCheck = () => {
    setIsCheck((check) => !check);
  };
  return (
    <>
      <div className="details">
        <p className="italy">Italy</p>
      </div>
      <div className="allDetails">
        <div className="leftDetails">
          <div className="ttable">
            <div className="div1" style={{backgroundColor: '#C29D59'}}>Information</div>
            <div className="div1">Tour Plan</div>
            <div className="div1">Location</div>
            <div className="div1">Garelly</div>
            <div className="div1">Review</div>
          </div>
          <div className="ddetail">
            <div className="topDetails">
              <div className="tl">
                <p className="pp">
                  A wonderful serenity has taken possession of my entire soul
                </p>
              </div>
              {/* <div className="tr">
                <div className="circle">
                  <span className="digit1 ">$1200</span>
                  <div className="diameter"></div>
                  <span className="digit">Per Person</span>
                </div>
              </div> */}
            </div>
            <div className="tttable">
              <div className="div2">2 days</div>
              <div className="div2">6 people</div>
              <div className="div2">18</div>
              <div className="div2">Greece</div>
              <div className="div2">Discovery</div>
            </div>

            <div className="mcont">
              <p className="pcont">
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now. When, while the lovely valley teems with vapour around me,
                and the meridian sun strikes the upper surface of the
                impenetrable foliage of my trees, and but a few stray gleams.{" "}
                <br /> <br />I should be incapable of drawing a single stroke at
                the present moment; and yet I feel that I never was a greater
                artist than now. When, while the lovely valley teems with vapour
                around me, and the meridian sun strikes the upper surface of the
                impenetrable foliage of my trees, and but a few stray gleams
                steal into the inner sanctuary, I throw myself down among the
                tall grass by the trickling stream; and, as I lie close to the
                earth, a thousand unknown plants are noticed by me: when I hear
                the buzz of the little world among the stalks, and grow familiar
                with the countless indescribable forms of the insects and flies,
                then I feel the presence of the Almighty, who formed us in his
                own image, and the breath
              </p>
            </div>
            <div className="imagedivv">
              <img
                src={destinatio}
                className=""
                style={{ width: "100%" }}
              ></img>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Destination</p>
              </div>
              <div className="flex2">
                <p>Greece</p>
              </div>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Departure</p>
              </div>
              <div className="flex2">
                <p>Lorem Ipsum</p>
              </div>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Departure Time</p>
              </div>
              <div className="flex2">
                <p>9:15 AM To 9:30 AM.</p>
              </div>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Dress Code</p>
              </div>
              <div className="flex2">
                <p>comfortable clothing and light jacket.</p>
              </div>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Price Included</p>
              </div>
              <div className="flex2">
                <p>
                  5 Star Accommodation Air fases <br />3 Nights Hotel
                  Accomodation All transportation in destination location
                </p>
              </div>
            </div>
            <div className="flexes">
              <div className="flex1">
                <p>Price Not Included</p>
              </div>
              <div className="flex2">
                <p>Guide Service Fee Any Private Expenses Room Service Fees</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightDetails">
          <div className="relativediv">
            <form className="formdiv">
              <div className="field1">
                <input
                  type="text"
                  className="formfield"
                  placeholder="First Name*"
                  name="firstName"
                ></input>
              </div>
              <div className="field1">
                <input
                  type="text"
                  className="formfield"
                  placeholder="Email*"
                  name="firstName"
                ></input>
              </div>
              <div className="field1">
                <input
                  type="text"
                  className="formfield"
                  placeholder="Confirm Email*"
                  name="email"
                ></input>
              </div>
              <div className="field1">
                <input
                  type="text"
                  className="formfield"
                  placeholder="Phone*"
                  name="firstName"
                ></input>
              </div>
              <div className="field1">
                <input
                  type="text"
                  className="formfield"
                  placeholder="mm/dd/yy*"
                  name="firstName"
                ></input>
              </div>
              <div className="field1">
                <input
                  type="text"
                  className="formfield"
                  placeholder="Number of Tickets*"
                  name="firstName"
                ></input>
              </div>
              <div className="field2">
                <input
                  type="text"
                  className="formfield1"
                  placeholder="message*"
                  name="firstName"
                ></input>
              </div>
              <div className="fields">
                <div className="checkbox1" onClick={handleIsCheck}>
                  {isCheck ? <BsCheckLg className="checl" /> : ""}
                </div>
                <p>Check Availability</p>
              </div>
            <button type="submit" className="buttoned">BOOO NOW</button>
            </form>
            <div className="call">
            <ToorUse/>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default TourDetail;
