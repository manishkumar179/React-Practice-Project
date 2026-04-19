import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from '../layouts/MainLayout';
import Men from '../screens/Men';
import Women from '../screens/Women';
import Kids from '../screens/Kids';
import Beauty from '../screens/Beauty';
import Genz from '../screens/Genz';
import CartScreens from '../screens/CartScreens';
import ProductDetails from '../screens/ProductDetails';

const AppRouter = () => {

    let router = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout/>,
            children:[
                {
                    path:'',
                    element:<Men/>
                },
                {
                    path:'women',
                    element:<Women/>
                },
                {
                    path:'kid',
                    element:<Kids/>
                },
                {
                    path:'beauty',
                    element:<Beauty/>
                },
                {
                    path:'genz',
                    element:<Genz/>
                },

                {
                    path:"cart",
                    element:<CartScreens/>
                },
                {
                    path:"product/:id",
                    element:<ProductDetails/>
                },
            ],
        },
    ]);



  return <RouterProvider  router={router} />
}

export default AppRouter
