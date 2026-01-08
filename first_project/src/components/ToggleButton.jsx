import React from 'react'
import { useState } from 'react'

const ToggleButton = () => {

  const[onOff, setOnOff] = useState(false);
  
  const B=onOff ? "ON" : "OFF";
  const bg=onOff ? "bg-green-500" : "bg-gray-500";

//   console.log(B);   twice in console when clicked because of React.StrictMode in main.jsx , and that is for dev purpose only.

  const handleToggle = () => {
    setOnOff(!onOff);
  }


  return (
    <div className="h-screen flex items-center justify-center">
      <div onClick={handleToggle} className={`w-32 h-12 ${bg} rounded-full flex items-center cursor-pointer px-1 transition-colors duration-300`}>
        <div
          className={`h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 ${onOff ? 'translate-x-20' : 'translate-x-0'}`}
        >
          <span className='p-3 flex items-center justify-center h-full w-full'>{B}</span>
        </div>
      </div>
    </div>

  )
}

export default ToggleButton
