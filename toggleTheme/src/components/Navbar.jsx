import React, { useContext } from 'react'
import { Mystore } from '../context/MyContext'

const Navbar = () => {

    let {islight , setIslight} = useContext(Mystore)

  return (

    <div className={`navbar ${islight ? "light-nav" : "dark-nav"}`}>
      <h1>Context Theme</h1>
      <button onClick={()=>setIslight(!islight)} className={"button"}>{`${islight? 'Dark' :'Light'}`}</button>
    </div>
  )
}

export default Navbar
