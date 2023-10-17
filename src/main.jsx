import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import TourList from './components/TourList.jsx';
import TourDetail from './components/TourDetail.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Users from './components/dashboard/contents/Users.jsx'
import App from './App.jsx'
import './index.css'
import Chat from './components/dashboard/contents/Chat.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/tour" element={<TourList />} />
          <Route path="/tour-details" element={<TourDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            index
            element={() => {
              // Default content to display in the dashboard when no specific section is selected
              return <h2>Welcome to the Dashboard</h2>;
            }}
          />
          <Route path="users" element={<Users />} />
          <Route path="chat" element={<Chat />} />
          {/* Add more routes for other dashboard sections as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
