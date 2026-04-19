import React from "react";
import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate()
  return (
    <div className="h-full w-[22%] px-4 py-5 items-center text-white  flex flex-col gap-10 bg-gradient-to-br from-orange-400 via-red-400 to-pink-300  ">
      <div className="flex items-center justify-center gap-4 ">
        <img width={50} src="/shopping.png" alt="" />
        <h1 className="text-2xl font-bold text-white-600  px-3 py-2 rounded-xl  ">
          SHOPKART
        </h1>
      </div>

      <div className="flex flex-col gap-6 self-center ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-purple-600 px-2 py-2 rounded-xl text-white  "
              : "text-white border-gray-200 border px-2 py-2 rounded-xl"
          }
          to="/main/product"
        >
          Product
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-purple-600 px-2 py-2 rounded-xl text-white  "
              : "text-white border-gray-200 border px-2 py-2 rounded-xl"
          }
          to="/main/men"
        >
          Mens
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-purple-600 px-2 py-2 rounded-xl text-white  "
              : "text-white border-gray-200 border px-2 py-2 rounded-xl"
          }
          to='/main/women'
        >
          Womens
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-purple-600 px-2 py-2 rounded-xl text-white  "
              : "text-white border-gray-200 border px-2 py-2 rounded-xl"
          }
          to='/main/about'
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-purple-600 px-2 py-2 rounded-xl text-white  "
              : "text-white border-gray-200 border px-2 py-2 rounded-xl"
          }
          to='/main/cart'
        >
          Cart
        </NavLink>



        <NavLink onClick={()=>{
          
          localStorage.removeItem("logUser")
          navigate("/")

        }} className="px-4 py-2 bg-red-700 rounded">Logout</NavLink>





      </div>
    </div>
  );
};

export default Navbar;
