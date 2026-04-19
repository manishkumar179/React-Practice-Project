import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

const Hero = () => {

  let data = useSelector((state)=>state.value.value);
  console.log(data);
  
    
    
  return (
    <div className={` hero ${data? "light-hero" : "dark-hero"} `}>
      <h1>Hero</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> 
        Eius fugiat iure officia corrupti? Recusandae unde labore assumenda possimus vitae accusamus.</p>
    </div>
  )
}

export default Hero
