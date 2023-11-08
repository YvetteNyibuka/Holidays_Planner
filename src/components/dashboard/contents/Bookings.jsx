import React, {useState} from "react";
import "../../../styles/Bookings.css";
import { usestatecontext } from "../../../context/ContextProvider";
import ReactPaginate from "react-paginate";

const Bookings = () => {
  const { Bookings, LoadingBookings } = usestatecontext();
    const [pageNumber, setPageNumber] = useState(0);

  const bookingsPerPage = 10;

  const pagesVisited = pageNumber * bookingsPerPage;
  let i = 0;
  const displayBookings = Bookings?.slice(
    pagesVisited,
    pagesVisited + bookingsPerPage
  ).map((book, index) => {
    return (
         <tr key={index}>
                <td>{book.date}</td>
                <td>{book.tourID}</td>
                <td>{book.fullname}</td>
                <td>{book.isPaid ? book.isPaid : "No"}</td>
                <td>{book.status}</td>
              </tr>
    )
    });
     
      const pageCount = Math.ceil(Bookings?.length / bookingsPerPage);
      const changePage = ({ selected }) => {
        setPageNumber(selected);
      };


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
              <th>DATE</th>
              <th>Tour ID</th>
              <th>USER NAME</th>
              <th>Is Paid</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{displayBookings}</tbody>
        </table>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Bookings;
