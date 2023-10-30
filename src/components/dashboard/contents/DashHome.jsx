import React from "react";
import "../../../styles/DashHome.css";

const DashHome = () => {
  return (
    <div className="dashHomeCont">
      <div className="counts">
        <div className="tourCount" id="counts"></div>
        <div className="usersCount" id="counts"></div>
        <div className="queryCount"id="counts"></div>
      </div>
      <div className="graphs">Hey</div>
    </div>
  );
};

export default DashHome;
