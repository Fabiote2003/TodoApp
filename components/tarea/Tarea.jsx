import React from 'react'
import './tarea.css'
import basurero from '../../src/assets/trash-solid 1.svg'
import checkIconoco from '../../src/assets/check-vector.svg'
const Tarea = ({todo, handleToggle, eliminarTask}) => {

 

  return ( 
    <div className={`${todo.completada ? 'completed' : ''} tarea-item`}>
        <div onClick={() => handleToggle(todo.id)}>{todo.completada ? (<img src={checkIconoco} alt="" />) : ''}</div>
        <p onClick={() => handleToggle(todo.id)}>{todo.task}</p>
        <img src={basurero} alt="Icono Basurero" onClick={() => eliminarTask(todo.id)}/>
    </div>
  )
}

export default Tarea