import React from "react";
import { Outlet } from "react-router";
import Dashboard from "../screens/Dashboard";
import Home from "../components/Home";

const MainLayout = () => {
  return (
    <div className="flex w-[100%] h-screen">
      <div className="w-[20%] p-4 border-r  border-red-500">
       <Home/>
      </div>
      <div className="p-4 w-[80%] ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;