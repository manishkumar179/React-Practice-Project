import React, { useContext } from 'react'
import { MyStore } from '../MyContext'
import Register from './Register'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';


const Login = () => {

  let navigate = useNavigate()
   let {toggle , setToggle , registeredUser } = useContext(MyStore)

   let {register , handleSubmit , reset} = useForm()

   let handleLoginFormSubmit = (data)=>{

    let checkRegisteredUser = registeredUser.find((elem)=>elem.username === data.username  && elem.password === data.password)

    if(!checkRegisteredUser){
      alert("Wrong Credentials")
      return;
    }


    alert("You are login")

    navigate("/home")



    reset()
 
   }


  return (

    <>

    {toggle ? <Register/> : 
    
    <div className='h-[50%] w-[30%]  rounded m-auto mt-30 bg-gray-100  items-center flex flex-col gap-5 p-6'>
        <h1 className='text-2xl font-bold text-center'>Login form</h1>

      <form onSubmit={handleSubmit(handleLoginFormSubmit)}
       action="" className='flex flex-col gap-4 '>

        
        <input {...register("username")}
         className='border rounded p-2' type="text" placeholder='name' />
        <input {...register("password")}
        className='border rounded p-2' type="text" placeholder='password'/>

        <button className='border bg-blue-500 w-full p-2 rounded text-white active:scale-95 shadow-lg shadow-blue-500/80 cursor-pointer'>Login</button>

      </form>
      <p className='p-3'>Don't have an account <span className='text-blue-500  cursor-pointer' onClick={()=>setToggle(true)}>Register here</span></p>
    </div>
    }
    

    </>
  )
}

export default Login
