import React, { useState } from "react";
import "../../../styles/UpdateTour.css";

const UpdateTour = ({ onClose }) => {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("selectedTour1"))
  );
  // console.log("setLocal", localData._id);
  const [formData, setFormData] = useState({
    destination: localData.destination || "",
    backdropImage: null,
    Title: localData.Title || "",
    Description: localData.Description || "",
    Duration: localData.Duration || "",
    GroupSize: localData.groupsize || "",
    Price: localData.Price || "",
    Discount: localData.Discount || "",
    TourType: localData.tourtype || "Travel Type",
    Departure: localData.Departure || "",
    Seats: localData.Seats || "",
    fromMonth: localData.fromMonth || "January",
    toMonth: localData.toMonth || "January",
    departureTime: localData.departureTime,
    ReturnTime: localData.returnTime || "",
    Gallery: null,
  });

  const updateData = async () => {
    const form = new FormData();
    form.append("destination", formData.destination);
    form.append("backdropImage", formData.backdropImage);
    form.append("Title", formData.Title);
    form.append("Description", formData.Description);
    form.append("Duration", formData.Duration);
    form.append("GroupSize", formData.GroupSize);
    form.append("Price", formData.Price);
    form.append("Discount", formData.Discount);
    form.append("TourType", formData.TourType);
    form.append("Departure", formData.Departure);
    form.append("Seats", formData.Seats);
    form.append("fromMonth", formData.fromMonth);
    form.append("toMonth", formData.toMonth);
    form.append("departureTime", formData.departureTime);
    form.append("ReturnTime", formData.ReturnTime);
    form.append("Gallery", formData.Gallery);

    const res = await fetch(
      `https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${localData._id}`,
      {
        method: "PUT",
        body: form,
      }
    );

    // Handle the response as needed
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  return (
    <div className="updateTourOverlay">
      <div className="updatetourModal">
        <button className="closeeButton" onClick={onClose}>
          Cancel
        </button>
        <div className="updatetourcont">
          <div className="tourheaderr">
            <div className="tourrtitle">
              <h1>Edit Tour</h1> <br />
            </div>
            <div className="newtourForm">
              <form
                action=""
                id="newtourform"
                onSubmit={(e) => {
                  e.preventDefault();
                  updateData();
                }}
              >
                <div className="tourField">
                  <label htmlFor="">Destination</label>
                  <input
                    type="text"
                    id="inputtourdata"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">Tour Image</label>
                  <input
                    type="file"
                    id="inputtourdata"
                    name="backdropImage"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    id="inputtourdata"
                    name="Title"
                    value={formData.Title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="tourField1">
                  <label htmlFor="">Description</label>
                  <input
                    type="text"
                    id="inputtourdata"
                    name="Description"
                    value={formData.Description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="combine1">
                  <div className="tourField">
                    <label htmlFor="">Duration</label>
                    <input
                      type="text"
                      id="Duration"
                      name="Duration"
                      value={formData.Duration}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="tourField">
                    <label htmlFor="">Group Size</label>
                    <input
                      type="text"
                      id="inputtourd"
                      name="GroupSize"
                      value={formData.GroupSize}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="tourField">
                    <label htmlFor="">Price</label>
                    <input
                      type="text"
                      id="inputtourd"
                      name="Price"
                      value={formData.Price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="tourField">
                    <label htmlFor="">Discount</label>
                    <input
                      type="text"
                      id="inputtourd"
                      name="Discount"
                      value={formData.Discount}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="tourField">
                  <label htmlFor="">Tour Type</label>
                  <select
                    id="inputtourdata"
                    name="Departure"
                    value={formData.Departure}
                    onChange={handleInputChange}
                  >
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
                  <input
                    type="text"
                    id="inputtourdata"
                    name="Departure"
                    value={formData.Departure}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">Seats</label>
                  <input
                    type="text"
                    id="inputtourdata"
                    name="Seats"
                    value={formData.Seats}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">From</label>
                  <select
                    name="fromMonth"
                    id="months"
                    value={formData.fromMonth}
                    onChange={handleInputChange}
                  >
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
                  <select
                    id="months"
                    name="toMonth"
                    value={formData.toMonth}
                    onChange={handleInputChange}
                  >
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
                  <input
                    type="text"
                    id="inputtourdata"
                    name="departureTime"
                    value={formData.departureTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">Return time</label>
                  <input
                    type="text"
                    id="inputtourdata"
                    name="ReturnTime"
                    value={formData.ReturnTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">Gallery</label>
                  <input
                    type="file"
                    id="inputtourdata"
                    name="Gallery"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                <button type="submit" className="addButton">
                  CREATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTour;
