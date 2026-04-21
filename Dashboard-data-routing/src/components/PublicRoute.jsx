import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {

    let {user , isAuthenticated , isLoading} = useSelector((state)=>state.auth)
    if(isAuthenticated){
        return <Navigate to="/main" />
    }

  return <Outlet/>
}

export default PublicRoute
