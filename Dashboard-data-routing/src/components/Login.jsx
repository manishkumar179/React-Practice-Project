import React, { useContext, useState } from "react";
import { MyStore } from "../MyContext";
import Register from "./Register";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/authSlice";

const Login = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch()
  let { toggle, setToggle, registeredUser } = useContext(MyStore);
  let [formData, setFormdata] = useState({});

  //  let {register , handleSubmit , reset} = useForm()

  //  let handleLoginFormSubmit = (data)=>{

  //   // let checkRegisteredUser = registeredUser.find((elem)=>elem.username === data.username  && elem.password === data.password)

  //   if(!checkRegisteredUser){
  //     alert("Wrong Credentials")
  //     return;
  //   }

  //   alert("You are login")

  //   navigate("/main")

  //   reset()

  //  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(
      "http://localhost:3000/api/auth/login",
      formData,
      { withCredentials: true },
    );

    dispatch(addUser(res.data.user))

    navigate("/main");
  };

  return (
    <>
      {toggle ? (
        <Register />
      ) : (
        <div className="h-[50%] w-[30%]  rounded m-auto mt-30 bg-gray-100  items-center flex flex-col gap-5 p-6">
          <h1 className="text-2xl font-bold text-center">Login form</h1>

          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-4 "
          >
            <input
              onChange={(e) =>
                setFormdata({ ...formData, email: e.target.value })
              }
              className="border rounded p-2"
              type="text"
              placeholder="email"
            />
            <input
              onChange={(e) =>
                setFormdata({ ...formData, password: e.target.value })
              }
              className="border rounded p-2"
              type="text"
              placeholder="password"
            />

            <button className="border bg-blue-500 w-full p-2 rounded text-white active:scale-95 shadow-lg shadow-blue-500/80 cursor-pointer">
              Login
            </button>
          </form>
          <p className="p-3">
            Don't have an account{" "}
            <span
              className="text-blue-500  cursor-pointer"
              onClick={() => setToggle(true)}
            >
              Register here
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Login;
