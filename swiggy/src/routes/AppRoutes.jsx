import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import MainScreen from '../features/LandingPage/screens/MainScreen'
import MainSection from '../features/FoodDelivery/components/MainSection'
import FoodDeliveryLayout from '../layouts/FoodDeliveryLayout'

const AppRoutes = () => {

  let router = createBrowserRouter([
    {
      path:"/",
      element:<MainScreen/>
    },

    {
      path:"/restaurants",
      element:<FoodDeliveryLayout/>,
      children:[
        {
          path:":name",
          element:<MainSection/>
        }
      ]
    }

  ])





  return <RouterProvider router={router} />
  
}

export default AppRoutes
