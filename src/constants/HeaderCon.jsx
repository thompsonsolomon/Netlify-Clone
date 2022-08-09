import React from 'react'
import logo from '../components/image/Netflix-Logo.svg'
import '../components/styles/style.css'
import { NavLink } from 'react-router-dom'
export default function HeaderCon() {
  const user = JSON.parse(localStorage.getItem('Netflix-login-deta'));
  return (
    <div className='headercontainer'>
    <div className='navcon'>
      <NavLink to='/' className="logo" ><img src={logo} alt="" className="logo" /></NavLink>
      <button className="Buttonlink"> 
      {
        user?
        <NavLink to='/browse'>{user}</NavLink>:
        <NavLink to='/Sign_in'>Sign In</NavLink>
      }
      </button>
    </div>
  </div>
  )
}
