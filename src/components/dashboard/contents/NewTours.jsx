import React from "react";
import "../../../styles/NewTour.css";

const NewTours = ({ onClose }) => {
  return (
    <div className="newTourOverlay">
      <div className="newtourModal">
        <div className="newtourcont">
          <div className="tourheader">
            <div className="tourtitle">
              <h1>New Tour</h1> <br />
            </div>
            <div className="newtourForm">
              <form action="" id="newtourform">
                <div className="tourField">
                  <label htmlFor="">Destination</label>
                  <input type="text" id="inputtourdata" />
                </div>
                <div className="tourField">
                  <label htmlFor="">Tour Image</label>
                  <input type="file" id="inputtourdata" />
                </div>
                <div className="tourField">
                  <label htmlFor="">Title</label>
                  <input type="text" id="inputtourdata" />
                </div>
                <div className="tourField">
                  <label htmlFor="">Description</label>
                  <input type="text" id="inputtourdata" />
                </div>
                <div className="combine1">
                  <div className="tourField">
                    <label htmlFor="">Duration</label>
                    <input type="text" id="inputtourd" />
                  </div>
                  <div className="tourField">
                    <label htmlFor="">Group Size</label>
                    <input type="text" id="inputtourd" />
                  </div>
                  {/* </div> */}
                  {/* <div className="combine2"> */}
                  <div className="tourField">
                    <label htmlFor="">Price</label>
                    <input type="text" id="inputtourd" />
                  </div>
                  <div className="tourField">
                    <label htmlFor="">Discount</label>
                    <input type="text" id="inputtourd" />
                  </div>
                </div>
                <div className="tourField">
                  <label htmlFor="">Tourt Type</label>
                  <select name="travelType" id="inputtourdata">
                    <option value="Travel Type">Travel Type</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Historical">Historical</option>
                    <option value="Discovery">Discovery</option>
                    <option value="Seaside">Seaside</option>
                  </select>
                </div>
                <div className="tourField">
                  <label htmlFor="">Departure</label>
                  <input type="text" id="inputtourdata" />
                </div>
                <div className="tourField">
                  <label htmlFor="">Seats</label>
                  <input type="text" id="inputtourdata" />
                </div>
                <div className="tourField">
                  <label htmlFor="">From</label>
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
                <div className="tourField">
                  <label htmlFor="">To</label>
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
                <div className="tourField">
                  <label htmlFor="">Departure Time</label>
                  <input type="text" id="inputtourdata" />
                </div>
                <div className="tourField">
                  <label htmlFor="">Return time</label>
                  <input type="text" id="inputtourdata" />
                </div>
                <div className="tourField">
                  <label htmlFor="">Gallery</label>
                  <input type="text" id="inputtourdata" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="btnns">
          <button className="addButton">CREATE</button>
          <button className="closeButton" onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTours;
