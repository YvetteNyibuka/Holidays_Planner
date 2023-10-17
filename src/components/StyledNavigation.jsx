import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navbar'>
    <NavLink className='link' to={'/'} style={({isActive})=>{
        return{color: isActive ? 'blue' : 'brown' }
     }} >Home</NavLink>

    <NavLink className='link' to={'/about'}
    style={({isActive})=>{
        return{color: isActive ? 'blue' : 'brown' }
     }} >About</NavLink>

    <NavLink className='link' to={'/login'}
    style={({isActive})=>{
        return{color: isActive ? 'blue' : 'brown' }
     }} >Login</NavLink>

    <NavLink className='link' to={'/signup'}
    style={({isActive})=>{
        return{color: isActive ? 'blue' : 'brown' }
     }} >Sign Up</NavLink>

    <NavLink className='link' to={'/tour'}
    style={({isActive})=>{
        return{color: isActive ? 'blue' : 'brown' }
     }} >Tour</NavLink>

    <NavLink className='link' to={'/blog'}
    style={({isActive})=>{
        return{color: isActive ? 'blue' : 'brown' }
     }} >Blogs</NavLink>

    <NavLink className='link' to={'/contact'}
    style={({isActive})=>{
        return{color: isActive ? 'blue' : 'brown' }
     }} >Contact Us</NavLink>
</nav>
  )
}

export default Navigation