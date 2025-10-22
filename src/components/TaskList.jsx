import TaskItem from "./TaskItem";

function TaskList({ tasks, filter, updateTaskStatus, deleteTask }) {
  if (tasks.length === 0) {
    return <p>Aucune tâche à afficher.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          filter={filter}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
