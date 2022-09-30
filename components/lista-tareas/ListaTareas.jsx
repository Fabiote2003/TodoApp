import Progres from "../Progres";
import './lista-tareas.css'
import Tarea from "../tarea/Tarea";
import { useEffect, useState } from "react";

const ListaTareas = ({todos, handleToggle, eliminarTask}) => {

  const tareasHTML = todos.map(todo => (
    <Tarea todo={todo} key={todo.id} handleToggle={handleToggle} eliminarTask={eliminarTask}/>
  ))
  const [porcentaje, setPorcentaje] = useState(0);
  let sumaDeCompletadas;
  useEffect(() => {
    if(todos.length > 0) {
      sumaDeCompletadas = 0;
      todos.forEach(task => {
        if(task.completada === true) {
          return sumaDeCompletadas++;
        }
      });
    }
    setPorcentaje((sumaDeCompletadas * 100) / todos.length);
  }, [todos]);

  return (
    <div className="tereas-container">
      
      <h1 className="tareas-title">Lista de Tareas</h1>
      <div className="progress-bar">
          <Progres done={todos.length > 0 ? porcentaje.toFixed(2) : 0}/>
      </div>
      <div className="items">
        {tareasHTML}
      </div>
        
    </div>
  )
}

export default ListaTareas