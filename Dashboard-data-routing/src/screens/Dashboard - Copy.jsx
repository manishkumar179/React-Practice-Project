import React from "react";
import { BookmarkPlus, EllipsisVertical, MonitorPlay, Search, SquarePen } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex h-[100%] gap-4 ">
      <div className="w-[70%] h-screen gap-5 flex flex-col">

               {/* Top */}
        <div className="w-[100%] h-[50px]  flex items-center justify-between ">
          <h1 className="font-bold text-2xl text-blue-400">Dashboard</h1>
          <div className="flex gap-5 items-center ">
            <div className="flex border rounded-xl p-2 bg-blue-200">
              <input
                className="outline-none"
                type="text"
                placeholder="search anything here..."
              />
              <Search />
            </div>

            <BookmarkPlus />
          </div>
        </div>

                {/* Bottom */}
        <div className="h-[80%] flex flex-col gap-2  ">

            <div className="h-[30%] flex gap-15 justify-center ">
                <div className="h-[100%] w-[160px] flex flex-col gap-2 items-center justify-around rounded-xl bg-blue-300  ">
                    <img className="h-[50px] w-[70px] object-cover object-center  rounded-xl bg-white  p-2 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyBCVWGqUDX9dL9RzRJgzKBKE2eqztcy66w&s" alt="" />
                    <button className=" p-2 rounded-xl bg-white cursor-pointer active:scale-95 ">Web Development</button>
                </div>
                <div className="h-[100%] w-[160px] flex flex-col gap-2 items-center justify-around rounded-xl bg-blue-300  ">
                    <img className="h-[50px] w-[70px] object-cover object-center  rounded-xl bg-white  p-2 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyBCVWGqUDX9dL9RzRJgzKBKE2eqztcy66w&s" alt="" />
                    <button className=" p-2 rounded-xl bg-white cursor-pointer active:scale-95 ">Web Development</button>
                </div>
                <div className="h-[100%] w-[160px] flex flex-col gap-2 items-center justify-around rounded-xl bg-blue-300  ">
                    <img className="h-[50px] w-[70px] object-cover object-center  rounded-xl bg-white  p-2 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyBCVWGqUDX9dL9RzRJgzKBKE2eqztcy66w&s" alt="" />
                    <button className=" p-2 rounded-xl bg-white cursor-pointer active:scale-95 ">Web Development</button>
                </div>
            </div>

            <div className="h-[65%]">

              <div className="flex justify-between p-1">
                <h1 className="text-xl font-bold text-blue-400">Teacher</h1>
                <select className="border outline-none rounded " name="" id="">
                  <option value="">Hindi</option>
                  <option value="">English</option>
                  <option value="">German</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between p-2 items-center ">
                  <div className="flex gap-5 items-center">
                    <img className="h-10 w-10 object-cover object-center rounded-2xl" src="https://images.unsplash.com/photo-1758685734503-58a8accc24e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                  <h1 className="font-bold text-blue-700" >Prof. Jhone Doe</h1>
                  </div>
                  <p>20 hours lesson</p>
                  <p>$100/hr.</p>
                  <EllipsisVertical />
                </div>

                <div className="flex justify-between p-2 items-center ">
                  <div className="flex gap-5 items-center">
                    <img className="h-10 w-10 object-cover object-center rounded-2xl" src="https://images.unsplash.com/photo-1758685734503-58a8accc24e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                  <h1 className="font-bold text-blue-700" >Prof. Jhone Doe</h1>
                  </div>
                  <p>20 hours lesson</p>
                  <p>$100/hr.</p>
                  <EllipsisVertical />
                </div>

                <div className="flex justify-between p-2 items-center ">
                  <div className="flex gap-5 items-center">
                    <img className="h-10 w-10 object-cover object-center rounded-2xl" src="https://images.unsplash.com/photo-1758685734503-58a8accc24e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                  <h1 className="font-bold text-blue-700" >Prof. Jhone Doe</h1>
                  </div>
                  <p>20 hours lesson</p>
                  <p>$100/hr.</p>
                  <EllipsisVertical />
                </div>

                <div className="flex justify-between p-2 items-center ">
                  <div className="flex gap-5 items-center">
                    <img className="h-10 w-10 object-cover object-center rounded-2xl" src="https://images.unsplash.com/photo-1758685734503-58a8accc24e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                  <h1 className="font-bold text-blue-700" >Prof. Jhone Doe</h1>
                  </div>
                  <p>20 hours lesson</p>
                  <p>$100/hr.</p>
                  <EllipsisVertical />
                </div>

                <div className="flex justify-between p-2 items-center ">
                  <div className="flex gap-5 items-center">
                    <img className="h-10 w-10 object-cover object-center rounded-2xl" src="https://images.unsplash.com/photo-1758685734503-58a8accc24e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                  <h1 className="font-bold text-blue-700" >Prof. Jhone Doe</h1>
                  </div>
                  <p>20 hours lesson</p>
                  <p>$100/hr.</p>
                  <EllipsisVertical />
                </div>

              </div>

            </div>
        </div>

      </div>

                {/* Right */}
      <div className=" h-[100%] w-[30%] flex flex-col gap-5 ">

                {/* Profile */}
        <div className="h-[50px] flex items-center justify-between px-2">
          <h1 className="font-bold text-blue-400">Profile</h1>
          <div className="p-2 bg-blue-100 rounded-2xl">
            <SquarePen />
          </div>
        </div>


                {/* down profile  */}
        <div className=" h-[93%] rounded-xl flex flex-col gap-5 bg-blue-200  ">

{/* Photos */}
          <div className="h-[150px] border-b-1 p-2 flex flex-col items-center justify-around ">
            <img className="h-20 w-25 object-cover object-center rounded-2xl    " src="https://images.unsplash.com/photo-1758685734503-58a8accc24e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h1 className="font-semibold text-blue-400">Jhone Doe</h1>
            <p className="opacity-50">Teacher</p>
          </div>

{/*lecture  */}
          <div className="h-[70%] px-2  flex flex-col gap-5 ">

            <div className="flex items-center justify-between">
              <MonitorPlay />

              <div className="text-center text-sm">
                <h1>Html & CSS</h1>
                <p className="opacity-50">2hours</p>
              </div>

              <EllipsisVertical/>

            </div>

            <div className="flex items-center justify-between">
              <MonitorPlay />

              <div className="text-center text-sm">
                <h1>Html & CSS</h1>
                <p className="opacity-50">2hours</p>
              </div>

              <EllipsisVertical/>

            </div>

            <div className="flex items-center justify-between">
              <MonitorPlay />

              <div className="text-center text-sm">
                <h1>Html & CSS</h1>
                <p className="opacity-50">2hours</p>
              </div>

              <EllipsisVertical/>

            </div>

            <div className="flex items-center justify-between">
              <MonitorPlay />

              <div className="text-center text-sm">
                <h1>Html & CSS</h1>
                <p className="opacity-50">2hours</p>
              </div>

              <EllipsisVertical/>

            </div>

            <div className="flex items-center justify-between">
              <MonitorPlay />

              <div className="text-center text-sm">
                <h1>Html & CSS</h1>
                <p className="opacity-50">2hours</p>
              </div>

              <EllipsisVertical/>

            </div>

          </div>


        </div>


      </div>

    </div>
  );
};

export default Dashboard;
