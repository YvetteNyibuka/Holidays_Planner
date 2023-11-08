import React, {useState}  from "react";
import  "../../../styles/UserModal.css"
import axios from "axios";
import { toast } from "react-toastify";

function Newuser({ onClose, onSave, handlecreateClick }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleFormSubmitt = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
        data
      );
      alert("Registered successfully");
      // Navigate("/login");
    } catch (error) {
      toast.error(error);
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
    <div className="newUser">
      <div className="newuser-modal">
        <div className="newuser-header">
          <h2>Create New User</h2>
        </div>
        <div className="newuser-body">
          <form id="dashhuserform">
            <div className="form-groupp">
              <label>Username:</label>
              <input type="text"
              name="name"
              value={data.name}
              onChange={handleData}
               />
            </div>
            <div className="form-groupp">
              <label>Email:</label>
              <input type="email" 
              name="email"
              onChange={handleData}
              value={data.email}
              />
            </div>
            <div className="form-groupp">
              <label>Password:</label>
              <input type="Password" 
              name="password"
              onChange={handleData}
              value={data.password}
              />
            </div>
          </form>
        </div>
        <div className="newuser-footer">
          <button  type="submit" className="edit-button edit-save" onClick={handleFormSubmitt} >
            Create
          </button>
          <button
            type="button"
            className="edit-button edit-cancel"
            onClick={handlecreateClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default Newuser;
