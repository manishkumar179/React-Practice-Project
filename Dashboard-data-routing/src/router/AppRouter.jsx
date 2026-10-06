import React, { useEffect } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from '../screens/Dashboard';
import Assignment from '../screens/Assignment';
import Report from '../screens/Report';
import Stats from '../screens/Stats';
import Message from '../screens/Message';
import Help from '../screens/Help';
import Login from '../components/Login';
import AuthLayout from '../layouts/AuthLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import MainLayout from '../layouts/MainLayout';
import Home from '../components/Home';
import PublicRoute from '../components/PublicRoute';
import axios from 'axios';
import { addUser, removeUser } from '../../features/authSlice';
import { useDispatch } from 'react-redux';

const AppRouter = () => {

    let dispatch = useDispatch()

    useEffect(() => {
    let callMeApi = async () => {
      try {
        let res = await axios.get("http://localhost:3000/me", {
          withCredentials: true,
        });
        console.log("me api", res);

        dispatch(addUser(res.data.user));
      } catch (error) {
        dispatch(removeUser());
        console.log("error in me api", error);
      }
    };

    callMeApi();
  }, []);

    const router = createBrowserRouter([

        {
            path:'/',
            element:<PublicRoute/>,
            children:[
                {
                    path:"",
                    element:<AuthLayout/>
                }
            ]
        },

        {
            
            path:'/main',
            element:<ProtectedRoute/>,
            children:[
                {
                    path:"",
                    element:<MainLayout/>,
                    children:[
                        {
                    path:"",
                    element:<Dashboard/>
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
                },
                {
                    path:"assignment",
                    element:<Assignment/>
                }
                    ]
                },
                
            ]
        }

    ])


  return <RouterProvider router={router}/>
    
  
}

export default AppRouter
