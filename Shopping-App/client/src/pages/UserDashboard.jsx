import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import UserNavbar from '../Components/UserNavbar'
import { Outlet } from 'react-router-dom'
const UserDashboard = () => {
  return (
    <div>
      <Header/>
      <UserNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default UserDashboard
