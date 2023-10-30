import React from 'react'
import '../../../styles/DashQuerry.css'
import { usestatecontext } from '../../../context/ContextProvider'

const DashQuerry = () => {
const {Messages, messageLoading} = usestatecontext();

if(messageLoading){
  return <div>Loading...</div>
}

  return (
    <div className="dashquerryCont">
      <div className="dashtourheader">
        <h1>Received Messages</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Names</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Messages.map((querry, index) => (
            <tr>
              <td>{querry.id}</td>
              <td>{querry.fullNames}</td>
              <td>{querry.email}</td>
              <td>{querry.phone}</td>
              <td>{querry.services}</td>
              <td>{querry.message}</td>
              <td>
                <div className="action">
                  <button className="deletee">REPLY</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashQuerry