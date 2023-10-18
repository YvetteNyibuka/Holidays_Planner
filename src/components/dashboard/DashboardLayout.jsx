import React from 'react';
import '../../styles/Dashboard.css';
import { Outlet } from 'react-router-dom';
import DashSidebar from './DashSidebar';

const DashboardLayout = () => {
  return (
    <div>
      <DashSidebar />
      <div className="mainn" style={{ marginLeft: '20%' }}>
        <Outlet /> {/* This will render the content based on the route */}
      </div>
    </div>
  );
};

export default DashboardLayout;
