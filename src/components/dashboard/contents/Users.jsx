import React from 'react'
import '../../../styles/Users.css'

const Users = () => {

  const users = [
    {
      id:1,
      names: 'Yvette IZANYIBUKA',
      email: 'izanyibuka@gmail.com',
      password: 'p@assword',
    },
    {
      id:2,
      names: 'Yvette IZANYIBUKA',
      email: 'izanyibuka@gmail.com',
      password: 'p@assword'
    },
    {
      id:3,
      names: 'Yvette IZANYIBUKA',
      email: 'izanyibuka@gmail.com',
      password: 'p@assword'
    },
    {
      id:3,
      names: 'Yvette IZANYIBUKA',
      email: 'izanyibuka@gmail.com',
      password: 'p@assword'
    }

  ]

  return (

  <div className='dashusercont'>

<table>
  <tr>
    <td>No</td>
    <td>Names</td>
    <td>Email</td>
    <td>Password</td>
    <td>Action</td>
  </tr>
  {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.names}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <div className="action">
                  <button className='editt'>EDIT</button>
                  <button className='deletee'>DELETE</button>
                </div>
              </td>
            </tr>
          ))}
</table>
<button className='createUser'>NEW USER</button>

    </div>
   
  )
}

export default Users