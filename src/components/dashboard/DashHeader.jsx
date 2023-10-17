import React from 'react'
import '../styles/DashHeader.css'
import {SlSettings} from 'react-icons/sl'
import {GoSun} from 'react-icons/go'
import {BsMoon} from 'react-icons/bs'

const DashHeader = () => {
  return (
    <div className='dashHeadercont'>
      <div className="greetUser">
            <div className="helllo">
                <h2>Hello, Husseine</h2>
            </div>
            <div className="settings">
                <SlSettings/>
            </div>
      </div>

      <div className="displayMode">
        <p >  <GoSun id='disIcon' style={{color: 'yellow'}}/> Dark Mode <BsMoon  id='disIcon'/></p>
      </div>

    </div>
  )
}

export default DashHeader