import React, {useState}  from "react";
import  "../../../styles/UserModal.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Edituser({ onClose, onSave, handleEditClick }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
        data
      );
      alert("Registered successfully");
      // Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave();
    onClose();
  };
  return (
    <div className="mm">
      <div className="edit-modal">
        <div className="edit-header">
          <h2>Create New User</h2>
        </div>
        <div className="edit-body">
          <form id="dashuserform">
            <div className="form-group">
              <label>Username:</label>
              <input type="text"
              name="name"
              value={data.name}
              onChange={handleData}
               />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" 
              name="email"
              onChange={handleData}
              value={data.email}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="Password" 
              name="password"
              onChange={handleData}
              value={data.password}
              />
            </div>
          </form>
        </div>
        <div className="edit-footer">
          <button  type="submit" className="edit-button edit-save" onClick={handleFormSubmit} >
            Create
          </button>
          <button
            type="button"
            className="edit-button edit-cancel"
            onClick={handleEditClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default Edituser;
