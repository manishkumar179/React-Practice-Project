import React, { useContext } from 'react'
import Login from './components/Login'
import Regist from './components/Regist';
import { useState } from 'react';
import { MyStore } from './MyContext';

const App = () => {

  let {toggle} = useContext(MyStore)


  return (
    <div className=' h-screen flex items-center justify-center w-screen bg-[url("https://plus.unsplash.com/premium_photo-1667691801544-cccd28f15a83?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      
      {toggle ? <Login /> : <Regist />}

    </div>
  )
}

export default App
