import ReactDOM from 'react-dom'
import './modal.css'
import { useState } from 'react'

const Modal = ({children, setModal, setTodos, todos}) => {

  const [mensaje, setMensaje] = useState('');

const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha;
}

  const [task, setTask] = useState('')
  
  function addTask() {
    
    if([task].includes("") ) {
        setMensaje('Escribe una tarea para agregar')
        return;
    }else {
        const objetoTask = {
          task, 
          id: generarId(),
          completada: false,
        }
        setTodos([...todos, objetoTask]);
        setTask("");
        setModal(false);
    }
  }
  return (
    ReactDOM.createPortal(
        <div className='modal'>
            <div className="text-container">
                 <h1 className='modal-text'>{children}</h1>
                 <p className='mensaje-error'>{mensaje && mensaje}</p>
                 <input placeholder='Escribe una nueva tarea' className={mensaje ?'mensaje-activado' : ''} value={task} onChange={(e) => setTask(e.target.value)}/>
                 <div className='modal-buttons'>
                    <button className='cancel-button' onClick={() => setModal(false)}>Cancelar</button>
                    <button className='add-button' onClick={() => addTask()}>Agregar</button>
                 </div>
            </div>
        </div>,
        document.getElementById("modal")
    )
  )
}

export default Modal