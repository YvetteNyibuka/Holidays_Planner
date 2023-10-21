import React from "react";
import "../styles/Sticky.css";
import { FaCalendarAlt, FaFlag, FaMapMarkerAlt } from 'react-icons/fa';

const StickyDestdiv = () => {
  return (
    <div className="stickyCont">
      <div className="formm">
        <div className="time">
          <FaMapMarkerAlt className="icon" />
          <input type="text" placeholder="Where to?" id="time"/>
        </div>

        <div className="location">
          <FaCalendarAlt className="icon" />
          <select name="months" id="months">
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

        <div className="travelType">
          <FaFlag className="icon" />
          <select name="travelType" id="travelType">
            <option value="Travel Type">Travel Type</option>
            <option value="Cultural">Cultural</option>
            <option value="Adventure">Adventure</option>
            <option value="Historical">Historical</option>
            <option value="Discovery">Discovery</option>
            <option value="Seaside">Seaside</option>
          </select>
        </div>

        <div className="btn">
          <button className="findBtn">FIND NOW</button>
        </div>
      </div>
    </div>
  );
};

export default StickyDestdiv;
