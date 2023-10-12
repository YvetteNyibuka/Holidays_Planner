import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navbar'>
    <Link className='link' to={'/'}>Home</Link>
    <Link className='link' to={'/about'}>About</Link>
    <Link className='link' to={'/destination'}>Destination</Link>
    <Link className='link' to={'/tour'}>Tour</Link>
    <Link className='link' to={'/blog'}>Blogs</Link>
    <Link className='link' to={'/contact'}>Contact Us</Link>
</nav>
  )
}

export default Navigation