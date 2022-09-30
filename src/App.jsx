import {useEffect, useState } from 'react'
import Header from '../components/header/Header';
import ListaTareas from '../components/lista-tareas/ListaTareas';
import Footer from '../components/footer/Footer';
import addVector from './assets/addtask-vector.svg'
import Modal from '../components/modal/Modal';

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [modal, setModal] = useState(false);
   /*useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(listaGastos))
  }, [listaGastos]) */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos])

  function handleToggle(id) {
    let actualizados = todos.map(task => {
      return task.id === id ? {...task, completada: !task.completada} : {...task};
    })
    setTodos(actualizados);
  }

  function setearApp() {
    setTodos([]);
    document.location.reload()
  }

  function eliminarTask(id) {
    const pacientesReducidos = todos.filter(task => task.id !== id);
    setTodos(pacientesReducidos);
  }

  return (
    <div className='container'>
      <Header />
      <main>
        <ListaTareas todos={todos} handleToggle={handleToggle} eliminarTask={eliminarTask}/>
      </main>
      <Footer />
      <button className='add-tareas__button' title='Añadir Tarea' onClick={() => setModal(true)}><img src={addVector} alt="Icono de añadir vector" /></button>
      <button className='restart-app' onClick={setearApp}>EMPEZAR OTRO DIA</button>
      {modal ? (<Modal setModal={setModal} setTodos={setTodos} todos={todos}>Añade una nueva tarea</Modal>) : ''}
      
    </div>
  )
}

export default App
