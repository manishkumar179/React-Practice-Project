import { createContext, useRef, useState } from "react";

export let MySong = createContext()

export const SongProvider = ({children})=>{

    const [curSong , setCurSong] =  useState(null)
    let audioRef =  useRef();

    
    


    return <MySong.Provider value={{curSong , setCurSong , audioRef}} > {children} </MySong.Provider>

}