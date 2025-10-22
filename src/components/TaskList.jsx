import TaskItem from "./TaskItem";

function TaskList ({tasks, toggleTask, deleteTask}) {
    return (
        <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        ))}
      </ul>
    )
}

export default TaskList;