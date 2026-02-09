import React from 'react'
import { Link } from 'react-router-dom'
import './UserNavbar.css'
const UserNavbar = () => {
  return (
    <div className='navbar'>
      Welcome user &nbsp; &nbsp;
      <Link to="/user">Home</Link> | 
      <Link to="/user/cart">View Cart</Link> | 
      <Link to="/user/order">View Order</Link> | 
      <Link to="/user/profile">View Profile</Link> | 
      <Link to="/user/logout">logout</Link> 
    </div>
  )
}

export default UserNavbar
