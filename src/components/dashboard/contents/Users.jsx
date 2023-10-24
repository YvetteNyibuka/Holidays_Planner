import React, { useState } from "react";
import "../../../styles/Users.css";
import { useParams } from "react-router-dom";
import Newuser from "./NewUserForm";
import Edituser from "./Edituser";
import { usestatecontext } from "../../../context/ContextProvider";

const Users = () => {
  const {fetchUsersData = [] } = usestatecontext();

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

  let i = 0;

  return (
    <div className="dashusercont">
      <div className="dashuserheader">
        <h1>Registered Users</h1>
        <button className="newTour" onClick={handleCreateClick}>
          NEW USER
        </button>
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
                  <td>{User.password}</td>
                  <td>{User.role}</td>
                  <td>
                    <div className="actionn">
                      <button
                        className="edit-button"
                        onClick={() => handleEdit2(User.email)}
                      >
                        Edit
                      </button>
                      <button className="delete-button">Delete</button>
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
