import React from 'react';
import '../../styles/DashSidebar.css';
import { Link } from 'react-router-dom';
import {RxDashboard} from 'react-icons/rx'
import {MdOutlinePlace} from 'react-icons/md'
import {PiAirplaneTiltBold} from 'react-icons/pi'
import {BsCalendarDate}  from 'react-icons/bs'
import {GiForestCamp} from 'react-icons/gi'
import{FaCalendarAlt, FaUsers} from 'react-icons/fa'
import {BsChatFill} from 'react-icons/bs'
import {RiLogoutCircleLine} from 'react-icons/ri'
import '../../styles/DashHeader.css'
import {SlSettings} from 'react-icons/sl'
import {GoSun} from 'react-icons/go'
import {BsMoon} from 'react-icons/bs'
import ppicture from '../../../public/images/ppicture.jpg';


const DashSidebar = () => {
    const sidebarLinks = [
        {
            icon:<RxDashboard/>,
            path: "/",
            name: "Dashboard"
        },
        {
            icon: <MdOutlinePlace/>,
            path: "/places",
            name: "Places"
        },
        {
            icon: <PiAirplaneTiltBold/>,
            path: "/tours",
            name: "Tours"
        },
        {
            icon: <FaUsers/>,
            path: "users",
            name: "Users"
        },
        {
            icon: <BsCalendarDate/>,
            path: "/upcoming",
            name: "Upcomings"
        },
        {
            icon: <GiForestCamp/>,
            path: "/camps",
            name: "Camps"
        },
        {
            icon: <FaCalendarAlt/>,
            path: "/calendar",
            name: "Calendar"
        },
        {
            icon: <BsChatFill/>,
            path: "chat",
            name: "Chats"
        }
    ];

    return (
          <div className="dashsharable">
                    <div className='sidenavCont'>
            <div className="profile">
                <div className="ppicture">
                    <img src={ppicture} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                </div>
                <div className="namees">
                    <h3>Hossein</h3>
                    <p>Traveller</p>
                </div>
            </div>
            <div className="navLinks">
                <ul>
                    {sidebarLinks.map((link, index) => (
                        <li key={index} id='navLinkk'>
                            {link.icon}
                            <Link id='a' to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="logout">
                <RiLogoutCircleLine/>
                Logout</div>
        </div>
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
          </div>
    );
};

export default DashSidebar;
