import React, { useContext } from 'react'
import { Mystore } from '../context/MyContext'

const Hero = () => {

    let {islight , setIslight} = useContext(Mystore)
    
  return (
    <div className={` hero ${islight? "light-hero" :"dark-hero"}`}>
      <h1>Hero</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> 
        Eius fugiat iure officia corrupti? Recusandae unde labore assumenda possimus vitae accusamus.</p>
    </div>
  )
}

export default Hero
