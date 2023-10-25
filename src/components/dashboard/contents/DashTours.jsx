import React, { useState } from 'react';
import '../../../styles/DashTours.css';
import { usestatecontext } from '../../../context/ContextProvider';
import NewTours from './NewTours.jsx';

const DashTours = () => {
  const { DashTours, ToursLoading } = usestatecontext();
  const [isCreateTourOpen, setCreateTour] = useState(false);

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
          <h1 className="tourTitle">Available Tours</h1>
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
                  style={{ width: "10rem", height: "10rem" }}
                />
              </td>
              <td>{tour.Title}</td>
              <td>{tour.Description}</td>
              <td>{tour.Duration}</td>
              <td>{tour.GroupSize}</td>
              <td>{tour.Price}</td>
              <td>
                <div className="action">
                  <button className="editt">EDIT</button>
                  <button className="deletee">DELETE</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isCreateTourOpen && <NewTours onClose={handleCloseModal} />}
    </div>
  );
};

export default DashTours;
