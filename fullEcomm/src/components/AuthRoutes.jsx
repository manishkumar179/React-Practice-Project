import React from 'react'
import { Navigate, Outlet } from 'react-router'

const AuthRoutes = () => {
    let logUser = localStorage.getItem("logUser")
    if(logUser){
        return <Navigate to='/main' />
    }
  return <Outlet/>
  
}

export default AuthRoutes
