import { createContext, useState } from "react";

export let MyStore = createContext()

export let ContextProvider = ({children})=>{

    let [toggle , setToggle] = useState(false)

    let [registeredUser , setRegisteredUser] = useState(JSON.parse(localStorage.getItem("registeredUser")) || [])

    return <MyStore.Provider value={{toggle,setToggle , registeredUser , setRegisteredUser}}>{children}</MyStore.Provider>
}