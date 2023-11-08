import React, {useEffect, useState}  from "react";
import  "../../../styles/Edituser.css"
import axios from "axios";
import { toast } from "react-toastify";

function Edituser({ onClose, onSave, handleEditClick, emailToEdit }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/update/${data.email}`,
        data
      );
      toast.success("User updated successfully");
      onSave(); 
      onClose();
    } catch (error) {
      toast.error(error);
    }
  };
  
  
  useEffect(() => {
    const handleGetSingleUser = async (email) => {
      try {
        const res = await axios.get(`https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/getOne?fieldName=email&value=${email}`);
        const userData = res.data;
        setData(userData);
      } catch (error) {
        toast.error(error);
      }
    };
  
    if (emailToEdit) {
      handleGetSingleUser(emailToEdit);
    }
  }, [emailToEdit]);
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
          <h2>Edit User</h2>
        </div>
        <div className="edit-body">
          <form id="dashuserform">
            <div className="form-group">
              <label>Username:</label>
              <input type="text"
              name="names"
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
            Update
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
