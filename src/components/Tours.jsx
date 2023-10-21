import React, { useState } from "react";
import "../styles/Tours.css";
import Offer1 from '../../public/images/offer-img1.jpg';
import Offer2 from '../../public/images/offer-img2.jpg';
import Offer3 from '../../public/images/offer-img3.jpg';
import Offer4 from '../../public/images/offer-img4.jpg';
import Offer5 from '../../public/images/offer-img4.jpg';

const tourData = [
  { image: Offer1, country: "ITALY", duration: "20days", groupSize: "50+ people", price: "$500" },
  { image: Offer2, country: "FRANCE", duration: "15days", groupSize: "40+ people", price: "$600" },
  { image: Offer3, country: "SPAIN", duration: "18days", groupSize: "45+ people", price: "$550" },
  { image: Offer4, country: "GREECE", duration: "22days", groupSize: "55+ people", price: "$650" },
  { image: Offer4, country: "RWANDA", duration: "22days", groupSize: "70+ people", price: "$650" },
  { image: Offer5, country: "POLOGNE", duration: "22days", groupSize: "5 people", price: "$650" },
];

const Tours = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="toursCont">
      <div className="toursTitle">
        <div className="titleLeft">
          <p style={{ color: "#C29D59", fontSize:'1.2rem', borderLeft: "2px solid #C29D59", padding: ".5rem" }}>Amazing Tours</p>
          <h2 id="abouthead">
            Trending, <span style={{ fontWeight: "bolder" }}>Best Selling Tours</span>
            <br />
            And Fun Destinations
          </h2>
        </div>
        <div className="titleRight">
          <button className="Prev">Prev</button>
          <button className="Next">Next</button>
        </div>
      </div>
      <div className="toursBody">
        {tourData.slice(activeIndex, activeIndex + 3).map((tour, index) => (
          <div className="tourCard" key={index}>
            <div className="tourPic">
              <img src={tour.image} alt="" style={{ width: "21rem", height: "15rem", objectFit: "cover" }} />
            </div>
            <button className="country">{tour.country}</button>
            <div className="tourDetail">
              <h3>Holidays planner is a world leading Online Tour booking platform</h3> <br />
              <p>Far far away, behind the mountains, far from the countries Vokalia and Consonantia,..</p>
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
              <button id="bookbtn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="sliderCircles">
        {tourData.slice(0, tourData.length - 2).map((_, index) => (
          <div
            key={index}
            className={index === activeIndex ? "activeCircle" : "inactiveCircle"}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
