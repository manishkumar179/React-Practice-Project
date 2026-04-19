import React from 'react'

const Add = ({add }) => {
  return (
    <div>


      <button   onClick={()=>{

        add((prev) =>prev+1);

      }}
      
      
      
      className='px-3 py-1.3 rounded-2xl bg-green-500 text-white active:scale-95 '>Increment</button>
    </div>
  )
}

export default Add
