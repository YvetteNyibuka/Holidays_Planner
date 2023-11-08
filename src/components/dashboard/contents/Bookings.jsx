import React from "react";
import "../../../styles/Bookings.css";
import { usestatecontext } from "../../../context/ContextProvider";

const Bookings = () => {
  const { Bookings, LoadingBookings } = usestatecontext();
  // console.log("Bookingsssssssssssss", Bookings);
  if (LoadingBookings) {
    return <div>Loading...</div>;
  }

  // const formatDateTime = (dateString) => {
  //   const options = {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //   };
  //   const formattedDate = new Date(dateString).toLocaleDateString(
  //     "en-US",
  //     options
  //   );
  //   return formattedDate;
  // };

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
              <th>DATE</th>
              <th>Tour ID</th>
              <th>USER NAME</th>
              <th>Is Paid</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Bookings.map((book, index) => (
              <tr key={index}>
                <td>{book.date}</td>
                <td>{book.tourID}</td>
                <td>{book.fullname}</td>
                <td>{book.isPaid ? book.isPaid : "No"}</td>
                <td>{book.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
