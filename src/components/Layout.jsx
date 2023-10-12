import React from 'react'
import {Outlet} from 'react-router-dom';
import NavBar2 from './bars/NavBar2';
import Header1 from './bars/NabBar1';

const Layout = () => {
  return (
    <>
    <Header1 />
    <NavBar2 />
    <Outlet/>
    </>
  )
}

export default Layout