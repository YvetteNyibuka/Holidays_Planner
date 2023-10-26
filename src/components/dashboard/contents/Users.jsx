import React, { useState } from "react";
import "../../../styles/Users.css";
import Newuser from "./NewUserForm";
import Edituser from "./Edituser";
import { usestatecontext } from "../../../context/ContextProvider";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const Users = () => {
  let url = "https://holiday-planner-4lnj.onrender.com/api/v1/";
  let user = JSON.parse(localStorage.getItem("info"));
  let token = user.access_token;

  const { fetchUsersData = [] } = usestatecontext();
  const { SingleUSer } = usestatecontext();
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [emailToEdit, setEmailToEdit] = useState(null);

  const usersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = fetchUsersData.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(fetchUsersData.length / usersPerPage);

  // Update page number
  const paginate = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
const firstUserIdOnCurrentPage = (currentPage - 1) * usersPerPage + 1;

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

  const handleDeleteClick = async (email) => {
    console.log(token);
    const res = await axios.delete(url + `auth/users/delete/${email}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.data;
    alert(data.message);
  };

  const handleGetSingleUser = async (email) => {
    console.log(email);
    try {
      const res = await fetch(
        url + `auth/users/getOne?fieldName=email&value=${email}`,
        {
          method: "GET",
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let i = 0;

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
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((User, index) => (
              <tr key={index}>
                <td>{firstUserIdOnCurrentPage + index}</td>
                <td>{User.role}</td>
                <td>{User?.fullName ? User?.fullName : "Not identified"}</td>
                <td>{User.email}</td>
                <td>
                  <div className="actionn">
                    <button
                      className="edit-button"
                      onClick={() => handleEdit2(User.email)}
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="delete-button"
                      onClick={() => handleDeleteClick(User.email)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="page-number">Page {currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
