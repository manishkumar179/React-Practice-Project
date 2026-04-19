import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayouts from '../layouts/MainLayouts';
import ProductPage from '../screens/ProductPage';
import WelcomePage from '../components/WelcomePage';
import CartPage from '../screens/CartPage';
import AuthLayouts from '../layouts/AuthLayouts';
import AuthRoutes from '../components/AuthRoutes';
import ProtectedRoute from '../components/ProtectedRoute';
import Mens from '../screens/Mens';
import Womens from '../screens/Womens';
import About from '../screens/About';

const AppRoutes = () => {

    let router = createBrowserRouter([

        {

            path:"/",
            element:<AuthRoutes/>,
            children:[
                {path:"" , element:<AuthLayouts/>}
            ]

        },


        {

            path:"/main",
            element:<ProtectedRoute/>,
            children:[
                {
                    path:"",element:<MainLayouts/>,
                    children:[
                        {
                    index:true,
                    element:<WelcomePage/>
                },
                {
                    path:"product",
                    element:<ProductPage/>
                },
                {
                    path:"cart",
                    element:<CartPage/>
                },
                {
                    path:"men",
                    element:<Mens/>
                },
                {
                    path:"women",
                    element:<Womens/>
                },
                {
                    path:"about",
                    element:<About/>
                }
                    ]
                }
                
            ]
        }
    ])


  return <RouterProvider router={router}/>
}

export default AppRoutes
