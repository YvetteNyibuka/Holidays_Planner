import React, { useState } from "react";
import "../../../styles/Users.css";
import Newuser from "./NewUserForm";
import Edituser from "./Edituser";
import { usestatecontext } from "../../../context/ContextProvider";
import axios from "axios";

const Users = () => {
  const { fetchUsersData = [] } = usestatecontext();
  const {SingleUSer} = usestatecontext();

    let url = "https://holiday-planner-4lnj.onrender.com/api/v1/";
let user = JSON.parse(localStorage.getItem("info"));
  let token = user.access_token;

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [emailToEdit, setEmailToEdit] = useState(null);

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
      }

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
          <h1 className="avail">Registered Users</h1>
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
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fetchUsersData.map((User, index) => (
              <tr key={index}>
                <td>{(i += 1)}</td>
                <td>{User.role}</td>
                <td>{User.fullName}</td>
                <td>{User.email}</td>
                <td>
                  <div className="actionn">
                    <button
                      className="edit-button"
                      onClick={() => handleEdit2(User.email)}
                    >
                      Edit
                    </button>

                    <button className="delete-button" onClick={()=>handleDeleteClick(User.email)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
