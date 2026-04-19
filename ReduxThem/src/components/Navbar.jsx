import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { chnageTheme } from '../features/themeSlice';

const Navbar = () => {

   let data =  useSelector((state)=> state.value.value)
    console.log(data);
    let dispatch = useDispatch()
    console.log(dispatch);
    
    

  return (

    <div className={`navbar ${data? "light-nav" : "dark-nav"} `}>
      <h1>Context Theme</h1>
      <div className='flex gap-10'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Service</p>
      </div>
      <button onClick={()=>dispatch(chnageTheme(!data))}  className={"button border bg-black"}>{`${data? "Dark" : "Light"}`}</button>
    </div>
  )
}

export default Navbar
