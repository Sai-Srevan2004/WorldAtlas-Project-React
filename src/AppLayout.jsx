import React from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import './Css/AppLayout.css'

const AppLayout = () => {
  return (
    <div className='applayout'>
      <Nav></Nav>
      <div className="container">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AppLayout
