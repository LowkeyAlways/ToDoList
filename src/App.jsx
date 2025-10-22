import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  
  // Calcul du nombre de tâches restantes (non complétées)
  const remainingTasks = tasks.filter(task => !task.completed).length

  return (
    <>
      <div className="todo-app">
        <div className="task-counter">
          <span>{remainingTasks} tâche{remainingTasks !== 1 ? 's' : ''} restante{remainingTasks !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </>
  )
}

export default App
