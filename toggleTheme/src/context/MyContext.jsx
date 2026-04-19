import { createContext, useState } from "react";

export let Mystore = createContext()

let ContextProvider = ({children})=>{

   let [islight , setIslight] = useState(true);

    return <Mystore.Provider value={{islight , setIslight}} >{children}</Mystore.Provider>
}

export {ContextProvider} ;