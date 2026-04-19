import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen '  >

      <Navbar/>

      <div className=' px-5 h-full py-5 ' >
        <Outlet/>
      </div>
      
    </div>
    
  )
}

export default MainLayout
