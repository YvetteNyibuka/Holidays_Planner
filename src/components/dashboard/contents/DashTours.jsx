import React, { useState } from "react";
import "../../../styles/DashTours.css";
import { usestatecontext } from "../../../context/ContextProvider";
import NewTours from "./NewTours.jsx";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import Notiflix from "notiflix";

const DashTours = () => {
  const { DashTours, ToursLoading } = usestatecontext();
  const [isCreateTourOpen, setCreateTour] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [tourToDelete, setTourToDelete] = useState(null);

  const handleConfirmDelete = async (id) => {
    let user = JSON.parse(localStorage.getItem("info"));
    let token = user.access_token;
    // let userData = user?.user;
    try {
      Notiflix.Confirm.show(
        "Confirm",
        "Are you sure you want to delete this tour?",
        "Yes",
        "No",
        async () => {
          const res = await axios.delete(
            `https://holiday-planner-4lnj.onrender.com/api/v1/tour/delete/${id}`,
            {
              headers: {
                Authorization: "Bearer" + token,
              },
            }
          );
          window.location.reload();
        },
        () => {
          alert("If you say so...");
        },
        {}
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = (tours) => {
    setTourToDelete(tours);
    handleConfirmDelete();
    // setShowDeleteConfirm(true);
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };
  ///////////////////////////////////////////////
  const handleCreateTour = () => {
    setCreateTour(true);
  };
  const handleCloseModal = () => {
    setCreateTour(false);
  };

  if (ToursLoading) {
    return <div>Loading...</div>;
  }

  let i = 0;
  return (
    <div className="dashtourContt">
      <div className="dashtourheaderr">
        <div className="titleeeee">
          <h2 className="tourTitle">Available Tours</h2>
        </div>
        <div className="buttonnnnn">
          <button className="newTour" onClick={handleCreateTour}>
            NEW TOUR
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Country</th>
            <th>Title</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Group size</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {DashTours.map((tour, index) => (
            <tr key={index}>
              <td>{(i += 1)}</td>
              <td>
                <img
                  src={tour.backdropImage}
                  alt=""
                  style={{ width: "5rem", height: "3rem" }}
                />
              </td>
              <td>{tour.Title}</td>
              <td>{tour.Description}</td>
              <td>{tour.Duration}</td>
              <td>{tour.GroupSize}</td>
              <td>{tour.Price}</td>
              <td>
                <div className="action">
                  <button className="editt">
                    <FaEdit />
                  </button>
                  <button
                    className="deletee"
                    onClick={() => handleConfirmDelete(tour._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isCreateTourOpen && <NewTours onClose={handleCloseModal} />}
      {showDeleteConfirm && (
        <div className="popup">
          <p>Are you sure you want to delete {tourToDelete._id}?</p>
          <button onClick={handleConfirmDelete}>OK</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default DashTours;
