function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
        />
        <span className={task.done ? "done" : ""}>{task.text}</span>
      </label>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;
