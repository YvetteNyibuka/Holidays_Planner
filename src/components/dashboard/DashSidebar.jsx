import React from "react";
import "../../styles/DashSidebar.css";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { PiAirplaneTiltBold } from "react-icons/pi";
import { BsCalendarDate } from "react-icons/bs";
import { GiForestCamp } from "react-icons/gi";
import { FaUsers, FaCalendarCheck } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
import { GoSun } from "react-icons/go";
import { BsMoon } from "react-icons/bs";
import ppicture from "../../../public/images/ppicture.jpg";
import { useNavigate } from "react-router-dom";
import { usestatecontext } from "../../context/ContextProvider";

const DashSidebar = () => {
  const navigate = useNavigate();
  const { loggedUser } = usestatecontext();
  const handleLogout = () => {
    localStorage.removeItem("info");
    location.reload(navigate("/login"));
  };
  const sidebarLinks = [
    {
      icon: <RxDashboard style={{ color: "black" }} />,
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      icon: <PiAirplaneTiltBold style={{ color: "black" }} />,
      path: "tours",
      name: "Tours",
    },
    {
      icon: <FaUsers style={{ color: "black" }} />,
      path: "users",
      name: "Users",
    },
    {
      icon: <SiGooglemessages style={{ color: "black" }} />,
      path: "querries",
      name: "Queries",
    },

    {
      icon: <FaCalendarCheck style={{ color: "black" }} />,
      path: "bookings",
      name: "Bookings",
    },

    {
      icon: <BsCalendarDate style={{ color: "black" }} />,
      path: "upcomings",
      name: "Upcomings",
    },
  ];

  return (
    <div className="dashsharable">
      <div className="sidenavCont">
        <div className="profile">
          <div className="ppicture">
            <img
              src={ppicture}
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          </div>
          <div className="namees">
            <h3>{loggedUser?.fullName}</h3>
            <p>{loggedUser?.role}</p>
          </div>
        </div>
        <div className="navLinks">
          <ul>
            {sidebarLinks.map((link, index) => (
              <li key={index} id="navLinkk">
                {link.icon}
                <Link id="a" to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>{" "}
        {/* <div className="looog"> */}
        <button className="logout" onClick={handleLogout}>
          <FiLogOut className="logicon" />
          Logout
        </button>
        {/* </div> */}
      </div>
      <div className="dashHeadercont">
        <div className="greetUser">
          <div className="helllo">
            <h2>Hello, {loggedUser?.fullName}</h2>
          </div>
          <div className="settings">
            <SlSettings />
          </div>
        </div>

        <div className="displayMode">
          <p>
            {" "}
            <GoSun id="disIcon" style={{ color: "yellow" }} /> Dark Mode{" "}
            <BsMoon id="disIcon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
