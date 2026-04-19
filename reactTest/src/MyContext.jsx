import { createContext } from "react";
import { useState } from "react";

export let MyStore = createContext()

export let ContextProvider = ({children})=>{

    let [registeredUser , setRegisteredUser] = useState(JSON.parse(localStorage.getItem("registeredUser")) || [])
    const [toggle, setToggle] = useState(false);
    

    return <MyStore.Provider value={{toggle , setToggle, registeredUser,setRegisteredUser}}>{children}</MyStore.Provider>
}