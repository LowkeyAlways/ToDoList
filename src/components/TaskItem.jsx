import RemoveIcon from '@mui/icons-material/Remove';
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';

function TaskItem({ task, filter, updateTaskStatus, deleteTask }) {
  return (
    <li className="task-item">
      <span className={`task-text ${task.status === "done" ? "done" : ""}`}>
        {task.text}
      </span>

      <div className="actions">
        {/* PHASE : TOUTES */}
        {filter === "all" && (
          <>
            <button
              title="Déplacer vers 'À faire'"
              onClick={() => updateTaskStatus(task.id, "todo")}
            >
              <AddIcon />
            </button>
            <button
              title="Marquer comme faite"
              onClick={() => updateTaskStatus(task.id, "done")}
            >
              ✅
            </button>
            <button title="Supprimer" onClick={() => deleteTask(task.id)}>
              ❌
            </button>
          </>
        )}

        {/* PHASE : À FAIRE */}
        {filter === "todo" && (
          <>
            <button
              title="Renvoyer vers 'Toutes'"
              onClick={() => updateTaskStatus(task.id, "all")}
            >
              <RemoveIcon />
            </button>
            <button
              title="Rester dans 'À faire'"
              onClick={() => updateTaskStatus(task.id, "done")}
            >
              ✅
            </button>
            <button title="Supprimer" onClick={() => deleteTask(task.id)}>
              ❌
            </button>
          </>
        )}

        {/* PHASE : FAITES */}
        {filter === "done" && (
          <>
            <button
              title="Renvoyer à 'À faire'"
              onClick={() => updateTaskStatus(task.id, "todo")}
            >
              <RemoveIcon />
            </button>
            <button title="Supprimer" onClick={() => deleteTask(task.id)}>
              ❌
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TaskItem;


