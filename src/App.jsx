import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { loadTasks, saveTasks } from "./utils/localStorage";

function App() {
  const [tasks, setTasks] = useState(() => loadTasks());
  const [filter, setFilter] = useState("all");

  // Sauvegarde auto dès que tasks change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      status: "todo",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTaskStatus = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "todo") return task.status === "todo";
    if (filter === "done") return task.status === "done";
    return true;
  });

  const countAll = tasks.length;
  const countTodo = tasks.filter((t) => t.status === "todo").length;
  const countDone = tasks.filter((t) => t.status === "done").length;

  return (
    <div className="app-container">
      <h1>📝 Ma journée productive</h1>

      <TaskForm onAddTask={addTask} />

      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Toutes ({countAll})
        </button>
        <button
          className={filter === "todo" ? "active" : ""}
          onClick={() => setFilter("todo")}
        >
          À faire ({countTodo})
        </button>
        <button
          className={filter === "done" ? "active" : ""}
          onClick={() => setFilter("done")}
        >
          Faites ({countDone})
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        filter={filter}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />

      <p className="task-count">
        {filteredTasks.length} tâche(s) dans cette phase
      </p>
    </div>
  );
}

export default App;