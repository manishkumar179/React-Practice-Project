import React from 'react'

const Subs = ({sub}) => {
  return (
    <div>
      <button
      
      onClick={()=>{
        sub((prev)=>{ return prev-1})
      }}

      className='px-3 py-1.3 rounded-2xl bg-red-500 text-white active:scale-95 '>Decrement</button>
    </div>
  )
}

export default Subs
