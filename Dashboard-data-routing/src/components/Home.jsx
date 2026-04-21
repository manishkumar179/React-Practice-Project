import React from "react";
import { NavLink, Outlet } from "react-router";
import {
  GraduationCap,
  House,
  LayoutDashboard,
  MessageCircleQuestionMark,
  MessageSquare,
  NotebookIcon,
  StickyNote,
  TrendingUp,
} from "lucide-react";

const Home = () => {
  return (
    <div className=" h-screen flex  gap-4 bg-blue-100 border rounded-2xl  px-4 py-2 m-1  ">
      <div className="flex flex-col gap-15 w-[100%] ">
        <div className="flex gap-5 self-center  ">
          <GraduationCap />
          <h1 className="font-bold ">EduFlex</h1>
        </div>

        <nav className=" flex flex-col h-[400px] w-[100%]  gap-7 ">
          <div className="flex gap-5 hover:bg-blue-700  hover:text-white rounded px-2 py-1  ">
            <House />
            
            <NavLink
              to="/main"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              Dashboard
            </NavLink>
          </div>

          <div className="flex gap-5 hover:bg-blue-700  hover:text-white rounded px-2 py-1 ">
            <NotebookIcon />
            <NavLink to="/main/assignment"  className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }>Assignment</NavLink>
          </div>

          <div className="flex gap-5 hover:bg-blue-700  hover:text-white rounded px-2 py-1 ">
            <StickyNote />
            <NavLink to="/main/report"  className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }>Report</NavLink>
          </div>

          <div className="flex gap-5 hover:bg-blue-700  hover:text-white rounded px-2 py-1 ">
            <TrendingUp />
            <NavLink to="/main/stat"  className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              } >Stats</NavLink>
          </div>

          <div className="flex gap-5 hover:bg-blue-700  hover:text-white rounded px-2 py-1 ">
            <MessageSquare />
            <NavLink to="/main/message"  className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              } >Message</NavLink>
          </div>

          <div className="flex gap-5 hover:bg-blue-700  hover:text-white rounded px-2 py-1 ">
            <MessageCircleQuestionMark />
            <NavLink to="/main/help"  className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              } >Help</NavLink>
          </div>
        </nav>

      </div>


      {/* <div className="w-[90%] bg-white border border-amber-400 rounded-xl p-2">
        <Outlet />
        
      </div> */}
    </div>
  );
};

export default Home;


// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       home
//     </div>
//   )
// }

// export default Home

