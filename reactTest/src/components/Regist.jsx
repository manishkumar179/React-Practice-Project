import React from 'react'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { MyStore } from '../MyContext';

const Regist = () => {

    let {setToggle , registeredUser,setRegisteredUser}= useContext(MyStore);

    let {register , reset , handleSubmit} = useForm();

    let handleFormSubmit = (data)=>{

        let updateArr = [...registeredUser , data]
        setRegisteredUser(updateArr)
        localStorage.setItem("registeredUser" , JSON.stringify(updateArr))

        alert("added to local storage")
        
        reset()
    }

  return (
    <div  className='h-[50%] w-[30%] m-auto rounded bg-white  items-center mt-60 flex flex-col gap-5 p-6'>
      <h1 className='text-2xl font-bold text-center'>Register Form</h1>

        <form onSubmit={handleSubmit(handleFormSubmit)}  action="" className='flex flex-col gap-4 '>

            <input {...register("userName")} className='border p-2 rounded' type="text" placeholder='name'/>
            <input {...register("email")} className='border p-2 rounded' type="email" placeholder='email'/>
            <input {...register("password")} className='border p-2 rounded' type="password" placeholder='password'/>

            <button className='border bg-blue-500 w-full p-2 rounded text-white shadow-lg shadow-blue-500/90 active:scale-95 cursor-pointer ' >Register</button>

        </form>

      <p>Already have an account <span className='text-blue-500 cursor-pointer' onClick={()=>setToggle((prev)=> !prev)}>Login here</span></p>
    </div>
  )
}

export default Regist
