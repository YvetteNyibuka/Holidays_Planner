import React from "react";
import "../../../styles/Bookings.css";
import { usestatecontext } from "../../../context/ContextProvider";

const Bookings = () => {
  const { Bookings, LoadingBookings } = usestatecontext();
  if (LoadingBookings) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bookingConttt">
      <div className="bookingHeader">
        <h1>Available bookings</h1>
        <button className="dashBook">BOOK</button>
      </div>
      <div className="bookTable">
        <table id="tableeeeeee">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tour ID</th>
              <th>User ID</th>
              <th>Is Paid</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {Bookings.map((book, index) => (
              <tr>
                <td>{book._id}</td>
                <td>{book.tourID}</td>
                <td>{book.userID}</td>
                <td>{book.isPaid}</td>
                <td>{book.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
