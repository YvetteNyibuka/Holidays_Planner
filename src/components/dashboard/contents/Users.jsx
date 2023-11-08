import React, { useState } from "react";
import "../../../styles/Users.css";
import Newuser from "./NewUserForm";
import Edituser from "./Edituser";
import { usestatecontext } from "../../../context/ContextProvider";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Notiflix from "notiflix";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";

const Users = () => {
  let url = "https://holiday-planner-4lnj.onrender.com/api/v1/";
  let user = JSON.parse(localStorage.getItem("info"));
  let token = user.access_token;

  const { fetchUsersData = [] } = usestatecontext();
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [emailToEdit, setEmailToEdit] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;

  const pagesVisited = pageNumber * usersPerPage;
  let i = 0;
  const displayUsers = fetchUsersData
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      return (
        <tr key={index}>
          <td>{(i += 1)}</td>
          <td>{user.role}</td>
          <td>{user?.fullName ? user?.fullName : "Not identified"}</td>
          <td>
            <div className="actionn">
              <button
                className="edit-button"
                onClick={() => handleEdit2(user.email)}
              >
                <FaEdit />
              </button>

              <button
                className="delete-button"
                onClick={() => handleDeleteClick(user._id)}
              >
                <FaTrash />
              </button>
            </div>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(fetchUsersData?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleEditClick = () => {
    setEditModalOpen((prevIsEditModal) => !prevIsEditModal);
  };

  const handleEdit2 = (email) => {
    handleEditClick();
    localStorage.setItem("edit", JSON.stringify(email));
    setEmailToEdit(email);
  };

  const handleCreateClick = () => {
    setCreateModalOpen((prevIsCreateModal) => !prevIsCreateModal);
  };

  const handleDeleteClick = async (id) => {
    console.log(token);
    try {
      Notiflix.Confirm.show(
        "Confirm",
        "Confirm delete User?",
        "Yes",
        "No",
        async () => {
          const res = await axios.delete(url + `auth/users/delete/${id}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          window.location.reload();
          const data = await res.data;
          toast.success(data.message);
        },
        () => {
          alert("If you say so...");
        },
        () => {
          alert("If you say so...");
        },
        {}
      );
    } catch (error) {
      toast.error(error);
    }
  };

  const handleGetSingleUser = async (id) => {
    // console.log(id);
    try {
      const res = await fetch(
        url + `auth/users/getOne?fieldName=email&value=${id}`,
        {
          method: "GET",
        }
      );

      if (res.ok) {
        const data = await res.json();
        // console.log(data);
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      toast.error("Error fetching data:", error);
    }
  };

  return (
    <div className="dashusercontt">
      <div className="dashuserheader">
        <div className="titleee">
          <h2 className="avail">Registered Users</h2>
        </div>
        <div className="newuserrrr">
          <button className="newTour" onClick={handleCreateClick}>
            NEW USER
          </button>
        </div>
      </div>
      {isEditModalOpen && (
        <Edituser handleEditClick={handleEditClick} emailToEdit={emailToEdit} />
      )}
      {isCreateModalOpen && <Newuser handleCreateClick={handleCreateClick} />}
      <div className="mytable">
        <table id="tablee" className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Role</th>
              <th>Names</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{displayUsers}</tbody>
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

export default Users;
