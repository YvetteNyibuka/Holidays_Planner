import { React, useState } from "react";
import "../styles/TourList.css";
import listback from "../../public/images/destination-img2.jpg";
import Offer1 from "../../public/images/offer-img1.jpg";
import Offer2 from "../../public/images/offer-img2.jpg";
import Offer3 from "../../public/images/offer-img3.jpg";
import Offer4 from "../../public/images/offer-img4.jpg";
import Offer5 from "../../public/images/offer-img4.jpg";

const tourData = [
  {
    image: Offer1,
    country: "ITALY",
    duration: "20days",
    groupSize: "50+ people",
    price: "$500",
  },
  {
    image: Offer2,
    country: "FRANCE",
    duration: "15days",
    groupSize: "40+ people",
    price: "$600",
  },
  {
    image: Offer3,
    country: "SPAIN",
    duration: "18days",
    groupSize: "45+ people",
    price: "$550",
  },
  {
    image: Offer4,
    country: "GREECE",
    duration: "22days",
    groupSize: "55+ people",
    price: "$650",
  },
  {
    image: Offer4,
    country: "RWANDA",
    duration: "22days",
    groupSize: "70+ people",
    price: "$650",
  },
  {
    image: Offer5,
    country: "POLOGNE",
    duration: "22days",
    groupSize: "5 people",
    price: "$650",
  },
];
const TourList = () => {
  return (
    <>
      <div
        className="tourListCont"
        style={{ backgroundImage: `url(${listback})` }}
      >
        <h1
          style={{
            position: "absolute",
            margin: "15% 32%",
            fontSize: "5rem",
            color: "white",
          }}
        >
          Tour Lists
        </h1>
      </div>

      <div className="tourStaffs">
        <div className="tourslistBody">
          {tourData.map((tour, index) => (
            <div className="tourCardd" key={index}>
              <div className="tourPic">
                <img
                  src={tour.image}
                  alt=""
                  style={{ width: "100%", height: "12rem", objectFit: "cover" }}
                />
              </div>
              <button className="country">{tour.country}</button>
              <div className="tourDetail">
                <h6>
                  Holidays planner is a world leading Online Tour booking
                  platform
                </h6>
                <p>
                  Far far away, behind the mountains, far from the countries
                  Vokalia and Consonantia,..
                </p>
              </div>
              <div className="tourInstructions">
                <div className="duration">
                  <h4>Duration</h4>
                  <p>{tour.duration}</p>
                </div>
                <div className="size">
                  <h4>Group size</h4>
                  <p>{tour.groupSize}</p>
                </div>
              </div>
              <div className="book">
                <p>{tour.price}</p>
                <button className="bookBtn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
        <div className="staffRight">
          <div className="findTour">
            <form action="" id="tourForm">
              <h1>FIND YOUR TOUR</h1>
              <input type="text" placeholder="Search Tour" />
              <input type="text" placeholder="Where To?" />
              <div className="monthh">
                <select name="months" id="monthss">
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>

              <div className="durationChoices">
                <h2>Duration</h2>
                <select name="" id="durationn">
                  <option value="">1 Day Tour</option>
                  <option value="">2-4Days Tour</option>
                  <option value="">5-7Days Tour</option>
                  <option value="">7+Days Tour</option>
                </select>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="cultural"
                  name="caltural"
                  value="caltural"
                />
                <label id="label" for="checkbox">
                  {" "}
                  Cultural
                </label>
                <br />
                <input
                  type="checkbox"
                  id="adventure"
                  name="adventure"
                  value="adventure"
                />
                <label id="label" for="adventure">
                  {" "}
                  Adventure
                </label>
                <br />
                <input
                  type="checkbox"
                  id="historical"
                  name="historical"
                  value="historical"
                />
                <label id="label" for="historical">
                  {" "}
                  Historical
                </label>
                <br />
                <input
                  type="checkbox"
                  id="seaside"
                  name="seaside"
                  value="seaside"
                />
                <label id="label" for="seaside">
                  {" "}
                  Seaside
                </label>
                <br />
                <input
                  type="checkbox"
                  id="discover"
                  name="discover"
                  value="discover"
                />
                <label id="label" for="discover">
                  {" "}
                  Discover
                </label>
                <br /> <br />
                <button className="findeNowBtn">FIND NOW</button>
              </div>
            </form>
          </div>

          <div className="tourReason">
            <h2 style={{borderLeft: '3px solid #C29D59', padding: '.5rem'}}>WHY BOOK WITH US?</h2>
            <p style={{fontSize:'1.2rem'}}>Best Price Guarantee <br />
               Customer care available 24/7 <br />
               Free Travel Insureance <br />
               Hand-picked Tours & Activities</p>
          </div>
          <div className="question" style={{backgroundColor:'#C29D59', padding:'2rem'}}>
            <h2 style={{borderLeft: '3px solid black ', padding: '.5rem'}}>GET A QUESTION?</h2>
            <p style={{fontSize:'1.2rem'}}>Do not hesitage to give us a call. <br />
             We are an expert team and <br />
              we are happy to talk to you.</p>
              <p>holidayplanners@gmail.com</p>
              <p>+123 456 7890</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourList;
