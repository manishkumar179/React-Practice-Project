import React from 'react'
import { NavLink, Outlet, useNavigate } from "react-router";
import { CircleUserRound, Handbag, Heart, User } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = () => {

  let navigate = useNavigate()
  return (

    <div className='flex items-center justify-between px-5 py-2 shadow' >
        <div>
            <img width={45} src="https://images.indianexpress.com/2021/01/myntra.png" alt="" />
        </div>

      <nav className='flex items-center gap-10' >

        <NavLink to='' className={({isActive})=> isActive ? "cursor-pointer text-black" : "cursor-pointer text-gray-400" }  >MEN</NavLink>
        <NavLink to="/women" className={({isActive})=> isActive ? "cursor-pointer text-black" : "cursor-pointer text-gray-400" } >WOMEN</NavLink>
        <NavLink to='/kid'  className={({isActive})=> isActive ? "cursor-pointer text-black" : "cursor-pointer text-gray-400" }>KIDS</NavLink>
        <NavLink to='/beauty'className={({isActive})=> isActive ? "cursor-pointer text-black" : "cursor-pointer text-gray-400" }>BEAUTY</NavLink>
        <NavLink to='/genz' className={({isActive})=> isActive ? "cursor-pointer text-black" : "cursor-pointer text-gray-400" }>GENZ</NavLink>
       
      </nav>


      <SearchBar/>  

      <div className='flex gap-6'>

        <User className='cursor-pointer' size={20} />
        <Heart size={20} />
        <Handbag onClick={()=>navigate("cart")}  size={20} />
          
      </div>

      
    </div>
  )
}

export default Navbar
