import React, { useContext, useEffect, useRef } from 'react'
import {Play} from 'lucide-react'
import { MySong } from '../MyContext';

const MusicCard = ({elem}) => {
    

    let {curSong , setCurSong , audioRef} = useContext(MySong);

    useEffect(()=>{
        if(!curSong) return 

        audioRef.current.src = curSong.path;
        audioRef.current.play();

    } , [curSong])
    
    




  return (
    <div className=' bg-gray-200 px-6 py-4 rounded border border-green-500  flex items-center justify-between  ' >
      <div className='   items-center ' >
        <img width={50} className='rounded-xl object-center object-cover '  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEpTMbUnPjujv4CbVoJMUrUywYhNnXyjxPA&s" alt="" />
        
      </div>

      <h1  className='text-2xl ' >{elem.name}</h1>

      <div  >
        <button onClick={()=>{setCurSong(elem)}} ><Play/></button>
      </div>

      <audio ref={audioRef} src={elem.path}></audio>
 
    </div>
  )
}

export default MusicCard
