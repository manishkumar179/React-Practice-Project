import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {

    let logUser = localStorage.getItem("logUser")

    if(!logUser){
      return  <Navigate to='/' />
    }

    return <Outlet/>
  
  
 
}

export default ProtectedRoute
