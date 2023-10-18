import React from 'react'
import '../../../styles/DashQuerry.css'

const DashQuerry = () => {

    const messages = [
        {
            id: 1,
            fullNames: 'IZANYIBUKA Yvette',
            email: 'izanyibukayvette@gmail.com',
            phone: '0787615413',
            services:'how can i book next year tool?',
            message: 'service description',
        },
        {
            id: 2,
            fullNames: 'IZANYIBUKA Yvette',
            email: 'izanyibukayvette@gmail.com',
            phone: '0787615413',
            services:'how can i book next year tool?',
            message: 'service description',
        },
        {
            id: 3,
            fullNames: 'IZANYIBUKA Yvette',
            email: 'izanyibukayvette@gmail.com',
            phone: '0787615413',
            services:'how can i book next year tool?',
            message: 'service description',
        },
        {
            id: 4,
            fullNames: 'IZANYIBUKA Yvette',
            email: 'izanyibukayvette@gmail.com',
            phone: '0787615413',
            services:'how can i book next year tool?',
            message: 'service description',
        },
    ];

  return (
    <div className='dashquerryCont'>
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
          {messages.map((querry, index) => (
            <tr>
              <td>{querry.id}</td>
              <td>{querry.fullNames}</td>
              <td>{querry.email}</td>
              <td>{querry.phone}</td>
              <td>{querry.services}</td>
              <td>{querry.message}</td>
              <td>
                <div className="action">
                  <button className='editt'>EDIT</button>
                  <button className='deletee'>DELETE</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DashQuerry