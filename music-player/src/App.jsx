import React from 'react'
import MusicCard from './components/MusicCard';

const App = () => {

   let songData = [
    {
      name: "Gerua rang",
      path: "./gerua.mp3",
    },
    {
      name: "Bholi si surat",
      path: "./surat.mp3",
    },
    {
      name: "Ek thi ladki",
      path: "./ladki.mp3",
    },
    {
      name: "muski maar ke jo hase",
      path: "./muski.mp3",
    },
    {
      name: "Panchi bole hai ky",
      path: "./panchi.mp3",
    },
    {
      name: "Manwa lage ",
      path: "./manwa.mp3",
    },
    {
      name: "holi song",
      path: "./holi.mp3",
    },
  ];


  return (
    <div className='flex flex-col gap-10 m-5' >
      {songData.map((elem , id)=>{
        return <MusicCard elem={elem} key={id} />
      })}
    </div>
  )
}

export default App
