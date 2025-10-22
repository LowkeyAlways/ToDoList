function TaskItem ({ task, onToggleTask, onDeleteTask }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.done}
                onChange={() => onToggleTask(task.id)}
            />
            <p>{task.text}</p>
            <button onClick={() => onDeleteTask(task.id)}>❌</button>
        </li>
    )
}

export default TaskItem;