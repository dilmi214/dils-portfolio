import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div className="container">
        <Navbar/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout