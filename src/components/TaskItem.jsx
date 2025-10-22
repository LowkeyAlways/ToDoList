function TaskItem ({task, toggleTask, deleteTask}) {
    return (
        <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task.id)}
      />
      <p>
        {task.text}
      </p>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
    )
}

export default TaskItem;