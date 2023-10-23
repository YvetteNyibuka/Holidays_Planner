import React, { useState } from 'react'
import '../../../styles/Users.css'
import { useParams } from 'react-router-dom'
import Edituser from './NewUserForm'
import { usestatecontext } from '../../../context/ContextProvider'

const Users = () => {

const [isEditModalOpen, setEditModalOpen] = useState(false);
const handleEditClick = () => {
  setEditModalOpen((previsEditModal) => !previsEditModal);
};
  
   const {id} = useParams();
 const{Allusers}= usestatecontext();
  
 let i = 0;

  return (

    <div className='dashusercont'>
            <div className="dashuserheader">
                <h1>Registered Users</h1>
                <button className='newTour' onClick={handleEditClick}>NEW USER</button>
            </div>
            {isEditModalOpen && <Edituser handleEditClick={handleEditClick} />}
<div className="mytable">
    <table id='tablee' className='styled-table'>
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
            {Allusers.map((User, index) => (
                <tr key={index}>
                    <td>{i+= 1}</td>
                    <td>{User.role}</td>
                    <td>{User.email}</td>
                    <td>{User.password}</td>
                    <td>
                        <div className="actionn">
                            <button className='edit-button'>Edit</button>
                            <button className='delete-button'>Delete</button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
</div>
   
  )
}

export default Users