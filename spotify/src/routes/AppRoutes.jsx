import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from '../layouts/MainLayout';
const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout/>
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoutes
