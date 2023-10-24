import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import TourList from './components/TourList.jsx';
import TourDetail from './components/TourDetail.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Contact from './components/Contact.jsx';
import DashboardLayout from './components/dashboard/DashboardLayout.jsx';
import Users from './components/dashboard/contents/Users.jsx';
import App from './App.jsx'
import './index.css'
import Camps from './components/dashboard/contents/Camps.jsx';
import DashTours from './components/dashboard/contents/DashTours.jsx';
import DashQuerry from './components/dashboard/contents/DashQuerry.jsx';
import Upcomings from './components/dashboard/contents/Upcomings.jsx';
import Calendar from './components/dashboard/contents/Calendar.jsx';
import Places from './components/dashboard/contents/Places.jsx';
import DashHome from './components/dashboard/contents/DashHome.jsx';
import { ContextProvider } from './context/ContextProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/tour" element={<TourList />} />
          <Route path="/tour-details" element={<TourDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path='/dashboard' element={<DashboardLayout/>}>
              <Route index element={<DashHome />} />
              <Route path="users" element={<Users />} />
              <Route path="camps" element={<Camps />} />
              <Route path="tours" element={<DashTours />} />
              <Route path='querries' element={<DashQuerry />} />
              <Route path="upcomings" element={<Upcomings />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="places" element={<Places />} />

          </Route>
      </Routes>
    </BrowserRouter>
    </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
