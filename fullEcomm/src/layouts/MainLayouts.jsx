import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayouts = () => {
  return (
    <div className=' h-screen w-[100%] flex  '>
      <Navbar/>

      <div className='w-[80%]  bg-white  '>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayouts
