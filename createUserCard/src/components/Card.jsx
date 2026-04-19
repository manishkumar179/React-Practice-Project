import React from 'react'

const Card = () => {
  return (
    <div className='w-45 h-50 border '>


      <div className='w-[100%] h-[40%]'>
        <img className='w-[100%] h-[100%] px-2 py-2 object-cover object-center ' src="https://images.unsplash.com/photo-1766543497004-2fd76e88f605?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" alt="" />
      </div>

      <div className='px-2'>
        <p>Name:</p>
        <p>Email:</p>
        <p>Designation:</p>
        <p>Mobile:</p>
      </div>



    </div>
  )
}

export default Card
