import React from "react";
import "../../../styles/DashQuerry.css";
import { usestatecontext } from "../../../context/ContextProvider";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const DashQuerry = () => {
  const { Messages, messageLoading } = usestatecontext();
  const [pageNumber, setPageNumber] = useState(0);

  const queryPerPage = 10;

  const pagesVisited = pageNumber * queryPerPage;
  let i = 0;
  const displayQueries = Messages?.slice(
    pagesVisited,
    pagesVisited + queryPerPage
  ).map((query, index) => {
    return (
      <tr key={index}>
        <td>{(i += 1)}</td>
        <td>{query?.email}</td>
        <td>{query?.message}</td>
        <td>
          <div className="action">
            <button className="reply">REPLY</button>
          </div>
        </td>
      </tr>
    );
  });

  const pageCount = Math.ceil(Messages?.length / queryPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (messageLoading) {
    return <div>Loading...</div>;
  }
  // let i = 0;
  return (
    <div className="dashquerryCont">
      <div className="dashtourheader">
        <h1 id="tittle">Received Messages</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{displayQueries}</tbody>
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
  );
};

export default DashQuerry;
