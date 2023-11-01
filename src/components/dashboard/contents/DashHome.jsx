import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "../../../styles/DashHome.css";
import { usestatecontext } from "../../../context/ContextProvider";

const DashHome = () => {
  const { DashTours, ToursLoading } = usestatecontext();
  const { fetchUsersData } = usestatecontext();
  const{Messages} = usestatecontext();
  const toursData = {
    labels: ["Tour A", "Tour B", "Tour C", "Tour D", "Tour E"],
    datasets: [
      {
        label: "Tours",
        data: [50, 70, 25, 18, 90],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const usersData = {
    labels: [
      "User Group 1",
      "User Group 2",
      "User Group 3",
      "User Group 4",
      "User Group 5",
    ],
    datasets: [
      {
        label: "Users",
        data: [50, 30, 40, 60, 45],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const queriesData = {
    labels: ["Query 1", "Query 2", "Query 3", "Query 4", "Query 5"],
    datasets: [
      {
        label: "Queries",
        data: [10, 8, 12, 15, 7],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashHomeCont">
      <div className="counts">
        <div className="tourCount" id="counts">
          <h2>Total Tours</h2>
          <h3>{DashTours?.length} </h3>
        </div>
        <div className="usersCount" id="counts">
          <h2>Total Users</h2>
          <h3>{fetchUsersData?.length} </h3>
        </div>
        <div className="queryCount" id="counts">
          <h2>Total Queries</h2>
          <h3>{Messages?.length} </h3>
        </div>
      </div>
      <div className="graphs">
        <div className="chart">
          <h2>Tours</h2>
          <Bar data={toursData} />
        </div>
        <div className="chart">
          <h2>Users</h2>
          <Line data={usersData} id="linechart" />
        </div>
        <div className="chart">
          <h2>Queries</h2>
          <Doughnut data={queriesData} />
        </div>
      </div>
    </div>
  );
};

export default DashHome;
