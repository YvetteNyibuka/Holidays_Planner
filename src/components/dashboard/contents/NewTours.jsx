import React, { useState } from "react";
import "../../../styles/NewTour.css";
import axios from "axios";
// import { usestatecontext } from "../../../context/ContextProvider";
import { useForm } from "react-hook-form";

const NewTours = ({ onClose }) => {
  const onsubmit = async (tour) => {
    const form = new FormData();

    form.append("destination", tour.destination);
    form.append("Title", tour.title);
    form.append("Description", tour.description);
    form.append("Duration", tour.duration);
    form.append("GroupSize", tour.groupsize);
    form.append("Price", tour.price);
    form.append("Discount", tour.discount);
    form.append("TourType", tour.tourtype);
    form.append("Departure", tour.departure);
    form.append("fromMonth", tour.from);
    form.append("toMonth", tour.to);
    form.append("Seats", tour.seats);
    form.append("departureTime", tour.departuretime);
    form.append("ReturnTime", tour.returntime);
    form.append("backdropImage", tour.image[0]);
    form.append("Gallery", tour.gallely[0]);

    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data) {
        console.log("Tour created", res.data);
      }
    } catch (error) {
      // console.error("Error fetching data:", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="newTourOverlay">
      <div className="newtourModal">
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        <div className="newtourcont">
          <div className="tourheader">
            <div className="tourtitle">
              <h1>New Tour</h1> <br />
            </div>
            <div className="newtourForm">
              <form
                action=""
                id="newtourform"
                onSubmit={handleSubmit(onsubmit)}
              >
                <div className="tourField">
                  <label htmlFor="">Destination</label>
                  <input
                    type="text"
                    id="inputtourdata"
                    name="destination"
                    {...register("destination", { required: true })}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">Tour Image</label>
                  <input
                    type="file"
                    id="inputtourdata"
                    name="image"
                    accept="image/*"
                    {...register("image", { required: true })}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    id="inputtourdata"
                    name="title"
                    {...register("title", { required: true })}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">Description</label>
                  <input
                    type="text"
                    id="inputtourdata"
                    name="description"
                    {...register("description", { required: true })}
                  />
                </div>
                <div className="combine1">
                  <div className="tourField">
                    <label htmlFor="">Duration</label>
                    <input
                      type="text"
                      id="inputtourd"
                      name="duration"
                      {...register("duration", { required: true })}
                    />
                  </div>
                  <div className="tourField">
                    <label htmlFor="">Group Size</label>
                    <input
                      type="text"
                      id="inputtourd"
                      name="groupsize"
                      {...register("groupsize", { required: true })}
                    />
                  </div>

                  <div className="tourField">
                    <label htmlFor="">Price</label>
                    <input
                      type="text"
                      id="inputtourd"
                      name="price"
                      {...register("price", { required: true })}
                    />
                  </div>
                  <div className="tourField">
                    <label htmlFor="">Discount</label>
                    <input
                      type="text"
                      id="inputtourd"
                      name="discount"
                      {...register("discount", { required: true })}
                    />
                  </div>
                </div>
                <div className="tourField">
                  <label htmlFor="">Tour Type</label>
                  <select
                    id="inputtourdata"
                    name="tourtype"
                    {...register("tourtype", { required: true })}
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
                    name="departure"
                    {...register("departure", { required: true })}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">Seats</label>
                  <input
                    type="text"
                    id="inputtourdata"
                    name="seats"
                    {...register("seats", { required: true })}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">From</label>
                  <select
                    name="from"
                    id="months"
                    {...register("from", { required: true })}
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
                    name="to"
                    {...register("to", { required: true })}
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
                    name="departuretime"
                    {...register("departuretime", { required: true })}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">Return time</label>
                  <input
                    type="text"
                    id="inputtourdata"
                    name="returntime"
                    {...register("returntime", { required: true })}
                  />
                </div>
                <div className="tourField">
                  <label htmlFor="">Gallery</label>
                  <input
                    type="file"
                    id="inputtourdata"
                    name="gallely"
                    accept="image/*"
                    {...register("gallely", { required: true })}
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

export default NewTours;
