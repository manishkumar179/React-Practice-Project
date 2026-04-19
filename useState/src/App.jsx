import React, { useState } from 'react'
import Add from './components/Add'
import Subs from './components/Subs'

const App = () => {

  let [count , setCount ] = useState(0);



  return (
    <div className='h-screen flex flex-col items-center justify-center gap-10 bg-amber-300'>
      <h1>Count is : {count} </h1>

      <div className='flex gap-10'>

      <Add  add = {setCount} />
      <Subs sub = {setCount} />

      </div>
      
      
    </div>
  )
}

export default App
