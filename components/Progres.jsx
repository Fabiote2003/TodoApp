import React, { useState } from 'react'
import './lista-tareas/lista-tareas.css'

const  Progress = ({done}) => {
  const [style, setStyle] = useState({})

  setTimeout(() => {
    const newStyle = {
        opacity: 1,
        width: `${done}%`,
    }
    setStyle(newStyle)
  }, 100);
  return (
    <div className='progress'>
        <div className="progress-done" style={style}></div>
        <p className='completed-progress'>{done}% completed</p>
    </div>
  )
}

export default Progress