import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { MyStore } from '../MyContext';

const Login = () => {

    let {setToggle , registeredUser}= useContext(MyStore)

    let {register , reset, handleSubmit} = useForm();

    let handleLoginFormSubmit = (data)=>{
        
      let check = registeredUser.find((elem)=> elem.userName === data.userName && elem.password === data.password)
      
      
      if(!check){
        alert("Wrong credentials")
        return;
      }

      alert("Successfull login")
      reset()
        
    }


  return (
    <div className='h-[50%] w-[30%]  rounded bg-gray-100  items-center flex flex-col gap-5 p-6'>
        <h1 className='text-2xl font-bold text-center'>Login form</h1>
      <form onSubmit={handleSubmit(handleLoginFormSubmit)}
       action="" className='flex flex-col gap-4 '>
        <input
         {...register("userName")}
         className='border rounded p-2' type="text" placeholder='name' />
        <input
        {...register("password")}
        className='border rounded p-2' type="text" placeholder='password'/>

        <button className='border bg-blue-500 w-full p-2 rounded text-white active:scale-95 shadow-lg shadow-blue-500/80 cursor-pointer'>Login</button>

      </form>
      <p className='p-3'>Don't have an account <span className='text-blue-500  cursor-pointer' onClick={()=>setToggle((prev)=>!prev)}>Register here</span></p>
    </div>
  )
}

export default Login
