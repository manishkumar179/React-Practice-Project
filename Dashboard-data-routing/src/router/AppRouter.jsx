import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from '../components/Home';
import Dashboard from '../screens/Dashboard';
import Assignment from '../screens/Assignment';
import Report from '../screens/Report';
import Stats from '../screens/Stats';
import Message from '../screens/Message';
import Help from '../screens/Help';
import Login from '../components/Login';

const AppRouter = () => {

    const router = createBrowserRouter([

        {
            path:'/',
            element:<Login/>
        },

        {
            
            path:'/home',
            element:<Home/>,
            children:[
                {
                    path:"dashboard",
                    element:<Dashboard/>
                },
                {
                    path:"assignment",
                    element:<Assignment/>
                },
                {
                    path:"report",
                    element:<Report/>
                },
                {
                    path:"stat",
                    element:<Stats/>
                },
                {
                    path:"message",
                    element:<Message/>
                },
                {
                    path:"help",
                    element:<Help/>
                }
            ]
        }

    ])


  return <RouterProvider router={router}/>
    
  
}

export default AppRouter
